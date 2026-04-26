import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <span className="environment-base" />
        <span className="environment-grid" />
        {variant === "guardian" ? (
          <svg className="environment-svg guardian-svg" viewBox="0 0 1000 1200" preserveAspectRatio="none">
            <g className="svg-lines">
              <path d="M90 90H300V260H520V680" />
              <path d="M120 480H420V930H720" />
              <path d="M640 90V520H915V1040" />
              <path d="M220 1040V780H470V560H730" />
              <path d="M820 160V360H570V1040" />
              <path d="M58 190H190V410H58V650" />
              <path d="M290 1100V920H140" />
            </g>
            <g className="svg-arcs">
              <path d="M38 250A240 240 0 0 1 280 8" />
              <path d="M705 120A320 320 0 0 1 1020 438" />
              <path d="M318 1104A280 280 0 0 0 596 826" />
              <path d="M540 512A240 240 0 0 1 780 752" />
              <path d="M600 1060A430 430 0 0 0 1012 648" />
            </g>
            <g className="svg-boxes">
              <rect x="150" y="178" width="8" height="8" />
              <rect x="780" y="560" width="10" height="10" />
              <rect x="318" y="922" width="9" height="9" />
              <rect x="628" y="244" width="8" height="8" />
              <rect x="878" y="252" width="7" height="7" />
            </g>
          </svg>
        ) : (
          <svg className="environment-svg checkpoint-svg" viewBox="0 0 1000 1200" preserveAspectRatio="none">
            <g className="svg-beams">
              <path d="M770 20L680 360" />
              <path d="M785 20L715 360" />
              <path d="M800 20L750 360" />
            </g>
            <g className="svg-waves">
              <path d="M170 868C312 804 382 958 520 904S740 786 1010 850" />
              <path d="M120 938C272 874 396 1030 574 978S790 860 1024 920" />
              <path d="M362 1038C512 988 602 1108 746 1064S900 1000 1030 1028" />
            </g>
            <g className="svg-bars">
              <rect x="640" y="712" width="4" height="210" />
              <rect x="668" y="738" width="4" height="184" />
              <rect x="696" y="694" width="4" height="228" />
              <rect x="724" y="758" width="4" height="164" />
              <rect x="752" y="720" width="4" height="202" />
              <rect x="780" y="744" width="4" height="178" />
              <rect x="808" y="704" width="4" height="218" />
              <rect x="836" y="764" width="4" height="158" />
            </g>
          </svg>
        )}
        <span className="environment-nodes" />
        <span className="environment-bloom bloom-one" />
        <span className="environment-bloom bloom-two" />
        <span className="environment-bloom bloom-three" />
        <span className="environment-spotlight" />
        <span className="environment-bars" />
        <span className="environment-sweep" />
        <span className="environment-haze" />
        <span className="environment-grain" />
        <span className="environment-orbit orbit-one" />
        <span className="environment-orbit orbit-two" />
        <span className="environment-vignette" />
      </div>

      <div className="panel-content">
        <div className="panel-glow" aria-hidden="true" />
        <h2 className="panel-title">{title}</h2>
        <p className="panel-description">{description}</p>
        <a className="panel-cta" href={variant === "guardian" ? to : to} onClick={handleButtonClick}>
          Enter {title}
        </a>
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

      navigate(route);
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
