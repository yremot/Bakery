import Style from './css/Visual.module.css'
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './css/VisualSwiper.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay,Pagination } from 'swiper/modules';



export default function Visual() {
  return (
    // 비주얼영역
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
                <section  className={Style.visual} style={{backgroundImage:"url('/images/visual0.jpg')"}}>
                    <h2 className={Style.visual_title}>CoCoBerry</h2>
                    <p className={Style.visual_text}>비주얼, 맛 모두를 사로잡은 디저트</p>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className={Style.visual} style={{backgroundImage:"url('/images/visual1.jpg')"}} >
                    <h2 className={Style.visual_title}>CoCoBerry</h2>
                    <p className={Style.visual_text}>비주얼, 맛 모두를 사로잡은 디저트</p>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className={Style.visual}  style={{backgroundImage:"url('/images/visual2.jpg')"}}>
                    <h2 className={Style.visual_title}>CoCoBerry</h2>
                    <p className={Style.visual_text}>비주얼, 맛 모두를 사로잡은 디저트</p>
                </section>
            </SwiperSlide>


        </Swiper>

    </>
  )
}
