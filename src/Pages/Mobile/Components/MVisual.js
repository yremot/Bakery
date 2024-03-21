import Style from './css/MVisual.module.css'
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay,Pagination } from 'swiper/modules';

export default function MVisual() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        
        >

            <SwiperSlide>
            <p className={Style.visual_title} style={{backgroundImage:"url('/images/visual0.jpg')"}}>비주얼, 맛 모두를 사로잡은 디저트</p>
            </SwiperSlide>
            <SwiperSlide>
            <p className={Style.visual_title} style={{backgroundImage:"url('/images/visual1.jpg')"}}>비주얼, 맛 모두를 사로잡은 디저트</p>
            </SwiperSlide>
            <SwiperSlide>
            <p className={Style.visual_title} style={{backgroundImage:"url('/images/visual2.jpg')"}}>비주얼, 맛 모두를 사로잡은 디저트</p>
            </SwiperSlide>


        </Swiper>


{/* <div className={Style.visual_wrap}>
      <ul className={Style.visual_list}>
        <li>
          <p className={Style.visual_title}>비주얼, 맛 모두를 사로잡은 디저트</p>
        </li>
        <li>
          <p className={Style.visual_title}>비주얼, 맛 모두를 사로잡은 디저트</p>
        </li>
        <li>
          <p className={Style.visual_title}>비주얼, 맛 모두를 사로잡은 디저트</p>
        </li>
      </ul>
      <div className={Style.dot_wrap}>
        <ul className={`${Style.dot_list} is-flex`}>
          <li className={Style.selected}></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div> */}
    </>   
  )
}
