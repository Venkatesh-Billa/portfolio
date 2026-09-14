import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { CodingProfiles } from './components/CodingProfiles';
import { DsaPrep } from './components/DsaPrep';
import { CloudDevOps } from './components/CloudDevOps';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConfigInspectorModal } from './components/ConfigInspectorModal';
import { PlaceholderNoticeModal } from './components/PlaceholderNoticeModal';
import { ProjectData } from './types';

const PortfolioContent: React.FC = () => {
  const { isDark } = useTheme();

  // State management for modals
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [placeholderNotice, setPlaceholderNotice] = useState<{
    isOpen: boolean;
    title: string;
    message?: string;
  }>({
    isOpen: false,
    title: '',
  });

  const handleOpenResumeNotice = () => {
    setPlaceholderNotice({
      isOpen: true,
      title: 'Resume Document Coming Soon',
      message:
        'The resume PDF file path is currently configured with the standard placeholder. Once uploaded to /assets/resume/ or hosted on cloud storage, update the `resume` field in `portfolioConfig.ts`.',
    });
  };

  const handleOpenNotice = (title: string) => {
    setPlaceholderNotice({
      isOpen: true,
      title: `${title} - Link Pending`,
      message:
        'This credential URL is currently defined as a placeholder in `src/config/portfolioConfig.ts`. It will link to the official certificate once updated.',
    });
  };

  const handleOpenWhatsAppNotice = (msg: string) => {
    setPlaceholderNotice({
      isOpen: true,
      title: 'WhatsApp Contact Placeholder',
      message: msg,
    });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-400 ${
        isDark ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
      }`}
    >
      {/* Sticky Navigation */}
      <Navbar
        onOpenResumeNotice={handleOpenResumeNotice}
        onOpenConfigModal={() => setIsConfigModalOpen(true)}
      />

      {/* Main Page Sections in Logical Progression */}
      <main className="relative overflow-hidden">
        {/* 1. Hero Section */}
        <Hero onOpenResumeNotice={handleOpenResumeNotice} />

        {/* Subtle Divider */}
        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 2. About Section */}
        <About />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 3. Education Timeline */}
        <Education />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 4. Categorized Skills */}
        <Skills />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 5. Projects Showcase */}
        <Projects onSelectProject={project => setSelectedProject(project)} />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 6. Professional Experience */}
        <Experience />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 7. Certifications */}
        <Certifications onOpenNotice={handleOpenNotice} />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 8. Achievements & Hackathons */}
        <Achievements />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 9. Coding Profiles */}
        <CodingProfiles />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 10. DSA & Java Preparation Roadmap */}
        <DsaPrep />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 11. Cloud & DevOps Infrastructure */}
        <CloudDevOps />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 12. Dedicated Resume CTA Section */}
        <ResumeSection onOpenNotice={handleOpenResumeNotice} />

        <div className={`h-px max-w-6xl mx-auto ${isDark ? 'bg-neutral-900' : 'bg-neutral-200'}`} />

        {/* 13. Contact Section */}
        <Contact />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenNotice={handleOpenWhatsAppNotice} />

      {/* Global Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Configuration Inspector Modal */}
      <ConfigInspectorModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
      />

      {/* Placeholder Notice Modal */}
      <PlaceholderNoticeModal
        isOpen={placeholderNotice.isOpen}
        title={placeholderNotice.title}
        message={placeholderNotice.message}
        onClose={() => setPlaceholderNotice({ isOpen: false, title: '' })}
        onOpenConfig={() => setIsConfigModalOpen(true)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
