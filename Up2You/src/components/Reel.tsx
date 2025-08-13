// ─────────────────────────────────────────────────────────────────────────────
// File: src/components/Reel.tsx
// (One slot reel. We render 3 of these.)
// ─────────────────────────────────────────────────────────────────────────────
import React, { useEffect, useRef } from "react";

export default function Reel({
  items,
  spinning,
  spinKey,
  display,
  onDone,
  duration = 1600,
}: {
  items: string[];
  spinning: boolean;      // only animate when true
  spinKey: number;        // increment to trigger a new spin
  display: string;        // text to show when idle
  onDone: (finalItem: string) => void;
  duration?: number;      // ms
}) {
  const stripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!spinning || !items.length) return;
    const el = stripRef.current;
    if (!el) return;

    // Build a long list to scroll, ending on a random item
    const copies = 6;
    const arr: string[] = [];
    for (let i = 0; i < copies; i++) arr.push(...items);
    const final = items[Math.floor(Math.random() * items.length)];
    arr.push(final);

    // Hydrate the strip
    el.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      const d = document.createElement("div");
      d.className = "cell";
      d.textContent = arr[i];
      el.appendChild(d);
    }

    const cellH = 64;
    el.style.transform = "translateY(0px)";
    el.animate(
      [
        { transform: "translateY(0px)" },
        { transform: `translateY(-${(arr.length - 1) * cellH}px)` },
      ],
      { duration, easing: "cubic-bezier(.12,.8,.12,1)", fill: "forwards" }
    );

    const t = setTimeout(() => onDone(final), duration + 20);
    return () => clearTimeout(t);
    // spinKey ensures this effect runs only when a spin is triggered
  }, [spinning, spinKey, items, duration, onDone]);

  // Idle: show a single cell with the current display text
  if (!spinning) {
    return (
      <div className="reel">
        <div className="strip">
          <div className="cell">{display || "Ready when you are ✨"}</div>
        </div>
      </div>
    );
  }

  // Spinning: empty strip will be populated in effect
  return (
    <div className="reel" aria-live="polite" role="status">
      <div ref={stripRef} className="strip" />
    </div>
  );
}
