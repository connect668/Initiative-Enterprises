const tickerItems = [
  "OSS // LIVE EXECUTION SIGNAL",
  "PR +6.2%",
  "PAS +4.1%",
  "PP/D -8.4%",
  "PILOT WINDOW // 30 DAYS",
  "GUARDIAN SUPPORT // ACTIVE",
  "CHECKPOINT MEDIA // ONLINE",
  "LEADERSHIP VISIBILITY // UP",
];

export default function TickerStrip() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="ticker-track flex min-w-max gap-8 px-6 py-3">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/55">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
