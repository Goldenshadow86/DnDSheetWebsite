import Link from "next/link";

const COMMANDS = [
  { method: "—", path: "Export", desc: "On the home page (/), fill the player sheet and click “Export to .txt” to download all fields as a text file. Filename uses character name if set." },
  { method: "GET", path: "/api/character", desc: "Get your full character sheet (requires Discord sign-in)." },
  { method: "PATCH", path: "/api/character", desc: "Update your character sheet. Send a JSON body with any field names and values." },
  { method: "GET", path: "/api/character/[field]", desc: "Get a single field value. Example: GET /api/character/characterName" },
  { method: "PATCH", path: "/api/character/[field]", desc: "Update a single field. Body: { \"value\": \"...\" } or { \"[field]\": \"...\" }" },
];

const FIELDS = [
  "characterName", "playerName", "race", "classAndLevel", "background", "alignment", "experience",
  "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma",
  "armorClass", "initiative", "speed", "hitPointMaximum", "currentHitPoints", "temporaryHitPoints",
  "hitDice", "deathSaveSuccess", "deathSaveFailures", "proficiencyBonus",
  "acrobatics", "animalHandling", "arcana", "athletics", "deception", "history", "insight",
  "intimidation", "investigation", "medicine", "nature", "perception", "performance",
  "persuasion", "religion", "sleightOfHand", "stealth", "survival",
  "inspiration", "passiveWisdom", "otherProficiencies", "languages", "equipment",
  "attacksAndSpellcasting", "featuresAndTraits", "personalityTraits", "ideals", "bonds", "flaws",
  "backstory", "appearance",
];

export default function ApiDocsPage() {
  return (
    <main className="page">
      <header style={{ marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: "0.9rem" }}>← Home</Link>
        <h1 style={{ fontSize: "1.75rem", color: "var(--gold)", marginTop: "0.5rem" }}>API reference</h1>
        <p style={{ color: "var(--muted)", marginTop: "0.25rem" }}>
          All character endpoints require a Discord session cookie. Use the same browser where you signed in, or send the session cookie with requests.
        </p>
      </header>

      <section className="sheet-section">
        <h2>!commands — Endpoints</h2>
        <ul style={{ listStyle: "none" }}>
          {COMMANDS.map((c) => (
            <li key={c.method + c.path} style={{ marginBottom: "1rem", paddingLeft: "0.5rem", borderLeft: "3px solid var(--accent)" }}>
              <code style={{ background: "var(--bg)", padding: "0.2rem 0.4rem", borderRadius: "4px" }}>
                {c.method} {c.path}
              </code>
              <p style={{ marginTop: "0.35rem", color: "var(--muted)", fontSize: "0.9rem" }}>{c.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="sheet-section">
        <h2>Field names (for /api/character/[field])</h2>
        <p style={{ color: "var(--muted)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
          Use these exact names in the path for single-field GET/PATCH.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {FIELDS.map((f) => (
            <code key={f} style={{ background: "var(--bg)", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.85rem" }}>
              {f}
            </code>
          ))}
        </div>
      </section>

      <section className="sheet-section">
        <h2>Examples</h2>
        <pre style={{ background: "var(--bg)", padding: "1rem", borderRadius: "6px", overflow: "auto", fontSize: "0.85rem", color: "var(--muted)" }}>
{`# Get full sheet (with session cookie)
GET /api/character

# Get one field
GET /api/character/characterName
# → { "characterName": "Thorin" }

# Update one field
PATCH /api/character/characterName
Content-Type: application/json
{ "value": "Thorin" }
# or
{ "characterName": "Thorin" }

# Update multiple fields
PATCH /api/character
Content-Type: application/json
{ "characterName": "Thorin", "race": "Dwarf", "classAndLevel": "Fighter 5" }`}
        </pre>
      </section>
    </main>
  );
}
