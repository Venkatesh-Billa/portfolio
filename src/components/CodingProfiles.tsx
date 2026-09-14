import React from 'react';
import { Github, ExternalLink, Code2, Terminal, Shield, CheckCircle2, Clock } from 'lucide-react';
import { codingProfilesData } from '../data/portfolioData';
import { isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

export const CodingProfiles: React.FC = () => {
  const { isDark } = useTheme();

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-6 h-6 text-emerald-400" />;
      case 'leetcode':
        return <Code2 className="w-6 h-6 text-amber-400" />;
      case 'codechef':
        return <Terminal className="w-6 h-6 text-blue-400" />;
      case 'hackerrank':
        return <Shield className="w-6 h-6 text-teal-400" />;
      default:
        return <Code2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="coding" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Competitive &amp; Open Source
          </div>
          <h2
            id="coding-profiles-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Coding Profiles &amp; Handles
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Direct access to my code repositories and problem-solving handles. Real links only, with verified accounts marked active.
          </p>
        </div>

        {/* Coding Profiles Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfilesData.map((item, idx) => {
            const isPlaceholder = isPlaceholderUrl(item.url);
            const activeUrl = getActiveUrl(item.url);

            return (
              <div
                key={item.platform}
                id={`coding-profile-${item.platform.toLowerCase()}`}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs ${
                  isDark
                    ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/40'
                    : 'bg-white border-neutral-200 hover:border-emerald-500/50 shadow-neutral-100'
                }`}
              >
                <div>
                  {/* Card Header Icon & Platform */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                      {getPlatformIcon(item.platform)}
                    </div>
                    {activeUrl ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        <Clock className="w-3 h-3" />
                        <span>In Config</span>
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-1 ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {item.platform}
                  </h3>

                  {/* Username Display */}
                  <div className="font-mono text-xs text-emerald-500 mb-3">
                    {activeUrl ? `@${item.username}` : 'Handle pending configuration'}
                  </div>

                  {/* Focus Description */}
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {item.focus}
                  </p>
                </div>

                {/* Profile Link or Coming Soon State */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60">
                  {activeUrl ? (
                    <a
                      href={activeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white shadow-xs transition-colors"
                    >
                      <span>Visit {item.platform}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div
                      className={`w-full py-2.5 rounded-xl text-xs font-medium border text-center font-mono ${
                        isDark
                          ? 'border-neutral-800 bg-neutral-950/60 text-neutral-400'
                          : 'border-neutral-200 bg-neutral-50 text-neutral-600'
                      }`}
                    >
                      Profile link coming soon
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
