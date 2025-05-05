import React from 'react';
import { LiaRupeeSignSolid } from 'react-icons/lia';
const Newproductcrad = ({ products = null }) => {
  const { title, img, des, stock, newprice, oldprice } = products;
  return (
    <div className=" flex flex-col items-center justify-center px-3 py-3 w-full">
      <img src={img} alt="" />
      <div className="flex py-3 flex-col items-start">
        <p className="text-sm font-semibold ">{title}</p>
        <p className="text-xs font-semibold text-gray-500">{des}</p>
        <div className="flex items-center justify-end gap-3 pb-2">
          <p className="text-2xl font-semibold text-red-600 flex items-center justify-center text-start">
            <LiaRupeeSignSolid className="text-1xl font-semibold mt-1" /> {newprice}
          </p>
          <p className="text-1xl font-semibold text-gray-800 line-through flex items-center justify-center">
            {' '}
            <LiaRupeeSignSolid className="text-1xl font-semibold mt-0.5" />
            {oldprice}
          </p>
        </div>
        <div className="border border-gray-300 w-full"></div>
        <div className="flex flex-col gap-2 py-3 w-full">
          <p className="text-[10px] text-gray-500 capitalize">this product is about to run out</p>
          <div className="py-1 bg-gradient-to-r from-orange-300 via-orange-400 to-red-500 w-full"></div>
          <p className="text-[10px] text-gray-500 capitalize">
            available only :{' '}
            <span className="font-bold inline-block text-sm text-black">{stock}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newproductcrad;
