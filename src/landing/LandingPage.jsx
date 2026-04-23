import { useEffect, useRef, useState } from "react";

const INTRO_EXIT_MS = 250;
const INTRO_REMOVE_MS = 1200;
const PANELS_REVEAL_MS = 450;
const NAV_TRANSITION_MS = 320;

function BrandPanel({
  to,
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
      <div className={`panel-environment ${variant}`} aria-hidden="true">
        <span className="environment-grid" />
        <span className="environment-lines" />
        <span className="environment-nodes" />
        <span className="environment-sweep" />
        <span className="environment-haze" />
        <span className="environment-orbit orbit-one" />
        <span className="environment-orbit orbit-two" />
      </div>

      <div className="panel-content">
        <div className="panel-glow" aria-hidden="true" />
        <h2 className="panel-title">{title}</h2>
        <p className="panel-description">{description}</p>
        <a className="panel-cta" href={variant === "guardian" ? to : `#${to}`} onClick={handleButtonClick}>
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
      if (variant === "guardian") {
        window.location.href = route;
        return;
      }

      window.location.hash = route;
    }, NAV_TRANSITION_MS);
  };

  return (
    <main className="landing-shell">
      <div
        className={`route-transition${activatingPanel ? " is-active" : ""}${activatingPanel ? ` ${activatingPanel}` : ""}`}
        aria-hidden="true"
      />

      {showIntro ? (
        <div className={`intro-overlay${introExiting ? " is-exiting" : ""}`}>
          <div className="intro-copy">
            <span className="intro-kicker">Initiative Enterprises</span>
            <span className="intro-wordmark">Initiative Enterprises</span>
          </div>
        </div>
      ) : null}

      <header className={`landing-header${panelsRevealed ? " is-visible" : ""}`}>
        <span className="landing-header-line" aria-hidden="true" />
        <div className="landing-header-copy">
          <h1>Initiative Enterprises</h1>
          <p>Two divisions. One standard of excellence.</p>
        </div>
        <span className="landing-header-line" aria-hidden="true" />
      </header>

      <section
        className={`split-screen${panelsRevealed ? " is-visible" : ""}${activatingPanel ? " is-transitioning" : ""}`}
      >
        <BrandPanel
          to="/gaurdian-home.html"
          title="Guardian"
          description="Operational structure and growth support for startups and scaling businesses."
          variant="guardian"
          isActivating={activatingPanel === "guardian"}
          isDimmed={activatingPanel === "checkpoint"}
          onActivate={handleActivate}
        />

        <div className="panel-divider" aria-hidden="true">
          <span className="divider-line top" />
          <span className="divider-emblem">IE</span>
          <span className="divider-line bottom" />
        </div>

        <BrandPanel
          to="/checkpoint-media"
          title="Checkpoint Media"
          description="Media, interviews, and brand storytelling that turn attention into authority."
          variant="checkpoint"
          isActivating={activatingPanel === "checkpoint"}
          isDimmed={activatingPanel === "guardian"}
          onActivate={handleActivate}
        />
      </section>

      <footer className={`landing-footer${panelsRevealed ? " is-visible" : ""}`}>
        <span className="landing-footer-line" aria-hidden="true" />
        <p>Strategy. Operations. Storytelling. Growth.</p>
        <span className="landing-footer-line" aria-hidden="true" />
      </footer>
    </main>
  );
}
