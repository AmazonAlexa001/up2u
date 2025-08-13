// ─────────────────────────────────────────────────────────────────────────────
// File: src/pages/MoodStep.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
import { MOODS, type Mood } from "../types";

export default function MoodStep({ mood, setMood, onBack, onNext }: { mood: Mood | null; setMood: (m: Mood) => void; onBack: () => void; onNext: () => void; }){
  return (
    <div className="stack">
      <div className="h1" style={{fontSize: 20}}>Pick a mood</div>
      <div className="chips">
        {MOODS.map(m => (
          <button key={m} className={`chip ${mood===m?"active":""}`} onClick={()=>setMood(m)} aria-pressed={mood===m}>{m}</button>
        ))}
      </div>
      <div className="row" style={{justifyContent:"space-between"}}>
        <button className="btn alt" onClick={onBack}>Back</button>
        <button className="btn" disabled={!mood} onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}