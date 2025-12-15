// components/Header.tsx
'use client'; // Required for useState

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-lighter border-b border-gray-200">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          MyPortfolio
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center md:hidden">
            <ul className="flex flex-col space-y-8 text-center">
              <li><Link href="/" className="text-2xl hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              {/* Add other links here */}
            </ul>
          </nav>
        )}

        {/* Desktop Navigation (to be styled in T009) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-secondary">Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}