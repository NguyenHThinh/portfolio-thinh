import { HeroSection } from '@/components/sections/home/hero-section';
import { FeaturedProjectsSection } from '@/components/sections/home/featured-projects-section';
import { QuickStatsSection } from '@/components/sections/home/quick-stats-section';
import { personalInfo } from '@/data/personal';
import { projects } from '@/data/projects';

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export default function HomePage() {
  const stats = [
    { title: '3', description: 'Years of experience' },
    {
      title: `${projects.length}+`,
      description: 'Projects delivered',
    },
    { title: '100%', description: 'Quality commitment' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <HeroSection personalInfo={personalInfo} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <QuickStatsSection stats={stats} />
    </div>
  );
}
