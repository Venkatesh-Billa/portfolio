import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  ExternalLink,
  FileText,
  Briefcase,
  Code2,
  Terminal,
  Settings,
} from 'lucide-react';
import { portfolioConfig, isPlaceholderUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResumeNotice: () => void;
  onOpenConfigModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeNotice, onOpenConfigModal }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Coding', href: '#coding' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (isPlaceholderUrl(portfolioConfig.resume)) {
      e.preventDefault();
      onOpenResumeNotice();
    }
  };

  return (
    <header
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-md shadow-neutral-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="flex items-center gap-2 group font-mono text-base font-semibold tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="flex items-center gap-1">
              <span className={isDark ? 'text-white' : 'text-neutral-900'}>BV</span>
              <span className="text-emerald-500 font-bold">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? isDark
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-emerald-700 bg-emerald-50 font-semibold'
                      : isDark
                      ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Theme Toggle */}
            <button
              type="button"
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:bg-neutral-800'
                  : 'border-neutral-200 bg-neutral-100/70 text-neutral-700 hover:text-black hover:bg-neutral-200'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle visual theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* Config Inspector Tooltip/Modal */}
            <button
              type="button"
              id="open-config-btn"
              onClick={onOpenConfigModal}
              className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:text-emerald-400 hover:border-emerald-500/40'
                  : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:text-emerald-700 hover:border-emerald-400'
              }`}
              title="Inspect Centralized Global Configuration"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Config</span>
            </button>

            {/* View Projects CTA */}
            <a
              id="nav-view-projects-btn"
              href="#projects"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isDark
                  ? 'border-neutral-700/80 bg-neutral-900 text-neutral-200 hover:border-neutral-600 hover:bg-neutral-800'
                  : 'border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 shadow-xs'
              }`}
            >
              View Projects
            </a>

            {/* Download Resume CTA */}
            <a
              id="nav-download-resume-btn"
              href={isPlaceholderUrl(portfolioConfig.resume) ? '#resume' : portfolioConfig.resume}
              onClick={handleResumeClick}
              target={isPlaceholderUrl(portfolioConfig.resume) ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'border-neutral-800 text-neutral-300'
                  : 'border-neutral-200 text-neutral-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-black'
              }`}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className={`xl:hidden border-b px-4 pt-3 pb-6 space-y-3 ${
            isDark
              ? 'bg-neutral-950/95 border-neutral-800 backdrop-blur-xl'
              : 'bg-white/95 border-neutral-200 backdrop-blur-xl'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isDark
                    ? 'text-neutral-300 hover:bg-neutral-900 hover:text-emerald-400'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/40 flex flex-col gap-2">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-medium border border-neutral-700 bg-neutral-900 text-neutral-200"
            >
              View Projects
            </a>
            <a
              href={isPlaceholderUrl(portfolioConfig.resume) ? '#resume' : portfolioConfig.resume}
              onClick={e => {
                handleResumeClick(e);
                setMobileMenuOpen(false);
              }}
              target={isPlaceholderUrl(portfolioConfig.resume) ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
