'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu toggle

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-md backdrop-blur-md dark:bg-gray-900/80' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className={`text-lg font-bold hover:text-primary-dark dark:hover:text-primary-light transition-colors ${!isScrolled ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-200'}`}> {/* Conditional color */}
          Alexander Clarke {/* Update with your name/brand */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <Link href="/#projects" className={`hover:text-primary-dark dark:hover:text-primary-light transition-colors ${!isScrolled ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-200'}`}>Projects</Link> {/* Conditional color */}
          <Link href="/about" className={`hover:text-primary-dark dark:hover:text-primary-light transition-colors ${!isScrolled ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-200'}`}>About</Link> {/* Conditional color */}
          <Link href="/contact" className={`hover:text-primary-dark dark:hover:text-primary-light transition-colors ${!isScrolled ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-200'}`}>Contact</Link> {/* Conditional color */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            {/* {isMobileMenuOpen ? 'Close' : 'Menu'} */} {/* Placeholder text removed */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg dark:bg-gray-900 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/#projects" className="block py-2 text-black dark:text-white hover:text-primary-dark dark:hover:text-primary-light transition-colors" onClick={toggleMobileMenu}>Projects</Link> {/* Use pure black/white */}
            <Link href="/about" className="block py-2 text-black dark:text-white hover:text-primary-dark dark:hover:text-primary-light transition-colors" onClick={toggleMobileMenu}>About</Link> {/* Use pure black/white */}
            <Link href="/contact" className="block py-2 text-black dark:text-white hover:text-primary-dark dark:hover:text-primary-light transition-colors" onClick={toggleMobileMenu}>Contact</Link> {/* Use pure black/white */}
          </div>
        </div>
      )}
    </header>
  );
}