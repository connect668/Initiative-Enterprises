import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          We help operators improve consistency, train stronger managers, and grow smarter.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          OSS, operational support, and media services built for leaders who want clearer execution and better results.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#pilot"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Start a Pilot
          </a>

          <a
            href="#services"
            className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
          >
            View Services
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">What We Offer</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">OSS</h3>
            <p className="mt-3 text-white/70">
              Track manager decisions, identify consistency gaps, and give leadership better visibility.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">Operational Support</h3>
            <p className="mt-3 text-white/70">
              Coaching, workshops, and implementation support to help teams execute at a higher level.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold">Checkpoint Media</h3>
            <p className="mt-3 text-white/70">
              Content and business storytelling that help strong operators build stronger visibility.
            </p>
          </div>
        </div>
      </section>

      <section id="pilot" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 p-8">
          <h2 className="text-3xl font-semibold">Start with a 30-Day Pilot</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Run OSS in one location, identify where manager inconsistency is happening, and review the results with leadership.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Book a Call
          </a>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-2xl font-semibold">Let’s Talk</h2>
          <p className="mt-3 text-white/70">
            Initiative Enterprises helps operators improve performance through systems, support, and media.
          </p>
        </div>
      </footer>
    </main>
  );
}
