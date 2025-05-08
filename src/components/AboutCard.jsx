import React from 'react';
// import imag from '../assets/Enscape_2024-03-21-21-44-19.png';

const AboutCard = ({ classname, item }) => {
  const { title, img, des } = item;
  return (
    <div className={`flex items-center justify-between ${classname}`}>
      <div className="px-3 py-4 space-y-6">
        <h1 className="text-sm font-semibold sm:text-1xl">
          {}
          {title}
        </h1>
        <p className="text-gary-400 text-sm py-3 max-w-sm">{des}</p>
        <button className="relative px-6 py-3 bg-blue-500 text-white rounded-full overflow-hidden group">
          <div className="absolute w-12 h-12 bg-yellow-300 rounded-full bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 transition-all duration-300 group-hover:scale-125 group-hover:opacity-80 z-0" />

          <p className="relative z-10 text-sm font-semibold">View More</p>
        </button>
      </div>
      <div className="w-1/2 h-full bg-cover bg-center px-3 py-4">
        <img src={img} alt="" className="h-32 w-full sm:h-full " />
      </div>
    </div>
  );
};

export default AboutCard;
