import React from 'react';
import Bentocrads from '../components/Bentocrads';
const Bentobox = () => {
  return (
    <div className="flex py-3 flex-col sm:flex-col md:flex-row items-center justify-center">
      <Bentocrads />
      <Bentocrads />
      <Bentocrads />
    </div>
  );
};

export default Bentobox;
