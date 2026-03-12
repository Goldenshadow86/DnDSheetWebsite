"use client";

import { useState, useMemo, useRef } from "react";

type CharacterSheet = Record<string, string>;

const SECTIONS: { title: string; fields: string[] }[] = [
  {
    title: "Character basics",
    fields: ["characterName", "playerName", "race", "classAndLevel", "background", "alignment", "experience"],
  },
  {
    title: "Ability scores",
    fields: ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"],
  },
  {
    title: "Combat",
    fields: [
      "armorClass",
      "initiative",
      "speed",
      "hitPointMaximum",
      "currentHitPoints",
      "temporaryHitPoints",
      "hitDice",
      "deathSaveSuccess",
      "deathSaveFailures",
      "proficiencyBonus",
    ],
  },
  {
    title: "Skills",
    fields: [
      "acrobatics",
      "animalHandling",
      "arcana",
      "athletics",
      "deception",
      "history",
      "insight",
      "intimidation",
      "investigation",
      "medicine",
      "nature",
      "perception",
      "performance",
      "persuasion",
      "religion",
      "sleightOfHand",
      "stealth",
      "survival",
    ],
  },
  {
    title: "Other",
    fields: [
      "inspiration",
      "passiveWisdom",
      "otherProficiencies",
      "languages",
      "equipment",
      "attacksAndSpellcasting",
      "featuresAndTraits",
      "personalityTraits",
      "ideals",
      "bonds",
      "flaws",
      "backstory",
      "appearance",
    ],
  },
];

const LABELS: Record<string, string> = {
  characterName: "Character name",
  playerName: "Player name",
  race: "Race",
  classAndLevel: "Class & level",
  background: "Background",
  alignment: "Alignment",
  experience: "Experience points",
  strength: "Strength",
  dexterity: "Dexterity",
  constitution: "Constitution",
  intelligence: "Intelligence",
  wisdom: "Wisdom",
  charisma: "Charisma",
  armorClass: "Armor class",
  initiative: "Initiative",
  speed: "Speed",
  hitPointMaximum: "Hit point maximum",
  currentHitPoints: "Current hit points",
  temporaryHitPoints: "Temporary hit points",
  hitDice: "Hit dice",
  deathSaveSuccess: "Death save successes",
  deathSaveFailures: "Death save failures",
  proficiencyBonus: "Proficiency bonus",
  acrobatics: "Acrobatics",
  animalHandling: "Animal handling",
  arcana: "Arcana",
  athletics: "Athletics",
  deception: "Deception",
  history: "History",
  insight: "Insight",
  intimidation: "Intimidation",
  investigation: "Investigation",
  medicine: "Medicine",
  nature: "Nature",
  perception: "Perception",
  performance: "Performance",
  persuasion: "Persuasion",
  religion: "Religion",
  sleightOfHand: "Sleight of hand",
  stealth: "Stealth",
  survival: "Survival",
  inspiration: "Inspiration",
  passiveWisdom: "Passive wisdom (perception)",
  otherProficiencies: "Other proficiencies & languages",
  languages: "Languages",
  equipment: "Equipment",
  attacksAndSpellcasting: "Attacks & spellcasting",
  featuresAndTraits: "Features & traits",
  personalityTraits: "Personality traits",
  ideals: "Ideals",
  bonds: "Bonds",
  flaws: "Flaws",
  backstory: "Backstory",
  appearance: "Appearance",
};

/** Skill fields stored as "1" (proficient) or "0" in DB/export; UI uses checkboxes. */
const SKILL_FIELDS = new Set([
  "acrobatics",
  "animalHandling",
  "arcana",
  "athletics",
  "deception",
  "history",
  "insight",
  "intimidation",
  "investigation",
  "medicine",
  "nature",
  "perception",
  "performance",
  "persuasion",
  "religion",
  "sleightOfHand",
  "stealth",
  "survival",
]);

function skillStoredAsOne(raw: string): boolean {
  const t = (raw ?? "").trim().toLowerCase();
  return t === "1" || t === "true" || t === "yes";
}

/** Always "1" or "0" for export/API consistency. */
function skillToBinary(raw: string): string {
  return skillStoredAsOne(raw) ? "1" : "0";
}

const TEXTAREA_FIELDS = new Set([
  "otherProficiencies",
  "languages",
  "equipment",
  "attacksAndSpellcasting",
  "featuresAndTraits",
  "personalityTraits",
  "ideals",
  "bonds",
  "flaws",
  "backstory",
  "appearance",
]);

function buildTxt(sheet: CharacterSheet): string {
  const lines: string[] = [];
  lines.push("D&D 5e Character Sheet");
  lines.push("=".repeat(44));
  lines.push("Exported from the web player sheet.");
  lines.push("");
  for (const section of SECTIONS) {
    lines.push(section.title.toUpperCase());
    lines.push("-".repeat(section.title.length));
    for (const key of section.fields) {
      const label = LABELS[key] ?? key;
      const raw = sheet[key] ?? "";
      const value = SKILL_FIELDS.has(key)
        ? skillToBinary(raw)
        : raw.trim() || "(empty)";
      lines.push(`${label}: ${value}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function safeFilename(name: string): string {
  const base = name.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-") || "character";
  return `${base}-sheet.txt`;
}

/** Reverse map: export label -> field key */
const LABEL_TO_KEY: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  for (const [key, label] of Object.entries(LABELS)) {
    m[label] = key;
  }
  return m;
})();

/**
 * Parse a .txt file in our export format (or close to it) and return partial sheet updates.
 * Lines look like "Character name: Gandalf" or "Acrobatics: 1". "(empty)" becomes "".
 */
function parseImportedTxt(text: string): { sheet: CharacterSheet; matched: number } {
  const sheet: CharacterSheet = {};
  let matched = 0;
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");

  for (const line of lines) {
    const idx = line.indexOf(": ");
    if (idx <= 0) continue;
    const label = line.slice(0, idx).trim();
    let value = line.slice(idx + 2);
    // Trim trailing CR if any
    value = value.replace(/\r$/, "");

    const key = LABEL_TO_KEY[label];
    if (!key) continue;

    if (value === "(empty)") value = "";
    if (SKILL_FIELDS.has(key)) {
      value = skillToBinary(value);
    }
    sheet[key] = value;
    matched++;
  }

  return { sheet, matched };
}

export function PlayerSheet() {
  const emptySheet = useMemo(() => {
    const s: CharacterSheet = {};
    for (const sec of SECTIONS) {
      for (const f of sec.fields) {
        s[f] = SKILL_FIELDS.has(f) ? "0" : "";
      }
    }
    return s;
  }, []);

  const [sheet, setSheet] = useState<CharacterSheet>(emptySheet);
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateField = (key: string, value: string) => {
    setSheet((prev) => ({ ...prev, [key]: value }));
  };

  const importTxt = (file: File) => {
    setImportMessage(null);
    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      const { sheet: parsed, matched } = parseImportedTxt(text);
      if (matched === 0) {
        setImportMessage(
          "Could not read that file. Use a .txt exported from this sheet, or lines like \"Character name: ...\"."
        );
        return;
      }
      setSheet((prev) => ({ ...prev, ...parsed }));
      setImportMessage(`Imported ${matched} field(s) from ${file.name}.`);
    };
    reader.onerror = () => setImportMessage("Failed to read the file.");
    reader.readAsText(file, "UTF-8");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const exportTxt = () => {
    const text = buildTxt(sheet);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = safeFilename(sheet.characterName ?? "");
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", color: "var(--gold)" }}>D&D Player Sheet</h1>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,text/plain"
            style={{ display: "none" }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) importTxt(f);
            }}
          />
          <button type="button" onClick={() => fileInputRef.current?.click()}>
            Import from .txt
          </button>
          <button type="button" onClick={exportTxt}>
            Export to .txt
          </button>
        </div>
      </div>
      <p style={{ color: "var(--muted)", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
        Fill out your character below. <strong>Import from .txt</strong> loads a previously exported file and
        fills matching fields. <strong>Export to .txt</strong> downloads everything as a text file.
      </p>
      {importMessage && (
        <p
          role="status"
          style={{
            marginBottom: "1rem",
            padding: "0.6rem 0.9rem",
            borderRadius: "6px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            fontSize: "0.95rem",
          }}
        >
          {importMessage}
        </p>
      )}

      {SECTIONS.map((section) => (
        <div key={section.title} className="sheet-section">
          <h2>{section.title}</h2>
          <div className={section.fields.length > 6 ? "skills-grid" : "grid-2"}>
            {section.fields.map((key) => (
              <div key={key} className="field">
                {SKILL_FIELDS.has(key) ? (
                  <div
                    className="skill-checkbox-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      minHeight: "2.25rem",
                    }}
                  >
                    <input
                      id={key}
                      type="checkbox"
                      checked={skillStoredAsOne(sheet[key] ?? "")}
                      onChange={(e) => updateField(key, e.target.checked ? "1" : "0")}
                      style={{ width: "1.15rem", height: "1.15rem", cursor: "pointer" }}
                    />
                    <label htmlFor={key} style={{ margin: 0, cursor: "pointer" }}>
                      {LABELS[key] ?? key}
                    </label>
                  </div>
                ) : (
                  <>
                    <label htmlFor={key}>{LABELS[key] ?? key}</label>
                    {TEXTAREA_FIELDS.has(key) ? (
                      <textarea
                        id={key}
                        value={sheet[key] ?? ""}
                        onChange={(e) => updateField(key, e.target.value)}
                        placeholder="—"
                      />
                    ) : (
                      <input
                        id={key}
                        type="text"
                        value={sheet[key] ?? ""}
                        onChange={(e) => updateField(key, e.target.value)}
                        placeholder="—"
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: "1.25rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button type="button" onClick={() => fileInputRef.current?.click()}>
          Import from .txt
        </button>
        <button type="button" onClick={exportTxt}>
          Export to .txt
        </button>
      </div>
    </>
  );
}
