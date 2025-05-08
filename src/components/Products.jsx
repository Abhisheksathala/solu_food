import React from 'react';
import ProductCard from './ProductCrad';
import { products } from '../assets/data';

const Products = () => {
  return (
    <section className="card_container flex flex-wrap sm:ml-4 items-center justify-center sm:justify-start py-16">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
