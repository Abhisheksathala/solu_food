import React from 'react';

const ShopretailBanner = () => {
  return (
    <div className="px-3 py-3 mt-2 w-full ">
      <div className="banner flex flex-col items-start justify-start full w-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] px-3 py-3 bg-cover bg-center">
        <div className="button p-2 bg-orange-200 rounded-full font-bold text-xs text-black-300">
          only this week
        </div>

        <div className="px-3 py-3">
          <h1 className="md:text-4xl  sm:text-2xl text-xl font-bold text-white w-xl">
            Grocery store with different treasures
          </h1>
          <p className="text-sm md:text-base text-gray-300 py-2">
            We have prepared special discounts for you on grocery <br />
            products...
          </p>
          <button className=" text-black font-bold cursor-pointer group rounded-full border px-4 py-2 bg-white">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopretailBanner;
