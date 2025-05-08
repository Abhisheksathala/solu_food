import React from 'react';
import Minbanner from '../components/Minbanner';
import Topcategories from '../components/Topcategories';
import Banner from '../components/Banner';
import Newproducts from '../components/Newproducts';
import Bentobox from '../components/Bentobox';
import Slider from '../components/Slider';
import BentoboxBottom from '../components/BentoboxBottom';
import FooterTop from '../components/FooterTop';

const Homepage = () => {
  return (
    <div className="mt-10">
      <Minbanner />
      <Topcategories />
      <Banner />
      <Newproducts />
      <Bentobox />
      <Slider />
      <BentoboxBottom />
      <FooterTop />
    </div>
  );
};

export default Homepage;
