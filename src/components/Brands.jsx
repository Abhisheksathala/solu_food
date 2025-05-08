import React from 'react';

const Brands = () => {
  return (
    <div className="flex flex-col mt-3">
      <h2 className="font-bold">Brand</h2>
      <div className="flex flex-col">
        <div className="flex gap-2 w-full cursor-pointer">
          <label htmlFor="checkbox-brand" className="flex  gap-2">
            <input
              type="checkbox"
              id={`checkbox-brand`}
              value={'fresh'}
              name="categories"
              className="
              "
            />
            <p className="font-semibold">fresh</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Brands;
