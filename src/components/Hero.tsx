import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal as TerminalIcon,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Briefcase,
} from 'lucide-react';
import { portfolioConfig, isPlaceholderUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResumeNotice: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeNotice }) => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  const terminalContent = `> whoami
Billa Venkatesh

> role
B.Tech IT Student
Full-Stack Developer
AI/ML Enthusiast

> currently_learning
Java + DSA
Cloud Computing
Docker

> goal
Become a Software Engineer`;

  const handleCopyTerminal = () => {
    navigator.clipboard.writeText(terminalContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (isPlaceholderUrl(portfolioConfig.resume)) {
      e.preventDefault();
      onOpenResumeNotice();
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? 'bg-emerald-500' : 'bg-emerald-300'
          }`}
        />
        <div
          className={`absolute top-1/2 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 ${
            isDark ? 'bg-cyan-500' : 'bg-cyan-300'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-wide transition-all shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className={isDark ? 'text-emerald-300' : 'text-emerald-800'}>
                Open to Internships &amp; Software Engineering Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1
                id="hero-name-heading"
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {portfolioConfig.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-emerald-500">
                B.Tech Information Technology | Full-Stack Developer | AI/ML Enthusiast
              </p>
            </div>

            {/* Description Statement */}
            <blockquote
              className={`text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 pl-4 italic ${
                isDark
                  ? 'text-neutral-300 border-emerald-500/50'
                  : 'text-neutral-700 border-emerald-500/70'
              }`}
            >
              Building practical software solutions using Java, Python, Full-Stack Development, AI/ML, and modern web technologies.
            </blockquote>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-download-resume-btn"
                href={isPlaceholderUrl(portfolioConfig.resume) ? '#resume' : portfolioConfig.resume}
                onClick={handleResumeClick}
                target={isPlaceholderUrl(portfolioConfig.resume) ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200'
                    : 'border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-xs'
                }`}
              >
                <Download className="w-4 h-4 text-emerald-500" />
                <span>Download Resume</span>
              </a>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900 text-neutral-300 hover:text-white'
                    : 'border-neutral-200 bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 hover:text-neutral-900'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Verified Profiles */}
            <div className="pt-2 flex items-center gap-4">
              <span className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Connect:
              </span>

              {/* GitHub */}
              <a
                id="hero-github-link"
                href={portfolioConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isDark
                    ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-neutral-700'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:text-black hover:border-neutral-400 shadow-xs'
                }`}
                title="View GitHub Profile"
              >
                <Github className="w-4 h-4 text-emerald-500" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                id="hero-linkedin-link"
                href={portfolioConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isDark
                    ? 'border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-white hover:border-neutral-700'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:text-black hover:border-neutral-400 shadow-xs'
                }`}
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Interactive Terminal */}
          <div className="lg:col-span-5">
            <div
              id="hero-terminal-card"
              className={`rounded-2xl border shadow-xl overflow-hidden transition-all ${
                isDark
                  ? 'bg-neutral-950/90 border-neutral-800/90 shadow-black/40'
                  : 'bg-neutral-900 text-neutral-100 border-neutral-800 shadow-neutral-400/20'
              }`}
            >
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-neutral-400">
                    venkatesh@nrcm:~
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCopyTerminal}
                    className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors text-xs flex items-center gap-1 font-mono"
                    title="Copy terminal commands"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-4 select-text">
                <div>
                  <span className="text-emerald-400 font-semibold">&gt; whoami</span>
                  <p className="text-neutral-200 mt-1 pl-3 font-medium">Billa Venkatesh</p>
                </div>

                <div>
                  <span className="text-emerald-400 font-semibold">&gt; role</span>
                  <div className="text-neutral-300 mt-1 pl-3 space-y-0.5">
                    <p>B.Tech IT Student</p>
                    <p>Full-Stack Developer</p>
                    <p>AI/ML Enthusiast</p>
                  </div>
                </div>

                <div>
                  <span className="text-emerald-400 font-semibold">&gt; currently_learning</span>
                  <div className="text-neutral-300 mt-1 pl-3 space-y-0.5">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Java + DSA
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Cloud Computing
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      Docker
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-emerald-400 font-semibold">&gt; goal</span>
                  <p className="text-emerald-300 mt-1 pl-3 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Become a Software Engineer
                  </p>
                </div>

                {/* Animated blinking cursor */}
                <div className="pt-2 flex items-center gap-2 text-neutral-500 font-mono text-xs">
                  <span className="text-emerald-400">&gt;</span>
                  <span className="animate-pulse inline-block w-2 h-4 bg-emerald-400" />
                </div>
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2 bg-neutral-950/60 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Branch: main (Clean)</span>
                <span className="text-emerald-400">Status: Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
