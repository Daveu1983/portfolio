// components/sections/Contact.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/daveu1983',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/david-underwood-6b929858',
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 max-w-6xl mx-auto border-t border-bg-border">
      <p className="font-mono text-accent-purple text-xs tracking-widest uppercase mb-4">
        03. Contact
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        Get in touch
      </h2>

      <div className="flex flex-wrap gap-6">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors group"
          >
            <Icon
              size={18}
              className="group-hover:text-accent-blue transition-colors"
            />
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
