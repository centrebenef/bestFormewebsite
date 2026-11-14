import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES, HERO_STATS } from '../data/clubData';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onDiscoverOffers: () => void;
  onJoinClub: () => void;
}

export function Hero({ onDiscoverOffers, onJoinClub }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section
      id="accueil"
      aria-roledescription="carousel"
      aria-label="Présentation en images de la salle BEST FORME"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[680px] lg:min-h-[820px] flex items-end lg:items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#101010]"
    >
      {/* Background 3-Image Carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <SmartImage
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fallbackTitle="BEST FORME CASABLANCA"
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/80 to-[#101010]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/60"
        />
      </div>

      {/* Main Content & Carousel Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-4">
              Club de Fitness · Casablanca, Maroc
            </p>

            <h1
              className="font-display font-extrabold uppercase tracking-tight text-white leading-[0.95] mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5.4vw, 4.75rem)',
                textWrap: 'balance',
              }}
            >
              TRANSFORMEZ VOTRE CORPS.
              <br />
              <span className="text-[#FF5A1F]">DÉPASSEZ VOS LIMITES.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#BDBDBD] leading-relaxed max-w-2xl mb-8">
              Bienvenue chez BEST FORME, votre club de fitness à Casablanca. Un espace dédié à votre énergie, votre santé et votre transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 lg:mb-14">
              <button
                type="button"
                onClick={onDiscoverOffers}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#FF5A1F] hover:bg-[#E04A12] text-white font-display text-lg font-bold tracking-wider uppercase transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>DÉCOUVRIR NOS OFFRES</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onJoinClub}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#1C1C1C]/90 hover:bg-[#262626] border border-white/20 hover:border-white/40 text-white font-display text-lg font-bold tracking-wider uppercase transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
              >
                REJOINDRE LE CLUB
              </button>
            </div>

            {/* Visual Statistics Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/15 max-w-2xl">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tabular-nums leading-none mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#BDBDBD] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls & Slide Indicators */}
          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 shrink-0">
            <div className="text-left lg:text-right">
              <div className="text-xs text-[#BDBDBD] tabular-nums">
                0{activeSlide + 1} / 0{totalSlides}
              </div>
              <div className="font-display text-lg font-bold uppercase tracking-wide text-white">
                {HERO_SLIDES[activeSlide].caption}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Slide Bars */}
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Choisir une image">
                {HERO_SLIDES.map((slide, index) => {
                  const selected = index === activeSlide;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={`Afficher ${slide.caption}`}
                      onClick={() => setActiveSlide(index)}
                      className="h-10 px-1 flex items-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF5A1F]"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-200 ${
                          selected ? 'w-8 bg-[#FF5A1F]' : 'w-4 bg-white/35 hover:bg-white/65'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrev}
                  aria-label="Image précédente"
                  className="w-11 h-11 rounded-lg bg-[#1C1C1C]/90 hover:bg-[#FF5A1F] border border-white/15 text-white flex items-center justify-center transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Image suivante"
                  className="w-11 h-11 rounded-lg bg-[#1C1C1C]/90 hover:bg-[#FF5A1F] border border-white/15 text-white flex items-center justify-center transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
