import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

const INTRO_EXIT_MS = 400;
const INTRO_REMOVE_MS = 1550;
const PANELS_REVEAL_MS = 650;
const NAV_TRANSITION_MS = 520;

function BrandPanel({
  to,
  label,
  title,
  description,
  variant,
  isActivating,
  isDimmed,
  onActivate,
}) {
  const handleButtonClick = (event) => {
    event.preventDefault();
    onActivate(variant, to);
  };

  return (
    <article
      className={`brand-panel ${variant}${isActivating ? " is-activating" : ""}${isDimmed ? " is-dimmed" : ""}`}
    >
      <div className={`card-wordmark ${variant}`}>
        <span>{variant === "guardian" ? "Initiative" : "Enterprises"}</span>
      </div>

      <div className={`panel-surface ${variant}`} aria-hidden="true">
        <span className="surface-wave wave-one" />
        <span className="surface-wave wave-two" />
        <span className="surface-wave wave-three" />
        <span className="surface-beam beam-one" />
        <span className="surface-particles" />
        <span className="surface-flash" />
      </div>

      <div className="panel-content">
        <p className="panel-label">{label}</p>
        <div className="panel-glow" aria-hidden="true" />
        <h2 className="panel-title">{title}</h2>
        <p className="panel-description">{description}</p>
        <a className="panel-cta" href={`#${to}`} onClick={handleButtonClick}>
          Enter {title}
        </a>
      </div>
    </article>
  );
}

export default function LandingPage() {
  const [introExiting, setIntroExiting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [panelsRevealed, setPanelsRevealed] = useState(false);
  const [activatingPanel, setActivatingPanel] = useState("");
  const [pendingRoute, setPendingRoute] = useState("");
  const navigationTimerRef = useRef(null);

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
      if (navigationTimerRef.current) {
        window.clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  const handleActivate = (variant, route) => {
    if (activatingPanel) {
      return;
    }

    setActivatingPanel(variant);
    navigationTimerRef.current = window.setTimeout(() => {
      setPendingRoute(route);
    }, NAV_TRANSITION_MS);
  };

  if (pendingRoute) {
    return <Navigate to={pendingRoute} replace />;
  }

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

      <section
        className={`split-screen${panelsRevealed ? " is-visible" : ""}${activatingPanel ? " is-transitioning" : ""}`}
      >
        <BrandPanel
          to="/gaurdian-home"
          label="Brand 01"
          title="Guardian"
          description="Operational structure and growth support for startups and scaling businesses."
          variant="guardian"
          isActivating={activatingPanel === "guardian"}
          isDimmed={activatingPanel === "checkpoint"}
          onActivate={handleActivate}
        />

        <div className="panel-divider" aria-hidden="true" />

        <BrandPanel
          to="/checkpoint-media"
          label="Brand 02"
          title="Checkpoint Media"
          description="Media, interviews, and brand storytelling that turn attention into authority."
          variant="checkpoint"
          isActivating={activatingPanel === "checkpoint"}
          isDimmed={activatingPanel === "guardian"}
          onActivate={handleActivate}
        />
      </section>
    </main>
  );
}
