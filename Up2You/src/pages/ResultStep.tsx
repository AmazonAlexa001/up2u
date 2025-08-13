// ─────────────────────────────────────────────────────────────────────────────
// File: src/pages/ResultStep.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
import type { Mood } from "../types";
import type { Mode } from "../utils/types-extra";

export default function ResultStep({
  mode,
  mood,
  result,
  quip,
  fact,
  links,
  onSpinAgain,
  onShare,
  onNewMode,
  onRestart,
}: {
  mode: Mode;
  mood: Mood;
  result: string;
  quip?: string;
  fact?: string;
  links: { label: string; href: string }[];
  onSpinAgain: () => void;
  onShare: () => void;
  onNewMode: () => void;
  onRestart: () => void;
}) {
  return (
    <div className="stack center">
      <p className="small">
        Mode: <b>{mode === "inperson" ? "In-person" : "Online"}</b> · Mood:{" "}
        <b>{mood}</b>
      </p>

      <div className="h1" style={{ fontSize: 24, marginTop: 4 }}>
        Yay! Do this:
      </div>

      <div className="resultBox">
        <div style={{ fontSize: 18, fontWeight: 800 }}>{result}</div>
      </div>

      {(quip || fact) && (
        <div
          className="stack"
          style={{
            gap: 6,
            maxWidth: 560,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {quip && (
            <div className="small" style={{ lineHeight: 1.5 }}>
              “{quip}” <span className="quip-author">– The Creator</span> 
            </div>
          )}         
          {fact && (
            <div className="small" style={{ lineHeight: 1.5 }}>
              <b>Fun fact:</b> {fact}
            </div>
          )}
        </div>
      )}

      {links?.length > 0 && (
        <div className="stack" style={{ gap: 8 }}>
          <div className="small" style={{ fontWeight: "bold" , fontSize: "1 rem" }}>Try these:</div>
          <div className="row center" style={{ justifyContent: "center" }}>
            {links.slice(0, 3).map((l, i) => (
              <a
                key={i}
                className="btn alt"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="row center" style={{ justifyContent: "center" }}>
        <button className="btn" onClick={onSpinAgain}>
          Spin again
        </button>
        <button className="btn alt" onClick={onShare}>
          Share
        </button>
        <button className="btn alt" onClick={onNewMode}>
          New mode
        </button>
        <button className="btn alt" onClick={onRestart}>
          Back to start
        </button>
      </div>
    </div>
  );
}
