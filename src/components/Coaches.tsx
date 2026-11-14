import { COACHES } from '../data/clubData';
import { SmartImage } from './SmartImage';

interface CoachesProps {
  onContactCoach: (coachName: string) => void;
}

export function Coaches({ onContactCoach }: CoachesProps) {
  return (
    <section id="coachs" className="py-20 lg:py-28 bg-[#101010] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
              Encadrement expert
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98]"
              style={{ textWrap: 'balance' }}
            >
              NOS COACHS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#BDBDBD] max-w-md leading-relaxed">
            Des coachs certifiés à votre écoute pour structurer votre entraînement, corriger vos postures et maintenir votre motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {COACHES.map((coach) => (
            <article
              key={coach.id}
              className="group flex flex-col bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF5A1F]/60 transition-colors duration-200"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#141414]">
                <SmartImage
                  src={coach.image}
                  alt={coach.alt}
                  fallbackTitle={coach.name}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-85"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-medium text-[#FF5A1F] mb-1.5">
                    {coach.speciality}
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mb-1">
                    {coach.name}
                  </h3>
                  <div className="text-xs text-[#BDBDBD] mb-3">{coach.experience}</div>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed mb-5">
                    {coach.bio}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onContactCoach(coach.name)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#101010] hover:bg-[#FF5A1F] border border-white/10 hover:border-[#FF5A1F] text-xs font-display font-bold uppercase tracking-wider text-white transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF5A1F]"
                >
                  RÉSERVER AVEC {coach.name.split(' ')[0].toUpperCase()}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
