import React from 'react';
import { products } from '../assets/data';

import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  console.log(id);
  const product = products.find((product) => product.id === Number(id));
  console.log('product', product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
