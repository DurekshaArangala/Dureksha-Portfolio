import React, { useState } from 'react';
import {
  Github,
  ArrowRight,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: Project[];
  isDark: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  isDark,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'ML',
    'Deep Learning',
    'AI',
    'Big Data',
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section
      id="projects"
      className={`py-20 lg:py-28 transition-colors ${
        isDark ? 'bg-neutral-950/70' : 'bg-neutral-50/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <span
            className={`text-xs uppercase tracking-widest font-bold mb-2 ${
              isDark ? 'text-yellow-400' : 'text-yellow-600'
            }`}
          >
            ProjectPortfolio
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`h-1 w-16 mt-3 rounded-full ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}
          />
        </div>

        {/* Filter Buttons as requested: All, ML, Deep Learning, AI, Big Data */}
        <div className="mb-12 flex flex-wrap items-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? isDark
                      ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-500/20'
                      : 'bg-yellow-500 text-black shadow-md shadow-yellow-600/20'
                    : isDark
                    ? 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-yellow-400/40 hover:text-white'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-yellow-500/60 hover:text-neutral-900'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive
                      ? 'bg-black/20 text-black'
                      : isDark
                      ? 'bg-neutral-800 text-neutral-400'
                      : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-neutral-900 border-neutral-800 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/5'
                  : 'bg-white border-neutral-200 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10'
              }`}
            >
              <div>
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Tag Overlay */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-md ${
                        isDark
                          ? 'bg-black/80 text-yellow-300 border border-neutral-700'
                          : 'bg-white/90 text-yellow-800 border border-yellow-200'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Quick GitHub Icon Link Overlay */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 rounded-lg bg-black/75 hover:bg-black text-white hover:text-yellow-400 transition-colors shadow-md"
                    title="View GitHub Repository"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-lg mb-2.5 transition-colors line-clamp-2 ${
                      isDark
                        ? 'text-white group-hover:text-yellow-400'
                        : 'text-neutral-900 group-hover:text-yellow-700'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Tools and Languages Used */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {project.tools.slice(0, 4).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          isDark
                            ? 'bg-neutral-800/80 text-neutral-300'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span
                        className={`text-[11px] ${
                          isDark ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        +{project.tools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Small Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Actions: Read More & GitHub logo button */}
              <div
                className={`p-5 px-6 border-t flex items-center justify-between gap-4 ${
                  isDark ? 'border-neutral-800 bg-neutral-900/60' : 'border-neutral-100 bg-neutral-50/60'
                }`}
              >
                {/* Read More Link / Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-all group/btn ${
                    isDark
                      ? 'text-yellow-400 hover:text-yellow-300'
                      : 'text-yellow-600 hover:text-yellow-700'
                  }`}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {/* GitHub logo button with direct repository link */}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    isDark
                      ? 'bg-neutral-800 border-neutral-700 text-neutral-200 hover:border-yellow-400 hover:text-yellow-400'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:border-yellow-500 hover:text-yellow-700'
                  }`}
                  title="View GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
};
