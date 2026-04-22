import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const INTRO_EXIT_MS = 1900;
const INTRO_REMOVE_MS = 3050;
const PANELS_REVEAL_MS = 2150;
const NAV_TRANSITION_MS = 520;

function BrandPanel({
  label,
  title,
  description,
  variant,
  isActivating,
  isDimmed,
  onActivate,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate(variant);
    }
  };

  return (
    <article
      className={`brand-panel ${variant}${isActivating ? " is-activating" : ""}${isDimmed ? " is-dimmed" : ""}`}
      role="link"
      tabIndex={0}
      onClick={() => onActivate(variant)}
      onKeyDown={handleKeyDown}
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
        <span className="panel-cta">Enter {title}</span>
      </div>
    </article>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();
  const [introExiting, setIntroExiting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [panelsRevealed, setPanelsRevealed] = useState(false);
  const [activatingPanel, setActivatingPanel] = useState("");
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

  const handleActivate = (variant) => {
    if (activatingPanel) {
      return;
    }

    setActivatingPanel(variant);
    const route = variant === "guardian" ? "/guardian" : "/checkpoint-media";
    navigationTimerRef.current = window.setTimeout(() => {
      navigate(route);
      window.location.hash = route;
    }, NAV_TRANSITION_MS);
  };

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
