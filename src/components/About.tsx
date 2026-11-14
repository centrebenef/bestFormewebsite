import { ABOUT_ADVANTAGES, CLUB_IMAGES } from '../data/clubData';
import { SmartImage } from './SmartImage';

export function About() {
  return (
    <section id="a-propos" className="py-20 lg:py-28 bg-[#101010] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Editorial Narrative & 3 Key Advantages */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
                À propos du club
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98] mb-5"
                style={{ textWrap: 'balance' }}
              >
                BIENVENUE CHEZ BEST FORME
              </h2>
              <p className="text-base text-[#BDBDBD] leading-relaxed mb-8">
                BEST FORME est votre destination fitness à Casablanca. Nous vous accompagnons dans votre parcours sportif grâce à des équipements modernes, des coachs qualifiés et un environnement motivant.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {ABOUT_ADVANTAGES.map((item) => (
                <div key={item.index} className="py-5 first:pt-5 last:pb-5">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-display text-lg font-bold text-[#FF5A1F] tabular-nums">
                      {item.index}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed pl-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Gym Interior Photograph */}
          <div className="lg:col-span-7 flex">
            <div className="relative w-full min-h-[340px] lg:min-h-full rounded-2xl overflow-hidden bg-[#1C1C1C] border border-white/10">
              <SmartImage
                src={CLUB_IMAGES.aboutInterior}
                alt="Intérieur architectural moderne du club de fitness BEST FORME à Casablanca"
                fallbackTitle="Espace BEST FORME Casablanca"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101010]/70 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-white/90">
                <span className="font-medium">Plateau Musculation &amp; Cardio</span>
                <span className="text-[#BDBDBD]">Casablanca · Ouvert 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
