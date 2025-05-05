import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import img from '../assets/store.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className="px-6 py-4 mb-3">
      <>
        <div className="mt-2 px-2 py-3 flex items-center justify-start gap-3">
          <h1 className="text-1xl font-bold">OUR STORE</h1>
          <p className="text-xs">Every cafe is uniquely designed</p>
        </div>
        <Swiper
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
