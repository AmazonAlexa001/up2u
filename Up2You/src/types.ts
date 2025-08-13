// ─────────────────────────────────────────────────────────────────────────────
// File: src/types.ts
// ─────────────────────────────────────────────────────────────────────────────
export const MOODS = ["Chill", "Active", "Adventurous", "Creative", "Romantic", "Budget", "Cozy"] as const;
export type Mood = typeof MOODS[number];
export type Mode = "inperson" | "online";