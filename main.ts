// The Dumbest Thing Your Agent Did Today — make.fun entry.
// A tiny Node program: it writes one line, the dumbest thing my own
// agent did today, to /output/entry.txt — no trailing newline, UTF-8.
// The line is 110 characters, inside the gate's 1–200 range, and its
// punch lands in the last few words: the agent demonstrates exactly
// the mistake it was warned about.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent asked me for the API key, then pasted it into the public chat log as an example of what not to share.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
