import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onStartNow: () => void;
}

export function CallToAction({ onStartNow }: CallToActionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#101010] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF5A1F] via-[#E84D14] to-[#1C1C1C] p-8 sm:p-12 lg:p-16 border border-white/15">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wider text-white/90 mb-3">
                Passez à l’action
              </p>
              <h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.96] mb-4"
                style={{ textWrap: 'balance' }}
              >
                PRÊT À CHANGER DE DIMENSION ?
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Votre transformation commence aujourd’hui. Rejoignez la communauté BEST FORME.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onStartNow}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#101010] hover:bg-black text-white font-display text-lg font-bold uppercase tracking-wider transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>COMMENCER MAINTENANT</span>
                <ArrowRight className="w-5 h-5 text-[#FF5A1F]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
