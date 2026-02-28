export interface Project {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'This portfolio — a statically generated site built with Next.js App Router, Tailwind CSS, and Spec-kit.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spec-kit'],
    url: 'https://github.com/daveu1983/portfolio',
    featured: true,
  },
  {
    title: 'Skills Hello World',
    description:
      'An experiment in reusable agent skills — a hello-world skill that prompts for a programming language and generates correct, runnable source code for it, covering both compiled and interpreted languages.',
    techStack: ['Agent Skills'],
    url: 'https://dev.to/daveu1983/hello-world-with-agent-skills-ngj',
    featured: true,
  },
  {
    title: 'Switching from Docker to Podman on Ubuntu',
    description:
      'A step-by-step guide for migrating from Docker to Podman on Ubuntu, covering full Docker removal, Podman installation, and Docker CLI emulation for a seamless transition.',
    techStack: ['Podman', 'Docker', 'Ubuntu'],
    url: 'https://dev.to/daveu1983/switching-from-docker-to-podman-on-ubuntu-5f8f',
    featured: false,
  },
];
