import React from 'react'
import Style from './css/MBest.module.css'
import './css/MobileSwiper.css'
import useProducts from '../../../hooks/useProducts'
import regExp from '../../../util/regExp'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/scrollbar';


export default function MBest() {

    const [allProducts] = useProducts()

    let bestItems = getBestItems(allProducts)


    function getBestItems(allProducts){
        return(
            allProducts.filter((item)=>(item.isBest===true))
        )
    }

  return (
    <section className={Style.mobile_best}>
        <h2 className='mobile_title'>Best</h2>
        <div className={Style.best_wrap}>
            <div className={Style.best_list} id='best_list_swiper'>
                {/* {
                    bestItems.map((item)=>{
                        return(
                            <li>
                                <p className={Style.best_img}>
                                    <img src={item.image} alt={item.name} />
                                </p>
                                <p className={Style.best_text}> 
                                    <span className={Style.best_sub_text}>{regExp.comma(item.price)} 원</span>
                                    {item.name}
                                </p>
                            </li>
                            
                        )
                    })
                } */}
                <Swiper 
                    slidesPerView={'1.7'}
                    spaceBetween={10}
                >

                    {
                        bestItems.map((item)=>{
                            return(
                                <SwiperSlide >
                                <div className='best_inner'>
                                    <p className={Style.best_img}>
                                        <img src={item.image} alt={item.name} />
                                    </p>
                                    <p className={Style.best_text}> 
                                        <span className={Style.best_sub_text}>{regExp.comma(item.price)} 원</span>
                                        {item.name}
                                    </p>
                                </div>
                                </SwiperSlide>
                                
                            )
                        })
                    }

                </Swiper>

            </div>
        </div>
        {/* <div className={Style.best_btn}>
            <p className={Style.best_bar}>
                <span className={Style.best_pinkbar}></span>
            </p>
        </div> */}
    </section>
  )
}
