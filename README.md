# D&D 5e Character Sheet

A web app to create and edit a D&D 5e character sheet. Sign in with Discord to view and edit your sheet. Every field can be read or updated via a REST API.

## Features

- **Discord sign-in** — One account per Discord user; your sheet is private to you.
- **Full 5e sheet** — All standard fields: basics, ability scores, combat, skills, traits, equipment, backstory, etc.
- **REST API** — Get or update the whole sheet or any single field for use in bots, roll20, or other tools.

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment**

   Copy `.env.example` to `.env` and set:

   - `DATABASE_URL` — MySQL connection string for your phpMyAdmin database, e.g. `mysql://root:password@localhost:3306/dnd_character_sheet` (create the database in phpMyAdmin first).
   - `NEXTAUTH_URL` — Your app URL, e.g. `http://localhost:3000`
   - `NEXTAUTH_SECRET` — Random string (e.g. `openssl rand -base64 32`)
   - **Discord OAuth** — Create an app at [Discord Developer Portal](https://discord.com/developers/applications):
     - Application → OAuth2 → Redirects: add `http://localhost:3000/api/auth/callback/discord`
     - Copy Client ID and Client Secret into `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET`

3. **Database (MySQL / phpMyAdmin)**

   In phpMyAdmin, create a new database (e.g. `dnd_character_sheet`). Set `DATABASE_URL` in `.env` to match (user, password, host, and database name). Then run:

   ```bash
   npx prisma migrate dev
   ```

   This creates the `User` and `Character` tables. You can view and edit data in phpMyAdmin.

4. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000), sign in with Discord, then open **Sheet** to edit. API docs: [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## API (requires Discord session)

- **GET `/api/character`** — Full character sheet (JSON).
- **PATCH `/api/character`** — Update multiple fields; body: `{ "fieldName": "value", ... }`.
- **GET `/api/character/[field]`** — One field, e.g. `GET /api/character/characterName` → `{ "characterName": "..." }`.
- **PATCH `/api/character/[field]`** — Set one field; body: `{ "value": "..." }` or `{ "[field]": "..." }`.

Valid field names are listed on the [API docs](/api-docs) page.

## Tech

- **Next.js 14** (App Router), **NextAuth** (Discord provider), **Prisma** (MySQL). Use phpMyAdmin to manage the database.
