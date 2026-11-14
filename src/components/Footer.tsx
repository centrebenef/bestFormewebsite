import { CONTACT_INFO } from '../data/clubData';

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <a
              href="#accueil"
              className="font-display text-3xl font-extrabold tracking-tight text-white inline-block mb-3"
            >
              BEST <span className="text-[#FF5A1F]">FORME</span>
            </a>
            <p className="text-sm text-[#BDBDBD] leading-relaxed">
              Votre club de fitness, musculation et coaching sportif à Casablanca. Un cadre moderne pensé pour votre progression.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BDBDBD]">
              <li>
                <a href="#accueil" className="hover:text-[#FF5A1F] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-[#FF5A1F] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#activites" className="hover:text-[#FF5A1F] transition-colors">
                  Nos activités
                </a>
              </li>
              <li>
                <a href="#coachs" className="hover:text-[#FF5A1F] transition-colors">
                  Nos coachs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              Club &amp; Tarifs
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BDBDBD]">
              <li>
                <a href="#tarifs" className="hover:text-[#FF5A1F] transition-colors">
                  Nos abonnements
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-[#FF5A1F] transition-colors">
                  Galerie photos
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#FF5A1F] transition-colors">
                  Avis des membres
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF5A1F] transition-colors">
                  Contact &amp; inscription
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-4">
              Coordonnées
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BDBDBD]">
              <li>{CONTACT_INFO.addressLabel}</li>
              <li className="tabular-nums">{CONTACT_INFO.phoneDisplay}</li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#FF5A1F] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="pt-1 text-xs text-white/60">
                Lun–Ven : 07h00–22h00 · Sam : 08h00–20h00 · Dim : 09h00–14h00
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BDBDBD]">
          <p>© {new Date().getFullYear()} BEST FORME Casablanca. Tous droits réservés.</p>
          <p>Salle de sport &amp; Fitness · Casablanca, Maroc</p>
        </div>
      </div>
    </footer>
  );
}
