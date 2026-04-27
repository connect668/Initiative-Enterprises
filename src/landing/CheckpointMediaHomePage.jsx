const waveformHeights = [16, 24, 34, 18, 42, 58, 30, 74, 46, 28, 38, 54, 90, 60, 40, 26];
const miniWaveHeights = [10, 14, 9, 16, 12, 20, 26, 18, 12, 16, 10, 14];

function LogoMark() {
  return (
    <span className="relative inline-block h-7 w-7 shrink-0" aria-hidden="true">
      <span className="absolute left-0 top-0 h-[3px] w-3.5 rounded-full bg-[#d6a35d]" />
      <span className="absolute left-0 top-0 h-3.5 w-[3px] rounded-full bg-[#d6a35d]" />
      <span className="absolute bottom-0 right-0 h-[3px] w-3.5 rounded-full bg-[#d6a35d]" />
      <span className="absolute bottom-0 right-0 h-3.5 w-[3px] rounded-full bg-[#d6a35d]" />
    </span>
  );
}

function PrimaryButton({ children, href = "#contact", className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl border border-[rgba(255,232,192,0.16)] bg-[#d6a35d] px-6 text-[15px] font-semibold text-[#140f09] shadow-[0_16px_36px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,247,230,0.42)] transition duration-200 hover:-translate-y-px hover:brightness-105 ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function SecondaryButton({ children, href = "#services" }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(11,16,24,0.76)] px-6 text-[15px] font-semibold text-[#f4f1ea] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:-translate-y-px hover:border-[rgba(214,163,93,0.4)] hover:bg-[rgba(14,20,32,0.88)]"
    >
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-[rgba(244,241,234,0.72)] transition duration-200 hover:text-[#f4f1ea]"
    >
      {children}
    </a>
  );
}

function IconBadge({ children }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(214,163,93,0.14)] bg-[radial-gradient(circle_at_50%_25%,rgba(214,163,93,0.18),rgba(14,20,32,0.92)_72%)] text-[#d6a35d] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      {children}
    </div>
  );
}

function ServiceIcon({ type }) {
  if (type === "clips") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
        <path d="M9 6 18 18" />
        <path d="M15 6 6 18" />
        <path d="M7.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M21.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M7.5 18a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      </svg>
    );
  }

  if (type === "story") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
        <path d="M7 11.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
        <path d="M17 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        <path d="M1.5 20c.8-3.4 3-5 6.1-5 3.2 0 5.2 1.8 6 5" />
        <path d="M12.2 20c.6-2.5 2.1-3.9 4.8-3.9 2.4 0 4 1.4 5 3.9" />
      </svg>
    );
  }

  if (type === "publish") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
        <path d="m3 11 17-7-5.3 16-3.4-6.2L3 11Z" />
        <path d="m11.3 13.8 8.7-9.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
      <path d="M12 17c2.6 0 4.5-2.7 4.5-6.1S14.6 5 12 5s-4.5 2.2-4.5 5.9S9.4 17 12 17Z" />
      <path d="M9 19.5h6" />
      <path d="M12 17v2.5" />
    </svg>
  );
}

function WaveBars({ heights, className = "", highlighted = false }) {
  return (
    <div className={`flex items-center gap-[5px] ${className}`}>
      {heights.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`block w-[2px] rounded-full ${
            highlighted
              ? "bg-[linear-gradient(180deg,rgba(245,211,152,0.5),rgba(214,163,93,1),rgba(245,211,152,0.44))]"
              : "bg-[linear-gradient(180deg,rgba(214,163,93,0.08),rgba(214,163,93,0.9),rgba(214,163,93,0.08))]"
          }`}
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
}

function StatusPill({ label }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,19,28,0.9)] px-4 py-3 text-sm font-medium text-[#f4f1ea] shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition duration-200 hover:border-[rgba(214,163,93,0.28)] hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
      <span>{label}</span>
      <span className="text-[#d6a35d]">✓</span>
    </div>
  );
}

function ServiceCard({ icon, title, copy }) {
  return (
    <article className="group rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(15,18,24,0.98),rgba(10,13,19,0.94))] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(214,163,93,0.24)] hover:shadow-[0_24px_40px_rgba(0,0,0,0.28)]">
      <div className="flex items-start gap-5">
        <IconBadge>{icon}</IconBadge>
        <div className="min-w-0">
          <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f4f1ea]">{title}</h3>
          <p className="mt-2 max-w-[31ch] text-[15px] leading-7 text-[rgba(244,241,234,0.72)]">{copy}</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-[#d6a35d] transition duration-200 group-hover:text-[#e2b46f]"
          >
            <span>Learn more</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function ProcessStep({ number, icon, title, copy, showConnector }) {
  return (
    <div className="relative flex-1">
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <span className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(214,163,93,0.32)] bg-[rgba(10,12,18,0.96)] text-sm font-semibold text-[#f4f1ea]">
            {number}
          </span>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_50%_24%,rgba(214,163,93,0.16),rgba(12,17,25,0.98)_76%)] text-[#d6a35d] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {icon}
          </div>
        </div>

        <div className="pt-2">
          <h3 className="text-[18px] font-semibold text-[#f4f1ea]">{title}</h3>
          <p className="mt-2 max-w-[22ch] text-[15px] leading-7 text-[rgba(244,241,234,0.7)]">{copy}</p>
        </div>
      </div>

      {showConnector ? (
        <div className="absolute left-[82%] top-10 hidden h-px w-[22%] bg-[linear-gradient(90deg,rgba(214,163,93,0.56),rgba(214,163,93,0.08))] xl:block">
          <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#d6a35d] shadow-[0_0_12px_rgba(214,163,93,0.52)]" />
        </div>
      ) : null}
    </div>
  );
}

export default function CheckpointMediaHomePage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-[#f4f1ea]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 16%, rgba(214,163,93,0.08), transparent 18%), radial-gradient(circle at 82% 14%, rgba(214,163,93,0.06), transparent 18%), radial-gradient(circle at 50% 100%, rgba(214,163,93,0.04), transparent 26%)",
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(244,241,234,0.45) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(180deg, transparent 0%, black 14%, black 82%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 pb-8 pt-5 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 py-2 lg:flex-row lg:items-center lg:justify-between">
          <a href="./index.html" className="inline-flex items-center gap-3">
            <LogoMark />
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#f4f1ea]">
              checkpoint <span className="font-medium text-[#d6a35d]">media</span>
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5 lg:gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <PrimaryButton className="min-h-11 rounded-[18px] px-5 text-sm">Book a conversation</PrimaryButton>
          </div>
        </header>

        <section className="grid gap-10 pb-10 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center xl:gap-12 xl:pt-12">
          <div className="max-w-[560px]">
            <h1 className="text-[clamp(3.5rem,7vw,5.9rem)] font-extrabold leading-[0.92] tracking-[-0.08em] text-[#f4f1ea]">
              <span className="block">Real conversations.</span>
              <span className="mt-1 block text-[#d6a35d]">Stronger brands.</span>
            </h1>

            <p className="mt-6 max-w-[31rem] text-[clamp(1rem,1.45vw,1.18rem)] leading-8 text-[rgba(244,241,234,0.72)]">
              We interview founders and business leaders online and turn their stories into content that builds trust, authority, and visibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton>Book a conversation</PrimaryButton>
              <SecondaryButton>Learn more</SecondaryButton>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-[560px] xl:min-h-[590px]">
            <div className="absolute inset-y-[16%] left-0 hidden w-28 -translate-x-10 opacity-60 lg:block">
              <WaveBars heights={[6, 10, 16, 24, 40, 58, 30, 20, 14, 10, 6]} className="justify-end" />
            </div>

            <div className="absolute inset-y-[16%] right-0 hidden w-28 translate-x-10 opacity-60 lg:block">
              <WaveBars heights={[6, 10, 16, 24, 40, 58, 30, 20, 14, 10, 6]} />
            </div>

            <div className="absolute left-0 right-24 top-0 rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(14,20,32,0.96),rgba(11,16,24,0.98))] p-6 shadow-[0_32px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.03)] lg:right-28 xl:right-32 xl:p-7">
              <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_0%,rgba(214,163,93,0.07),transparent_24%),radial-gradient(circle_at_88%_48%,rgba(214,163,93,0.05),transparent_18%)]" />
              <div
                className="pointer-events-none absolute inset-[18px] rounded-[24px] opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(214,163,93,0.34) 0.7px, transparent 0.7px)",
                  backgroundSize: "18px 18px",
                  maskImage:
                    "linear-gradient(180deg, transparent, black 12%, black 78%, transparent)",
                }}
              />

              <div className="relative z-10 flex items-center gap-3 text-[15px] font-semibold text-[#f4f1ea]">
                <span className="h-3 w-3 rounded-full bg-[#ff4b3a] shadow-[0_0_14px_rgba(255,75,58,0.65)]" />
                <span>REC</span>
              </div>

              <div className="relative z-10 mt-10 flex min-h-[240px] items-center justify-center">
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 items-center justify-between gap-5">
                  <WaveBars heights={waveformHeights} className="justify-end" />
                  <WaveBars heights={waveformHeights} />
                </div>

                <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-[rgba(214,163,93,0.3)] bg-[radial-gradient(circle,rgba(214,163,93,0.14),rgba(11,16,24,0.94)_68%)] shadow-[0_0_0_1px_rgba(214,163,93,0.06),0_0_32px_rgba(214,163,93,0.12)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(226,180,111,0.72)] text-[#e2b46f]">
                    <div className="h-4 w-4 rounded-[5px] border border-current" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
                  <span className="text-[15px] font-semibold text-[#f4f1ea]">Interview in progress</span>
                  <span className="mt-1 text-[15px] text-[rgba(244,241,234,0.7)]">00:47:32</span>
                </div>
              </div>

              <div className="relative z-10 mt-8 rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(16,19,27,0.94)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] xl:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#f4f1ea]">Transcript</p>
                    <div className="mt-2 flex gap-4 text-[15px] text-[rgba(244,241,234,0.62)]">
                      <span>Speaker 1</span>
                      <span>00:12</span>
                    </div>
                    <p className="mt-2 max-w-[48ch] text-[15px] leading-7 text-[rgba(244,241,234,0.72)]">
                      Building a brand is really about <span className="text-[#d6a35d]">showing up consistently</span> and sharing what you&apos;ve learned along the way.
                    </p>
                  </div>

                  <div className="mt-6 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(24,28,38,0.92)] text-[rgba(244,241,234,0.72)] sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
                      <path d="M9 9h9v11H9z" />
                      <path d="M6 15H5a1 1 0 0 1-1-1V5h9a1 1 0 0 1 1 1v1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-3 top-6 z-10 w-[240px] rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(16,19,27,0.94)] p-4 shadow-[0_24px_40px_rgba(0,0,0,0.24)] backdrop-blur md:right-4 xl:w-[250px]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(214,163,93,0.34)] text-[#d6a35d]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                    <path d="m6 12 4 4 8-9" />
                  </svg>
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-[#f4f1ea]">Interview recorded</p>
                  <p className="mt-1 text-sm text-[rgba(244,241,234,0.62)]">00:47:32</p>
                </div>
              </div>
            </div>

            <div className="absolute right-10 top-32 z-10 w-[320px] rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(14,20,32,0.96)] p-4 shadow-[0_28px_54px_rgba(0,0,0,0.28)] md:right-10 md:w-[340px] xl:right-12 xl:top-36">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[15px] font-semibold text-[#f4f1ea]">Key moment</p>
                </div>
                <span className="text-sm text-[rgba(244,241,234,0.55)]">02:15</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <WaveBars heights={miniWaveHeights} className="opacity-45" />
                <div className="rounded-xl bg-[rgba(214,163,93,0.16)] px-3 py-2">
                  <WaveBars heights={[14, 18, 22, 17, 24, 28, 21, 16]} highlighted />
                </div>
                <WaveBars heights={miniWaveHeights} className="opacity-45" />
              </div>

              <p className="mt-4 text-[15px] leading-7 text-[rgba(244,241,234,0.72)]">
                Building a brand is about <span className="text-[#d6a35d]">showing up</span> consistently and sharing what you&apos;ve learned along the way.
              </p>
            </div>

            <div className="absolute bottom-2 right-0 z-10 flex w-[190px] flex-col gap-3 lg:bottom-4 xl:w-[200px]">
              <StatusPill label="Transcript ready" />
              <StatusPill label="Clip exported" />
              <StatusPill label="Content published" />
            </div>
          </div>
        </section>

        <section id="services" className="grid gap-5 lg:grid-cols-3">
          <ServiceCard
            icon={<ServiceIcon type="interviews" />}
            title="Interviews"
            copy="We conduct remote interviews that capture real stories, insights and perspectives that matter."
          />
          <ServiceCard
            icon={<ServiceIcon type="clips" />}
            title="Content Clips"
            copy="Short-form clips edited for impact so you can reach more people with what you already said."
          />
          <ServiceCard
            icon={<ServiceIcon type="story" />}
            title="Brand Storytelling"
            copy="We turn conversations into content that strengthens your authority and builds long-term trust."
          />
        </section>

        <section id="process" className="grid gap-8 pb-8 pt-9 xl:grid-cols-[0.9fr_2.1fr] xl:items-start">
          <div className="pt-1">
            <p className="text-sm font-semibold tracking-[0.14em] text-[#d6a35d]">OUR PROCESS</p>
            <h2 className="mt-3 text-[clamp(2.6rem,4vw,4.2rem)] font-bold leading-[0.94] tracking-[-0.07em]">
              <span className="block text-[#f4f1ea]">Simple process.</span>
              <span className="mt-1 block text-[#d6a35d]">Powerful results.</span>
            </h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-3 xl:gap-6">
            <ProcessStep
              number="1"
              icon={<ServiceIcon type="interviews" />}
              title="Record"
              copy="We host and record the conversation online."
              showConnector
            />
            <ProcessStep
              number="2"
              icon={<ServiceIcon type="clips" />}
              title="Edit"
              copy="We shape the best moments into clear, engaging content."
              showConnector
            />
            <ProcessStep
              number="3"
              icon={<ServiceIcon type="publish" />}
              title="Publish"
              copy="You get ready-to-use assets that build visibility and trust."
            />
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[26px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(90deg,rgba(15,18,24,0.98),rgba(18,16,15,0.98)_48%,rgba(15,18,24,0.98))] px-5 py-5 shadow-[0_20px_42px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 lg:px-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <IconBadge>
                <ServiceIcon type="story" />
              </IconBadge>
              <div>
                <h2 className="text-[clamp(1.7rem,2vw,2.2rem)] font-semibold tracking-[-0.04em] text-[#f4f1ea]">
                  Your story deserves to be heard.
                </h2>
                <p className="mt-2 text-[15px] leading-7 text-[rgba(244,241,234,0.72)]">
                  Let&apos;s turn your experience into content that makes an impact.
                </p>
              </div>
            </div>

            <PrimaryButton className="md:self-center">Book a conversation</PrimaryButton>
          </div>
        </section>

        <div id="about" className="hidden" />
        <div id="resources" className="hidden" />
      </div>
    </main>
  );
}
