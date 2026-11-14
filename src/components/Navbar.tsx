import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#activites', label: 'Nos activités' },
  { href: '#coachs', label: 'Nos coachs' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || isOpen
          ? 'bg-[#101010]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-[#101010]/90 via-[#101010]/55 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-8">
        {/* Zone 1 : Brand wordmark */}
        <a
          href="#accueil"
          onClick={handleLinkClick}
          className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5A1F]"
        >
          BEST <span className="text-[#FF5A1F]">FORME</span>
        </a>

        {/* Zone 2 : Navigation links */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-6 xl:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#BDBDBD] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#FF5A1F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF5A1F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3 : Primary CTA & mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onJoinClick();
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#FF5A1F] hover:bg-[#E04A12] text-white font-display text-base font-bold tracking-wider uppercase transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            REJOIGNEZ-NOUS
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#1C1C1C] border border-white/10 text-white hover:border-[#FF5A1F] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF5A1F]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#101010] border-t border-white/10 px-4 sm:px-6 pb-6 pt-3"
        >
          <nav aria-label="Navigation mobile" className="flex flex-col divide-y divide-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3.5 text-base font-medium text-white/90 hover:text-[#FF5A1F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full py-3.5 px-6 rounded-lg bg-[#FF5A1F] hover:bg-[#E04A12] text-white font-display text-lg font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              REJOIGNEZ-NOUS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
