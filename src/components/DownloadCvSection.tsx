import React, { useState } from 'react';
import {
  Download,
  FileText,
  Linkedin,
  Github,
  CheckCircle,
  Eye,
  Printer,
  Sparkles,
  Award,
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface DownloadCvSectionProps {
  profile: ProfileInfo;
  isDark: boolean;
  onOpenCvModal: () => void;
}

export const DownloadCvSection: React.FC<DownloadCvSectionProps> = ({
  profile,
  isDark,
  onOpenCvModal,
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPdf = () => {
    setDownloading(true);
    // Simulate generation and open formatted printable resume
    setTimeout(() => {
      setDownloading(false);
      onOpenCvModal();
    }, 500);
  };

  return (
    <section
      id="cv-section"
      className={`py-20 lg:py-28 transition-colors ${
        isDark ? 'bg-neutral-950' : 'bg-neutral-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span
            className={`text-xs uppercase tracking-widest font-bold mb-2 ${
              isDark ? 'text-yellow-400' : 'text-yellow-600'
            }`}
          >
            Curriculum Vitae & Dossier
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Curriculum Vitae
          </h2>
          <div
            className={`h-1 w-16 mt-3 rounded-full ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}
          />
        </div>

        {/* Main Grid: Side Photo/Mockup of CV + Description & Actions */}
        <div
          className={`rounded-3xl border overflow-hidden p-8 sm:p-12 lg:p-14 ${
            isDark
              ? 'bg-neutral-900/90 border-neutral-800 shadow-2xl'
              : 'bg-white border-neutral-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Side: Display Side Photo / Realistic Document Mockup of CV */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={onOpenCvModal}
                className={`relative w-full max-w-sm rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group shadow-2xl ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 hover:border-yellow-400/50 text-neutral-100'
                    : 'bg-white border-neutral-200 hover:border-yellow-500/60 text-neutral-900'
                }`}
                title="Click to expand full CV document"
              >
                {/* Simulated CV Document Header */}
                <div className="flex items-start gap-4 pb-4 border-b border-yellow-500/30">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shrink-0">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base">{profile.name}</h3>
                    <p className="text-[11px] font-semibold text-yellow-500">
                      AI & Machine Learning Engineer
                    </p>
                    <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
                      {profile.email}
                    </p>
                  </div>
                </div>

                {/* Simulated CV Content Rows */}
                <div className="py-4 space-y-3 text-[11px]">
                  <div>
                    <span className="block font-semibold uppercase text-[9px] tracking-wider text-yellow-500">
                      Summary
                    </span>
                    <p className="text-[10px] text-neutral-400 line-clamp-2 mt-0.5">
                      Results-driven AI & ML Engineer with proven expertise in PyTorch, computer vision, LLM architectures, and scalable big data streaming.
                    </p>
                  </div>

                  <div>
                    <span className="block font-semibold uppercase text-[9px] tracking-wider text-yellow-500">
                      Education
                    </span>
                    <p className="font-medium text-[10px]">
                      B.Sc. (Hons) AI & Computer Systems · First Class Honours
                    </p>
                    <p className="text-[9px] text-neutral-400">G.C.E. Advanced Level · 3 As Distinction</p>
                  </div>

                  <div>
                    <span className="block font-semibold uppercase text-[9px] tracking-wider text-yellow-500">
                      Core Stack
                    </span>
                    <p className="text-[10px] font-mono text-neutral-400">
                      Python · PyTorch · SQL · Spark · FastAPI · Docker · AWS
                    </p>
                  </div>

                  <div>
                    <span className="block font-semibold uppercase text-[9px] tracking-wider text-yellow-500">
                      Certifications
                    </span>
                    <p className="text-[10px] text-neutral-400">
                      AWS Machine Learning Specialty · DeepLearning.AI · TF Developer
                    </p>
                  </div>
                </div>

                {/* Expand Hover Badge */}
                <div className="pt-3 border-t border-neutral-800 dark:border-neutral-800 flex items-center justify-between text-[11px] text-yellow-400 font-semibold group-hover:underline">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to View Full 2-Page CV</span>
                  </span>
                  <span>PDF Preview</span>
                </div>
              </div>
            </div>

            {/* Right Side: Small Description, Download Button & Social Connect Links */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span
                  className={`text-xs uppercase tracking-wider font-semibold block mb-2 ${
                    isDark ? 'text-yellow-400' : 'text-yellow-600'
                  }`}
                >
                  Verified Professional Profile
                </span>
                <h3
                  className={`text-2xl sm:text-3xl font-heading font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  Looking for My Complete Technical Profile?
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  Download my comprehensive curriculum vitae to explore in-depth details of my academic background, production machine learning deployments, research publications, hackathon awards, and engineering credentials.
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div
                  className={`flex items-center gap-2 text-xs ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <span>Comprehensive Project Case Studies</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-xs ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <span>Verified Credentials & Issuers</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-xs ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <span>Production Tech Stack & Tools</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-xs ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                  <span>Clean ATS-Friendly Standard Format</span>
                </div>
              </div>

              {/* Action Buttons: Download CV button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownloadPdf}
                  disabled={downloading}
                  className={`px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg active:scale-95 ${
                    isDark
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-yellow-500/20'
                      : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-yellow-600/20'
                  }`}
                >
                  <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                  <span>{downloading ? 'Preparing Document...' : 'Download CV (PDF)'}</span>
                </button>

                <button
                  onClick={onOpenCvModal}
                  className={`px-5 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border transition-all ${
                    isDark
                      ? 'border-neutral-700 bg-neutral-900 text-white hover:border-yellow-400 hover:text-yellow-400'
                      : 'border-neutral-300 bg-white text-neutral-900 hover:border-yellow-500 hover:text-yellow-700'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Interactive Full View</span>
                </button>
              </div>

              {/* Under the button: Connect Directly via LinkedIn, GitHub as explicitly requested */}
              <div
                className={`pt-6 border-t ${
                  isDark ? 'border-neutral-800' : 'border-neutral-200'
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-wider font-semibold block mb-3 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}
                >
                  Connect Directly With Me
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {/* LinkedIn direct button */}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'bg-neutral-900 border-neutral-700 text-white hover:border-yellow-400 hover:text-yellow-400'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-800 hover:border-yellow-500 hover:text-yellow-800'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  {/* GitHub direct button */}
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'bg-neutral-900 border-neutral-700 text-white hover:border-yellow-400 hover:text-yellow-400'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-800 hover:border-yellow-500 hover:text-yellow-800'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
