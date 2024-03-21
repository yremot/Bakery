import Style from './css/MNew.module.css'
import './css/MobileSwiper.css'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function MNew() {
  return (
    <section className={Style.new}>
        <h2 className={Style.new_title}>이달의 신메뉴</h2>
        <div className={Style.new_text_box}>
            <p className={Style.new_text}>
                신선한 딸기의 달콤함이 가득한 메뉴를 맛보세요. 상큼하고 달콤한 국내산 딸기가 듬뿍 들어가 더욱 달콤해졌습니다.
            </p>
            <button className={Style.button}>Read More</button>
        </div>
        <div id='item_wrap'>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className='item_inner'>
                    <p className={Style.item_img}><img src="/images/Mobile/new0.png" alt="생딸기스콘" /></p>
                    <p className={Style.item_name}>생딸기 스콘</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item_inner'>
                    <p className={Style.item_img}><img src="/images/Mobile/new1.png" alt="생딸기스콘" /></p>
                    <p className={Style.item_name}>생딸기 스콘</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item_inner'>
                    <p className={Style.item_img}><img src="/images/Mobile/new2.png" alt="생딸기스콘" /></p>
                    <p className={Style.item_name}>생딸기 스콘</p>
                </div>
            </SwiperSlide>
        </Swiper>
            {/* <ul className={Style.item_list}>
                <li>
                    <p className={Style.item_img}><img src="/images/Mobile/new0.png" alt="생딸기스콘" /></p>
                    <p className={Style.item_name}>생딸기 스콘</p>
                </li>
                <li>
                    <p className={Style.item_img}><img src="/images/Mobile/new1.png" alt="생딸기스콘" /></p>
                    <p className={Style.item_name}></p>
                </li>
                <li>
                    <p className={Style.item_img}><img src="/images/Mobile/new2.png" alt="생딸기스콘" /></p>
                    <p className={Style.item_name}>생딸기 스콘</p>
                </li>
            </ul> */}


            {/* <button className={Style.new_btn_left}><i class="fa-solid fa-chevron-left"></i></button>
            <button className={Style.new_btn_right}><i class="fa-solid fa-chevron-right"></i></button> */}
        </div>

    </section>
  )
}
