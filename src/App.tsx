import { useState } from 'react';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { CallToAction } from './components/CallToAction';
import { Coaches } from './components/Coaches';
import { Contact } from './components/Contact';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [selectedPlanLabel, setSelectedPlanLabel] = useState<string | null>(null);
  const [prefilledSubject, setPrefilledSubject] = useState('Demande d’inscription');
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleJoinClick = () => {
    setPrefilledSubject('Demande d’inscription');
    scrollToSection('tarifs');
  };

  const handleSelectPlan = (planId: string, planName: string, priceLabel: string) => {
    const label = `${planName} (${priceLabel})`;
    setSelectedPlanId(planId);
    setSelectedPlanLabel(label);
    setPrefilledSubject(label);
    setPrefilledMessage(
      `Bonjour l’équipe BEST FORME, je souhaite souscrire à l’abonnement ${label} et connaître les modalités d’inscription à Casablanca.`
    );
    scrollToSection('contact');
  };

  const handleSelectActivityInquiry = (activityTitle: string) => {
    setPrefilledSubject('Séance d’essai / Visite du club');
    setPrefilledMessage(
      `Bonjour, je souhaite réserver une séance d’essai pour l’activité ${activityTitle} chez BEST FORME Casablanca.`
    );
    scrollToSection('contact');
  };

  const handleContactCoach = (coachName: string) => {
    setPrefilledSubject('Coaching personnel');
    setPrefilledMessage(
      `Bonjour, je souhaite planifier un bilan ou une séance de coaching personnel avec ${coachName}.`
    );
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Navbar onJoinClick={handleJoinClick} />

      <main>
        <Hero
          onDiscoverOffers={() => scrollToSection('tarifs')}
          onJoinClub={() => scrollToSection('contact')}
        />
        <About />
        <Activities onSelectActivityInquiry={handleSelectActivityInquiry} />
        <Coaches onContactCoach={handleContactCoach} />
        <Pricing
          selectedPlanId={selectedPlanId}
          onSelectPlan={handleSelectPlan}
        />
        <Gallery />
        <Testimonials />
        <CallToAction onStartNow={() => scrollToSection('contact')} />
        <Contact
          prefilledSubject={prefilledSubject}
          prefilledMessage={prefilledMessage}
          selectedPlanLabel={selectedPlanLabel}
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
