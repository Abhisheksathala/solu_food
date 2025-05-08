import React from 'react';
import { banner2 } from '../assets/Banner';
import Bentocrads from './Bentocrads';

const BentoboxBottom = () => {
  return (
    <div className="flex py-3 flex-col sm:flex-col md:flex-row items-center justify-center">
      {banner2.map((item, index) => {
        return <Bentocrads item={item} key={index} />;
      })}
    </div>
  );
};

export default BentoboxBottom;
