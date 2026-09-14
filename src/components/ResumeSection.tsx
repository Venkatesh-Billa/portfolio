import React from 'react';
import { FileText, Download, Eye, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioConfig, isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface ResumeSectionProps {
  onOpenNotice: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenNotice }) => {
  const { isDark } = useTheme();
  const isPlaceholder = isPlaceholderUrl(portfolioConfig.resume);
  const activeResumeUrl = getActiveUrl(portfolioConfig.resume);

  const handleClick = (e: React.MouseEvent) => {
    if (isPlaceholder) {
      e.preventDefault();
      onOpenNotice();
    }
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border text-center relative overflow-hidden shadow-xl ${
            isDark
              ? 'bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border-neutral-800'
              : 'bg-gradient-to-b from-white via-neutral-50 to-neutral-100 border-neutral-200 shadow-neutral-200/50'
          }`}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
              <FileText className="w-7 h-7" />
            </div>

            {/* Required CTA Header */}
            <h2
              id="resume-cta-heading"
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Want to know more about my technical journey?
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Review a detailed record of coursework in B.Tech Information Technology, hackathon accomplishments, software project repositories, and technical proficiencies.
            </p>

            {/* Resume Config Status Display */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-mono text-neutral-400">Config Path:</span>
              <span
                className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                  isDark
                    ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                    : 'bg-white border-neutral-300 text-neutral-700'
                }`}
              >
                {portfolioConfig.resume}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {activeResumeUrl ? (
                <>
                  <a
                    id="resume-view-btn"
                    href={activeResumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Resume</span>
                  </a>

                  <a
                    id="resume-download-btn"
                    href={activeResumeUrl}
                    download="Billa_Venkatesh_Resume.pdf"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:-translate-y-0.5 ${
                      isDark
                        ? 'border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white'
                        : 'border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 shadow-xs'
                    }`}
                  >
                    <Download className="w-4 h-4 text-emerald-500" />
                    <span>Download Resume</span>
                  </a>
                </>
              ) : (
                <div className="space-y-3 w-full flex flex-col items-center">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700/80 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Resume</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400">
                        Pending PDF
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleClick}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700/80 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400">
                        Pending PDF
                      </span>
                    </button>
                  </div>

                  {/* Explicit Placeholder Notice */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Resume coming soon (Configure your PDF in portfolioConfig.resume)</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
