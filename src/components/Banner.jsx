import React from 'react';
import image from '../assets/fivety.png';
import promo from '../assets/promo.png';

const Banner = () => {
  return (
    <div className="mt-3 px-7 py-3">
      <div className="border border-orange-300 px-5 relative bg-orange-50 rounded-lg flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col items-start py-3">
          <h1 className="font-bold text-xl sm:text-2xl text-orange-500">
            In store or online your health & safety is our top priority
          </h1>
          <p className="text-xs text-gray-400">
            The only supermarket that makes your life easier, makes you enjoy life and makes it
            better
          </p>
        </div>
        <div className=" hidden  sm:block flex items-center justify-center   mx-auto">
          <img src={image} alt="banner " className=" w-full h-full object-cover -ml-20" />
        </div>

        <div className="px-3 flex items-center justify-center">
          <img src={promo} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
