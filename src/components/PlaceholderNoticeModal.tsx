import React from 'react';
import { X, Clock, AlertCircle, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface PlaceholderNoticeModalProps {
  isOpen: boolean;
  title: string;
  message?: string;
  onClose: () => void;
  onOpenConfig?: () => void;
}

export const PlaceholderNoticeModal: React.FC<PlaceholderNoticeModalProps> = ({
  isOpen,
  title,
  message,
  onClose,
  onOpenConfig,
}) => {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md p-6 rounded-2xl border shadow-2xl space-y-5 animate-in zoom-in-95 ${
          isDark
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`p-1.5 rounded-lg border transition-colors ${
              isDark
                ? 'border-neutral-800 bg-neutral-800/80 text-neutral-400 hover:text-white'
                : 'border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            {message ||
              'This resource is currently marked as a placeholder in the centralized configuration (`src/config/portfolioConfig.ts`).'}
          </p>
        </div>

        <div
          className={`p-3.5 rounded-xl border text-xs font-mono space-y-1 ${
            isDark ? 'bg-neutral-950 border-neutral-800 text-neutral-300' : 'bg-neutral-50 border-neutral-200 text-neutral-700'
          }`}
        >
          <div className="text-neutral-400 text-[11px] uppercase tracking-wider">Configuration Reference:</div>
          <div className="text-emerald-500 truncate">resume: "{portfolioConfig.resume}"</div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            Understood
          </button>

          {onOpenConfig && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConfig();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
            >
              <span>View Config</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
