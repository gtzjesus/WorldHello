// LAZY LOADING/ROUTE SPLITTING IMPLEMENTATION for video mp4
import React from 'react';
const LazyVideoComponent = React.lazy(() =>
  import('../../features/video/VideoComponent')
);

import Carousel from '../../features/carousel/Carousel';
// import VideoComponent from '../../features/video/VideoComponent';
import Vital from '../../features/vital/Vital';
import Company from '../../features/company/Company';
import Presence from '../../features/presence/Presence';
import Footer from '../../features/footer/Footer';
import Faqs from '../../features/faqs/Faqs';

function Landing() {
  return (
    <>
      <React.Suspense fallback="loading...">
        <LazyVideoComponent />
      </React.Suspense>
      <Carousel />
      <Vital />
      <Presence />
      <Faqs />
      <Company />
      <Footer />
    </>
  );
}

export default Landing;
