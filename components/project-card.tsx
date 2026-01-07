'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const renderImage = (project: Project) => {
  if (project.demoUrl) {
    return (
      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          quality={100}
          className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    );
  }
  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      priority
      quality={100}
      className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden transition-all hover:shadow-lg pt-0">
        <div className="relative aspect-1900/900 w-full overflow-hidden">
          {renderImage(project)}
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1 leading-5">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.demoUrl && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
          {project.sourceUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Source
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
