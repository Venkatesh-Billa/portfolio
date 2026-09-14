import React from 'react';
import { Award, ExternalLink, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { portfolioConfig, isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface CertificationsProps {
  onOpenNotice: (title: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenNotice }) => {
  const { isDark } = useTheme();

  const handleCertificateClick = (e: React.MouseEvent, title: string, url: string) => {
    if (isPlaceholderUrl(url)) {
      e.preventDefault();
      onOpenNotice(title);
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Credentials
          </div>
          <h2
            id="certifications-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Certifications &amp; Accreditations
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Verified technical coursework assessments validating core programming and computer science proficiencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const isPlaceholder = isPlaceholderUrl(cert.credentialUrl);
            const activeUrl = getActiveUrl(cert.credentialUrl);

            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xs ${
                  isDark
                    ? 'bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/40'
                    : 'bg-white border-neutral-200 hover:border-emerald-500/50 shadow-neutral-100'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Year */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 bg-neutral-900/40 px-2.5 py-1 rounded-md border border-neutral-800">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{cert.year}</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3
                      className={`text-lg font-bold tracking-tight mb-1 ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </p>
                  </div>

                  {/* Validated Skills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                          isDark
                            ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate CTA Button */}
                <div className="mt-6 pt-4 border-t border-neutral-800/60">
                  {activeUrl ? (
                    <a
                      href={activeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={e => handleCertificateClick(e, cert.title, cert.credentialUrl)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                        isDark
                          ? 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-neutral-200'
                          : 'border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      <span>View Certificate</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Config Pending
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
