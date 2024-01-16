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
