import React, { useState } from 'react';
import {
  Award,
  Building2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import { Certification } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

interface CertificationsSectionProps {
  certifications: Certification[];
  isDark: boolean;
  recipientName: string;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  isDark,
  recipientName,
}) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span
            className={`text-xs uppercase tracking-widest font-bold mb-2 ${
              isDark ? 'text-yellow-400' : 'text-yellow-600'
            }`}
          >
            Credentials & Recognitions
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Certifications
          </h2>
          <div
            className={`h-1 w-16 mt-3 rounded-full ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}
          />
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                isDark
                  ? 'bg-neutral-900/80 border-neutral-800 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/5'
                  : 'bg-white border-neutral-200 hover:border-yellow-500/50 hover:shadow-md'
              }`}
            >
              <div>
                {/* Top Badge & Issuer */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isDark ? 'bg-neutral-800 text-yellow-400' : 'bg-yellow-50 text-yellow-600'
                    }`}
                  >
                    <Award className="w-5 h-5" />
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-xs font-mono tabular-nums px-2.5 py-1 rounded-md ${
                      isDark ? 'bg-neutral-800/80 text-neutral-400' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.issuedYear}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-heading font-bold text-base sm:text-lg mb-2 leading-snug transition-colors ${
                    isDark ? 'text-white group-hover:text-yellow-400' : 'text-neutral-900 group-hover:text-yellow-700'
                  }`}
                >
                  {cert.title}
                </h3>

                {/* From (Issuing Body) */}
                <div className="flex items-center gap-1.5 text-xs font-medium mb-4">
                  <Building2
                    className={`w-3.5 h-3.5 ${
                      isDark ? 'text-yellow-400' : 'text-yellow-600'
                    }`}
                  />
                  <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                    From: <strong className="font-semibold">{cert.from}</strong>
                  </span>
                </div>

                {/* Credential ID */}
                <div
                  className={`p-2 rounded-lg text-[11px] font-mono mb-4 flex items-center justify-between ${
                    isDark ? 'bg-neutral-950 text-neutral-400' : 'bg-neutral-50 text-neutral-600'
                  }`}
                >
                  <span className="text-[10px] uppercase font-sans text-neutral-500">
                    Credential ID
                  </span>
                  <span className="font-semibold text-yellow-500">{cert.credentialId}</span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsCovered.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="text-[10px] text-neutral-500 self-center">
                      +{cert.skillsCovered.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Verify Credential Button (Opens Image of Certificate) */}
              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-neutral-800' : 'border-neutral-100'
                }`}
              >
                <button
                  onClick={() => setSelectedCert(cert)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    isDark
                      ? 'bg-neutral-800 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                      : 'bg-yellow-50 text-yellow-800 border border-yellow-200 hover:bg-yellow-500 hover:text-black'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Verify Credential & Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox / View Modal */}
      <CertificateModal
        certification={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        isDark={isDark}
        recipientName={recipientName}
      />
    </section>
  );
};
