import { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import NavigationWBackground from '../../components/navigation/NavigationWBackground';
import Achievements from '../../components/achievements/Achievements';
import Source from '../../components/source/Source';
import Company from '../../components/company/Company';
import Presence from '../../components/presence/Presence';
import Footer from '../../components/footer/Footer';
import Faqs from '../../components/faqs/Faqs';
import Craft from '../../components/craft/Craft';
import Contact from '../../components/contact/Contact';
import Landing from '../../components/landing/Landing';

function Home() {
  // GRAB STATE for navigation scroll
  const [header, setHeader] = useState(false);
  // FUNCTION TO change state on scroll
  const changeHeader = () => {
    if (window.scrollY >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  // CHECK for scroll with event listener
  window.addEventListener('scroll', changeHeader);
  return (
    <>
      {!header ? <Navigation /> : <NavigationWBackground />}
      <Landing />
      <Achievements />
      <Craft />
      <Source />
      <Presence />
      <Faqs />
      <Contact />
      <Company />
      <Footer />
    </>
  );
}

export default Home;
