export default function PilotSection() {
  return (
    <section id="pilot" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.06),transparent,transparent)] opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-y-0 left-0 w-px bg-white/5" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Pilot Program
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Start with one location.
              <br />
              Measure what breaks.
              <br />
              Fix what matters.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Run OSS in a single store for 30 days and give leadership a clearer
              picture of manager execution, decision quality, and operational weak
              points.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Book a Call
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                View Service Stack
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                Phase 01
              </p>
              <p className="mt-3 text-lg font-semibold text-white">Track Decisions</p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Log manager decisions to surface patterns, weak judgment, and missed
                policy alignment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                Phase 02
              </p>
              <p className="mt-3 text-lg font-semibold text-white">Review Gaps</p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Identify where inconsistency is happening and where leadership needs
                clearer standards or support.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                Phase 03
              </p>
              <p className="mt-3 text-lg font-semibold text-white">Leadership Debrief</p>
              <p className="mt-2 text-sm leading-6 text-white/62">
                Review the findings with leadership and decide what should be fixed,
                coached, or scaled next.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
              Timeline
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">30 Days</p>
            <p className="mt-2 text-sm text-white/60">
              Fast enough to learn. Long enough to expose patterns.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
              Scope
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">1 Location</p>
            <p className="mt-2 text-sm text-white/60">
              Low-friction entry point for operational validation.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
              Outcome
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">Clearer Visibility</p>
            <p className="mt-2 text-sm text-white/60">
              Leadership leaves with real data on where managers are struggling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
