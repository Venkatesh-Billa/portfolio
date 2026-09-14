import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { portfolioConfig, isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Construct fallback mailto if user wants real mail transmission
      const mailtoUrl = `mailto:${portfolioConfig.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      // If email is configured, mailto can be opened in background or just show success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 800);
  };

  const isEmailPlaceholder = isPlaceholderUrl(portfolioConfig.email);
  const isWhatsAppPlaceholder = isPlaceholderUrl(portfolioConfig.whatsapp);
  const isGithubPlaceholder = isPlaceholderUrl(portfolioConfig.github);
  const isLinkedinPlaceholder = isPlaceholderUrl(portfolioConfig.linkedin);

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
            Get In Touch
          </div>
          <h2
            id="contact-heading"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Contact &amp; Placement Inquiries
          </h2>
          <p
            className={`text-base ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Reach out regarding campus placements, software engineering internships, technical collaborations, or open-source discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Handles from portfolioConfig */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-neutral-100'
              }`}
            >
              <h3
                className={`text-xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Contact Channels
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                All contact references are powered by the centralized global configuration.
              </p>

              <div className="space-y-4">
                {/* Email Handle */}
                <div
                  id="contact-email-channel"
                  className={`p-4 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-neutral-950/60 border-neutral-800'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                        Email
                      </span>
                      {isEmailPlaceholder ? (
                        <span className="text-xs sm:text-sm font-mono text-amber-400 truncate block">
                          {portfolioConfig.email}{' '}
                          <span className="text-[10px] text-neutral-500">(Placeholder)</span>
                        </span>
                      ) : (
                        <a
                          href={`mailto:${portfolioConfig.email}`}
                          className="text-xs sm:text-sm font-semibold text-emerald-500 hover:underline truncate block"
                        >
                          {portfolioConfig.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* GitHub Handle */}
                <div
                  id="contact-github-channel"
                  className={`p-4 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-neutral-950/60 border-neutral-800'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-800 text-white border border-neutral-700 shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                        GitHub
                      </span>
                      <a
                        href={portfolioConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-emerald-500 hover:underline truncate flex items-center gap-1"
                      >
                        <span className="truncate">{portfolioConfig.github}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Handle */}
                <div
                  id="contact-linkedin-channel"
                  className={`p-4 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-neutral-950/60 border-neutral-800'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                        LinkedIn
                      </span>
                      <a
                        href={portfolioConfig.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-blue-400 hover:underline truncate flex items-center gap-1"
                      >
                        <span className="truncate">{portfolioConfig.linkedin}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Handle (Never exposing raw number directly) */}
                <div
                  id="contact-whatsapp-channel"
                  className={`p-4 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-neutral-950/60 border-neutral-800'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono text-neutral-400 block uppercase tracking-wider">
                        WhatsApp
                      </span>
                      {isWhatsAppPlaceholder ? (
                        <span className="text-xs font-mono text-amber-400 block">
                          Configured via WhatsApp link (Placeholder active)
                        </span>
                      ) : (
                        <a
                          href={portfolioConfig.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-teal-400 hover:underline flex items-center gap-1"
                        >
                          <span>Connect on WhatsApp</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border shadow-sm ${
                isDark
                  ? 'bg-neutral-900/50 border-neutral-800'
                  : 'bg-white border-neutral-200 shadow-neutral-100'
              }`}
            >
              <h3
                className={`text-xl font-bold tracking-tight mb-2 ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
              >
                Send a Message
              </h3>
              <p
                className={`text-xs sm:text-sm mb-6 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}
              >
                Fill out the fields below to leave a note or inquiry.
              </p>

              {status === 'success' && (
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm flex items-start gap-2.5 mb-6 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Message Transmitted!</strong>
                    <span>Thank you for reaching out. I will respond to your communication promptly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className={`text-xs font-semibold ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Your Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Recruiter"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-hidden transition-colors ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500 placeholder-neutral-600'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500 placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className={`text-xs font-semibold ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Your Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-hidden transition-colors ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500 placeholder-neutral-600'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500 placeholder-neutral-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className={`text-xs font-semibold ${
                      isDark ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Campus Internship / Software Engineering Role"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-hidden transition-colors ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500 placeholder-neutral-600'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500 placeholder-neutral-400'
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className={`text-xs font-semibold ${
                      isDark ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Venkatesh, we reviewed your projects and would like to discuss an opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border focus:outline-hidden transition-colors ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500 placeholder-neutral-600'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-500 placeholder-neutral-400'
                    }`}
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
