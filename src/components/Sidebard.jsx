import React from 'react';
import Category from './Category';
import Price from './Price';
import Colors from './Colors';
import Brands from './Brands';
import ProductStatus from './ProductStatus';

const Sidebard = ({ handlechange }) => {
  return (
    <section className="w-sm h-screen   px-4 py-4">
      <Price />
      <Category handlechange={handlechange} />
      <Colors handlechange={handlechange} />
      <Brands handlechange={handlechange} />
      <ProductStatus handlechange={handlechange} />
    </section>
  );
};

export default Sidebard;
