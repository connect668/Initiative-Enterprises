import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const INTRO_EXIT_MS = 1900;
const INTRO_REMOVE_MS = 3050;
const PANELS_REVEAL_MS = 2150;
const BRAND_REVEAL_MS = 2750;

function PanelChart({ variant }) {
  const strokePath =
    variant === "guardian"
      ? "M0 116 L50 110 L104 92 L150 99 L204 72 L258 76 L316 44 L366 55 L420 14"
      : "M0 126 L48 118 L96 120 L146 84 L198 95 L244 62 L296 72 L350 40 L420 48";

  return (
    <svg className="panel-chart" viewBox="0 0 420 180" aria-hidden="true">
      <path className="chart-grid-line" d="M0 36 H420" />
      <path className="chart-grid-line" d="M0 88 H420" />
      <path className="chart-grid-line" d="M0 140 H420" />
      <path d={strokePath} />
    </svg>
  );
}

function BrandPanel({ to, label, title, description, variant, metrics }) {
  return (
    <Link className={`brand-panel ${variant}`} to={to}>
      <div className="panel-metrics">
        {metrics.map((metric) => (
          <span key={metric} className="metric-pill">
            {metric}
          </span>
        ))}
      </div>

      <PanelChart variant={variant} />

      <div className="panel-content">
        <p className="panel-label">{label}</p>
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
  const [brandRevealed, setBrandRevealed] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIntroExiting(true);
    }, INTRO_EXIT_MS);

    const panelsTimer = window.setTimeout(() => {
      setPanelsRevealed(true);
    }, PANELS_REVEAL_MS);

    const brandTimer = window.setTimeout(() => {
      setBrandRevealed(true);
    }, BRAND_REVEAL_MS);

    const removeTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_REMOVE_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(panelsTimer);
      window.clearTimeout(brandTimer);
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

      <div className={`umbrella-card${brandRevealed ? " is-visible" : ""}`}>
        <p className="umbrella-card-title">Initiative Enterprises</p>
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
          metrics={["Ops Systems", "Scale Support"]}
        />

        <div className="panel-divider" aria-hidden="true" />

        <BrandPanel
          to="/checkpoint-media"
          label="Brand 02"
          title="Checkpoint Media"
          description="Media, interviews, and brand storytelling that turn attention into authority."
          variant="checkpoint"
          metrics={["Media Signal", "Brand Authority"]}
        />
      </section>
    </main>
  );
}
