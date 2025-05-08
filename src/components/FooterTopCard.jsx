import React from 'react';

const FooterTopCard = ({ item }) => {
  const { img, title } = item;
  return (
    <div className="px-9 py-3 flex items-center justify-around">
      <img src={img} alt="" />
      <h1 className="text-sm font-bold">{title}</h1>
    </div>
  );
};

export default FooterTopCard;
