// components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-surface border-t border-bg-border mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm font-mono">
          &copy; {currentYear} Built with Spec-kit, Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/daveu1983"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/david-underwood-6b929858"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
