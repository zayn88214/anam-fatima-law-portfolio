import { Hero } from '@/components/sections/hero';
import { PracticeAreasPreview } from '@/components/sections/practice-areas-preview';
import { AboutPreview } from '@/components/sections/about-preview';
import { WhyChoose } from '@/components/sections/why-choose';
import { StatsSection } from '@/components/sections/stats-section';
import { FAQPreview } from '@/components/sections/faq-preview';
import { ArticlesPreview } from '@/components/sections/articles-preview';

export default function HomePage() {
  return (
    <div className="home-dark">
      <Hero />
      <StatsSection />
      <AboutPreview />
      <PracticeAreasPreview />
      <WhyChoose />
      <ArticlesPreview />
      <FAQPreview />
    </div>
  );
}
