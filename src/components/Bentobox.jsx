import React from 'react';
import Bentocrads from '../components/Bentocrads';
import { banner1 } from '../assets/Banner';
const Bentobox = () => {
  return (
    <div className="flex py-3 flex-col sm:flex-col md:flex-row items-center justify-center">
      {banner1.map((item, index) => {
        return <Bentocrads item={item} key={index} />;
      })}
    </div>
  );
};

export default Bentobox;
