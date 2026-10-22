/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DownloadCvSection } from './components/DownloadCvSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import {
  initialProfile,
  aboutStats,
  educationList,
  skillGroups,
  projectList,
  certificationsList,
  experienceList,
  volunteerList,
} from './data/portfolioData';

export default function App() {
  // Theme state: dark mode (black & yellow) by default, or light mode (white & yellow)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode with black and yellow
  });

  // Profile data
  const profile = initialProfile;

  // CV Modal state
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Sync dark mode class on <html> document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
      document.body.className = 'bg-black text-neutral-100 antialiased selection:bg-yellow-400 selection:text-black';
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
      document.body.className = 'bg-white text-neutral-900 antialiased selection:bg-yellow-500 selection:text-black';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDark ? 'bg-black text-neutral-100' : 'bg-white text-neutral-900'
      }`}
    >
      {/* Fixed Sticky Navigation Bar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Homepage / Hero Section */}
        <HeroSection
          profile={profile}
          isDark={isDark}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onScrollToContact={scrollToContact}
        />

        {/* 2. About Me Section (Paragraphs, Metrics Cards & Education Cards) */}
        <AboutSection
          profile={profile}
          stats={aboutStats}
          education={educationList}
          isDark={isDark}
        />

        {/* 3. Skills Section (Separate visual cards, percentages, languages card, tech & soft) */}
        <SkillsSection
          skillGroups={skillGroups}
          isDark={isDark}
        />

        {/* 4. Projects Section (Filter buttons: All, ML, Deep Learning, AI, Big Data + Read More Modal) */}
        <ProjectsSection
          projects={projectList}
          isDark={isDark}
        />

        {/* 5. Certifications Section (Cards with Title, From, Issued Year, Verify Credential Modal) */}
        <CertificationsSection
          certifications={certificationsList}
          isDark={isDark}
          recipientName={profile.name}
        />

        {/* 6. Experience & Volunteering (Work cards & Volunteer cards with highlighted skills in sub-left corner) */}
        <ExperienceSection
          experiences={experienceList}
          volunteers={volunteerList}
          isDark={isDark}
        />

        {/* 7. Download CV Section (Side photo/mockup of CV, description, download button, LinkedIn & GitHub direct links) */}
        <DownloadCvSection
          profile={profile}
          isDark={isDark}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 8. Connect Me / Let's Talk Section (Email, LinkedIn, GitHub, Phone cards, Find Me More cards, and Message Form) */}
        <ContactSection
          profile={profile}
          isDark={isDark}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} isDark={isDark} />

      {/* Interactive CV Full-Page Preview & Print Modal */}
      <CvModal
        profile={profile}
        experiences={experienceList}
        education={educationList}
        skillGroups={skillGroups}
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
