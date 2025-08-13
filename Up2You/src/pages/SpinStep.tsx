// ─────────────────────────────────────────────────────────────────────────────
// File: src/pages/SpinStep.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
import type { Mood } from "../types";
import type { Mode } from "../utils/types-extra";
import Reel from "../components/Reel";

export default function SpinStep({
  mode,
  mood,
  pool,
  spinning,
  spinKey,
  display,
  onSpin,
  onChangeMood,
  onReelDone,
}: {
  mode: Mode;
  mood: Mood;
  pool: string[];
  spinning: boolean;
  spinKey: number;
  display: string;
  onSpin: () => void;
  onChangeMood: () => void;
  onReelDone: (final: string) => void;
}) {
  return (
    <div className="stack center">
      <div className="small">
        Mode: <b>{mode === "inperson" ? "In-person" : "Online"}</b> · Mood:{" "}
        <b>{mood}</b>
      </div>

      {/* Single reel */}
      <div className="reels" style={{ justifyContent: "center" }}>
        <Reel
          items={pool}
          spinning={spinning}
          spinKey={spinKey}
          display={display}
          onDone={onReelDone}
        />
      </div>

      <div className="row center" style={{ justifyContent: "center" }}>
        <button
          className="btn"
          onClick={onSpin}
          disabled={spinning || pool.length === 0}
        >
          {spinning ? "Spinning…" : "Spin"}
        </button>
        <button className="btn ghost" onClick={onChangeMood}>
          Change mood
        </button>
      </div>
    </div>
  );
}
