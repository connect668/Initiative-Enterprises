export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-wide text-white">
          Initiative Enterprises
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#pilot" className="transition hover:text-white">
            Pilot
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/35"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
