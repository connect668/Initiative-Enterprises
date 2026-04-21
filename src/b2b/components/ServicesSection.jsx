const services = [
  {
    title: "OSS",
    label: "CORE SYSTEM",
    description:
      "Track manager decisions, surface execution gaps, and give leadership clearer visibility into operational performance.",
  },
  {
    title: "Guardian Support",
    label: "OPERATOR SUPPORT",
    description:
      "Coaching, workshops, and implementation support built to strengthen standards and improve day-to-day execution.",
  },
  {
    title: "Checkpoint Media",
    label: "VISIBILITY ENGINE",
    description:
      "Content and business storytelling designed to build authority, trust, and stronger market presence.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/45">
          Service Stack
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          A performance system built for operators.
        </h2>
        <p className="mt-4 text-lg text-white/65">
          Built to help leaders track what matters, correct weak execution, and
          strengthen the business from the inside out.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),transparent,transparent)] opacity-60" />
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            <div className="absolute inset-y-0 left-0 w-px bg-white/5" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                  {service.label}
                </span>
                <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  Live
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/68">
                {service.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 bg-black/30 p-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Status
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/85">
                    Active Layer
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/30 p-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/85">
                    Execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
