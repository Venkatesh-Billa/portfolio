import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { portfolioConfig, isPlaceholderUrl, getActiveUrl } from '../config/portfolioConfig';

interface FloatingWhatsAppProps {
  onOpenNotice: (msg: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenNotice }) => {
  const isPlaceholder = isPlaceholderUrl(portfolioConfig.whatsapp);
  const activeWhatsAppUrl = getActiveUrl(portfolioConfig.whatsapp);

  const handleClick = (e: React.MouseEvent) => {
    if (isPlaceholder) {
      e.preventDefault();
      onOpenNotice(
        'WhatsApp contact URL is currently set to placeholder in portfolioConfig.js. Update "phone" or "whatsapp" in portfolioConfig to launch WhatsApp Web directly!'
      );
    }
  };

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Direct Messaging"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        id="floating-whatsapp-btn"
        href={isPlaceholder ? '#' : activeWhatsAppUrl!}
        onClick={handleClick}
        target={isPlaceholder ? undefined : '_blank'}
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs sm:text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="font-semibold tracking-wide">Chat on WhatsApp</span>
      </a>
    </aside>
  );
};
