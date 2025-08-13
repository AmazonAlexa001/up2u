// ─────────────────────────────────────────────────────────────────────────────
// File: src/utils/types-extra.ts
// (Keeps types tidy & reusable.)
// ─────────────────────────────────────────────────────────────────────────────
import type { Mood } from "../types";
export type Mode = "inperson" | "online";
export type Activities = {
  inperson: Record<Mood, string[]>;
  online: Record<Mood, string[]>;
};
