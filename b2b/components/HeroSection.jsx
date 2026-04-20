export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/60">
        Operator Performance System
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
        Fix manager inconsistency. Improve execution. Scale stronger operations.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-white/70">
        Initiative Enterprises helps operators track decisions, identify gaps, and build teams that execute at a higher level.
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
  );
}
