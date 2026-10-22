import React from 'react';
import {
  Download,
  Mail,
  Linkedin,
  Github,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface HeroSectionProps {
  profile: ProfileInfo;
  isDark: boolean;
  onOpenCvModal: () => void;
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  isDark,
  onOpenCvModal,
  onScrollToContact,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none -z-10 ${
          isDark ? 'bg-yellow-500/10' : 'bg-yellow-300/25'
        }`}
      />
      <div
        className={`absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none -z-10 ${
          isDark ? 'bg-amber-600/10' : 'bg-amber-200/30'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography, Highlights & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Highlighted "Available for Work" Pill Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isDark
                  ? 'bg-neutral-900 border border-yellow-400/30 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.2)]'
                  : 'bg-yellow-50 border border-yellow-300 text-yellow-800 shadow-[0_0_12px_rgba(202,138,4,0.15)]'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
              </span>
              <span>Open to Work</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <span
                className={`text-base sm:text-lg font-medium tracking-tight ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                Hi, I'm
              </span>
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.08] ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}
                style={{ textWrap: 'balance' }}
              >
                <span className="relative inline-block">
                  {profile.name}
                  <span
                    className={`block h-1.5 w-full mt-1 rounded-full ${
                      isDark ? 'bg-yellow-400' : 'bg-yellow-500'
                    }`}
                  />
                </span>
              </h1>
            </div>

            {/* Small Title */}
            <div className="flex items-center gap-2">
              <span
                className={`text-lg sm:text-xl font-heading font-semibold ${
                  isDark ? 'text-yellow-400' : 'text-yellow-600'
                }`}
              >
                {profile.role}
              </span>
            </div>

            {/* Short Paragraph */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              {profile.shortBio}
            </p>

            {/* Action Buttons: Download CV and Contact Me */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Download CV Button */}
              <button
                onClick={onOpenCvModal}
                className={`group px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 shadow-lg ${
                  isDark
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-yellow-400/20'
                    : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-yellow-500/25'
                }`}
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download CV</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={onScrollToContact}
                className={`group px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 border ${
                  isDark
                    ? 'bg-neutral-900 text-white border-neutral-700 hover:border-yellow-400 hover:text-yellow-400'
                    : 'bg-white text-neutral-900 border-neutral-300 hover:border-yellow-600 hover:text-yellow-700'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust highlights */}
            <div
              className={`pt-4 flex flex-wrap items-center gap-4 text-xs ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span>Data Science & Machine Learning</span>
              </div>
              <span className="opacity-40">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span>Deep Learning & AI</span>
              </div>
              <span className="opacity-40">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                <span>Big Data Analytics</span>
              </div>
            </div>
      
          </div>

          {/* Right Column: Visual Photo in Circular Frame with Professional Animation & Connect Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* Circular Frame with Animated Rings and Glow */}
            <div className="relative group">
              {/* Spinning/pulsing ambient glow gradient ring */}
              <div
                className={`absolute -inset-3 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse ${
                  isDark
                    ? 'bg-gradient-to-tr from-yellow-500 via-amber-400 to-yellow-200'
                    : 'bg-gradient-to-tr from-yellow-400 via-amber-300 to-yellow-500'
                }`}
              />

              {/* Decorative dashed outer boundary ring */}
              <div className="absolute -inset-2 rounded-full border border-yellow-400/50 border-dashed animate-[spin_24s_linear_infinite]" />

              {/* Main Circular Image Container */}
              <div
                className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden p-1.5 transition-transform duration-500 group-hover:scale-[1.02] ${
                  isDark ? 'bg-neutral-950 border-2 border-yellow-400' : 'bg-white border-2 border-yellow-500'
                }`}
              >
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Tech Tag Badge on Photo */}
              <div
                className={`absolute -bottom-2 -right-2 px-3 py-1.5 rounded-xl border text-xs font-semibold shadow-lg flex items-center gap-1.5 ${
                  isDark
                    ? 'bg-neutral-900/90 backdrop-blur-md border-yellow-400/40 text-yellow-300'
                    : 'bg-white/95 backdrop-blur-md border-yellow-300 text-yellow-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Seeking Internship opportunities</span>
              </div>
            </div>

            {/* Under the photo: Connect via LinkedIn, GitHub, Email, Medium Display Buttons */}
            <div className="mt-8 flex flex-col items-center space-y-3">
              <span
                className={`text-xs uppercase tracking-wider font-semibold ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                Connect With Me
              </span>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-200 hover:text-yellow-400 hover:border-yellow-400 hover:bg-neutral-850'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-50/50'
                  }`}
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#e6e8eb]" />
                
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-200 hover:text-yellow-400 hover:border-yellow-400 hover:bg-neutral-850'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-50/50'
                  }`}
                  title="Visit GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                 
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-200 hover:text-yellow-400 hover:border-yellow-400 hover:bg-neutral-850'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-50/50'
                  }`}
                  title="Send Direct Email"
                >
                   <Mail className="w-4 h-4 text-[#e6e8eb]" />
                  
                </a>

                {/* Medium */}
                <a
                  href={profile.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    isDark
                      ? 'bg-neutral-900 border-neutral-800 text-neutral-200 hover:text-yellow-400 hover:border-yellow-400 hover:bg-neutral-850'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-50/50'
                  }`}
                  title="Read Articles on Medium"
                  
                >
                  <BookOpen className="w-4 h-4 text-[#e6e8eb]" />
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
