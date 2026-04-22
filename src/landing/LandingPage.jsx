import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const INTRO_EXIT_MS = 1900;
const INTRO_REMOVE_MS = 3050;
const PANELS_REVEAL_MS = 2150;

function BrandPanel({ to, label, title, description, variant }) {
  return (
    <Link className={`brand-panel ${variant}`} to={to}>
      <div className={`card-wordmark ${variant}`}>
        <span>{variant === "guardian" ? "Initiative" : "Enterprises"}</span>
      </div>

      <div className={`panel-surface ${variant}`} aria-hidden="true">
        <span className="surface-wave wave-one" />
        <span className="surface-wave wave-two" />
        <span className="surface-wave wave-three" />
        <span className="surface-beam beam-one" />
        <span className="surface-beam beam-two" />
        <span className="surface-particles" />
      </div>

      <div className="panel-content">
        <p className="panel-label">{label}</p>
        <div className="panel-glow" aria-hidden="true" />
        <h2 className="panel-title">{title}</h2>
        <p className="panel-description">{description}</p>
        <span className="panel-cta">Enter {title}</span>
      </div>
    </Link>
  );
}

export default function LandingPage() {
  const [introExiting, setIntroExiting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [panelsRevealed, setPanelsRevealed] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIntroExiting(true);
    }, INTRO_EXIT_MS);

    const panelsTimer = window.setTimeout(() => {
      setPanelsRevealed(true);
    }, PANELS_REVEAL_MS);

    const removeTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_REMOVE_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(panelsTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <main className="landing-shell">
      <div className="landing-grid" />
      <div className="sunrise-glow" aria-hidden="true" />
      <div className="data-lines" aria-hidden="true">
        <div className="data-line" />
        <div className="data-line" />
        <div className="data-line" />
      </div>

      {showIntro ? (
        <div className={`intro-overlay${introExiting ? " is-exiting" : ""}`}>
          <div className="intro-copy">
            <span className="intro-kicker">Initiative Enterprises</span>
            <span className="intro-wordmark">Initiative Enterprises</span>
          </div>
        </div>
      ) : null}

      <section className={`split-screen${panelsRevealed ? " is-visible" : ""}`}>
        <BrandPanel
          to="/guardian"
          label="Brand 01"
          title="Guardian"
          description="Operational structure and growth support for startups and scaling businesses."
          variant="guardian"
        />

        <div className="panel-divider" aria-hidden="true" />

        <BrandPanel
          to="/checkpoint-media"
          label="Brand 02"
          title="Checkpoint Media"
          description="Media, interviews, and brand storytelling that turn attention into authority."
          variant="checkpoint"
        />
      </section>
    </main>
  );
}
