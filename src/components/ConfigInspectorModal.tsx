import React, { useState } from 'react';
import { X, Copy, Check, Settings, Code, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

interface ConfigInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigInspectorModal: React.FC<ConfigInspectorModalProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawConfigCode = `// Centralized Global Portfolio Configuration
// Located at: src/config/portfolioConfig.ts

const portfolioConfig = {
  name: "${portfolioConfig.name}",

  email: "${portfolioConfig.email}",

  phone: "${portfolioConfig.phone}",

  github: "${portfolioConfig.github}",

  linkedin: "${portfolioConfig.linkedin}",

  leetcode: "${portfolioConfig.leetcode}",

  codechef: "${portfolioConfig.codechef}",

  hackerrank: "${portfolioConfig.hackerrank}",

  resume: "${portfolioConfig.resume}",

  whatsapp:
    "${portfolioConfig.whatsapp}",

  projects: {
    movieRecommendation: {
      github: "${portfolioConfig.projects.movieRecommendation.github}",
      demo: "${portfolioConfig.projects.movieRecommendation.demo}"
    },

    fraudShield: {
      github: "${portfolioConfig.projects.fraudShield.github}",
      demo: "${portfolioConfig.projects.fraudShield.demo}"
    },

    votingSystem: {
      github: "${portfolioConfig.projects.votingSystem.github}",
      demo: "${portfolioConfig.projects.votingSystem.demo}"
    },

    invoiceSystem: {
      github: "${portfolioConfig.projects.invoiceSystem.github}",
      demo: "${portfolioConfig.projects.invoiceSystem.demo}"
    },

    studentManagement: {
      github: "${portfolioConfig.projects.studentManagement.github}",
      demo: "${portfolioConfig.projects.studentManagement.demo}"
    },

    bragBoard: {
      github: "${portfolioConfig.projects.bragBoard.github}",
      demo: "${portfolioConfig.projects.bragBoard.demo}"
    }
  },

  certificates: {
    python: "${portfolioConfig.certificates.python}"
  }
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawConfigCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100'
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold">Centralized Portfolio Configuration</h3>
              <p className="text-xs text-neutral-400 font-mono">
                src/config/portfolioConfig.ts
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Single Point of Truth for All Links</span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              All personal URLs, resume paths, project demos, and social profiles are maintained in one config file. Any value with <code className="text-emerald-400 font-mono">YOUR_*</code> is automatically shown as <strong>"Coming Soon"</strong> to prevent dead links.
            </p>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-mono text-neutral-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Config</span>
                </>
              )}
            </button>

            <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs leading-relaxed text-neutral-300 overflow-x-auto">
              <code>{rawConfigCode}</code>
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`px-6 py-3.5 border-t flex justify-end ${
            isDark ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
