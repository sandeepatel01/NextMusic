import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import TestimonialCards from "@/components/TestimonialCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <ScrollSection />
      <TestimonialCards />
    </main>
  );
}
