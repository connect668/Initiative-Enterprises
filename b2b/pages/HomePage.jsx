import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PilotSection from "../components/PilotSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PilotSection />
      <ContactSection />
    </main>
  );
}
