import { BioSection } from '@/components/sections/about/bio-section';
import { SkillsSection } from '@/components/sections/about/skills-section';
import { TimelineSection } from '@/components/sections/about/timeline-section';
import { personalInfo } from '@/data/personal';
import { skills } from '@/data/skills';
import { timeline } from '@/data/timeline';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <BioSection personalInfo={personalInfo} />
      <SkillsSection skills={skills} />
      <TimelineSection items={timeline} />
    </div>
  );
}
