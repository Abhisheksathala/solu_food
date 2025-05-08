import React from 'react';
import Addbanner from './Addbanner';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoPerson } from 'react-icons/io5';
import { GoSearch } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import logo from '../assets/image@2x.png';
import name from '../assets/Soul Foods.png';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [showmore, setShowmore] = React.useState(false);

  return (
    <>
      <div className="flex flex-col w-full">
        <Addbanner />
        {/*  */}
        <div className="about flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-8 md:px-16 py-3 gap-3 sm:gap-0">
          {/* Left Section (Hidden on small screens) */}
          <div className="left hidden sm:flex gap-4 flex-wrap">
            {['About', 'Myaccount', 'Wishlist'].map((item, index) => (
              <div
                key={index}
                className="item flex items-center text-gray-400 text-[9px] sm:text-[9px] md:text-sm whitespace-nowrap"
              >
                <Link
                  to={`/${item.trim().toLocaleLowerCase()}`}
                  className="hover:text-gray-500 hover:underline"
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>

          {/* Center Text */}
          <span className="text-gray-400 flex items-center border-l sm:border-l border-gray-400 pl-0 sm:pl-3 text-sm sm:text-xs md:text-sm lg:text-base text-center sm:text-left">
            We deliver to you every day from{' '}
            <span className="font-bold text-red-500 ml-1">7:00 to 23:00</span>
          </span>

          {/* Right Section */}
          <div className="flex gap-3 flex-wrap justify-center sm:justify-end">
            {['english', 'INR', 'orderTracking'].map((item, index) => (
              <div
                className="item capitalize flex items-center text-sm sm:text-xs md:text-sm"
                key={index}
              >
                {item === 'english' ? (
                  <select
                    name="language"
                    id="language"
                    className="bg-transparent capitalize outline-none"
                  >
                    <option value="english">English</option>
                    <option value="hindi">हिंदी</option>
                    <option value="punjabi">ਪੰਜਾਬੀ</option>
                    <option value="bengali">বাংলা</option>
                    <option value="malayalam">മലയാളം</option>
                    <option value="tamil">தமிழ்</option>
                    <option value="telugu">తెలుగు</option>
                  </select>
                ) : item === 'INR' ? (
                  <select name="currency" id="currency" className="bg-transparent outline-none">
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                ) : (
                  <span className="cursor-pointer hover:underline">
                    {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="px-4 sm:px-8">
          <div className="mid px-4 sm:px-8 md:px-16  py-3 flex flex-row justify-between items-center border-2 border-gray-400">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
              <div
                onClick={() => navigate('/')}
                className="logo flex items-center justify-center gap-2"
              >
                <img src={logo} alt="" className="h-12 w-12" />
                <img src={name} alt="" className="w-full h-5" />
              </div>
            </div>
            <div className="search border border-gray-400 flex items-center justify-center gap-2 px-2 py-1 w-1/3 bg-gray-500/30 rounded-sm">
              <input
                type="text"
                className="w-full border-r py-1 border-gray-400 outline-none"
                placeholder="Search for products, categories or brands..."
              />
              <GoSearch
                onClick={() => navigate('/search')}
                className="sm:text-1xl md:text-2xl cursor-pointer text-xs hover:text-gray-600 transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="left flex items-center justify-center gap-4 sm:flex-row ">
              <div className="singin flex items-center justify-center relative">
                <div
                  onClick={() => {
                    setShowmore((prev) => !prev);
                  }}
                  className="flex items-center justify-center flex-row cursor-pointer"
                >
                  <IoPerson className="text-2xl" />
                  <div className="flex flex-col ml-2">
                    <span className="text-xs">Sign in</span>
                    <p className="text-sm font-semibold">Account</p>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center max-w-[650px] px-5 py-5 absolute bg-white border rounded-lg space-y-5 transition-all duration-500 ease-in-out top-16
                      z-20 ${showmore ? 'block' : 'hidden'}`}
                  >
                    <Link to={'/signin'} className="px-4 py-3 border-b hover:bg-gray-100 text-sm">
                      signin
                    </Link>
                    <Link to={'/signup'} className="px-4 pb-3 text-sm border-b hover:bg-gray-100">
                      signup
                    </Link>
                    <Link
                      to={'/myaccount'}
                      className="px-2 pb-3 border-b hover:bg-gray-100 text-sm"
                    >
                      myAccount
                    </Link>
                  </div>
                </div>
              </div>
              <div className="wishlist relative">
                <Link to={'/wishlist'}>
                  <CiHeart className="text-2xl" />
                  <div className="absolute -top-2 -right-3  flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    0
                  </div>
                </Link>
              </div>
              <div className="cart">
                <Link to={'/cart'}>
                  <IoCartOutline className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="px-4 sm:px-8">
          <div className="bottom px-4 sm:px-8 md:px-12 py-3 flex flex-row justify-between items-center border-b border-gray-400">
            <div className="flex items-start gap-18 w-1/2">
              {['Home', 'shop retail', 'Blog', 'About'].map((item, index) => (
                <div
                  className="item capitalize flex items-center text-sm sm:text-xs md:text-sm "
                  key={index}
                >
                  {item === 'Home' ? (
                    <Link to={'/'} className="flex items-center justify-center gap-2">
                      <span>{item}</span>
                    </Link>
                  ) : (
                    <Link
                      to={`/${item.trim().toLowerCase().replace(/\s+/g, '')}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>{item}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="trending">
              <select name="trending" id="trending">
                <option value="trending">Trending</option>
                <option value="trending">Trending</option>
                <option value="trending">Trending</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
