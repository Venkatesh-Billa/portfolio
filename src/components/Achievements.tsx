import React from 'react';
import { Trophy, Rocket, Code2, Award, Calendar, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Achievements: React.FC = () => {
  const { isDark } = useTheme();

  const getAchievementIcon = (type: 'trophy' | 'rocket' | 'code') => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'rocket':
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Honors &amp; Recognition
          </div>
          <h2
            id="achievements-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Hackathons &amp; Competitions
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Competitive coding podium finishes, hackathons, and technical project exhibitions at Narsimha Reddy Engineering College.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((ach, idx) => (
            <div
              key={ach.id}
              id={`achievement-card-${ach.id}`}
              className={`p-6 sm:p-7 rounded-2xl border relative overflow-hidden transition-all hover:-translate-y-1 shadow-xs ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/40'
                  : 'bg-white border-neutral-200 hover:border-emerald-500/50 shadow-neutral-100'
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-0 right-0">
                  <div className="bg-amber-500/15 border-b border-l border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Top Honor</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${
                    ach.icon === 'trophy'
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : ach.icon === 'rocket'
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-cyan-500/10 border-cyan-500/30'
                  }`}
                >
                  {getAchievementIcon(ach.icon)}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-md border ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-800 text-neutral-400'
                          : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                      }`}
                    >
                      {ach.year}
                    </span>
                    <span className="text-xs font-semibold text-emerald-500">
                      {ach.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {ach.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm font-medium ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {ach.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
