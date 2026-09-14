import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Brain,
  Database,
  Wrench,
  Cloud,
  Check,
  Search,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'tool':
        return <Wrench className="w-5 h-5 text-rose-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (!searchTerm.trim()) return cat;
    const term = searchTerm.toLowerCase();
    const matchingSkills = cat.skills.filter(s => s.toLowerCase().includes(term));
    const titleMatch = cat.title.toLowerCase().includes(term);
    return {
      ...cat,
      skills: titleMatch ? cat.skills : matchingSkills,
      matches: titleMatch || matchingSkills.length > 0,
    };
  }).filter(cat => !searchTerm.trim() || cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Technical Stack
          </div>
          <h2
            id="skills-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Categorized Technical Skills
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Core tools, frameworks, and programming languages applied across academic coursework and software projects.
          </p>
        </div>

        {/* Quick Search & Filter Input */}
        <div className="max-w-md mx-auto mb-10">
          <div
            className={`relative flex items-center rounded-xl border px-3.5 py-2.5 transition-colors ${
              isDark
                ? 'bg-neutral-900/60 border-neutral-800 focus-within:border-emerald-500/60'
                : 'bg-white border-neutral-200 focus-within:border-emerald-500 shadow-2xs'
            }`}
          >
            <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
            <input
              type="text"
              id="skills-search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Filter by technology (e.g. Java, Docker, React)..."
              className={`w-full bg-transparent text-sm focus:outline-hidden ${
                isDark ? 'text-white placeholder-neutral-500' : 'text-neutral-900 placeholder-neutral-400'
              }`}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs text-neutral-400 hover:text-neutral-200 ml-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div
              key={category.title}
              id={`skill-category-${idx}`}
              className={`p-6 rounded-2xl border transition-all hover:border-emerald-500/40 shadow-xs flex flex-col justify-between ${
                isDark
                  ? 'bg-neutral-900/40 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-neutral-100'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3
                      className={`text-base font-bold ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {category.title}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Chips / Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const isMatched =
                      searchTerm.trim() &&
                      skill.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          isMatched
                            ? 'bg-emerald-500 text-white border-emerald-400 font-semibold'
                            : isDark
                            ? 'bg-neutral-950/70 border-neutral-800 text-neutral-200 hover:border-neutral-700 hover:text-white'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-800 hover:border-neutral-300'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="whitespace-nowrap">{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Verified Competency Footnote */}
              <div
                className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center justify-between ${
                  isDark
                    ? 'border-neutral-800/80 text-neutral-400'
                    : 'border-neutral-200 text-neutral-500'
                }`}
              >
                <span>Demonstrated in Projects</span>
                <span className="text-emerald-500 font-semibold">Practical Mastery</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
