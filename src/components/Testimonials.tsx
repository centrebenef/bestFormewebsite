import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/clubData';
import { SmartImage } from './SmartImage';

export function Testimonials() {
  return (
    <section id="avis" className="py-20 lg:py-28 bg-[#141414] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
              La communauté Casablanca
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98]"
              style={{ textWrap: 'balance' }}
            >
              AVIS DES MEMBRES
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#BDBDBD] max-w-md leading-relaxed">
            Retours d’expérience de nos adhérents sur l’encadrement, les installations et l’énergie au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between bg-[#1C1C1C] rounded-2xl p-6 sm:p-7 border border-white/10"
            >
              <div>
                <div
                  className="flex items-center gap-1 mb-5"
                  aria-label={`Note de ${item.rating} sur 5 étoiles`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-white/95 leading-relaxed mb-7">
                  « {item.quote} »
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#101010] border border-white/15 shrink-0">
                  <SmartImage
                    src={item.image}
                    alt={item.alt}
                    fallbackTitle={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg font-bold uppercase tracking-wide text-white truncate">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#BDBDBD] truncate">
                    {item.goal} · {item.memberSince}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
