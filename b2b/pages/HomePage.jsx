import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PilotSection from "../components/PilotSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PilotSection />

      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-2xl font-semibold">Let’s Talk</h2>
          <p className="mt-3 text-white/70">
            Initiative Enterprises helps operators improve performance through systems, support, and media.
          </p>
        </div>
      </footer>
    </main>
  );
}
