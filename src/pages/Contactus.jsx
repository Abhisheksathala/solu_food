import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import InputComponent from '../components/InputComponent';
{
  /* icons of social media from react icons*/
}
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Contactus = () => {
  return (
    <div className="m-h-screen  px-8 sm:px10 md:px-15 mx-auto">
      <h1 className="text-center font-semibold px-4 py-5">Contact With Us</h1>
      <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-6xl">
        You can ask us questions
      </h1>
      <div className="flex items-center justify-center text-center px-4 py-4">
        <h1 className="max-w-xl px-3">
          Contact us for all your questions and opinions, or you can solve your problems in a
          shorter time with our contact offices.
        </h1>
      </div>

      <hr className="border border-gray-300 px-3 mt-6" />

      <div className="flex flex-col items-center justify-between lg:flex-row py-9 px-3">
        <div className="flex flex-col  items-start justify-center pb-4">
          <h1 className="sm:text-1xl text-xl md:text-3xl font-bold mt-2 text-center w-full sm:text-start">
            Our Officese
          </h1>
          <p className="text-sm max-w-[650px]  sm:py-5 md:py-6 py-3 text-gray-400  ">
            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte
            loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun
            gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.
          </p>
          <div className="flex items-start flex-col">
            <div className="flex  gap-4 items-center font-semibold">
              <CiLocationOn /> india
            </div>
            <div className="ml-8">
              <p
                className="font-bold 
              text-sm sm:text-xl"
              >
                Soul Foods Retail Pvt. Ltd.
              </p>
              <p className="max-w-xl text-gray-400">
                Grand View Mall, Sector-58, <br /> Gurugram Harayana
              </p>
              <p className="text-gray-900 text-sm sm:text-xl font-bold">+91 9873975748</p>
              <a
                href="info@soulfoodsretail.com"
                className="text-blue-400 underline"
                target="_blank"
              >
                info@soulfoodsretail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center py-4 mt-8">
            <p className="font-semibold">Follow us :</p>

            <div className="flex justify-center gap-6 items-center -mt-3">
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-full text-lg hover:bg-blue-700 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="bg-sky-400 text-white p-3 rounded-full text-lg hover:bg-sky-500 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-pink-500 text-white p-3 rounded-full text-lg hover:bg-pink-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 text-white p-3 rounded-full text-lg hover:bg-blue-800 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-start justify-start ">
          <p className="text-sm max-w-[650px]  sm:py-5 md:py-6 py-3 text-gray-400">
            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte
            loba även om prerade i garanterad traditionell specialitet till bebel.
          </p>
          <form action="" className="flex flex-col items-center justify-center mx-auto sm:mx-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
              <label htmlFor="yourname" className="w-full">
                <p className="py-2">Your Name:</p>
                <InputComponent placeholder="Your Name" id={'yourname'} />
              </label>
              <label htmlFor="email" className="w-full">
                <p className="py-2">Email:</p>
                <InputComponent placeholder="Email" />
              </label>
            </div>

            <label htmlFor="subject" className="w-full">
              <p className="py-2">Subject:</p>
              <InputComponent placeholder="Subject" id="subject" name="subject" required />
            </label>
            <label htmlFor="message" className="w-full">
              <p className="py-2">Message:</p>
              <InputComponent placeholder="Message" id="message" name="message" required />
            </label>
            <button
              type="submit"
              className="bg-blue-400 text-white font-bold cursor-pointer hover:bg-blue-300 grroup rounded-lg px-5 py-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
