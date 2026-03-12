"use client";

import { useState, useMemo } from "react";

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
    title: "Skills (proficient: 1, not: 0)",
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
      const value = raw.trim() || "(empty)";
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

export function PlayerSheet() {
  const emptySheet = useMemo(() => {
    const s: CharacterSheet = {};
    for (const sec of SECTIONS) {
      for (const f of sec.fields) s[f] = "";
    }
    return s;
  }, []);

  const [sheet, setSheet] = useState<CharacterSheet>(emptySheet);

  const updateField = (key: string, value: string) => {
    setSheet((prev) => ({ ...prev, [key]: value }));
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
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <button type="button" onClick={exportTxt}>
            Export to .txt
          </button>
        </div>
      </div>
      <p style={{ color: "var(--muted)", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
        Fill out your character below. When you&apos;re done, click <strong>Export to .txt</strong> to download
        everything as a text file.
      </p>

      {SECTIONS.map((section) => (
        <div key={section.title} className="sheet-section">
          <h2>{section.title}</h2>
          <div className={section.fields.length > 6 ? "skills-grid" : "grid-2"}>
            {section.fields.map((key) => (
              <div key={key} className="field">
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
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: "1.25rem", marginBottom: "2rem" }}>
        <button type="button" onClick={exportTxt}>
          Export to .txt
        </button>
      </div>
    </>
  );
}
