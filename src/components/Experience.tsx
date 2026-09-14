import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Work Experience
          </div>
          <h2
            id="experience-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Internships &amp; Practical Training
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Factual record of technical internships, structured industry curricula, and hands-on software development milestones.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              id={`experience-card-${idx}`}
              className={`p-6 sm:p-8 rounded-2xl border transition-all hover:border-emerald-500/40 shadow-xs ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-neutral-100'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-base font-semibold text-emerald-500">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800'
                        : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.period}</span>
                  </span>

                  {exp.location && (
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-800'
                          : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Factual Summary */}
              <p
                className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                {exp.factualSummary}
              </p>

              {/* Key Technical Focus Areas */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Core Engagement Focus:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {exp.keyFocus.map((focus, fIdx) => (
                    <li
                      key={fIdx}
                      className={`flex items-start gap-2 p-2.5 rounded-lg border ${
                        isDark
                          ? 'bg-neutral-950/50 border-neutral-800/80 text-neutral-300'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
