// ─────────────────────────────────────────────────────────────────────────────
// File: src/utils/confetti.ts
// ─────────────────────────────────────────────────────────────────────────────
export function burstConfetti(root: HTMLElement) {
  const total = 42;
  for (let i = 0; i < total; i++) {
    const span = document.createElement("span");
    span.textContent = Math.random() < 0.5 ? "✦" : "✺";
    span.style.position = "absolute";
    span.style.userSelect = "none";
    span.style.left = Math.random() * 100 + "%";
    span.style.top = "-10px";
    const size = 10 + Math.random() * 12;
    span.style.fontSize = size + "px";
    const duration = 1000 + Math.random() * 1400;
    const translateY = 220 + Math.random() * 140;
    const rotate = 180 + Math.random() * 360;
    span.animate(
      [ { transform: `translateY(0) rotate(0deg)`, opacity: 1 }, { transform: `translateY(${translateY}px) rotate(${rotate}deg)`, opacity: 0.9 } ],
      { duration, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
    );
    root.appendChild(span);
    setTimeout(() => span.remove(), duration + 200);
  }
}