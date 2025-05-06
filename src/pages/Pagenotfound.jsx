import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../assets/404.png.png';

const Pagenotfound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <img src={notfound} alt="404 Not Found" className="max-w-xs md:max-w-xl mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        That Page Can’t Be Found
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        It looks like nothing was found at this location. Maybe try searching for what you’re
        looking for?
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Pagenotfound;
