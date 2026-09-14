import React from 'react';
import { GraduationCap, Calendar, Award, Building, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Academic Background
          </div>
          <h2
            id="education-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Education Timeline
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Formal academic journey showcasing consistent performance in STEM and computer technology.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting spine line */}
          <div
            className={`absolute top-4 bottom-4 left-4 sm:left-1/2 -ml-px w-0.5 ${
              isDark ? 'bg-neutral-800' : 'bg-neutral-200'
            }`}
          />

          <div className="space-y-12 sm:space-y-14">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  id={`education-item-${idx}`}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-sm ${
                        idx === 0
                          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                          : isDark
                          ? 'border-neutral-700 bg-neutral-900 text-neutral-400'
                          : 'border-neutral-300 bg-white text-neutral-600'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card wrapper with responsive offset */}
                  <div
                    className={`pl-12 sm:pl-0 w-full sm:w-1/2 ${
                      isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto sm:text-left'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl border transition-all hover:border-emerald-500/40 shadow-xs ${
                        isDark
                          ? 'bg-neutral-900/50 border-neutral-800'
                          : 'bg-white border-neutral-200 shadow-neutral-100'
                      }`}
                    >
                      {/* Status / Period Tag */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono mb-3 ${
                          idx === 0
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : isDark
                            ? 'bg-neutral-800 text-neutral-300'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      {/* Degree Title */}
                      <h3
                        className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
                          isDark ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div
                        className={`flex items-center gap-1.5 text-sm font-medium mb-3 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        } ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}
                      >
                        <Building className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Score Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border my-2 ${
                          isDark
                            ? 'bg-neutral-950/80 border-neutral-800 text-emerald-400'
                            : 'bg-neutral-50 border-neutral-200 text-emerald-600'
                        }`}
                      >
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-medium">{item.scoreLabel}:</span>
                        <span className="text-sm font-bold font-mono">{item.score}</span>
                      </div>

                      {/* Status Note */}
                      <p
                        className={`text-xs mt-2 font-mono ${
                          isDark ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        {item.status}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-3 text-xs space-y-1.5 text-neutral-400 list-none">
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="leading-relaxed">
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
