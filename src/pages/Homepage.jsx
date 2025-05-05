import React from 'react';
import Minbanner from '../components/Minbanner';
import Topcategories from '../components/Topcategories';
import Banner from '../components/Banner';
import Newproducts from '../components/Newproducts';
import Bentobox from '../components/Bentobox';
import Slider from '../components/Slider';

const Homepage = () => {
  return (
    <div className="mt-10">
      <Minbanner />
      <Topcategories />
      <Banner />
      <Newproducts />
      <Bentobox />
      <Slider />
      <Bentobox />
    </div>
  );
};

export default Homepage;
