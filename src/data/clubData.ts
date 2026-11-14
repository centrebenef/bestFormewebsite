export interface ActivityItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  alt: string;
  level: string;
  duration: string;
  equipment: string[];
  benefits: string[];
}

export interface CoachItem {
  id: string;
  name: string;
  speciality: string;
  experience: string;
  bio: string;
  image: string;
  alt: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  popular?: boolean;
  summary: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Espaces' | 'Musculation & Cardio' | 'Cours & Coaching';
  caption: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  memberSince: string;
  goal: string;
  rating: number;
  quote: string;
  image: string;
  alt: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

/**
 * Contenu de démonstration BEST FORME — Facilement modifiable par l'administrateur.
 */
export const CLUB_IMAGES = {
  hero: '/src/assets/images/hero_fitness_casablanca_1794671078868.jpg',
  aboutInterior: '/src/assets/images/about_club_interior_1794671079798.jpg',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-strength',
    image: '/src/assets/images/hero_fitness_casablanca_1794671078868.jpg',
    alt: 'Athlète préparant une barre olympique chez BEST FORME Casablanca',
    caption: 'Force & Musculation',
  },
  {
    id: 'slide-weights',
    image: '/src/assets/images/hero_slide_weights_1794671520073.jpg',
    alt: 'Plateau charges libres, haltères et cages à squat chez BEST FORME Casablanca',
    caption: 'Plateau Charges Libres',
  },
  {
    id: 'slide-cardio',
    image: '/src/assets/images/hero_slide_cardio_1794671519726.jpg',
    alt: 'Espace cardio training panoramique avec tapis incurvés et rameurs à Casablanca',
    caption: 'Studio Cardio Panoramique',
  },
];

export const HERO_STATS = [
  { value: '+500', label: 'Membres actifs' },
  { value: '+10', label: 'Coachs professionnels' },
  { value: '100%', label: 'Motivation' },
];

export const ABOUT_ADVANTAGES = [
  {
    index: '01.',
    title: 'Équipements modernes',
    description:
      'Plateaux de musculation guidée et charges libres dernière génération, entretenus quotidiennement pour une pratique fluide et sécurisée.',
  },
  {
    index: '02.',
    title: 'Coachs professionnels',
    description:
      'Une équipe certifiée à Casablanca pour corriger vos mouvements, structurer vos séances et accélérer votre progression.',
  },
  {
    index: '03.',
    title: 'Ambiance motivante',
    description:
      'Un cadre énergique, propre et exigeant où hommes et femmes, débutants comme athlètes confirmés, s’entraînent ensemble.',
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'musculation',
    title: 'MUSCULATION',
    shortDescription:
      'Développez votre force et sculptez votre corps grâce à nos équipements de musculation.',
    fullDescription:
      'Notre espace musculation à Casablanca réunit postes à charges guidées, cages à squat olympiques, haltères calibrés et bancs ergonomiques pour travailler chaque groupe musculaire avec précision.',
    image: '/src/assets/images/act_musculation_1794671080369.jpg',
    alt: 'Athlète effectuant du squat à la barre olympique dans la zone musculation BEST FORME Casablanca',
    level: 'Tous niveaux',
    duration: 'Accès libre 7j/7',
    equipment: ['Cages à squat olympiques', 'Haltères jusqu’à 50 kg', 'Machines guidées convergentes'],
    benefits: ['Gain de force fonctionnelle', 'Hypertrophie et tonification', 'Posture renforcée'],
  },
  {
    id: 'cardio-training',
    title: 'CARDIO TRAINING',
    shortDescription:
      'Améliorez votre endurance et votre condition physique.',
    fullDescription:
      'Équipée de tapis de course incurvés, vélos AirBike, rameurs et elliptiques connectés, notre zone cardio vous aide à développer votre capacité respiratoire et votre dépense énergétique.',
    image: '/src/assets/images/act_cardio_1794671080825.jpg',
    alt: 'Séance de cardio training sur tapis de course incurvé chez BEST FORME Casablanca',
    level: 'Débutant à avancé',
    duration: '30 à 60 min',
    equipment: ['Tapis de course motorisés & incurvés', 'Rameurs à résistance air', 'Vélos spinning & elliptiques'],
    benefits: ['Endurance cardiovasculaire', 'Perte de masse grasse', 'Récupération active'],
  },
  {
    id: 'fitness',
    title: 'FITNESS',
    shortDescription:
      'Des séances dynamiques pour améliorer votre forme et votre énergie.',
    fullDescription:
      'Un travail complet combinant renforcement musculaire léger, mobilité articulaire et gainage pour retrouver vitalité, souplesse et équilibre au quotidien.',
    image: '/src/assets/images/act_fitness_1794671081129.jpg',
    alt: 'Entraînement fitness avec haltères et fentes dynamiques chez BEST FORME Casablanca',
    level: 'Tous niveaux',
    duration: '45 min',
    equipment: ['Haltères ergonomiques', 'Bandes élastiques', 'Tapis haute densité'],
    benefits: ['Silhouette tonique', 'Énergie quotidienne', 'Mobilité améliorée'],
  },
  {
    id: 'cross-training',
    title: 'CROSS TRAINING',
    shortDescription:
      'Développez votre puissance, votre agilité et votre résistance.',
    fullDescription:
      'Entraînement fonctionnel à haute intensité mêlant kettlebells, cordes ondulatoires, box jumps et mouvements athlétiques sur gazon synthétique.',
    image: '/src/assets/images/act_cross_training_1794671081661.jpg',
    alt: 'Athlète en séance de cross training avec cordes ondulatoires et kettlebells à Casablanca',
    level: 'Intermédiaire & avancé',
    duration: '45 à 60 min',
    equipment: ['Zone turf fonctionnelle', 'Kettlebells & cordes ondulatoires', 'Plyo boxes & anneaux'],
    benefits: ['Explosivité musculaire', 'Condition métabolique', 'Dépassement mental'],
  },
  {
    id: 'coaching-personnel',
    title: 'COACHING PERSONNEL',
    shortDescription:
      'Un accompagnement personnalisé selon vos objectifs.',
    fullDescription:
      'Bénéficiez d’un bilan initial complet, d’un programme sur mesure adapté à votre rythme à Casablanca et d’un suivi technique permanent aux côtés de nos coachs diplômés.',
    image: '/src/assets/images/act_coaching_personnel_1794671082121.jpg',
    alt: 'Coach sportif personnel encadrant un membre au soulevé de terre chez BEST FORME',
    level: 'Sur mesure',
    duration: 'Séances de 60 min',
    equipment: ['Bilan corporel & suivi', 'Planification hebdomadaire', 'Correction technique 1-à-1'],
    benefits: ['Résultats mesurables', 'Zéro perte de temps', 'Prévention des blessures'],
  },
  {
    id: 'cours-collectifs',
    title: 'COURS COLLECTIFS',
    shortDescription:
      'Entraînez-vous en groupe dans une ambiance motivante.',
    fullDescription:
      'HIIT, circuit training, abdos-fessiers, mobilité et cardio-boxe : des cours rythmés et encadrés chaque jour pour garder la motivation intacte.',
    image: '/src/assets/images/act_cours_collectifs_1794671082618.jpg',
    alt: 'Cours collectif de fitness en groupe avec kettlebells chez BEST FORME Casablanca',
    level: 'Tous niveaux',
    duration: '45 min par séance',
    equipment: ['Studio climatisé & sonorisé', 'Kettlebells & steps', 'Matériel individuel fourni'],
    benefits: ['Esprit de communauté', 'Rythme soutenu', 'Régularité garantie'],
  },
];

/**
 * Profils de démonstration des coachs — Modifiables facilement.
 */
export const COACHES: CoachItem[] = [
  {
    id: 'karim-bennani',
    name: 'Karim Bennani',
    speciality: 'Musculation & Préparation Physique',
    experience: '8 ans d’expérience',
    bio: 'Spécialisé en prise de masse, force athlétique et recomposition corporelle pour sportifs débutants et confirmés.',
    image: '/src/assets/images/coach_karim_1794671082718.jpg',
    alt: 'Portrait de Karim Bennani, coach de musculation chez BEST FORME Casablanca',
  },
  {
    id: 'salma-el-idrissi',
    name: 'Salma El Idrissi',
    speciality: 'Fitness, Mobilité & Remise en Forme',
    experience: '6 ans d’expérience',
    bio: 'Accompagne les membres dans le renforcement postural, la tonification globale et le retour progressif au sport.',
    image: '/src/assets/images/coach_salma_1794671084455.jpg',
    alt: 'Portrait de Salma El Idrissi, coach fitness et mobilité chez BEST FORME Casablanca',
  },
  {
    id: 'youssef-tazi',
    name: 'Youssef Tazi',
    speciality: 'Cross Training & Conditionnement',
    experience: '7 ans d’expérience',
    bio: 'Expert en entraînement fonctionnel haute intensité, développement de l’explosivité et dépassement de soi.',
    image: '/src/assets/images/coach_youssef_1794671083731.jpg',
    alt: 'Portrait de Youssef Tazi, coach de cross training chez BEST FORME Casablanca',
  },
  {
    id: 'nadia-chraibi',
    name: 'Nadia Chraibi',
    speciality: 'Cardio HIIT & Cours Collectifs',
    experience: '5 ans d’expérience',
    bio: 'Anime des séances collectives dynamiques axées sur l’endurance, la perte de poids et l’énergie de groupe.',
    image: '/src/assets/images/coach_nadia_1794671084742.jpg',
    alt: 'Portrait de Nadia Chraibi, coach cardio et cours collectifs chez BEST FORME Casablanca',
  },
];

/**
 * Tarifs de démonstration en Dirhams (DH / MAD) — Facilement modifiables.
 */
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'pack-basic',
    name: 'PACK BASIC',
    price: 199,
    currency: 'DH',
    period: 'mois',
    summary: 'L’essentiel pour s’entraîner en autonomie sur nos plateaux musculation et cardio.',
    features: [
      'Accès à la salle',
      'Musculation',
      'Cardio training',
      'Vestiaires',
    ],
  },
  {
    id: 'pack-premium',
    name: 'PACK PREMIUM',
    price: 299,
    currency: 'DH',
    period: 'mois',
    popular: true,
    summary: 'La formule complète pour progresser avec nos cours collectifs et un suivi structuré.',
    features: [
      'Tous les avantages Basic',
      'Accès aux cours collectifs',
      'Suivi sportif',
      'Programme personnalisé',
    ],
  },
  {
    id: 'pack-vip',
    name: 'PACK VIP',
    price: 499,
    currency: 'DH',
    period: 'mois',
    summary: 'Un encadrement individuel de haut niveau pour atteindre vos objectifs plus rapidement.',
    features: [
      'Tous les avantages Premium',
      'Coaching personnel',
      'Accompagnement personnalisé',
      'Suivi des performances',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-interior',
    title: 'Espace Principal BEST FORME',
    category: 'Espaces',
    caption: 'Vue panoramique sur le plateau principal et nos racks professionnels à Casablanca.',
    image: '/src/assets/images/about_club_interior_1794671079798.jpg',
    alt: 'Intérieur moderne de la salle de sport BEST FORME à Casablanca',
  },
  {
    id: 'gal-musculation',
    title: 'Zone Musculation & Force',
    category: 'Musculation & Cardio',
    caption: 'Cages olympiques et disques calibrés pour vos séances de force.',
    image: '/src/assets/images/act_musculation_1794671080369.jpg',
    alt: 'Zone musculation avec barre olympique et racks chez BEST FORME',
  },
  {
    id: 'gal-cardio',
    title: 'Studio Cardio Training',
    category: 'Musculation & Cardio',
    caption: 'Tapis incurvés et équipements cardio dernière génération.',
    image: '/src/assets/images/act_cardio_1794671080825.jpg',
    alt: 'Athlète en sprint sur tapis de course dans le studio cardio BEST FORME',
  },
  {
    id: 'gal-cross',
    title: 'Zone Cross Training',
    category: 'Cours & Coaching',
    caption: 'Gazon fonctionnel, cordes ondulatoires et kettlebells pour l’entraînement athlétique.',
    image: '/src/assets/images/act_cross_training_1794671081661.jpg',
    alt: 'Entraînement cross training intense avec cordes et kettlebells',
  },
  {
    id: 'gal-coaching',
    title: 'Coaching Personnalisé',
    category: 'Cours & Coaching',
    caption: 'Accompagnement individuel et correction technique sur plateau.',
    image: '/src/assets/images/act_coaching_personnel_1794671082121.jpg',
    alt: 'Séance de coaching personnel individuel chez BEST FORME',
  },
  {
    id: 'gal-collectif',
    title: 'Cours Collectifs Énergiques',
    category: 'Cours & Coaching',
    caption: 'Sessions en groupe encadrées dans une ambiance dynamique.',
    image: '/src/assets/images/act_cours_collectifs_1794671082618.jpg',
    alt: 'Participants lors d’un cours collectif de fitness à Casablanca',
  },
];

/**
 * Avis de démonstration — Facilement modifiables par l'administrateur.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'mehdi-alami',
    name: 'Mehdi Alami',
    memberSince: 'Membre depuis 14 mois',
    goal: 'Pack Premium · Prise de force',
    rating: 5,
    quote:
      'Salle propre, machines toujours disponibles et coachs vraiment attentifs à la technique. J’ai gagné en force et en régularité dès les trois premiers mois.',
    image: '/src/assets/images/member_mehdi_1794671085112.jpg',
    alt: 'Photo de Mehdi Alami, membre BEST FORME Casablanca',
  },
  {
    id: 'kenza-berrada',
    name: 'Kenza Berrada',
    memberSince: 'Membre depuis 9 mois',
    goal: 'Pack Premium · Cours collectifs',
    rating: 5,
    quote:
      'L’ambiance des cours collectifs est incroyable. On se sent accueillie dès le premier jour, que l’on soit débutante ou déjà sportive.',
    image: '/src/assets/images/member_kenza_1794671084676.jpg',
    alt: 'Photo de Kenza Berrada, membre BEST FORME Casablanca',
  },
  {
    id: 'omar-mansouri',
    name: 'Omar Mansouri',
    memberSince: 'Membre depuis 1 an',
    goal: 'Pack VIP · Coaching personnel',
    rating: 5,
    quote:
      'Avec le suivi VIP, j’ai enfin trouvé un rythme compatible avec mes horaires professionnels à Casablanca et des résultats concrets sur mon endurance.',
    image: '/src/assets/images/member_omar_1794671085166.jpg',
    alt: 'Photo de Omar Mansouri, membre BEST FORME Casablanca',
  },
];

/**
 * Coordonnées de démonstration — À remplacer par les coordonnées réelles du club.
 */
export const CONTACT_INFO = {
  addressLabel: 'Casablanca, Maroc (Adresse à compléter)',
  phoneDisplay: '+212 6XX XX XX XX',
  whatsappNumber: '212600000000',
  email: 'contact@bestforme.ma',
  hours: [
    { days: 'Lundi – Vendredi', time: '07:00 – 22:00' },
    { days: 'Samedi', time: '08:00 – 20:00' },
    { days: 'Dimanche', time: '09:00 – 14:00' },
  ],
};
