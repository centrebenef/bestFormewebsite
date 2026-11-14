import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/clubData';

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Bonjour BEST FORME Casablanca, je souhaite obtenir des renseignements sur vos abonnements.'
  )}`;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5">
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Revenir en haut de la page"
          className="w-11 h-11 rounded-full bg-[#1C1C1C] hover:bg-[#FF5A1F] border border-white/20 text-white flex items-center justify-center shadow-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF5A1F]"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter BEST FORME sur WhatsApp"
        className="w-11 h-11 sm:w-auto sm:h-11 sm:px-4 rounded-full bg-[#25D366] hover:bg-[#1EB958] text-[#101010] font-display text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
      </a>
    </div>
  );
}
