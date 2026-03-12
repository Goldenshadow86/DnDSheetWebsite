import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma, CHARACTER_FIELDS } from "@/lib/db";

function getUserId(session: { user?: { id?: string } } | null) {
  return (session?.user as { id?: string } | undefined)?.id;
}

export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = getUserId(session);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { character: true },
  });
  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  let character = dbUser.character;
  if (!character) {
    character = await prisma.character.create({
      data: { userId: dbUser.id },
    });
  }
  const sheet: Record<string, string> = {};
  for (const [key, col] of Object.entries(CHARACTER_FIELDS)) {
    sheet[key] = String((character as Record<string, unknown>)[col] ?? "");
  }
  return NextResponse.json({ character: sheet });
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  const userId = getUserId(session);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { character: true },
  });
  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const body = await request.json();
  const data: Record<string, string> = {};
  for (const [key, col] of Object.entries(CHARACTER_FIELDS)) {
    if (key in body && typeof body[key] === "string") {
      data[col] = body[key];
    }
  }
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
  }
  const character = await prisma.character.upsert({
    where: { userId: dbUser.id },
    create: { userId: dbUser.id, ...data },
    update: data,
  });
  const sheet: Record<string, string> = {};
  for (const [key, col] of Object.entries(CHARACTER_FIELDS)) {
    sheet[key] = String((character as Record<string, unknown>)[col] ?? "");
  }
  return NextResponse.json({ character: sheet });
}
