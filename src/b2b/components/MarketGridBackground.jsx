export default function MarketGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* radial glow (top) */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 bg-white/10 blur-[160px] opacity-20" />

      {/* subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-white/5 blur-[140px] opacity-20" />
    </div>
  );
}
