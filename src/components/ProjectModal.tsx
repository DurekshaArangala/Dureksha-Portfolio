import React, { useState } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  Maximize2,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  isDark,
}) => {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoProgress, setDemoProgress] = useState(38);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog Container */}
      <div
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-all ${
          isDark
            ? 'bg-neutral-900 border-neutral-700 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-neutral-800 bg-neutral-950/60' : 'border-neutral-200 bg-neutral-50/80'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                isDark
                  ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                  : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
              }`}
            >
              {project.category}
            </span>
            <span
              className={`text-xs ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              Interactive Case Study & Walkthrough
            </span>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark
                ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                : 'hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900'
            }`}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Tools */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-medium mr-1 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                Stack:
              </span>
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-mono px-2 py-0.5 rounded ${
                    isDark
                      ? 'bg-neutral-800 text-yellow-300'
                      : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Live Demo Video Preview Player */}
          <div
            className={`rounded-xl overflow-hidden border ${
              isDark ? 'border-neutral-800 bg-black' : 'border-neutral-200 bg-neutral-900'
            }`}
          >
            <div className="relative aspect-video max-h-96 w-full overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isPlayingDemo ? 'opacity-85' : 'opacity-95'
                }`}
              />

              {/* Video Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 flex flex-col justify-between p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 text-xs text-yellow-400 font-mono">
                    <Activity className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                    <span>Live Demo Video</span>
                  </div>
                  <span className="text-xs text-neutral-300 font-mono">1080p · 60fps</span>
                </div>

                {/* Big Center Play / Pause Button */}
                <div className="self-center">
                  <button
                    onClick={() => setIsPlayingDemo(!isPlayingDemo)}
                    className="w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center hover:bg-yellow-300 transition-all hover:scale-110 shadow-lg shadow-yellow-500/30 active:scale-95"
                    aria-label={isPlayingDemo ? 'Pause video demo' : 'Play video demo'}
                  >
                    {isPlayingDemo ? (
                      <Pause className="w-7 h-7 fill-current" />
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </button>
                </div>

                {/* Video Player Scrubber & Controls */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-300 font-mono">
                    <span>
                      {isPlayingDemo ? '01:24' : '00:00'} / 03:45
                    </span>
                    <span>HD Simulation Engine</span>
                  </div>
                  {/* Progress bar */}
                  <div
                    className="h-1.5 w-full bg-neutral-700 rounded-full cursor-pointer overflow-hidden"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setDemoProgress(Math.min(100, Math.max(0, (clickX / rect.width) * 100)));
                    }}
                  >
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all"
                      style={{ width: `${isPlayingDemo ? 45 : demoProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Demo Direct Link Banner */}
            <div
              className={`p-3 px-6 text-xs flex flex-wrap items-center justify-between gap-3 border-t ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 text-neutral-400'
                  : 'bg-neutral-800 border-neutral-700 text-neutral-300'
              }`}
            >
              <span>Demo video preview recorded in high fidelity</span>
              <a
                href={project.videoDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Watch full screen on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-heading font-bold">Project Overview & Rationale</h3>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Notes */}
          <div
            className={`p-5 rounded-xl border ${
              isDark
                ? 'bg-neutral-950/70 border-neutral-800'
                : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-2 font-heading font-semibold text-sm">
              <Layers className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
              <span>System Architecture</span>
            </div>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {project.architectureNotes}
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-3">
              Performance Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    isDark
                      ? 'bg-neutral-950 border-neutral-800'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <span
                    className={`text-2xl font-heading font-extrabold tabular-nums block ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}
                  >
                    {m.value}
                  </span>
                  <span
                    className={`text-xs ${
                      isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-3">
              Core Capabilities & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
                    isDark
                      ? 'bg-neutral-950/40 border-neutral-800 text-neutral-300'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t ${
            isDark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* GitHub Repo */}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isDark
                  ? 'bg-neutral-900 border-neutral-700 text-white hover:border-yellow-400 hover:text-yellow-400'
                  : 'bg-white border-neutral-300 text-neutral-900 hover:border-yellow-500 hover:text-yellow-700'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>

            {/* Live Demo */}
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isDark
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-md shadow-yellow-500/20'
                  : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-sm'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
              isDark
                ? 'border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                : 'border-neutral-200 text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
