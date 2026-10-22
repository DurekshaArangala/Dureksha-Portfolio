import React from 'react';
import {
  GraduationCap,
  Award,
  Layers,
  Trophy,
  Users,
  Calendar,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { ProfileInfo, StatItem, EducationItem } from '../types/portfolio';

interface AboutSectionProps {
  profile: ProfileInfo;
  stats: StatItem[];
  education: EducationItem[];
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  stats,
  education,
  isDark,
}) => {
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <Layers className="w-5 h-5 text-yellow-400" />;
      case 'achievements':
        return <Award className="w-5 h-5 text-yellow-400" />;
      case 'hackathons':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-yellow-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-yellow-400" />;
    }
  };

  return (
    <section
      id="about"
      className={`py-20 lg:py-28 transition-colors ${
        isDark ? 'bg-neutral-950/60' : 'bg-neutral-50/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span
            className={`text-xs uppercase tracking-widest font-bold mb-2 ${
              isDark ? 'text-yellow-400' : 'text-yellow-600'
            }`}
          >
            Get To Know Me
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            About Me
          </h2>
          <div
            className={`h-1 w-16 mt-3 rounded-full ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}
          />
        </div>

        {/* Top Grid: Bio (Left) & Metrics (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: 2 or 3 Paragraphs */}
          <div className="lg:col-span-7 space-y-5">
            {profile.fullBioParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                {para}
              </p>
            ))}

            <div
              className={`pt-4 border-t ${
                isDark ? 'border-neutral-800' : 'border-neutral-200'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span
                    className={`text-xs uppercase tracking-wider block font-medium ${
                      isDark ? 'text-neutral-500' : 'text-neutral-500'
                    }`}
                  >
                    Current Focus
                  </span>
                  <span
                    className={`font-medium ${
                      isDark ? 'text-neutral-200' : 'text-neutral-800'
                    }`}
                  >
                    Seeking Internship Opportunities
                  </span>
                </div>
                <div>
                  <span
                    className={`text-xs uppercase tracking-wider block font-medium ${
                      isDark ? 'text-neutral-500' : 'text-neutral-500'
                    }`}
                  >
                    Location
                  </span>
                  <span
                    className={`font-medium ${
                      isDark ? 'text-neutral-200' : 'text-neutral-800'
                    }`}
                  >
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Number of Total Projects, Achievements/Certs, Hackathons, Leadership as Separate Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-neutral-900/90 border-neutral-800 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/5'
                    : 'bg-white border-neutral-200 hover:border-yellow-500/60 hover:shadow-md hover:shadow-yellow-500/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-xl ${
                      isDark ? 'bg-neutral-800' : 'bg-yellow-50'
                    }`}
                  >
                    {getStatIcon(stat.id)}
                  </div>
                  <span
                    className={`text-3xl font-heading font-extrabold tracking-tight tabular-nums ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
                <h3
                  className={`font-heading font-semibold text-sm ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {stat.label}
                </h3>
                <p
                  className={`text-xs mt-1 leading-snug line-clamp-2 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Background Section: Separate Cards for Undergraduate and A/L */}
        <div className="mt-14 pt-12 border-t border-neutral-800/60 dark:border-neutral-800/60">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <h3
              className={`text-xl sm:text-2xl font-heading font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Educational Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 hover:border-yellow-400/40'
                    : 'bg-white border-neutral-200 hover:border-yellow-500/50 hover:shadow-sm'
                }`}
              >
                {/* Level Indicator Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-lg ${
                      isDark
                        ? 'bg-yellow-400/10 text-yellow-300 border border-yellow-400/20'
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}
                  >
                    {edu.level}
                  </span>
                  <div
                    className={`flex items-center gap-1.5 text-xs font-medium ${
                      isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h4
                  className={`text-lg font-heading font-bold mb-1 ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {edu.degree}
                </h4>
                <div
                  className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {edu.institution}
                </div>

                {/* Grade / Honor */}
                <div
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-4 ${
                    isDark
                      ? 'bg-neutral-800 text-yellow-400'
                      : 'bg-yellow-50 text-yellow-700 border border-yellow-200/60'
                  }`}
                >
                  {edu.grade}
                </div>

                {/* Key Highlights */}
                <ul className="space-y-2 mt-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className={`text-xs sm:text-sm flex items-start gap-2 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      <span className={`font-bold mt-0.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        ›
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
