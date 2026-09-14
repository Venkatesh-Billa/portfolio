import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Info,
  Filter,
  Film,
  ShieldAlert,
  Vote,
  Receipt,
  GraduationCap,
  Award,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectData } from '../types';
import { portfolioConfig, getActiveUrl, isPlaceholderUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface ProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

type FilterCategory =
  | 'All'
  | 'AI/ML'
  | 'Full Stack'
  | 'Java'
  | 'Python'
  | 'React'
  | 'Django'
  | 'MERN';

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filterOptions: FilterCategory[] = [
    'All',
    'AI/ML',
    'Full Stack',
    'Java',
    'Python',
    'React',
    'Django',
    'MERN',
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category.includes(activeFilter as any);
  });

  const getProjectIllustration = (key: string) => {
    switch (key) {
      case 'movieRecommendation':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-indigo-950/60 via-purple-900/30 to-neutral-950 flex flex-col justify-center items-center relative overflow-hidden p-4 group-hover:scale-102 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <Film className="w-12 h-12 text-indigo-400 mb-2 drop-shadow-md" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-mono">
              <span>Cosine Similarity Matrix</span>
            </div>
            <div className="mt-2 text-[11px] font-mono text-neutral-400">TMDB 5000 NLP Engine</div>
          </div>
        );
      case 'fraudShield':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-red-950/60 via-amber-950/30 to-neutral-950 flex flex-col justify-center items-center relative overflow-hidden p-4 group-hover:scale-102 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <ShieldAlert className="w-12 h-12 text-red-400 mb-2 drop-shadow-md" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-mono">
              <span>Explainable AI Risk Scoring</span>
            </div>
            <div className="mt-2 text-[11px] font-mono text-neutral-400">Supervised Anomaly Pipeline</div>
          </div>
        );
      case 'votingSystem':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-emerald-950/60 via-teal-950/30 to-neutral-950 flex flex-col justify-center items-center relative overflow-hidden p-4 group-hover:scale-102 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <Vote className="w-12 h-12 text-emerald-400 mb-2 drop-shadow-md" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-mono">
              <span>Biometric Face Verification</span>
            </div>
            <div className="mt-2 text-[11px] font-mono text-neutral-400">Django + Euclidean Embeddings</div>
          </div>
        );
      case 'invoiceSystem':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-blue-950/60 via-cyan-950/30 to-neutral-950 flex flex-col justify-center items-center relative overflow-hidden p-4 group-hover:scale-102 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <Receipt className="w-12 h-12 text-cyan-400 mb-2 drop-shadow-md" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-mono">
              <span>MERN Stack Architecture</span>
            </div>
            <div className="mt-2 text-[11px] font-mono text-neutral-400">JWT Auth + Billing CRUD</div>
          </div>
        );
      case 'studentManagement':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-950/60 via-orange-950/30 to-neutral-950 flex flex-col justify-center items-center relative overflow-hidden p-4 group-hover:scale-102 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <GraduationCap className="w-12 h-12 text-amber-400 mb-2 drop-shadow-md" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-mono">
              <span>Role-Based Dashboards</span>
            </div>
            <div className="mt-2 text-[11px] font-mono text-neutral-400">Django + Relational MySQL</div>
          </div>
        );
      case 'bragBoard':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-pink-950/60 via-purple-950/30 to-neutral-950 flex flex-col justify-center items-center relative overflow-hidden p-4 group-hover:scale-102 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <Award className="w-12 h-12 text-pink-400 mb-2 drop-shadow-md" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs font-mono">
              <span>Peer Recognition Feed</span>
            </div>
            <div className="mt-2 text-[11px] font-mono text-neutral-400">React.js + FastAPI Backend</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Showcase Portfolio
          </div>
          <h2
            id="projects-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Featured Software Projects
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Engineering practical systems across Machine Learning, Full-Stack Development, Authentication, and Enterprise Business Logic.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map(filter => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                id={`project-filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-white font-semibold shadow-sm'
                    : isDark
                    ? 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:text-neutral-900 shadow-2xs'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const configLinks = portfolioConfig.projects[project.key] || {
              github: '',
              demo: '',
            };
            const githubUrl = getActiveUrl(configLinks.github);
            const demoUrl = getActiveUrl(configLinks.demo);

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  isDark
                    ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/40 hover:shadow-black/40'
                    : 'bg-white border-neutral-200 hover:border-emerald-500/50 hover:shadow-neutral-200/60'
                }`}
              >
                <div>
                  {/* Visual Illustration */}
                  {getProjectIllustration(project.key)}

                  <div className="p-6 space-y-4">
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.category.map((cat, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        className={`text-xl font-bold tracking-tight mb-1 group-hover:text-emerald-500 transition-colors ${
                          isDark ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-mono text-emerald-400">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                            isDark
                              ? 'bg-neutral-950/80 border-neutral-800 text-neutral-300'
                              : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Features Bullet List (Preview) */}
                    <div className="pt-2 border-t border-neutral-800/40">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                        Core Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-neutral-400">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 mt-0.5">•</span>
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div
                  className={`p-6 pt-0 space-y-3 ${
                    isDark ? 'border-neutral-800/40' : 'border-neutral-200/40'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {/* GitHub Button */}
                    {githubUrl ? (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          isDark
                            ? 'border-neutral-700 bg-neutral-900 text-neutral-200 hover:bg-neutral-800 hover:text-white'
                            : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 shadow-2xs'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-800 bg-neutral-950 text-neutral-500 cursor-not-allowed opacity-75"
                        title="GitHub link placeholder in config"
                      >
                        <Github className="w-3.5 h-3.5 opacity-40" />
                        <span>Coming Soon</span>
                      </button>
                    )}

                    {/* Live Demo Button */}
                    {demoUrl ? (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-neutral-800 bg-neutral-950 text-neutral-500 cursor-not-allowed opacity-75"
                        title="Demo link placeholder in config"
                      >
                        <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                        <span>Demo Soon</span>
                      </button>
                    )}
                  </div>

                  {/* View Case Study Details Button */}
                  <button
                    type="button"
                    id={`view-details-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className={`w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'border-neutral-800 bg-neutral-950/60 hover:bg-neutral-800 text-emerald-400'
                        : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-emerald-700'
                    }`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
