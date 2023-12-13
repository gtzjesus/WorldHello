import Carousel from '../../features/carousel/Carousel';
import VideoComponent from '../../features/video/VideoComponent';
import Vital from '../../features/vital/Vital';
import Company from '../../features/company/Company';
import Presence from '../../features/presence/Presence';

function Landing() {
  return (
    <>
      <VideoComponent />
      <Carousel />
      <Vital />

      <Presence />
      <Company />
    </>
  );
}

export default Landing;
