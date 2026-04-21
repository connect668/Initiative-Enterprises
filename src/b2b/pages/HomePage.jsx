export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-nav">
        <div className="site-brand">Initiative Enterprises</div>
        <div className="site-nav-links">
          <a href="#services">Services</a>
          <a href="#pilot">Pilot</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <section className="hero-block">
        <p className="eyebrow">Operator Performance System</p>
        <h1>Fix inconsistency. Strengthen execution. Scale with clarity.</h1>
        <p className="hero-copy">
          Initiative Enterprises helps operators track decisions, identify weak
          points, and build stronger systems through OSS, support, and media.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#contact">
            Start a Conversation
          </a>
          <a className="button-secondary" href="#services">
            View Services
          </a>
        </div>
      </section>

      <section id="services" className="content-block">
        <p className="eyebrow">Services</p>
        <h2>A performance system built for operators.</h2>

        <div className="card-grid">
          <article className="info-card">
            <h3>OSS</h3>
            <p>
              Track manager decisions, surface execution gaps, and give
              leadership clearer visibility into operational performance.
            </p>
          </article>

          <article className="info-card">
            <h3>Guardian Support</h3>
            <p>
              Coaching, workshops, and implementation support designed to
              improve standards and strengthen day-to-day execution.
            </p>
          </article>

          <article className="info-card">
            <h3>Checkpoint Media</h3>
            <p>
              Content and business storytelling that builds authority, trust,
              and stronger market presence.
            </p>
          </article>
        </div>
      </section>

      <section id="pilot" className="content-block">
        <p className="eyebrow">Pilot Program</p>
        <h2>Start with one location. Measure what breaks. Fix what matters.</h2>
        <p className="section-copy">
          Run OSS in a single store for 30 days and give leadership a clearer
          picture of manager execution, decision quality, and operational weak
          points.
        </p>
      </section>

      <section id="contact" className="content-block contact-block">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s talk about your operation.</h2>
        <p className="section-copy">
          Whether you want to test OSS, strengthen execution, or build stronger
          visibility, we can start with a focused conversation.
        </p>

        <div className="contact-actions">
          <a className="button-primary" href="mailto:hello@initiative.enterprises">
            Email Us
          </a>
          <a
            className="button-secondary"
            href="https://github.com/connect668/Initiative-Enterprises"
          >
            View GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
