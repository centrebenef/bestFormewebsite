import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/clubData';
import { SmartImage } from './SmartImage';

type FilterCategory = 'Tout' | GalleryItem['category'];

const CATEGORIES: FilterCategory[] = [
  'Tout',
  'Espaces',
  'Musculation & Cardio',
  'Cours & Coaching',
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('Tout');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'Tout'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-[#101010] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
              En images
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98]"
              style={{ textWrap: 'balance' }}
            >
              GALERIE PHOTOS
            </h2>
          </div>

          {/* Interactive Category Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filtrer la galerie par espace"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1C1C1C] rounded-xl border border-white/10 self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#FF5A1F] text-white'
                      : 'text-[#BDBDBD] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#1C1C1C] border border-white/10 hover:border-[#FF5A1F] text-left transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF5A1F]"
            >
              <SmartImage
                src={item.image}
                alt={item.alt}
                fallbackTitle={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-[#101010]/20 to-transparent"
              />
              <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#101010]/75 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <Expand className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs text-[#FF5A1F] font-medium mb-0.5">
                  {item.category}
                </div>
                <div className="font-display text-xl font-bold uppercase text-white">
                  {item.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-3 text-white">
              <div className="text-sm text-[#BDBDBD] tabular-nums">
                {lightboxIndex + 1} / {filteredItems.length} ·{' '}
                <span className="text-white font-medium">{currentItem.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Fermer la galerie"
                className="w-10 h-10 rounded-lg bg-[#1C1C1C] hover:bg-[#FF5A1F] border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/15">
              <SmartImage
                src={currentItem.image}
                alt={currentItem.alt}
                fallbackTitle={currentItem.title}
                className="w-full h-full object-cover"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) %
                          filteredItems.length
                      )
                    }
                    aria-label="Photo précédente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-[#101010]/85 hover:bg-[#FF5A1F] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                    }
                    aria-label="Photo suivante"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-[#101010]/85 hover:bg-[#FF5A1F] border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <p className="mt-3 text-sm text-[#BDBDBD]">{currentItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
