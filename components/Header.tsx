// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-surface border-b border-bg-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-mono text-accent-blue font-bold text-lg tracking-tight hover:text-text-primary transition-colors"
        >

        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-text-primary text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-muted hover:text-text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-bg-border bg-bg-surface px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-text-primary text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
