import React from 'react';
import {
  Code,
  Layers,
  Brain,
  Binary,
  Cloud,
  Lightbulb,
  GraduationCap,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { statsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  const interests = [
    { name: 'Software Engineering', icon: Code, desc: 'Clean system architecture and design patterns' },
    { name: 'Full-Stack Development', icon: Layers, desc: 'Responsive web apps from database to UI' },
    { name: 'AI / ML', icon: Brain, desc: 'Predictive modeling, NLP & explainable systems' },
    { name: 'Data Structures & Algorithms', icon: Binary, desc: 'Optimized problem solving and complexity reduction' },
    { name: 'Cloud Computing', icon: Cloud, desc: 'Scalable infrastructure, VPCs & containerization' },
    { name: 'Problem Solving', icon: Lightbulb, desc: 'Structured algorithmic breakdown and logical analysis' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            About Me
          </div>
          <h2
            id="about-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Engineering Foundation &amp; Technical Focus
          </h2>
          <p
            className={`text-base sm:text-lg ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            A dedicated Information Technology undergraduate bridging software engineering principles with modern web stacks and applied machine learning.
          </p>
        </div>

        {/* Concise Factual Introduction */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border mb-12 shadow-sm ${
            isDark
              ? 'bg-neutral-900/60 border-neutral-800'
              : 'bg-white border-neutral-200 shadow-neutral-100'
          }`}
        >
          <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg leading-relaxed">
            <p className={isDark ? 'text-neutral-200' : 'text-neutral-700'}>
              I am <strong className="text-emerald-500 font-semibold">Billa Venkatesh</strong>, a B.Tech Information Technology student at <strong className={isDark ? 'text-white' : 'text-neutral-900'}>Narsimha Reddy Engineering College (NRCM)</strong>, graduating in 2027.
            </p>
            <p className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
              My engineering education revolves around practical software development, where I turn conceptual knowledge of Java, Python, and web frameworks into functional end-user applications. I am actively preparing for campus placements, software engineering internships, and product development opportunities.
            </p>
          </div>
        </div>

        {/* Academic & Progress Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className={`p-5 sm:p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/40'
                  : 'bg-white border-neutral-200 hover:border-emerald-500/50 shadow-xs'
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 mb-1 font-mono tracking-tight">
                {stat.value}
              </div>
              <div
                className={`text-sm font-semibold mb-1 ${
                  isDark ? 'text-neutral-200' : 'text-neutral-800'
                }`}
              >
                {stat.label}
              </div>
              <div
                className={`text-xs ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Areas of Interest */}
        <div className="space-y-6">
          <h3
            className={`text-xl font-bold tracking-tight text-center sm:text-left ${
              isDark ? 'text-neutral-200' : 'text-neutral-800'
            }`}
          >
            Key Domains of Focus
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interests.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  id={`interest-card-${idx}`}
                  className={`p-4 rounded-xl border flex items-start gap-3.5 transition-all ${
                    isDark
                      ? 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/70 hover:border-neutral-700'
                      : 'bg-white border-neutral-200 hover:bg-neutral-50/90 shadow-2xs'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-semibold mb-0.5 ${
                        isDark ? 'text-neutral-200' : 'text-neutral-800'
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {item.desc}
                    </p>
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
