import Carousel from '../../features/carousel/Carousel';
import VideoComponent from '../../features/video/VideoComponent';
import Vital from '../../features/vital/Vital';
import Company from '../../features/company/Company';
import Presence from '../../features/presence/Presence';
import Footer from '../../features/footer/Footer';
import Faqs from '../../features/faqs/Faqs';
import Grow from '../../features/grow/Grow';

function Landing() {
  return (
    <>
      <VideoComponent />
      <Carousel />
      <Vital />
      <Grow />
      <Presence />
      <Faqs />
      <Company />
      <Footer />
    </>
  );
}

export default Landing;
