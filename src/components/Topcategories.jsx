import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { topcategories } from '../assets/data';

const Topcategories = () => {
  return (
    <div className="mt-10">
      <div className="px-3 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-4 px-3">
            <p className="font-bold text-1xl">Topcategories</p>
            <p className="text-xs hidden sm:block text-gray-500">
              New products with updated stocks.
            </p>
          </div>
          <div className="px-3 flex items-center gap-2 py-3 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-300 hover:text-black  transition-all duration-300 ease-in-out">
            view All
            <FaArrowRight />
          </div>
        </div>
        {/* categories */}
        <div className="mt-5 cursor-pointer gap-2 rounded-lg px-3 grid grid-cols-3   sm:flex  sm:flex-row justify-between items-center border border-gray-300 ">
          {topcategories.map((category, index) => {
            return (
              <div
                key={index}
                className=" border-none sm:border-r  md:border-r  sm:border-gray-300 px-3 py-3"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="sm:w-32 h-32 aspect-square object-cover "
                />
                <p className="text-sm">{category.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topcategories;
