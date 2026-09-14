import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { ProjectData } from '../types';
import { portfolioConfig, isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectLinks = portfolioConfig.projects[project.key] || {
    github: '',
    demo: '',
  };

  const githubUrl = getActiveUrl(projectLinks.github);
  const demoUrl = getActiveUrl(projectLinks.demo);

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden transition-all animate-in zoom-in-95 duration-200 ${
          isDark
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b sticky top-0 z-20 ${
            isDark ? 'bg-neutral-900/95 border-neutral-800' : 'bg-white/95 border-neutral-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Project Case Study</span>
            </span>
            <span className="hidden sm:inline text-xs text-neutral-400 font-mono">
              ID: {project.key}
            </span>
          </div>

          <button
            type="button"
            id="close-project-modal-btn"
            onClick={onClose}
            className={`p-1.5 rounded-lg border transition-colors ${
              isDark
                ? 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700'
                : 'border-neutral-300 bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
            }`}
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Subtitle Banner */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {project.category.map((cat, cIdx) => (
                <span
                  key={cIdx}
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h2
              id="case-study-title"
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm sm:text-base font-medium text-emerald-500">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-neutral-700/60 bg-neutral-800/40 text-neutral-400 cursor-not-allowed"
              >
                <Github className="w-4 h-4 opacity-50" />
                <span>GitHub (Coming Soon)</span>
              </button>
            )}

            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-neutral-700/60 bg-neutral-800/40 text-neutral-400 cursor-not-allowed"
              >
                <ExternalLink className="w-4 h-4 opacity-50" />
                <span>Demo (Coming Soon)</span>
              </button>
            )}
          </div>

          {/* 1. Overview */}
          <section className="space-y-2">
            <h3 className="text-base font-bold flex items-center gap-2 text-emerald-500">
              <Sparkles className="w-4 h-4" />
              <span>Project Overview</span>
            </h3>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {project.caseStudy.overview}
            </p>
          </section>

          {/* 2. Problem & Solution Split Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 sm:p-5 rounded-xl border ${
                isDark
                  ? 'bg-neutral-950/60 border-neutral-800'
                  : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {project.caseStudy.problem}
              </p>
            </div>

            <div
              className={`p-4 sm:p-5 rounded-xl border ${
                isDark
                  ? 'bg-neutral-950/60 border-neutral-800'
                  : 'bg-neutral-50 border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* 3. System Architecture */}
          <section className="space-y-3">
            <h3 className="text-base font-bold flex items-center gap-2 text-emerald-500">
              <Layers className="w-4 h-4" />
              <span>System Architecture &amp; Workflow</span>
            </h3>

            {/* Visual Step-by-Step Flow Pipeline */}
            {project.architecture && project.architecture.length > 0 && (
              <div
                className={`p-4 rounded-xl border overflow-x-auto ${
                  isDark ? 'bg-neutral-950/80 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <div className="flex items-center gap-2 min-w-max py-2">
                  {project.architecture.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className="flex flex-col items-center">
                        <div
                          className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold transition-all ${
                            isDark
                              ? 'bg-neutral-900 border-neutral-700 text-emerald-400'
                              : 'bg-white border-neutral-300 text-emerald-700 shadow-2xs'
                          }`}
                        >
                          {step}
                        </div>
                      </div>
                      {sIdx < (project.architecture?.length ?? 0) - 1 && (
                        <ArrowRight className="w-4 h-4 text-neutral-500 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {project.caseStudy.architectureDescription}
            </p>
          </section>

          {/* 4. Technologies Used */}
          <section className="space-y-2">
            <h3 className="text-base font-bold flex items-center gap-2 text-emerald-500">
              <Cpu className="w-4 h-4" />
              <span>Technologies &amp; Libraries</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                    isDark
                      ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                      : 'bg-white border-neutral-300 text-neutral-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 5. Key Features */}
          <section className="space-y-2">
            <h3 className="text-base font-bold flex items-center gap-2 text-emerald-500">
              <ShieldCheck className="w-4 h-4" />
              <span>Key Features</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {project.caseStudy.features.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className={`flex items-start gap-2 p-2.5 rounded-lg border ${
                    isDark
                      ? 'bg-neutral-950/40 border-neutral-800/80 text-neutral-300'
                      : 'bg-neutral-50/70 border-neutral-200 text-neutral-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Contribution */}
          <section className="space-y-2">
            <h3 className="text-base font-bold text-emerald-500">Individual Engineering Contribution</h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed p-4 rounded-xl border ${
                isDark
                  ? 'bg-neutral-950/50 border-neutral-800 text-neutral-300'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700'
              }`}
            >
              {project.caseStudy.contribution}
            </p>
          </section>

          {/* 7. Challenges & Solutions */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-emerald-500">Challenges &amp; Technical Mitigations</h3>
            <div className="space-y-3">
              {project.caseStudy.challenges.map((ch, cIdx) => (
                <div
                  key={cIdx}
                  className={`p-3.5 rounded-xl border space-y-1.5 ${
                    isDark
                      ? 'bg-neutral-950/60 border-neutral-800'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                    <span>Challenge {cIdx + 1}:</span>
                    <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{ch}</span>
                  </div>
                  <div className="text-xs font-medium text-emerald-400 flex items-start gap-1.5 pt-1 border-t border-neutral-800/40">
                    <span className="shrink-0">Mitigation:</span>
                    <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>
                      {project.caseStudy.solutions[cIdx] || 'Engineered modular defensive logic.'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Future Improvements */}
          <section className="space-y-2">
            <h3 className="text-base font-bold flex items-center gap-2 text-emerald-500">
              <Lightbulb className="w-4 h-4" />
              <span>Future Improvements</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm list-disc pl-5">
              {project.caseStudy.futureImprovements.map((imp, iIdx) => (
                <li
                  key={iIdx}
                  className={isDark ? 'text-neutral-300' : 'text-neutral-700'}
                >
                  {imp}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Modal Footer */}
        <div
          className={`px-6 py-4 border-t flex items-center justify-between ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
          }`}
        >
          <div className="text-xs font-mono text-neutral-400">
            Press <kbd className="px-1.5 py-0.5 rounded border border-neutral-700 bg-neutral-900 text-[10px]">Esc</kbd> to close
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
