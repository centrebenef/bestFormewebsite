import { useEffect, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/clubData';

interface ContactProps {
  prefilledSubject: string;
  prefilledMessage: string;
  selectedPlanLabel: string | null;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const SUBJECT_OPTIONS = [
  'Demande d’inscription',
  'PACK BASIC (199 DH / mois)',
  'PACK PREMIUM (299 DH / mois)',
  'PACK VIP (499 DH / mois)',
  'Séance d’essai / Visite du club',
  'Coaching personnel',
  'Autre renseignement',
];

export function Contact({
  prefilledSubject,
  prefilledMessage,
  selectedPlanLabel,
}: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(prefilledSubject || SUBJECT_OPTIONS[0]);
  const [message, setMessage] = useState(prefilledMessage || '');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setSubject(prefilledSubject);
      setSubmitted(false);
    }
  }, [prefilledSubject]);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      setSubmitted(false);
    }
  }, [prefilledMessage]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Veuillez saisir votre nom complet.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Veuillez saisir une adresse e-mail valide.';
    }
    const cleanPhone = phone.replace(/[\s.-]/g, '');
    if (cleanPhone.length < 9 || !/^[+\d]+$/.test(cleanPhone)) {
      nextErrors.phone = 'Veuillez saisir un numéro de téléphone valide.';
    }
    if (!subject.trim()) {
      nextErrors.subject = 'Veuillez choisir un objet.';
    }
    if (message.trim().length < 10) {
      nextErrors.message = 'Votre message doit contenir au moins 10 caractères.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject(SUBJECT_OPTIONS[0]);
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour BEST FORME Casablanca, je souhaite obtenir des informations${
      selectedPlanLabel ? ` sur ${selectedPlanLabel}` : ''
    }.`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#101010] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="text-sm font-semibold tracking-wider text-[#FF5A1F] mb-3">
            Inscription &amp; renseignements
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[0.98] mb-4"
            style={{ textWrap: 'balance' }}
          >
            CONTACTEZ BEST FORME
          </h2>
          <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed">
            Planifiez votre visite à Casablanca, choisissez votre abonnement ou posez vos questions à notre équipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Details, Hours, WhatsApp & Casablanca Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1C1C1C] rounded-2xl p-6 sm:p-7 border border-white/10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-[#BDBDBD] mb-0.5">Adresse</div>
                  <div className="text-sm sm:text-base font-medium text-white">
                    {CONTACT_INFO.addressLabel}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-[#BDBDBD] mb-0.5">Téléphone</div>
                  <div className="text-sm sm:text-base font-medium text-white tabular-nums">
                    {CONTACT_INFO.phoneDisplay}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <div className="text-xs font-medium text-[#BDBDBD] mb-0.5">E-mail</div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm sm:text-base font-medium text-white hover:text-[#FF5A1F] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 mb-3">
                  <Clock className="w-5 h-5 text-[#FF5A1F]" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    Horaires d’ouverture
                  </h3>
                </div>
                <dl className="space-y-2 text-sm">
                  {CONTACT_INFO.hours.map((row) => (
                    <div key={row.days} className="flex items-center justify-between gap-4">
                      <dt className="text-[#BDBDBD]">{row.days}</dt>
                      <dd className="text-white font-medium tabular-nums">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1EB958] text-[#101010] font-display text-base font-extrabold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>CONTACTER SUR WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Placeholder for Casablanca */}
            <div className="bg-[#1C1C1C] rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-56 bg-[#141414] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Subtle architectural grid lines representing Casablanca map placeholder */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 220"
                  className="absolute inset-0 w-full h-full opacity-25"
                >
                  <path
                    d="M0 45 H400 M0 110 H400 M0 175 H400 M70 0 V220 M165 0 V220 M260 0 V220 M340 0 V220"
                    stroke="#BDBDBD"
                    strokeWidth="0.75"
                    fill="none"
                  />
                  <path
                    d="M0 190 Q120 130 220 140 T400 75"
                    stroke="#FF5A1F"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 5"
                  />
                </svg>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-[#FF5A1F]" aria-hidden="true" />
                  </div>
                  <div className="font-display text-xl font-bold uppercase text-white mb-1">
                    BEST FORME · CASABLANCA
                  </div>
                  <p className="text-xs text-[#BDBDBD] max-w-xs mb-4">
                    Emplacement Google Maps à configurer avec l’adresse exacte de votre salle à Casablanca.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Casablanca,Maroc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101010] hover:bg-[#FF5A1F] border border-white/15 text-xs font-medium text-white transition-colors"
                  >
                    <span>Voir Casablanca sur Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#1C1C1C] rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="py-10 text-center max-w-md mx-auto"
              >
                <div className="w-14 h-14 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-[#FF5A1F]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl font-extrabold uppercase text-white mb-3">
                  DEMANDE ENVOYÉE
                </h3>
                <p className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed mb-6">
                  Merci <span className="text-white font-semibold">{name}</span>. Votre message concernant{' '}
                  <span className="text-white font-semibold">{subject}</span> a bien été enregistré. L’équipe BEST FORME Casablanca vous répondra très rapidement.
                </p>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-3 rounded-lg bg-[#FF5A1F] hover:bg-[#E04A12] text-white font-display text-base font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  ENVOYER UN AUTRE MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                    Formulaire de contact
                  </h3>
                  {selectedPlanLabel && (
                    <span className="text-xs font-semibold text-[#FF5A1F]">
                      Sélection : {selectedPlanLabel}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex. Yassine El Amrani"
                      aria-invalid={Boolean(errors.name)}
                      className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/15 focus:border-[#FF5A1F] focus:outline-none text-sm text-white placeholder:text-white/35 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-[#FF5A1F]">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@exemple.ma"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/15 focus:border-[#FF5A1F] focus:outline-none text-sm text-white placeholder:text-white/35 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-[#FF5A1F]">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+212 6XX XX XX XX"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/15 focus:border-[#FF5A1F] focus:outline-none text-sm text-white placeholder:text-white/35 transition-colors tabular-nums"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[#FF5A1F]">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Objet
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      aria-invalid={Boolean(errors.subject)}
                      className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/15 focus:border-[#FF5A1F] focus:outline-none text-sm text-white transition-colors"
                    >
                      {!SUBJECT_OPTIONS.includes(subject) && (
                        <option value={subject}>{subject}</option>
                      )}
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-[#FF5A1F]">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Précisez vos disponibilités, votre niveau sportif ou vos objectifs..."
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/15 focus:border-[#FF5A1F] focus:outline-none text-sm text-white placeholder:text-white/35 transition-colors resize-y"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-[#FF5A1F]">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#FF5A1F] hover:bg-[#E04A12] text-white font-display text-lg font-bold uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>ENVOYER MA DEMANDE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
