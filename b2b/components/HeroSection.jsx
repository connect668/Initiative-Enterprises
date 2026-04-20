export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/45">
          Operator Performance System
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Fix inconsistency.
          <br />
          Strengthen execution.
          <br />
          Scale with clarity.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Initiative Enterprises helps operators track decisions, identify
          weak points, and build stronger systems through OSS, support, and
          media.
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

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
              Layer 01
            </p>
            <p className="mt-3 text-lg font-semibold">Track Decisions</p>
            <p className="mt-2 text-sm text-white/60">
              Surface inconsistency before it compounds.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
              Layer 02
            </p>
            <p className="mt-3 text-lg font-semibold">Correct Weak Points</p>
            <p className="mt-2 text-sm text-white/60">
              Use support and coaching to improve execution.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
              Layer 03
            </p>
            <p className="mt-3 text-lg font-semibold">Build Visibility</p>
            <p className="mt-2 text-sm text-white/60">
              Strengthen trust and authority through media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
