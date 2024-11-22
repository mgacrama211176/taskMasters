import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PhilosophySection from "./components/PhilosophySection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)]">
      <main>
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
