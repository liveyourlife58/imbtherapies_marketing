import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import TestsSection from '@/components/TestsSection';
import SupplementsSection from '@/components/SupplementsSection';
import BlogSection from '@/components/BlogSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main">
        <HeroSection />
        <FeaturesSection />
        <ValuePropositionSection />
        <TestsSection />
        <SupplementsSection />
        <BlogSection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
