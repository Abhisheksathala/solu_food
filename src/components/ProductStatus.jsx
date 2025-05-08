import React from 'react';

const ProductStatus = ({ handlechange }) => {
  return (
    <div className="flex flex-col mt-3 ">
      <h2 className="font-bold">ProductStatus</h2>
      <div className="flex flex-col py-2">
        <div className="flex flex-col  w-full cursor-pointer">
          <label htmlFor="checkbox-instock" className="flex gap-2">
            <input
              type="checkbox"
              id="checkbox-instock"
              value="InStock"
              name="categories"
              onChange={handlechange}
            />
            <p className="font-semibold">In Stock</p>
          </label>

          <label htmlFor="checkbox-sale" className="flex gap-2">
            <input
              type="checkbox"
              id="checkbox-sale"
              value="sale"
              name="categories"
              onChange={handlechange}
            />
            <p className="font-semibold">On Sale</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
