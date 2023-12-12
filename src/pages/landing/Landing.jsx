import Carousel from '../../features/carousel/Carousel';
import Company from '../../features/company/company';
import VideoComponent from '../../features/video/VideoComponent';
import Vital from '../../features/vital/Vital';

function Landing() {
  return (
    <>
      <VideoComponent />
      <Carousel />
      <Vital />
      <Company />
    </>
  );
}

export default Landing;
