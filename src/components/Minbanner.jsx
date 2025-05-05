import React from 'react';
import image from '../assets/slider-03.jpg.png';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Minbanner = ({ img = null }) => {
  return (
    <div className="relative px-15">
      <img src={image} alt="banner" className="w-full hidden md:block" />
      <img src={image} alt="banner" className="w-full h-full object-cover  md:hidden" />
      <div
        className="absolute inset-0 flex flex-col items-center
      md:items-start justify-end md:justify-center pb-24 md:pl-18 lg:pl-24"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-90 lg:max-w-120 leading-tight lg:leading-15 space-y-2 text-[#634c9f]">
          Get the best quality products at the lowest prices
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-semibold text-center md:text-left max-w-72 md:max-w-120 lg:max-w-120">
          We have prepared special discounts for you on organic breakfast products
        </p>
        <div className="flex justify-start items-center mt-6 font-medium ">
          <Link
            to="/shopretail"
            className="flex items-center gap-2 justify-start px-7 py-3 md:py-3 bg-[#634c9f] text-white font-bold cursor-pointer hover:bg-[#634c9f]/90 grroup rounded-lg"
          >
            <button>Shop Now</button>
            <FaLongArrowAltRight className="sm:hidden md:block transition-all group-focus:translate-x-1" />
          </Link>
          <div className="pricing"></div>
        </div>
      </div>
    </div>
  );
};

export default Minbanner;
