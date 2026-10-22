import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenCvModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Experiences', href: '#experiences', id: 'experiences' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-black/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40'
            : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/90 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Clean Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center text-black font-bold text-lg shadow-sm shadow-yellow-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading font-bold text-lg tracking-tight transition-colors ${
                isDark ? 'text-white group-hover:text-yellow-400' : 'text-neutral-900 group-hover:text-yellow-600'
              }`}
            >
              Dureksha Arangala
            </span>
          </div>
        </a>

        {/* Zone 2: 7 Nav links (Single-line, quiet typography) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? isDark
                      ? 'text-yellow-400 font-semibold'
                      : 'text-yellow-600 font-semibold'
                    : isDark
                    ? 'text-neutral-300 hover:text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      isDark ? 'bg-yellow-400' : 'bg-yellow-500'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions - Theme Toggle & CV Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Dark / Light Mode Switch */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-2.5 rounded-xl transition-all ${
              isDark
                ? 'bg-neutral-900 text-yellow-400 hover:bg-neutral-800 border border-neutral-800'
                : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-200'
            }`}
            title={isDark ? 'Toggle light mode (White & Yellow)' : 'Toggle dark mode (Black & Yellow)'}
          >
            {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
          </button>

         

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              isDark
                ? 'bg-neutral-900 text-neutral-200 hover:bg-neutral-800 border border-neutral-800'
                : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-200'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-6 py-6 space-y-3 transition-all ${
            isDark
              ? 'bg-black/95 border-neutral-800 text-neutral-200'
              : 'bg-white/95 border-neutral-200 text-neutral-800'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? isDark
                        ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
                        : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                      : isDark
                      ? 'hover:bg-neutral-900 text-neutral-300'
                      : 'hover:bg-neutral-100 text-neutral-700'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </div>

          
        </div>
      )}
    </header>
  );
};
