import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.06),transparent,transparent)] opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-y-0 left-0 w-px bg-white/5" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/45">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Let's talk about your operation.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Whether you want to test OSS, strengthen execution, or build
              stronger visibility, we can start with a focused conversation.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Primary Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Operator Performance
                </p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Systems, support, and visibility built to improve execution.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Ideal Start
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  30-Day Pilot
                </p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Start with one location, review the gaps, then scale what
                  works.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                  Brand
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Initiative Enterprises
                </p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Helping operators improve consistency, execution, and growth.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
