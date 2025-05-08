import React from 'react';
import Products from '../components/Products';
import ShopretailBanner from '../components/ShopretailBanner';
import Sidebard from '../components/Sidebard';
import ProductCrad from '../components/ProductCrad';

// DATA

import { products } from '../assets/data';

const Shopretail = () => {
  // category
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [query, setQuery] = React.useState('');

  const handleinputchnage = (e) => {
    setQuery(e.target.value);
  };

  const filteritems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  // inputfilters checkboxs
  const handlechange = (e) => {
    let value = e.target.value;
    setSelectedCategory(value);
  };

  // filterdata

  const filterData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, inStock }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          inStock.toString() === selected,
      );
    }

    return filteredProducts.map(({ id, title, img, newprice, oldprice, inStock }) => (
      <ProductCrad
        key={id}
        id={id}
        title={title}
        img={img}
        newprice={newprice}
        oldprice={oldprice}
        inStock={inStock}
      />
    ));
  };

  const result = filterData(products, selectedCategory, query);

  return (
    <div className="flex items-start justify-start">
      <Sidebard handlechange={handlechange} />
      <div className="w-full">
        <ShopretailBanner />
        <Products result={result} />
      </div>
    </div>
  );
};

export default Shopretail;
