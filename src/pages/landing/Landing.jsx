import Carousel from '../../features/carousel/Carousel';
import VideoComponent from '../../features/video/VideoComponent';
import Vital from '../../features/vital/Vital';
import Company from '../../features/company/Company';

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
