import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { prisma } from "./db";

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: { scope: "identify email" },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account?.providerAccountId) return true;
      const discordId = account.providerAccountId;
      // Discord can omit name in edge cases; username is required in DB
      const username =
        (user.name && String(user.name).trim()) ||
        (profile as { username?: string })?.username ||
        `discord_${discordId}`;
      const discordProfile = profile as {
        username?: string;
        discriminator?: string;
        image_url?: string;
      };
      try {
        await prisma.user.upsert({
          where: { discordId },
          create: {
            discordId,
            username,
            discriminator: discordProfile?.discriminator ?? null,
            avatar: user.image ?? discordProfile?.image_url ?? null,
            email: user.email ?? null,
          },
          update: {
            username,
            discriminator: discordProfile?.discriminator ?? null,
            avatar: user.image ?? discordProfile?.image_url ?? null,
            email: user.email ?? null,
          },
        });
      } catch (e) {
        // NextAuth maps failures to "Try signing in with a different account."
        // Log full error server-side; throw a short message so the error URL is diagnosable.
        console.error("[auth] signIn prisma upsert failed", e);
        const msg =
          e instanceof Error ? e.message : String(e);
        throw new Error(
          `Database error during sign-in. Check DATABASE_URL and run migrations. ${msg.slice(0, 200)}`
        );
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { discordId: token.sub },
        });
        (session as { user: { id?: string } }).user.id = dbUser?.id ?? undefined;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account?.providerAccountId) token.sub = account.providerAccountId;
      return token;
    },
  },
  // Do not set pages.signIn to "/" — that redirects /api/auth/signin back to home
  // and breaks the "Sign in with Discord" link. Use /api/auth/signin/discord directly.
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};
