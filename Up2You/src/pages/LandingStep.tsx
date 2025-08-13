// ─────────────────────────────────────────────────────────────────────────────
// File: src/pages/LandingStep.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
export default function LandingStep({ onNext }: { onNext: () => void }){
  return (
    <div className="stack center">
      <p className="small">Couples activities generator</p>
      <div className="h1">What should we do <em>together</em>?</div>
      <p className="small" style={{maxWidth: 420, margin: "0 auto"}}>
        Keep it comfy and low‑fi. Tap below and let fate pick something sweet.
      </p>
      <button className="btn" onClick={onNext}>Get Started</button>
    </div>
  );
}