// ─────────────────────────────────────────────────────────────────────────────
// File: src/components/Logo.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";

export default function Logo({ width = 168 }: { width?: number }) {
  // Bubble uses theme tokens:
  //  - fill: var(--card) so it looks like a chat bubble
  //  - stroke & text: var(--ink) for strong contrast in both themes
  return (
    <svg
      width={width}
      viewBox="0 0 340 110"
      role="img"
      aria-label="Up 2 You"
      style={{ display: "block" }}
    >
      <defs>
        <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="1.2" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Bubble shape */}
      <path
        d="
          M 24 18
          H 286
          a 18 18 0 0 1 18 18
          V 70
          a 18 18 0 0 1 -18 18
          H 150
          l -18 16
          a 6 6 0 0 1 -9.5 -4.7
          V 88
          H 42
          a 18 18 0 0 1 -18 -18
          V 36
          a 18 18 0 0 1 18 -18
          Z
        "
        fill="var(--card)"
        stroke="var(--ink)"
        strokeWidth="2.5"
        filter="url(#subtleShadow)"
      />

      {/* Text */}
      <text
        x="50%"
        y="53%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Nunito, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
        fontWeight={800}
        fontSize="36"
        fill="var(--ink)"
      >
        Up 2 You
      </text>
    </svg>
  );
}
