import { useCallback, useState } from 'react';
import AmbientScene from './components/AmbientScene.jsx';
import CinematicIntro from './components/CinematicIntro.jsx';
import CoupleDetails from './components/CoupleDetails.jsx';
import FamilyCarousel from './components/FamilyCarousel.jsx';
import FloatingDecor from './components/FloatingDecor.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navigation from './components/Navigation.jsx';
import PageProgress from './components/PageProgress.jsx';
import SparkleCursor from './components/SparkleCursor.jsx';
import StorySection from './components/StorySection.jsx';
import VenueSection from './components/VenueSection.jsx';
import { useGsapScroll } from './hooks/useGsapScroll.js';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  useGsapScroll();

  const finishIntro = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      <AmbientScene />
      <FloatingDecor />
      <SparkleCursor />
      <PageProgress />
      <Navigation />
      <CinematicIntro onComplete={finishIntro} />

      <main className={introComplete ? 'relative z-10' : 'relative z-10'}>
        <Hero />
        <StorySection />
        <CoupleDetails />
        <VenueSection />
        <FamilyCarousel />
        
      </main>

      <Footer />
    </>
  );
}
