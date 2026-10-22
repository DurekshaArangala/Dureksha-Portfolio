import React, { useState } from 'react';
import {
  Code2,
  BrainCircuit,
  Database,
  Cpu,
  HeartHandshake,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { SkillGroup } from '../types/portfolio';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skillGroups,
  isDark,
}) => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'soft'>('all');

  const filteredGroups = skillGroups.filter((group) => {
    if (filter === 'all') return true;
    return group.type === filter;
  });

  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'core-languages':
        return <Code2 className="w-5 h-5 text-yellow-400" />;
      case 'ml-deeplearning':
        return <BrainCircuit className="w-5 h-5 text-yellow-400" />;
      case 'bigdata-cloud':
        return <Database className="w-5 h-5 text-yellow-400" />;
      case 'deployment-apis':
        return <Cpu className="w-5 h-5 text-yellow-400" />;
      case 'soft-leadership':
        return <HeartHandshake className="w-5 h-5 text-yellow-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span
              className={`text-xs uppercase tracking-widest font-bold mb-2 block ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`}
            >
              Capabilities & Mastery
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Skills & Expertise
            </h2>
            <div
              className={`h-1 w-16 mt-3 rounded-full ${
                isDark ? 'bg-yellow-400' : 'bg-yellow-500'
              }`}
            />
          </div>

          {/* Segmented Filter Control (Allowed functional buttons as per frontend-design) */}
          <div
            className={`inline-flex p-1.5 rounded-xl border ${
              isDark
                ? 'bg-neutral-900/90 border-neutral-800'
                : 'bg-neutral-100 border-neutral-200'
            }`}
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'all'
                  ? isDark
                    ? 'bg-yellow-400 text-black shadow-sm'
                    : 'bg-yellow-500 text-black shadow-sm'
                  : isDark
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setFilter('technical')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'technical'
                  ? isDark
                    ? 'bg-yellow-400 text-black shadow-sm'
                    : 'bg-yellow-500 text-black shadow-sm'
                  : isDark
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setFilter('soft')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                filter === 'soft'
                  ? isDark
                    ? 'bg-yellow-400 text-black shadow-sm'
                    : 'bg-yellow-500 text-black shadow-sm'
                  : isDark
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const isLanguagesCard = group.id === 'core-languages';
            return (
              <div
                key={group.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between ${
                  isLanguagesCard
                    ? isDark
                      ? 'bg-neutral-900 border-yellow-400/40 shadow-lg shadow-yellow-500/5'
                      : 'bg-white border-yellow-400 shadow-md shadow-yellow-500/10'
                    : isDark
                    ? 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${
                          isDark ? 'bg-neutral-800' : 'bg-yellow-50'
                        }`}
                      >
                        {getGroupIcon(group.id)}
                      </div>
                      <div>
                        <span
                          className={`text-xs uppercase tracking-wider block font-medium ${
                            isDark ? 'text-yellow-400' : 'text-yellow-600'
                          }`}
                        >
                          {group.categoryLabel}
                        </span>
                        <h3
                          className={`font-heading font-bold text-base sm:text-lg ${
                            isDark ? 'text-white' : 'text-neutral-900'
                          }`}
                        >
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    {group.highlightBadge && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          isDark
                            ? 'bg-neutral-800 text-yellow-300 border border-neutral-700'
                            : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                        }`}
                      >
                        {group.highlightBadge}
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs mb-6 leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {group.description}
                  </p>

                  {/* Skills with percentage and attractive progress bars */}
                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span
                            className={
                              isDark ? 'text-neutral-200' : 'text-neutral-800'
                            }
                          >
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[11px] font-mono tabular-nums font-bold ${
                                isDark ? 'text-yellow-400' : 'text-yellow-600'
                              }`}
                            >
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>

                        {/* Attractive Visual Progress Bar */}
                        <div
                          className={`h-2 w-full rounded-full overflow-hidden ${
                            isDark ? 'bg-neutral-800' : 'bg-neutral-200'
                          }`}
                        >
                          <div
                            className={`h-full rounded-full transition-all duration-700 ease-out ${
                              isDark
                                ? 'bg-gradient-to-r from-yellow-500 to-amber-300 shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                                : 'bg-gradient-to-r from-yellow-600 to-amber-400'
                            }`}
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>

                        <div className="flex justify-end">
                          <span
                            className={`text-[10px] ${
                              isDark ? 'text-neutral-500' : 'text-neutral-500'
                            }`}
                          >
                            {skill.levelText}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag for Core Languages Card */}
                {isLanguagesCard && (
                  <div
                    className={`mt-6 pt-4 border-t text-[11px] flex items-center justify-between ${
                      isDark
                        ? 'border-neutral-800 text-yellow-400/90'
                        : 'border-yellow-100 text-yellow-700'
                    }`}
                  >
                    <span>Python · SQL · R Core Triad</span>
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
