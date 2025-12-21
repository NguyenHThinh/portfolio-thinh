'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

import { ProjectCard } from '@/components/project-card';
import { Input } from '@/components/ui/input';
import type { Project } from '@/data/projects';

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const keyword = searchTerm.toLowerCase();
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(keyword)
        )
    );
  }, [projects, searchTerm]);

  return (
    <div className="space-y-12">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Tất cả dự án</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Khám phá các dự án tôi đã thực hiện, từ ứng dụng web đến các nền tảng
          phức tạp.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm dự án..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </motion.div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-lg">
            {`Không tìm thấy dự án nào phù hợp với từ khóa "${searchTerm}"`}
          </p>
        </motion.div>
      )}
    </div>
  );
}
