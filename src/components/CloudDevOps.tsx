import React from 'react';
import { Cloud, Server, Shield, Network, Box, ArrowUpRight, Cpu } from 'lucide-react';
import { cloudDevOpsTopics } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const CloudDevOps: React.FC = () => {
  const { isDark } = useTheme();

  const getTopicIcon = (topic: string) => {
    switch (topic.toLowerCase()) {
      case 'cloud fundamentals':
        return <Cloud className="w-4 h-4 text-cyan-400" />;
      case 'vpc':
      case 'subnets':
      case 'route tables':
        return <Network className="w-4 h-4 text-blue-400" />;
      case 'internet gateway':
        return <ArrowUpRight className="w-4 h-4 text-emerald-400" />;
      case 'security groups':
        return <Shield className="w-4 h-4 text-amber-400" />;
      case 'docker':
      case 'containerization':
        return <Box className="w-4 h-4 text-indigo-400" />;
      default:
        return <Server className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="cloud-devops" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden shadow-md ${
            isDark
              ? 'bg-neutral-900/60 border-neutral-800'
              : 'bg-white border-neutral-200 shadow-neutral-100'
          }`}
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            {/* Required Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-wide uppercase border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <Cloud className="w-3.5 h-3.5" />
              <span>Infrastructure Roadmap</span>
            </div>

            <h2
              id="cloud-devops-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Currently Expanding My Cloud &amp; DevOps Skills
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Building a strong understanding of modern cloud networking, isolated virtual private clouds (VPC), automated container workflows, and reproducible application deployment environments.
            </p>

            {/* Cloud & DevOps Topics Chips Grid */}
            <div className="pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cloudDevOpsTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    id={`cloud-topic-${idx}`}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 transition-all hover:border-cyan-500/40 ${
                      isDark
                        ? 'bg-neutral-950/80 border-neutral-800 text-neutral-200'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <div className="shrink-0">{getTopicIcon(topic)}</div>
                    <span className="text-xs font-mono font-medium truncate">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`pt-4 border-t text-xs font-mono flex flex-wrap items-center justify-between gap-2 ${
                isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
              }`}
            >
              <span>Architecture Paradigm: Isolated Subnets &amp; Microservice Containers</span>
              <span className="text-cyan-400">Continuous Learning Track</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
