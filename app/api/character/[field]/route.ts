import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { prisma, CHARACTER_FIELDS } from "@/lib/db";

function getUserIdFromSession(session: { user?: { id?: string } } | null) {
  return (session?.user as { id?: string } | undefined)?.id ?? null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ field: string }> }
) {
  const session = await getServerSession(authOptions);
  const userId = getUserIdFromSession(session);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { field } = await params;
  const col = CHARACTER_FIELDS[field];
  if (!col) {
    return NextResponse.json(
      { error: "Unknown field", validFields: Object.keys(CHARACTER_FIELDS) },
      { status: 400 }
    );
  }
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { character: true },
  });
  if (!dbUser?.character) {
    return NextResponse.json({ [field]: "" });
  }
  const value = String((dbUser.character as Record<string, unknown>)[col] ?? "");
  return NextResponse.json({ [field]: value });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ field: string }> }
) {
  const session = await getServerSession(authOptions);
  const userId = getUserIdFromSession(session);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { field } = await params;
  const col = CHARACTER_FIELDS[field];
  if (!col) {
    return NextResponse.json(
      { error: "Unknown field", validFields: Object.keys(CHARACTER_FIELDS) },
      { status: 400 }
    );
  }
  const body = await request.json();
  const value = typeof body.value === "string" ? body.value : String(body[field] ?? "");
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: { character: true },
  });
  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  await prisma.character.upsert({
    where: { userId: dbUser.id },
    create: { userId: dbUser.id, [col]: value },
    update: { [col]: value },
  });
  return NextResponse.json({ [field]: value });
}
