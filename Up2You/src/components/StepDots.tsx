// ─────────────────────────────────────────────────────────────────────────────
// File: src/components/StepDots.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
export default function StepDots({ step }: { step: number }) {
  const labels = ["Home","Mode","Mood","Spin","Result"];
  return (
    <div className="dots" aria-label="progress">
      {labels.map((_, i) => (
        <div key={i} className={`dot ${i <= step ? "active" : ""}`} />
      ))}
    </div>
  );
}