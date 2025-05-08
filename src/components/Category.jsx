import React from 'react';

const Category = ({ handlechange }) => {
  const categories = [
    'Fruits & Vegetables',
    'General Merchandise',
    'Beverages',
    'Meats & Seafood',
    'Biscuits & Snacks',
    'Breads & Bakery',
    'Breakfast & Dairy',
    'Frozen Foods',
    'Grocery & Staples',
    'Honey',
    'Household Needs',
  ];
  return (
    <div className="flex flex-col">
      <h2 className="font-bold">Product Categories</h2>
      <div className="flex flex-col">
        {categories.map((category, index) => (
          <label
            key={index}
            htmlFor={`checkbox-${index}`}
            className="flex gap-2 w-full accent-purple-700"
          >
            <div className="flex gap-2 w-full cursor-pointer">
              <input
                onChange={handlechange}
                type="checkbox"
                id={`checkbox-${index}`}
                value={category}
                name="categories"
                className="
              "
              />
              <p className="font-bold peer-checked:text-purple-700">{category}</p>
            </div>
            <p className="font-bold cursor-pointer">+</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Category;
