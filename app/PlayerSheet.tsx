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
    title: "Money",
    fields: ["plat", "gold", "silver", "copper"],
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
  classAndLevel: "Class",
  background: "Background",
  alignment: "Alignment",
  experience: "Level",
  strength: "Strength",
  dexterity: "Dexterity",
  constitution: "Constitution",
  intelligence: "Intelligence",
  wisdom: "Wisdom",
  charisma: "Charisma",
  strengthSave: "Strength (save)",
  dexteritySave: "Dexterity (save)",
  constitutionSave: "Constitution (save)",
  intelligenceSave: "Intelligence (save)",
  wisdomSave: "Wisdom (save)",
  charismaSave: "Charisma (save)",
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
  plat: "Plat (pp)",
  gold: "Gold (gp)",
  silver: "Silver (sp)",
  copper: "Copper (cp)",
  attacksAndSpellcasting: "Attacks & spellcasting",
  featuresAndTraits: "Features & traits",
  personalityTraits: "Personality traits",
  ideals: "Ideals",
  bonds: "Bonds",
  flaws: "Flaws",
  backstory: "Backstory",
  appearance: "Appearance",
};

/** Inspiration is a single checkbox stored as "1" or "0". */
const INSPIRATION_FIELD = "inspiration";

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

/** Ability scores use fixed point-buy style dropdowns only. */
const ABILITY_FIELDS = new Set([
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
]);

/** Saving throw proficiency per ability: stored as "1" or "0". */
const SAVE_PROFICIENCY_FIELDS = new Set(
  Array.from(ABILITY_FIELDS).map((a) => `${a}Save`)
);

/** Allowed scores and their 5e modifiers (floor((score - 10) / 2)). */
const ABILITY_SCORE_OPTIONS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] as const;

/** D&D 5e alignment options for dropdown. */
const ALIGNMENT_OPTIONS = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
] as const;
const ALIGNMENT_FIELDS = new Set(["alignment"]);

/** Level options 1–20 for dropdown (stored in experience field). */
const LEVEL_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as const;
const LEVEL_FIELDS = new Set(["experience"]);

function abilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

function formatModifier(mod: number): string {
  if (mod === 0) return "+0";
  return mod > 0 ? `+${mod}` : `${mod}`;
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
      const value =
        SKILL_FIELDS.has(key) || key === INSPIRATION_FIELD || SAVE_PROFICIENCY_FIELDS.has(key)
          ? skillToBinary(raw)
          : raw.trim() || "(empty)";
      lines.push(`${label}: ${value}`);
      if (ABILITY_FIELDS.has(key)) {
        const saveKey = `${key}Save`;
        const saveLabel = LABELS[saveKey] ?? saveKey;
        const saveRaw = sheet[saveKey] ?? "";
        lines.push(`${saveLabel}: ${skillToBinary(saveRaw)}`);
      }
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

    let key = LABEL_TO_KEY[label];
    if (!key && label === "Experience points") key = "experience";
    if (!key && label === "Class & level") key = "classAndLevel";
    if (!key) continue;

    if (value === "(empty)") value = "";
    if (SKILL_FIELDS.has(key) || key === INSPIRATION_FIELD || SAVE_PROFICIENCY_FIELDS.has(key)) {
      value = skillToBinary(value);
    }
    // Ability scores: only keep value if it matches a dropdown option (otherwise clear so UI shows placeholder).
    if (ABILITY_FIELDS.has(key)) {
      const n = parseInt(value.trim(), 10);
      if (!ABILITY_SCORE_OPTIONS.includes(n as (typeof ABILITY_SCORE_OPTIONS)[number])) {
        value = "";
      } else {
        value = String(n);
      }
    }
    // Level (experience): only keep value if it's 1–20.
    if (LEVEL_FIELDS.has(key)) {
      const n = parseInt(value.trim(), 10);
      if (Number.isNaN(n) || n < 1 || n > 20) value = "";
      else value = String(n);
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
        s[f] = SKILL_FIELDS.has(f) || f === INSPIRATION_FIELD ? "0" : "";
      }
    }
    for (const ab of Array.from(ABILITY_FIELDS)) {
      s[`${ab}Save`] = "0";
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

  const [showExportPopup, setShowExportPopup] = useState(false);

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
    setShowExportPopup(true);
  };

  return (
    <>
      {showExportPopup && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="export-popup-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.6)",
          }}
          onClick={() => setShowExportPopup(false)}
        >
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.5rem 1.75rem",
              maxWidth: "90vw",
              width: "37rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <p id="export-popup-title" style={{ marginBottom: "1rem", fontSize: "1rem", lineHeight: 1.5, color: "var(--text)" }}>
              Go to Discord and type <code style={{ background: "var(--bg)", padding: "0.15rem 0.4rem", borderRadius: "4px" }}>/character import</code> in #playersheet channel to import your player sheet.
            </p>
            <button
              type="button"
              onClick={() => setShowExportPopup(false)}
              style={{
                padding: "0.5rem 1rem",
                background: "var(--gold)",
                color: "var(--bg)",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: 600,
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
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
            Import
          </button>
          <button type="button" onClick={exportTxt}>
            Export
          </button>
        </div>
      </div>
      <p style={{ color: "var(--muted)", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
        Fill out your character below. Once done click export and do the /character import in Discord. If you
        would like to edit your playersheet you can import it back into the website by clicking the import
        button.
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
        <div
          key={section.title}
          className={section.title === "Other" ? "sheet-section other-section" : "sheet-section"}
        >
          <h2>{section.title}</h2>
          <div
            className={
              section.title === "Other"
                ? "other-section-grid"
                : section.fields.length > 6
                  ? "skills-grid"
                  : "grid-2"
            }
          >
            {section.fields.map((key) => (
              <div key={key} className="field">
                {SKILL_FIELDS.has(key) || key === INSPIRATION_FIELD ? (
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
                      onChange={(e) =>
                        updateField(key, e.target.checked ? "1" : "0")
                      }
                      style={{ width: "1.15rem", height: "1.15rem", cursor: "pointer" }}
                    />
                    <label htmlFor={key} style={{ margin: 0, cursor: "pointer" }}>
                      {LABELS[key] ?? key}
                    </label>
                  </div>
                ) : ABILITY_FIELDS.has(key) ? (
                  <div className="ability-row" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ flex: "1 1 auto", minWidth: "8rem" }}>
                      <label htmlFor={key}>{LABELS[key] ?? key}</label>
                      <select
                        id={key}
                        className="sheet-select"
                        value={
                          ABILITY_SCORE_OPTIONS.includes(
                            parseInt(sheet[key] ?? "", 10) as (typeof ABILITY_SCORE_OPTIONS)[number]
                          )
                            ? sheet[key]
                            : ""
                        }
                        onChange={(e) => updateField(key, e.target.value)}
                      >
                        <option value="">— Select score —</option>
                        {ABILITY_SCORE_OPTIONS.map((score) => (
                          <option key={score} value={String(score)}>
                            {score} ({formatModifier(abilityModifier(score))})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className="save-proficiency-row"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        minHeight: "2.25rem",
                      }}
                    >
                      <input
                        id={`${key}Save`}
                        type="checkbox"
                        checked={skillStoredAsOne(sheet[`${key}Save`] ?? "")}
                        onChange={(e) =>
                          updateField(`${key}Save`, e.target.checked ? "1" : "0")
                        }
                        style={{ width: "1.1rem", height: "1.1rem", cursor: "pointer" }}
                        title="Proficient in this saving throw"
                      />
                      <label htmlFor={`${key}Save`} style={{ margin: 0, cursor: "pointer", fontSize: "0.85rem", color: "var(--muted)" }}>
                        Save
                      </label>
                    </div>
                  </div>
                ) : ALIGNMENT_FIELDS.has(key) ? (
                  <>
                    <label htmlFor={key}>{LABELS[key] ?? key}</label>
                    <select
                      id={key}
                      value={
                        ALIGNMENT_OPTIONS.includes(
                          (sheet[key] ?? "").trim() as (typeof ALIGNMENT_OPTIONS)[number]
                        )
                          ? (sheet[key] ?? "").trim()
                          : ""
                      }
                      onChange={(e) => updateField(key, e.target.value)}
                    >
                      <option value="">— Select alignment —</option>
                      {ALIGNMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </>
                ) : LEVEL_FIELDS.has(key) ? (
                  <>
                    <label htmlFor={key}>{LABELS[key] ?? key}</label>
                    <select
                      id={key}
                      value={
                        LEVEL_OPTIONS.includes(
                          parseInt(sheet[key] ?? "", 10) as (typeof LEVEL_OPTIONS)[number]
                        )
                          ? sheet[key]
                          : ""
                      }
                      onChange={(e) => updateField(key, e.target.value)}
                    >
                      <option value="">— Select level —</option>
                      {LEVEL_OPTIONS.map((n) => (
                        <option key={n} value={String(n)}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </>
                ) : (
                  <>
                    <label htmlFor={key}>{LABELS[key] ?? key}</label>
                    {TEXTAREA_FIELDS.has(key) ? (
                      <textarea
                        id={key}
                        className="sheet-textarea-large"
                        rows={8}
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
          Import
        </button>
        <button type="button" onClick={exportTxt}>
          Export
        </button>
      </div>
    </>
  );
}
