import React from 'react';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from 'lucide-react';
import { ProfileInfo, Experience, EducationItem, SkillGroup } from '../types/portfolio';

interface CvModalProps {
  profile: ProfileInfo;
  experiences: Experience[];
  education: EducationItem[];
  skillGroups: SkillGroup[];
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const CvModal: React.FC<CvModalProps> = ({
  profile,
  experiences,
  education,
  skillGroups,
  isOpen,
  onClose,
  isDark,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden my-6 transition-all ${
          isDark
            ? 'bg-neutral-900 border-neutral-700 text-neutral-100'
            : 'bg-white border-neutral-300 text-neutral-900'
        }`}
      >
        {/* Modal Toolbar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-100'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm">
              Curriculum Vitae Document Preview
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-yellow-400 text-black font-semibold">
              PDF Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                isDark
                  ? 'border-neutral-700 hover:bg-neutral-800 text-neutral-200'
                  : 'border-neutral-300 hover:bg-neutral-200 text-neutral-700'
              }`}
              title="Print CV or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors ${
                isDark
                  ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                  : 'hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900'
              }`}
              aria-label="Close CV dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 bg-white text-neutral-900 print:p-0 print:max-h-none print:overflow-visible">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b-2 border-neutral-900">
            <div>
              <h1 className="text-3xl font-heading font-black tracking-tight text-neutral-950 uppercase">
                {profile.name}
              </h1>
              <p className="text-base font-semibold text-yellow-600 mt-0.5">
                {profile.role}
              </p>
              <p className="text-xs text-neutral-600 mt-1 max-w-xl">
                {profile.shortBio}
              </p>
            </div>

            <div className="space-y-1 text-xs text-neutral-600 font-medium sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{profile.email}</span>
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{profile.phone}</span>
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <span>{profile.location}</span>
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              </div>
              <div className="flex items-center sm:justify-end gap-2 pt-1">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  LinkedIn
                </a>
                <span>·</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-neutral-900 hover:underline">
                  GitHub
                </a>
                <span>·</span>
                <a href={profile.medium} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                  Medium
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-neutral-200">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-yellow-600" />
              <span>Education</span>
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-neutral-900">{edu.degree}</h3>
                    <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-neutral-600 mb-1.5">
                    <span>{edu.institution}</span>
                    <span className="font-semibold text-yellow-700">{edu.grade}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-600 space-y-0.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="py-6 border-b border-neutral-200">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-yellow-600" />
              <span>Experience</span>
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-neutral-900">{exp.role}</h3>
                    <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-yellow-700 font-semibold mb-1">
                    <span>{exp.company}</span>
                    <span className="text-neutral-500 font-normal">{exp.location}</span>
                  </div>
                  <p className="text-xs text-neutral-600 mb-2">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-neutral-600 space-y-0.5 mb-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 text-[10px] text-neutral-600">
                    <span className="font-semibold">Technologies:</span>
                    <span>{exp.skills.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical & Soft Skills */}
          <div className="py-6 border-b border-neutral-200">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <span>Technical & Professional Competencies</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillGroups.map((group) => (
                <div key={group.id} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold block text-neutral-900 mb-1">{group.title}</span>
                  <p className="text-neutral-600">
                    {group.skills.map((s) => `${s.name} (${s.percentage}%)`).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Portfolio Highlights */}
          <div className="pt-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-yellow-600" />
              <span>Notable Achievements & Credentials</span>
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Certified in AWS Machine Learning Specialty, DeepLearning.AI Specializations, and TensorFlow Developer. Winner of multiple national AI and Machine Learning hackathons with continuous contributions to open-source PyTorch and NLP frameworks.
            </p>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${
            isDark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
          }`}
        >
          <span className="text-xs text-neutral-400">
            Document generated directly from verified candidate profile
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download & Print</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium border border-neutral-700 text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
