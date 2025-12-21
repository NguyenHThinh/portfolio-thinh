import { ProjectsList } from '@/components/sections/projects/projects-list';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ProjectsList projects={projects} />
    </div>
  );
}
