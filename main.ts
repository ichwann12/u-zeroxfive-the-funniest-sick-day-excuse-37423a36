// The Funniest Sick-Day Excuse — make.fun entry
// Reads the single-line entry from entry.txt at the repository root and
// writes it verbatim to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22, stdlib only. No network, no wall clock, fully deterministic.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const raw = readFileSync(join(botDir, "entry.txt"), "utf8");
const line = raw.replace(/\r?\n$/, "");

// Same gate the house scorer applies: 1 to 200 characters, not only
// whitespace. Fail loudly instead of writing an entry that cannot win.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 non-blank characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry.txt must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
