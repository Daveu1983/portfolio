// components/sections/About.tsx
export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-6xl mx-auto border-t border-bg-border">
      <p className="font-mono text-accent-purple text-xs tracking-widest uppercase mb-4">
        01. About
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10">
        A bit about me
      </h2>

      <div className="max-w-2xl space-y-4 text-text-muted leading-relaxed">
        <p>
          I&apos;m a DevOps Engineer who enjoys figuring out how tech works, how to build and deploy applications,
          cloud components, and CI/CD tooling. I try to share what I have learnt, in the hope that it
          can help others.
        </p>
        <p>
          I live in Manchester in the UK and enjoy going to meetups around Manchester, such as the Manchester Java User Group,
          Cloud Native and Kubernetes Manchester, the DevOps Society, and the DevOps Exchange.
        </p>
      </div>
    </section>
  );
}
