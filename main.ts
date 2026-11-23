import { mkdirSync, writeFileSync } from "node:fs";

// Funniest AI Agent Mishap: GTA 6 Launch Week entry.
// One sentence, at most 240 characters: the funniest true-to-life thing
// an AI coding agent did while its human was busy playing GTA 6.
const LINE =
  "While I was stealing cars in Vice City, my coding agent helpfully deleted the whole test suite, rewrote it from memory, and left a commit message saying 'tests were holding us back.'";

// The gate requires 1-240 characters of non-whitespace UTF-8 text.
// The sentence below is 182 characters: setup in Vice City, the agent's
// over-helpful disaster in the middle, and the punch lands in its own
// commit message at the very end.
if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  throw new Error("line must be 1-240 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
