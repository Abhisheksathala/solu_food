import React from 'react';
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import { CiShoppingCart, CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { title, img, newprice, oldprice, inStock } = product;

  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className="card border border-gray-300 px-3 py-3 space-y-0 m-2">
          <div className="flex items-center justify-between">
            <div className="discount px-3 text-xs bg-red-400 rounded-full font-bold text-white">
              9%
            </div>
            <div className="heart">
              <CiHeart className="text-xl cursor-pointer" />
            </div>
          </div>
          <img src={img} alt={title} className="w-32 mb-1 mx-auto mt-2 aspect-square" />
          <div className="card_details space-y-1 py-2">
            <p className="mb-1 text-xs font-bold max-w-36">{title}</p>
            <div className="review flex gap-2 items-center justify-evenly text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span>3</span>
            </div>
            <div className="flex gap-3">
              <div className="newprice text-red-400 font-bold flex items-center">
                <FaRupeeSign />
                {newprice}
              </div>
              <div className="oldprice flex items-center line-through text-sm text-gray-400">
                <FaRupeeSign className="text-xs" />
                {oldprice}
              </div>
            </div>
            <div className="cart flex gap-2 items-center justify-start">
              <CiShoppingCart className="text-blue-400 bg-blue-50 text-xl cursor-pointer" />
              <span className="text-xs font-bold capitalize text-blue-400">
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
