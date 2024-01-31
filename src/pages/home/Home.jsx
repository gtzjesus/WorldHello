import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import NavigationWBackground from '../../components/navigation/NavigationWBackground';
import Achievements from '../../components/achievements/Achievements';
import Source from '../../components/source/Source';
import About from '../../components/about/About';
import Business from '../../components/business/Business';
import Footer from '../../components/footer/Footer';
import Faqs from '../../components/faqs/Faqs';
import Craft from '../../components/craft/Craft';
import Contact from '../../components/contact/Contact';
import Landing from '../../components/landing/Landing';

function Home() {
  // GRAB STATE for navigation scroll
  const [header, setHeader] = useState(false);
  // GRAB STATE for opening/closing modal component
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Code logic for user interaction with modal
  const openModal = () => {
    setIsModalOpen(true);
    // When modal is open
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);

    // When modal is closed
    document.body.style.overflow = 'auto';
  };

  // Handle add/removing the class based on the modal state
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('body-overflow-hidden');
    } else {
      document.body.classList.remove('body-overflow-hidden');
    }
    // Code logic to clean up function, to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('body-overflow-hidden');
    };
  }, [isModalOpen]);

  // Function TO change state on scroll
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
      <Landing
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Achievements />
      <Craft
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Source />
      <Business
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Faqs />
      <Contact
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <About
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Footer
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default Home;
