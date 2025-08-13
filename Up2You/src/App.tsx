// ─────────────────────────────────────────────────────────────────────────────
// File: src/App.tsx
// ─────────────────────────────────────────────────────────────────────────────
import React, { useEffect, useMemo, useRef, useState } from "react";
import StepDots from "./components/StepDots";
import LandingStep from "./pages/LandingStep";
import ModeStep from "./pages/ModeStep";
import MoodStep from "./pages/MoodStep";
import SpinStep from "./pages/SpinStep";
import ResultStep from "./pages/ResultStep";
import { type Mood } from "./types";
import { ACTIVITIES, ACTIVITY_META } from "./data/activities";
import type { Mode } from "./utils/types-extra";
import { burstConfetti } from "./utils/confetti";

type Theme = "light" | "dark";

export default function App() {
  const [step, setStep] = useState(0); // 0..4
  const [mode, setMode] = useState<Mode | null>(null);
  const [mood, setMood] = useState<Mood | null>(null);

  // Single-reel state
  const [spinning, setSpinning] = useState(false);
  const [spinKey, setSpinKey] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [display, setDisplay] = useState<string>("Ready when you are ✨");

  function spinAgain() {
    // Go back to the Spin step so the reel is mounted
    setStep(3);
    // Wait a tick for the component to mount, then spin
    requestAnimationFrame(() => {
      setResult(null);
      setSpinning(true);
      setSpinKey((k) => k + 1);
    });
  }  

  // Theme state
  const [theme, setTheme] = useState<Theme>("light");

  const confettiRoot = useRef<HTMLDivElement | null>(null);

  // ----- Theme init: saved preference or auto by time -----
  useEffect(() => {
    const saved = localStorage.getItem("u2y-theme") as Theme | null;
    const hour = new Date().getHours();
    const autoDark = hour >= 20 || hour < 6; // 8pm–6am
    const initial: Theme = saved ?? (autoDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("u2y-theme", next);
  }

  // ----- Pool for the chosen mode + mood -----
  const pool = useMemo(() => {
    if (!mode || !mood) return [] as string[];
    return ACTIVITIES[mode][mood];
  }, [mode, mood]);

  // ----- Navigation helpers -----
  function backToStart() {
    setStep(0);
    setMode(null);
    setMood(null);
    setResult(null);
    setDisplay("Ready when you are ✨");
    setSpinning(false);
  }

  // Logo click = go home
  function onLogoClick() {
    backToStart();
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  }

  // ----- Spin flow (single reel) -----
  function onSpin() {
    if (!pool.length) return;
    setResult(null);
    setSpinning(true);
    setSpinKey((k) => k + 1); // trigger Reel animation
  }

  function onReelDone(final: string) {
    setDisplay(final);
    setResult(final);
    setSpinning(false);
    setStep(4);
    if (confettiRoot.current) burstConfetti(confettiRoot.current);
  }

  // ----- Share helper -----
  async function onShare() {
    if (!result) return;
    const text = `Up 2 You picked: ${result}${
      mode && mood
        ? ` (Mode: ${mode === "inperson" ? "In-person" : "Online"}, Mood: ${mood})`
        : ""
    }`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Up 2 You", text });
        return;
      } catch {
        /* fallback */
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard ✨");
    } catch {
      alert(text);
    }
  }

  const meta = result ? ACTIVITY_META[result] : undefined;
  const helpfulLinks = meta?.links ?? [];
  const quip = meta?.quip;
  const fact = meta?.fact;

  return (
    <main>
      {/* Day/Night background layers + grain */}
      <div className="bg-day" aria-hidden></div>
      <div className="bg-night" aria-hidden></div>
      <div className="bg-grain" aria-hidden></div>

      <div className="container">
        <header className="header">
          {/* Logo as a HOME button */}
          <button
            onClick={onLogoClick}
            aria-label="Go to landing"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={
                theme === "dark"
                  ? "/Up2You_BlueBubble.png"
                  : "/Up2You_GreyBubble.png"
              }
              alt="Up 2 You"
              style={{ display: "block", width: 188, height: "auto" }}
            />
          </button>

          <div className="row" style={{ gap: 8 }}>
            <StepDots step={step} />
            <button
              className="themeToggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙 Night" : "☀️ Day"}
            </button>
          </div>
        </header>

        <section className="card">
          <div ref={confettiRoot} className="confetti" />

          {step === 0 && <LandingStep onNext={() => setStep(1)} />}

          {step === 1 && (
            <ModeStep
              mode={mode}
              setMode={(m) => setMode(m)}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <MoodStep
              mood={mood}
              setMood={(m) => setMood(m)}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}

          {step === 3 && mode && mood && (
            <SpinStep
              mode={mode}
              mood={mood}
              pool={pool}
              spinning={spinning}
              spinKey={spinKey}
              display={display}
              onSpin={onSpin}
              onChangeMood={() => setStep(2)}
              onReelDone={onReelDone}
            />
          )}

{step === 4 && mode && mood && result && (
  <ResultStep
    mode={mode}
    mood={mood}
    result={result}
    quip={quip}
    fact={fact}
    links={helpfulLinks}
    onSpinAgain={spinAgain}   // <-- was onSpin
    onShare={onShare}
    onNewMode={() => setStep(1)}
    onRestart={backToStart}
  />
)}
        </section>

        {/* Footer + credit */}
<div className="footer">
  <div>
    {[
      "Because Netflix can’t be the only option.",
      "Giving you date ideas since… just now.",
      "Like a magic 8-ball, but for fun.",
      "For when 'I don’t know, what do you want to do?' gets old.",
      "Because boredom is overrated.",
      "The code running this site was held together by duct tape and hope.",
      "Made to save you from another night of scrolling.",
      "Helping indecisive couples everywhere.",
      "We spin so you don’t have to.",
      "When your brain is on airplane mode.",
      "Your results may vary",
      "We don’t judge your choices. Mostly.",
      "Because we can.",
      "Giving you ideas you’ll pretend were yours all along.",
      "Because flipping a coin was getting old.",
      "The only third wheel you’ll ever need.",
      "This footer has been 100% fact-checked by a guy named Dave.",
      "Yes, this is a website footer. Yes, you just read it.",
      "If this site helps you, you owe us snacks.",
      "Your excuse to finally leave the couch."
    ][Math.floor(Math.random() * 20)]}
  </div>
  <div style={{ marginTop: 6 }}>
    Crafted by{" "}
    <span style={{ fontWeight: 800, color: "var(--accent)" }}>
      Miscellaneous Studio
    </span>{" "}
    :D
  </div>
</div>

      </div>
    </main>
  );
}
