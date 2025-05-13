import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';


const MainSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 7000 }}
      loop
      className="w-full h-[100vh]"
    >
      <SwiperSlide><Slider1 /></SwiperSlide>
      <SwiperSlide><Slider2 /></SwiperSlide>
      <SwiperSlide><Slider3 /></SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
