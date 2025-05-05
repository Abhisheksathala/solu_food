import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import google from '../assets/266.png';
import app from '../assets/267.png';
// import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-400">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Company</h3>
            <p className="text-sm">Soul Foods Retail Private Limited</p>
            <p className="text-sm">Unit No - 9B & 9C, Golf Course Extension Road,</p>
            <p className="text-sm">Ireo Grand View Mall, Sector-58, Gurugram</p>
            <p className="text-sm">Haryana - 122001</p>
            <p className="text-sm">CIN : U47890DL2023PTC416063</p>
          </div>

          {/* Know More Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Know More</h3>
            <ul className="space-y-2">
              <li className="text-sm hover:underline cursor-pointer">About Us</li>
              <li className="text-sm hover:underline cursor-pointer">Contact Us</li>
              <li className="text-sm hover:underline cursor-pointer">Privacy Policy</li>
              <li className="text-sm hover:underline cursor-pointer">Terms and Conditions</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Follow us on</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm hover:underline cursor-pointer">
                <Linkedin className="h-5 w-5 text-blue-600" /> LinkedIn
              </li>
              <li className="flex items-center gap-2 text-sm hover:underline cursor-pointer">
                <Facebook className="h-5 w-5 text-blue-600" /> Facebook
              </li>
              <li className="flex items-center gap-2 text-sm hover:underline cursor-pointer">
                <Instagram className="h-5 w-5 text-rose-500" /> Instagram
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm">Monday-Friday: 08am-9pm</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-lg font-bold">+91- 9873975748</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Need help with your order?</span>
                <a href="mailto:info@soulfoodsretail.com" className="text-sm hover:underline">
                  info@soulfoodsretail.com
                </a>
              </div>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Download our app</h3>

            <div className="flex flex-col space-y-1">
              {/* Google Play Button */}
              <div className="flex">
                <div className="bg-black text-white rounded-lg overflow-hidden flex items-center w-40">
                  <img src={google} alt="Google Play" className="h-10 object-contain" />
                </div>
              </div>
              <p className="text-xs">Download App Get -10% Discount</p>

              {/* App Store Button */}
              <div className="flex mt-2">
                <div className="bg-black text-white rounded-lg overflow-hidden flex items-center w-40">
                  <img src={app} alt="App Store" className="h-10 object-contain" />
                </div>
              </div>
              <p className="text-xs">Download App Get -20% Discount</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-black">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="font-bold mr-2">FSSAI</span>
            <span>License Number - 10824999000451</span>
          </div>
          <div>
            <p>Copyright © Soul Foods All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
