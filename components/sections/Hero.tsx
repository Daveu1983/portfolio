// components/sections/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-20 max-w-6xl mx-auto">
      <p className="font-mono text-accent-green text-sm mb-4 tracking-widest">
        &gt; hello
      </p>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-4">
        I&apos;m <span className="text-accent-blue">Dave</span>
      </h1>

      <p className="text-2xl sm:text-3xl text-text-muted font-medium mb-6">
        DevOps Engineer
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="#projects"
          className="bg-accent-blue text-bg-base px-6 py-3 rounded font-semibold text-sm hover:bg-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-bg-base"
        >
          View My Work
        </Link>
        <a
          href="https://github.com/daveu1983"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-bg-border text-text-muted px-6 py-3 rounded font-semibold text-sm hover:border-accent-blue hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-bg-base"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
