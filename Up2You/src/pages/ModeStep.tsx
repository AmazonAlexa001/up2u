// ─────────────────────────────────────────────────────────────────────────────
// File: src/pages/ModeStep.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
import type { Mode } from "../utils/types-extra";

export default function ModeStep({ mode, setMode, onNext }: { mode: Mode | null; setMode: (m: Mode) => void; onNext: () => void; }){
  return (
    <div className="stack">
      <div className="h1" style={{fontSize: 20}}>Pick how you’re hanging out</div>
      <div className="grid2">
        <button className={`option ${mode === "inperson" ? "active" : ""}`} onClick={() => setMode("inperson")}>
          <div style={{fontWeight:800}}>In‑person</div>
          <div className="small">Out & about or cozy at home</div>
        </button>
        <button className={`option ${mode === "online" ? "active" : ""}`} onClick={() => setMode("online")}>
          <div style={{fontWeight:800}}>Online</div>
          <div className="small">Video calls, co‑op games, co‑create</div>
        </button>
      </div>
      <div className="right"><button className="btn" disabled={!mode} onClick={onNext}>Next</button></div>
    </div>
  );
}
