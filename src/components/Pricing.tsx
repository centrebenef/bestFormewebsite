import { Check } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/clubData';

interface PricingProps {
  selectedPlanId: string | null;
  onSelectPlan: (planId: string, planName: string, priceLabel: string) => void;
}

export function Pricing({ selectedPlanId, onSelectPlan }: PricingProps) {
  return (
    <section id="tarifs" className="py-20 lg:py-28 bg-[#141414] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
            Formules transparentes
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98] mb-4"
            style={{ textWrap: 'balance' }}
          >
            NOS ABONNEMENTS
          </h2>
          <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
            Choisissez l’abonnement adapté à vos objectifs sportifs à Casablanca. Tarifs mensuels en Dirhams marocains (DH), sans engagement caché.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = Boolean(plan.popular);
            const isSelected = selectedPlanId === plan.id;
            const priceLabel = `${plan.price} ${plan.currency} / ${plan.period}`;

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-transform duration-200 hover:-translate-y-1 ${
                  isPopular
                    ? 'bg-[#1C1C1C] border-2 border-[#FF5A1F]'
                    : 'bg-[#1C1C1C] border border-white/10 hover:border-white/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                    {isPopular && (
                      <span className="font-display text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded bg-[#FF5A1F] text-white whitespace-nowrap shrink-0">
                        POPULAIRE
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2 mb-4 pb-6 border-b border-white/10">
                    <span className="font-display text-5xl sm:text-6xl font-extrabold text-white tabular-nums leading-none">
                      {plan.price}
                    </span>
                    <span className="text-base font-semibold text-[#FF5A1F] uppercase">
                      {plan.currency} / {plan.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6">
                    {plan.summary}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm sm:text-base text-white/95"
                      >
                        <Check
                          className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.id, plan.name, priceLabel)}
                  className={`w-full py-3.5 px-6 rounded-lg font-display text-base sm:text-lg font-bold uppercase tracking-wider transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5A1F] ${
                    isPopular || isSelected
                      ? 'bg-[#FF5A1F] hover:bg-[#E04A12] text-white'
                      : 'bg-[#101010] hover:bg-[#FF5A1F] border border-white/15 hover:border-[#FF5A1F] text-white'
                  }`}
                >
                  {isSelected ? 'ABONNEMENT SÉLECTIONNÉ' : 'CHOISIR CET ABONNEMENT'}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
