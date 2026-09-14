import React from 'react';
import {
  Binary,
  Coffee,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Terminal,
  Layers,
} from 'lucide-react';
import { dsaTopics, javaTopics, preparationStages } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const DsaPrep: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="dsa-prep" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Interview Readiness
          </div>
          <h2
            id="dsa-prep-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            DSA &amp; Java Engineering Preparation
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Structured study roadmap tracking data structures, algorithmic complexity, and core Java language mechanics.
          </p>
        </div>

        {/* Conceptual Progression Pipeline (Learning → Practicing → Building → Interview Ready) */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border mb-12 shadow-xs ${
            isDark
              ? 'bg-neutral-900/50 border-neutral-800'
              : 'bg-white border-neutral-200 shadow-neutral-100'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3
                className={`text-lg font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Conceptual Preparation Pipeline
              </h3>
              <p className="text-xs font-mono text-emerald-500">
                Methodical progression roadmap without false claims of instant mastery
              </p>
            </div>
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border self-start ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
            >
              Current Phase: Practicing &amp; Building
            </span>
          </div>

          {/* Pipeline Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {preparationStages.map((stage, sIdx) => (
              <div
                key={stage.step}
                className={`p-4 rounded-xl border relative transition-all ${
                  stage.current
                    ? 'border-emerald-500 bg-emerald-500/10 shadow-sm'
                    : stage.done
                    ? isDark
                      ? 'border-neutral-800 bg-neutral-950/60'
                      : 'border-neutral-200 bg-neutral-50'
                    : isDark
                    ? 'border-neutral-800/60 bg-neutral-950/30 opacity-70'
                    : 'border-neutral-200/60 bg-neutral-50/50 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {stage.step}
                  </span>
                  {stage.done ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Completed</span>
                    </span>
                  ) : stage.current ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold animate-pulse">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Active Focus</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-neutral-400">
                      Upcoming
                    </span>
                  )}
                </div>

                <div
                  className={`text-base font-bold mb-1 ${
                    stage.current
                      ? 'text-emerald-400'
                      : isDark
                      ? 'text-white'
                      : 'text-neutral-900'
                  }`}
                >
                  {stage.title}
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DSA & Java Topic Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DSA Card */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between shadow-xs ${
              isDark
                ? 'bg-neutral-900/50 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-neutral-100'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  <Binary className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    Data Structures &amp; Algorithms
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    Analytical problem solving &amp; Big-O optimization
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {dsaTopics.map((topic, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800 text-neutral-200 hover:border-emerald-500/40'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:border-emerald-500/40'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`mt-6 pt-4 border-t text-xs font-mono flex items-center justify-between ${
                isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
              }`}
            >
              <span>Focus: LeetCode &amp; Contest Patterns</span>
              <span className="text-emerald-500">Active Repetitions</span>
            </div>
          </div>

          {/* Java Card */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between shadow-xs ${
              isDark
                ? 'bg-neutral-900/50 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-neutral-100'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    Core Java &amp; Modern Language Features
                  </h3>
                  <p className="text-xs font-mono text-neutral-400">
                    Object orientation, memory model &amp; multithreading
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {javaTopics.map((topic, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800 text-neutral-200 hover:border-amber-500/40'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:border-amber-500/40'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{topic}</span>
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`mt-6 pt-4 border-t text-xs font-mono flex items-center justify-between ${
                isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
              }`}
            >
              <span>Standard: Java 8+ / SE Specifications</span>
              <span className="text-amber-500 font-semibold">Core Proficiency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
