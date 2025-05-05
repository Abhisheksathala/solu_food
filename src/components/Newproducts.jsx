import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Newproductcrad from '../components/Newproductcrad';
import { newproducts } from '../assets/data';

console.log(newproducts);
const Newproducts = () => {
  return (
    <div className="mt-10 px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <p className="font-bold text-1xl">NEW PRODUCTS</p>
          <p className="text-xs hidden sm:block text-gray-500">
            Shelf the ordinary. Shop extraordinary..
          </p>
        </div>
        <div className="px-3 flex items-center gap-2 py-3 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-300 hover:text-black  transition-all duration-300 ease-in-out">
          view All
          <FaArrowRight />
        </div>
      </div>
      {/* new products */}
      <div
        className="border border-gray-300  rounded-lg flex items-center flex-wrap justify-between 
       sm:items-start sm:justify-evenly md:grid md:grid-cols-3 lg:flex mt-4 "
      >
        {newproducts.map((product) => (
          <div className="md:border-r border-gray-300 nth-last-[border-none]:" key={product.id}>
            <Newproductcrad products={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newproducts;
