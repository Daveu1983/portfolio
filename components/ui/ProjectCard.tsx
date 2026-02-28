// components/ui/ProjectCard.tsx
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-bg-surface border border-bg-border rounded-lg p-6 flex flex-col gap-4 hover:border-accent-blue transition-colors group">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-text-primary font-semibold text-lg group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="text-text-muted hover:text-accent-blue transition-colors shrink-0 mt-1"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="text-text-muted text-sm leading-relaxed flex-grow">
        {project.description}
      </p>
    </div>
  );
}
