import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CheckpointLogo() {
  return (
    <div className="checkpoint-wordmark" aria-label="Checkpoint Media">
      <span className="checkpoint-mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="checkpoint-wordmark-text">
        <span className="checkpoint-wordmark-primary">checkpoint</span>
        <span className="checkpoint-wordmark-accent">media</span>
      </span>
    </div>
  );
}

function ServiceIcon({ type }) {
  if (type === "clips") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 6 18 18" />
        <path d="M15 6 6 18" />
        <path d="M7.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M21.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M7.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      </svg>
    );
  }

  if (type === "storytelling") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 11.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
        <path d="M17 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        <path d="M1.5 20c.8-3.4 3-5 6.1-5 3.2 0 5.2 1.8 6 5" />
        <path d="M12.2 20c.6-2.5 2.1-3.9 4.8-3.9 2.4 0 4 1.4 5 3.9" />
      </svg>
    );
  }

  if (type === "publish") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 11 17-7-5.3 16-3.4-6.2L3 11Z" />
        <path d="m11.3 13.8 8.7-9.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 7.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-9Z" />
      <path d="m16.5 10.3 4.5-3v9l-4.5-3" />
      <path d="M7.5 9.5h5" />
    </svg>
  );
}

function InterviewPerson({ role, name, variant }) {
  return (
    <div className={`interview-person ${variant}`}>
      <div className="interview-room" aria-hidden="true">
        <span className="room-blur room-blur-one" />
        <span className="room-blur room-blur-two" />
        <span className="room-light" />
        <span className="room-shelf room-shelf-one" />
        <span className="room-shelf room-shelf-two" />
        <span className="room-plant" />
      </div>
      <div className="person-figure" aria-hidden="true">
        <span className="person-shadow" />
        <span className="person-torso" />
        <span className="person-neck" />
        <span className="person-head" />
        <span className="person-hair" />
        <span className="person-eye eye-left" />
        <span className="person-eye eye-right" />
        <span className="person-nose" />
        <span className="person-mouth" />
        <span className="person-ear ear-left" />
        <span className="person-ear ear-right" />
        <span className="person-earbud bud-left" />
        <span className="person-earbud bud-right" />
        <span className="person-hand hand-left" />
        <span className="person-hand hand-right" />
      </div>
      <div className="participant-tag">
        <span>{role}</span>
        <span className="participant-signal" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
      <span className="sr-only">{name}</span>
    </div>
  );
}

const services = [
  {
    type: "interviews",
    title: "Interviews",
    description:
      "We conduct remote interviews that capture real stories, insights and perspectives that matter.",
  },
  {
    type: "clips",
    title: "Content Clips",
    description:
      "Short-form clips edited for impact so you can reach more people with what you already said.",
  },
  {
    type: "storytelling",
    title: "Brand Storytelling",
    description:
      "We turn conversations into content that strengthens your authority and builds long-term trust.",
  },
];

const processSteps = [
  {
    number: "1",
    type: "interviews",
    title: "Record",
    description: "We host and record the conversation online.",
  },
  {
    number: "2",
    type: "clips",
    title: "Edit",
    description: "We shape the best moments into clear, engaging content.",
  },
  {
    number: "3",
    type: "publish",
    title: "Publish",
    description: "You get ready-to-use assets that build visibility and trust.",
  },
];

export default function CheckpointMediaHomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className={`checkpoint-home${isVisible ? " is-visible" : ""}`}>
      <div className="checkpoint-home-noise" aria-hidden="true" />
      <div className="checkpoint-home-shell">
        <header className="checkpoint-topbar">
          <Link className="checkpoint-brand-link" to="/">
            <CheckpointLogo />
          </Link>

          <div className="checkpoint-top-actions">
            <button
              className="checkpoint-top-link"
              type="button"
              onClick={() => scrollToId("services")}
            >
              Services
            </button>
            <button
              className="checkpoint-top-link"
              type="button"
              onClick={() => scrollToId("process")}
            >
              Process
            </button>
            <button
              className="checkpoint-button checkpoint-button-solid"
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Book a conversation
            </button>
          </div>
        </header>

        <section className="checkpoint-hero">
          <div className="checkpoint-hero-copy">
            <h1>
              <span>Real conversations.</span>
              <span className="accent">Stronger brands.</span>
            </h1>
            <p>
              We interview founders and business leaders online and turn their
              stories into content that builds trust, authority, and visibility.
            </p>
            <div className="checkpoint-hero-actions">
              <button
                className="checkpoint-button checkpoint-button-solid"
                type="button"
                onClick={() => scrollToId("contact")}
              >
                Book a conversation
              </button>
              <button
                className="checkpoint-button checkpoint-button-ghost"
                type="button"
                onClick={() => scrollToId("services")}
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="checkpoint-hero-media" aria-hidden="true">
            <div className="wave-field wave-field-left">
              <span />
            </div>
            <div className="wave-field wave-field-right">
              <span />
            </div>

            <section className="interview-stage">
              <div className="rec-pill">
                <span className="rec-dot" />
                REC
              </div>

              <InterviewPerson role="Guest" name="Guest speaker" variant="guest" />

              <div className="recording-card">
                <span>Interview recorded</span>
                <strong>00:47:32</strong>
              </div>

              <div className="secondary-window">
                <InterviewPerson role="Host" name="Host speaker" variant="host" />
              </div>

              <div className="transcript-card">
                <div className="transcript-meta">
                  <span>Speaker</span>
                  <span>00:12</span>
                </div>
                <p>
                  Building a brand is really about{" "}
                  <span>showing up consistently</span> and sharing what you've
                  learned along the way.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="checkpoint-services" id="services">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon-wrap">
                <ServiceIcon type={service.type} />
              </div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="checkpoint-process-wrap" id="process">
          <div className="process-heading">
            <p>OUR PROCESS</p>
            <h2>
              <span>Simple process.</span>
              <span className="accent">Powerful results.</span>
            </h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="process-card">
                <div className="process-badge">{step.number}</div>
                <div className="process-icon-wrap">
                  <ServiceIcon type={step.type} />
                </div>
                <div className="process-copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 ? (
                  <span className="process-connector" aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="checkpoint-final-cta" id="contact">
          <div className="final-cta-icon">
            <ServiceIcon type="storytelling" />
          </div>
          <div className="final-cta-copy">
            <h2>Your story deserves to be heard.</h2>
            <p>
              Let&apos;s turn your experience into content that makes an impact.
            </p>
          </div>
          <button
            className="checkpoint-button checkpoint-button-solid"
            type="button"
            onClick={() => scrollToId("services")}
          >
            Book a conversation
          </button>
        </section>
      </div>
    </main>
  );
}
