import { Link } from "react-router-dom";

export default function BrandPage({
  eyebrow,
  title,
  description,
  accent,
  items,
}) {
  return (
    <main className="brand-page">
      <div className="brand-page-shell">
        <nav className="brand-page-nav">
          <Link className="brand-back" to="/">
            Back to Initiative Enterprises
          </Link>
          <div className="metric-pill">{accent}</div>
        </nav>

        <section className="brand-header">
          <div className="hero-panel">
            <p className="brand-eyebrow">{eyebrow}</p>
            <h1 className="brand-heading">{title}</h1>
            <p className="brand-copy">{description}</p>
            <p className="page-surface-note">
              This route is intentionally isolated so the brand can grow as its
              own destination under the Initiative Enterprises umbrella.
            </p>
          </div>

          <aside className="detail-panel">
            <p className="brand-eyebrow">Focus Areas</p>
            <div className="detail-list">
              {items.map((item) => (
                <div key={item} className="detail-item">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
