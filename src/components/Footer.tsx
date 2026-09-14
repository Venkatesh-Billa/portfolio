import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Heart, ArrowUp, Terminal } from 'lucide-react';
import { portfolioConfig, isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const emailUrl = isPlaceholderUrl(portfolioConfig.email)
    ? '#contact'
    : `mailto:${portfolioConfig.email}`;
  const whatsappUrl = isPlaceholderUrl(portfolioConfig.whatsapp)
    ? '#contact'
    : portfolioConfig.whatsapp;

  return (
    <footer
      id="main-footer"
      className={`border-t relative z-10 transition-colors ${
        isDark ? 'bg-neutral-950 border-neutral-800/80 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-neutral-800/40">
          {/* Column 1: Identity */}
          <div className="md:col-span-7 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <h3
                className={`text-xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {portfolioConfig.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-medium text-emerald-500">
              B.Tech Information Technology | Full-Stack Developer | AI/ML Enthusiast
            </p>
            <p className="text-xs text-neutral-400 max-w-lg">
              Narsimha Reddy Engineering College (NRCM), Class of 2027. Open for campus placements and technical internship roles.
            </p>
          </div>

          {/* Column 2: Social Links */}
          <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-3">
            {/* GitHub */}
            <a
              id="footer-github-link"
              href={portfolioConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-black hover:border-neutral-300'
              }`}
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              id="footer-linkedin-link"
              href={portfolioConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-blue-400 hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-blue-600 hover:border-neutral-300'
              }`}
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              id="footer-email-link"
              href={emailUrl}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-emerald-400 hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-emerald-600 hover:border-neutral-300'
              }`}
              title="Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              id="footer-whatsapp-link"
              href={whatsappUrl}
              target={isPlaceholderUrl(portfolioConfig.whatsapp) ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-teal-400 hover:border-neutral-700'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:text-teal-600 hover:border-neutral-300'
              }`}
              title="WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-black'
              }`}
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 Billa Venkatesh. Built with passion for technology.</p>
          <p className="flex items-center gap-1 text-neutral-400">
            <span>Crafted with React, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
