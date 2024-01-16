import { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import NavigationWBackground from '../../components/navigation/NavigationWBackground';
import Carousel from '../../components/carousel/Carousel';
import Vital from '../../components/vital/Vital';
import Company from '../../components/company/Company';
import Presence from '../../components/presence/Presence';
import Footer from '../../components/footer/Footer';
import Faqs from '../../components/faqs/Faqs';
import Grow from '../../components/grow/Grow';
import Contact from '../../components/contact/Contact';
import Agency from '../../components/agency/Agency';

function Landing() {
  // GRAB STATE for navigation scroll
  const [header, setHeader] = useState(false);
  // FUNCTION TO change state on scroll
  const changeHeader = () => {
    if (window.scrollY >= 20) {
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
      <Agency />
      <Carousel />
      <Grow />
      <Vital />
      <Presence />
      <Faqs />
      <Contact />
      <Company />
      <Footer />
    </>
  );
}

export default Landing;
