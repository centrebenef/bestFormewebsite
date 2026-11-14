import { useEffect, useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { ACTIVITIES, type ActivityItem } from '../data/clubData';
import { SmartImage } from './SmartImage';

interface ActivitiesProps {
  onSelectActivityInquiry: (activityTitle: string) => void;
}

export function Activities({ onSelectActivityInquiry }: ActivitiesProps) {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  useEffect(() => {
    if (!selectedActivity) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedActivity(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedActivity]);

  return (
    <section id="activites" className="py-20 lg:py-28 bg-[#141414] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
              Nos disciplines
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98]"
              style={{ textWrap: 'balance' }}
            >
              NOS ACTIVITÉS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#BDBDBD] max-w-md leading-relaxed">
            Six espaces et programmes complémentaires pour progresser à votre rythme, du renforcement musculaire au coaching individuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACTIVITIES.map((activity) => (
            <article
              key={activity.id}
              className="group flex flex-col bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF5A1F]/60 transition-colors duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101010]">
                <SmartImage
                  src={activity.image}
                  alt={activity.alt}
                  fallbackTitle={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-80"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#BDBDBD] mb-2">
                    <span>{activity.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activity.duration}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2.5">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6">
                    {activity.shortDescription}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedActivity(activity)}
                    className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#FF5A1F] hover:text-white transition-colors duration-150 py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F]"
                  >
                    <span>EN SAVOIR PLUS</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="activity-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#1C1C1C] rounded-2xl border border-white/15 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-[#101010]">
              <SmartImage
                src={selectedActivity.image}
                alt={selectedActivity.alt}
                fallbackTitle={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/30 to-transparent"
              />
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                aria-label="Fermer la fiche activité"
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#101010]/85 hover:bg-[#FF5A1F] text-white flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-[#FF5A1F] font-semibold mb-2">
                <span>{selectedActivity.level}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedActivity.duration}</span>
              </div>

              <h3
                id="activity-modal-title"
                className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mb-4"
              >
                {selectedActivity.title}
              </h3>

              <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed mb-6">
                {selectedActivity.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-t border-b border-white/10 mb-6">
                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-white mb-3">
                    Équipements dédiés
                  </h4>
                  <ul className="space-y-2">
                    {selectedActivity.equipment.map((eq) => (
                      <li key={eq} className="flex items-start gap-2.5 text-sm text-[#BDBDBD]">
                        <Check className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-white mb-3">
                    Bénéfices clés
                  </h4>
                  <ul className="space-y-2">
                    {selectedActivity.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-[#BDBDBD]">
                        <Check className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-3 rounded-lg bg-[#101010] hover:bg-[#262626] border border-white/15 text-sm font-medium text-white transition-colors cursor-pointer"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedActivity.title;
                    setSelectedActivity(null);
                    onSelectActivityInquiry(title);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF5A1F] hover:bg-[#E04A12] text-white font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>RÉSERVER UNE SÉANCE D’ESSAI</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
