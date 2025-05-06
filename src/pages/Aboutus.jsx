import React from 'react';
import group from '../assets/Group.png';
import AboutCard from '../components/AboutCard';
const Aboutus = () => {
  return (
    <div className="px-9 sm:px-10 md:px-15 ">
      <h1 className="sm:text-1xl  md:text-2xl lg:text-4xl 2xl:text-5xl font-semibold text-center px-2 py-3 whitespace-nowrap">
        Taste. Shop. Unwind. Your Destination for Everyday Luxury.
      </h1>
      <div className="flex items-center justify-center ">
        {' '}
        <img src={group} alt="" className="sm:h-9 md:h-12 h-7" />
      </div>
      <div className="flex items-center justify-center gap-2 flex-col">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div className="" key={index}>
              <AboutCard classname={`${index % 2 === 0 ? 'flex-row-reverse' : ''}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aboutus;
