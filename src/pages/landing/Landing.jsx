import Carousel from '../../features/carousel/Carousel';
import Vital from '../../features/vital/Vital';
import Company from '../../features/company/Company';
import Presence from '../../features/presence/Presence';
import Footer from '../../features/footer/Footer';
import Faqs from '../../features/faqs/Faqs';
import Grow from '../../features/grow/Grow';
import Contact from '../../features/contact/Contact';
import Agency from '../../features/agency/Agency';

function Landing() {
  return (
    <>
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
