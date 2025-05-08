import React from 'react';
import FooterTopCard from './FooterTopCard';
import { footertopdata } from '../assets/footertopdata';

const FooterTop = () => {
  return (
    <div className="flex  flex-col sm:flex-col md:flex-row items-center justify-between py-8 mt-7 mb-7">
      {footertopdata.map((item, index) => {
        return <FooterTopCard item={item} key={index} />;
      })}
    </div>
  );
};

export default FooterTop;
