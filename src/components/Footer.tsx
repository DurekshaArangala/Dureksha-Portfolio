import React from 'react';
import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  BookOpen,
  Heart,
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface FooterProps {
  profile: ProfileInfo;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ profile, isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors ${
        isDark
          ? 'bg-black border-neutral-800/80 text-neutral-400'
          : 'bg-white border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Rights */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-yellow-400 text-black font-bold text-xs flex items-center justify-center">
                D
              </div>
              <span
                className={`font-heading font-bold text-base ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {profile.name}
              </span>
            </div>
            <p className="text-xs">
              I'm currently seeking internship opportunities · I'd love to contribute my skills, learn from industry professionals, and build impactful data-driven solutions.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-neutral-800 hover:border-yellow-400 hover:text-yellow-400'
                    : 'border-neutral-200 hover:border-yellow-500 hover:text-yellow-600'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-neutral-800 hover:border-yellow-400 hover:text-yellow-400'
                    : 'border-neutral-200 hover:border-yellow-500 hover:text-yellow-600'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-neutral-800 hover:border-yellow-400 hover:text-yellow-400'
                    : 'border-neutral-200 hover:border-yellow-500 hover:text-yellow-600'
                }`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={profile.medium}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-neutral-800 hover:border-yellow-400 hover:text-yellow-400'
                    : 'border-neutral-200 hover:border-yellow-500 hover:text-yellow-600'
                }`}
                aria-label="Medium"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>

            {/* Scroll To Top Button */}
            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-yellow-400 hover:border-yellow-400'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:text-yellow-700 hover:border-yellow-500'
              }`}
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className={`mt-8 pt-6 border-t text-center text-xs flex flex-col sm:flex-row items-center justify-between gap-2 ${
            isDark ? 'border-neutral-900 text-neutral-500' : 'border-neutral-100 text-neutral-400'
          }`}
        >
          <span>© {new Date().getFullYear()} Dureksha Arangala. All rights reserved.</span>
          <span className="flex items-center gap-1">
             Have an opportunity in mind? Let's connect!
          </span>
        </div>
      </div>
    </footer>
  );
};
