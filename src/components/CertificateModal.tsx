import React from 'react';
import {
  X,
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Building2,
  Copy,
  Check,
} from 'lucide-react';
import { Certification } from '../types/portfolio';

interface CertificateModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  recipientName: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  isOpen,
  onClose,
  isDark,
  recipientName,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !certification) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certification.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden my-8 transition-all ${
          isDark
            ? 'bg-neutral-900 border-neutral-700 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Top Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-neutral-800 bg-neutral-950/60' : 'border-neutral-200 bg-neutral-50/80'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            <span className="font-heading font-semibold text-sm">
              Verified Credential Certificate
            </span>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark
                ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                : 'hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900'
            }`}
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Visual Document Preview */}
        <div className="p-6 sm:p-8 space-y-6">
          <div
            className={`relative p-8 sm:p-10 rounded-2xl border-4 border-double text-center transition-all ${
              isDark
                ? 'bg-neutral-950 border-yellow-500/40 text-neutral-100 shadow-[inset_0_0_40px_rgba(234,179,8,0.05)]'
                : 'bg-amber-50/20 border-yellow-500/50 text-neutral-900 shadow-[inset_0_0_40px_rgba(202,138,4,0.05)]'
            }`}
          >
            {/* Top Seal Badge */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 text-black flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <Award className="w-8 h-8" />
              </div>
            </div>

            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-yellow-500 block mb-1">
              Certificate of Completion & Professional Competency
            </span>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold max-w-xl mx-auto my-3">
              {certification.title}
            </h3>

            <p className="text-xs text-neutral-400 mb-6">
              This officially certifies that
            </p>

            <div className="inline-block border-b-2 border-yellow-400 pb-1 mb-6">
              <span className="text-xl sm:text-2xl font-heading font-bold text-yellow-400 tracking-wide">
                {recipientName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed mb-6">
              has successfully fulfilled all curriculum, technical examinations, and practical project assessments issued by{' '}
              <strong className={isDark ? 'text-white' : 'text-neutral-900'}>
                {certification.from}
              </strong>
              .
            </p>

            {/* Certificate Metadata strip */}
            <div className="pt-4 border-t border-yellow-500/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-xs">
              <div>
                <span className="block text-[10px] uppercase text-neutral-500 font-semibold">
                  Issuing Organization
                </span>
                <span className="font-semibold">{certification.from}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-neutral-500 font-semibold">
                  Issued Year
                </span>
                <span className="font-semibold tabular-nums">{certification.issuedYear}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] uppercase text-neutral-500 font-semibold">
                  Credential ID
                </span>
                <span className="font-mono text-yellow-400 text-[11px]">
                  {certification.credentialId}
                </span>
              </div>
            </div>
          </div>

          {/* Skills Covered in this Certification */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider block mb-2 text-neutral-400">
              Validated Competencies
            </span>
            <div className="flex flex-wrap gap-2">
              {certification.skillsCovered.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`text-xs px-2.5 py-1 rounded-md ${
                    isDark
                      ? 'bg-neutral-800 text-yellow-300'
                      : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                  }`}
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t ${
            isDark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyId}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                isDark
                  ? 'border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white'
                  : 'border-neutral-300 bg-white text-neutral-700 hover:text-neutral-900'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-yellow-400" />
                  <span>ID Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy ID</span>
                </>
              )}
            </button>

            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                isDark
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                  : 'bg-yellow-500 text-black hover:bg-yellow-400'
              }`}
            >
              <span>Open Issuer Verification</span>
              <ExternalLink className="w-3.5 h-3.5" />
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
