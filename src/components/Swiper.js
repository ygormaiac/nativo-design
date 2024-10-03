import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import centenario from '../assets/centenario.png'
import fecomercio from '../assets/fecomercio.png'
import microparque from '../assets/microparque.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SwiperHomepage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={fecomercio} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={centenario} loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={microparque} loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
