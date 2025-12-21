'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import type { Project } from '@/data/projects';

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section className="space-y-8">
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Dự án nổi bật</h2>
          <p className="text-muted-foreground mt-2">
            Một số dự án tôi đã thực hiện
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/projects">
            Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
