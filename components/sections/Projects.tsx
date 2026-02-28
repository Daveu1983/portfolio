// components/sections/Projects.tsx
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto border-t border-bg-border">
      <p className="font-mono text-accent-purple text-xs tracking-widest uppercase mb-4">
        02. Work
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10">
        Projects
      </h2>

      {projects.length === 0 ? (
        <div className="bg-bg-surface border border-dashed border-bg-border rounded-lg p-10 text-center text-text-muted">
          <p className="font-mono text-sm">// no projects yet — add entries to data/projects.ts</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
