const stats = [
  {
    label: "PR",
    value: "84%",
    change: "+6.2%",
    note: "Policy reference rate",
  },
  {
    label: "PAS",
    value: "79%",
    change: "+4.1%",
    note: "Policy alignment score",
  },
  {
    label: "PP/D",
    value: "31%",
    change: "-8.4%",
    note: "Policy pulls per decision",
  },
  {
    label: "Pilot Window",
    value: "30D",
    change: "Live",
    note: "Single-store validation",
  },
];

export default function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),transparent,transparent)] opacity-70" />

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  {stat.label}
                </p>
                <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  {stat.change}
                </span>
              </div>

              <p className="mt-5 text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-white/60">{stat.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
