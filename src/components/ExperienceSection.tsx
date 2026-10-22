import React, { useState } from 'react';
import {
  Briefcase,
  Heart,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  Image as ImageIcon,
  X,
  ChevronRight,
} from 'lucide-react';
import { Experience, VolunteerRole } from '../types/portfolio';

interface ExperienceSectionProps {
  experiences: Experience[];
  volunteers: VolunteerRole[];
  isDark: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  volunteers,
  isDark,
}) => {
  const [activePhoto, setActivePhoto] = useState<{ url: string; caption: string } | null>(null);

  return (
    <section
      id="experiences"
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
            Track Record & Community
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Experience & Volunteering
          </h2>
          <div
            className={`h-1 w-16 mt-3 rounded-full ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}
          />
        </div>

        {/* Part 1: Professional Experience Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <h3
              className={`text-xl sm:text-2xl font-heading font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Professional Work Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Period & Location */}
                  <div className="flex items-center justify-between text-xs mb-3 text-neutral-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h4
                    className={`text-lg font-heading font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {exp.role}
                  </h4>
                  <div
                    className={`text-sm font-semibold mb-4 ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}
                  >
                    {exp.company}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isDark ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className={`text-xs flex items-start gap-2 ${
                          isDark ? 'text-neutral-400' : 'text-neutral-600'
                        }`}
                      >
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isDark ? 'text-yellow-400' : 'text-yellow-600'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div
                  className={`pt-4 border-t flex flex-wrap gap-1.5 ${
                    isDark ? 'border-neutral-800' : 'border-neutral-100'
                  }`}
                >
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Volunteering Section (Separate Cards for each volunteer, with skill highlighted in sub-left corner, title, small description, photos via link) */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Heart className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
            <h3
              className={`text-xl sm:text-2xl font-heading font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Volunteering & Community Leadership
            </h3>
          </div>
          <p
            className={`text-xs sm:text-sm mb-6 ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Dedicated to empowering next-generation engineers, open source ecosystems, and technology education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteers.map((vol) => (
              <div
                key={vol.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative ${
                  isDark
                    ? 'bg-neutral-900/80 border-neutral-800 hover:border-yellow-400/40 hover:shadow-lg'
                    : 'bg-white border-neutral-200 hover:border-yellow-500/50 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar: Organization & Period */}
                  <div className="flex items-center justify-between text-xs mb-3 text-neutral-400">
                    <span className="font-semibold text-neutral-300 dark:text-neutral-300 line-clamp-1">
                      {vol.organization}
                    </span>
                    <span className="font-mono tabular-nums shrink-0 ml-2">{vol.period}</span>
                  </div>

                  {/* Title */}
                  <h4
                    className={`text-base sm:text-lg font-heading font-bold mb-2.5 transition-colors ${
                      isDark ? 'text-white group-hover:text-yellow-400' : 'text-neutral-900 group-hover:text-yellow-700'
                    }`}
                  >
                    {vol.title}
                  </h4>

                  {/* Small Description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {vol.description}
                  </p>

                  {/* Event Photos (Via Link / Thumbnails with Lightbox) */}
                  <div className="mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider block mb-2 text-neutral-500">
                      Activity Gallery & Proof Photos
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {vol.photos.map((photo, pIdx) => (
                        <div
                          key={pIdx}
                          onClick={() => setActivePhoto(photo)}
                          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group/photo border border-neutral-700/50"
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/photo:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                            <ImageIcon className="w-4 h-4 text-yellow-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub-Left Corner Highlighted Skill as explicitly requested */}
                <div
                  className={`pt-4 border-t flex items-center justify-between gap-3 ${
                    isDark ? 'border-neutral-800' : 'border-neutral-100'
                  }`}
                >
                  {/* Highlighted Skill in Sub Left Corner */}
                  <div
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm ${
                      isDark
                        ? 'bg-yellow-400/15 border border-yellow-400/30 text-yellow-300'
                        : 'bg-yellow-100 border border-yellow-300 text-yellow-800'
                    }`}
                  >
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span className="truncate">{vol.highlightedSkill}</span>
                  </div>

                  {/* External Community Link */}
                  {vol.externalLink && (
                    <a
                      href={vol.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 rounded-lg text-neutral-400 hover:text-yellow-400 transition-colors ${
                        isDark ? 'hover:bg-neutral-800' : 'hover:bg-neutral-100'
                      }`}
                      title="View Volunteer Event Community Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-yellow-400 transition-colors z-10"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-xl overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption}
                referrerPolicy="no-referrer"
                className="w-full max-h-[70vh] object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-neutral-300">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
