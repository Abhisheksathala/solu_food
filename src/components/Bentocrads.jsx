import React from 'react';
// import img from '../assets/banner-12.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Bentocrads = ({ item }) => {
  const { title, text, img, somthing } = item;
  return (
    <div className="mt-3 px-3  flex mx-auto">
      <div className={`flex items-center justify-start   rounded-lg relative `}>
        <div className="absolute px-7 flex items-start flex-col justify-start gap-2  ">
          <button className="bg-[#634c9f] text-white font-bold cursor-pointer hover:bg-[#634c9f]/90 grroup rounded-lg px-2 py-0">
            {somthing ? somthing : ''}
          </button>
          <h1 className="lg:text-1xl md:text-1xl sm:text-xl text-sm font-bold max-w-[250px]">
            {title}
          </h1>
          <p className="text-xs text-gray-400">{text}..</p>
          <div className="flex justify-start items-center mt-6 font-medium border rounded-full">
            <Link
              to="/shopretail"
              className="flex items-center gap-2 justify-start px-4 py-3 md:py-2  text-black font-bold cursor-pointer group rounded-lg"
            >
              <button>Shop Now</button>
              <FaLongArrowAltRight className="sm:hidden md:block transition-all group-focus:translate-x-1" />
            </Link>
          </div>
        </div>
        <img src={img} alt="" className="bg-cover bg-center" />
      </div>
    </div>
  );
};

export default Bentocrads;
