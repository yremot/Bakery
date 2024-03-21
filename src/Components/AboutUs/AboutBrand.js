import React from 'react'
import Style from './css/AboutBrand.module.css'
import './css/AboutUs.css'
import { BsThreeDotsVertical } from "react-icons/bs";

export default function AboutBrand() {

  window.scrollTo(0,0)
  
  return ( 
    <div className='aboutus_wrap'>
       <section className='aboutus'>
            <h2 className='hidden'>브랜드소개</h2>
            <article className={Style.brand_story}>
                <h3 className='aboutus_title'><BsThreeDotsVertical className='title_icon' />BRAND STORY</h3>
                <p className={Style.story_img}></p>
                <p className={Style.story_title}>맛과 행복이 있는 베이커리</p>
                <p className={Style.story_subtitle}>: Where Happiness is Baked</p>
                <p className={Style.story_text}>건강하고 맛있는 디저트를 위해 끊임없이 고민하고 연구하는 코코베리입니다. 저희는 신선한 재료와 특별한 레시피로 다양한 빵을 구워 여러분께 행복을 전하고자 합니다. 언제나 맛있고 행복한 디저트를 만들겠습니다.
                <br/>
                고객들의 건강과 행복을 위해 신선한 재료와 엄선된 원료를 사용하여 최상의 품질을 추구합니다. 매 순간, 맛과 만족을 위해 끊임없이 노력하는 코코베리가 되겠습니다
                </p>
            </article>

            <article className={Style.brand_keywords}>
                <h3 className='aboutus_title'><BsThreeDotsVertical className='title_icon' />BRAND KEYWORDS</h3>
                <div className={Style.key_list_wrap}>
                  <ul className={`${Style.key_list} is-flex`}>
                    <li>
                        <p className={Style.key_icon}><i class="fa-solid fa-wheat-awn"></i></p>
                        <p className={Style.key_title}>신선한 식재료</p>
                        <p className={Style.key_text}>신선한 식재료를 엄선하여 신선함과 풍미를 담은 디저트</p>
                    </li>
                    <li>
                        <p className={Style.key_icon}><i class="fa-solid fa-cake-candles"></i></p>
                        <p className={Style.key_title}>특별한 디저트</p>
                        <p className={Style.key_text}>특별한 날을 더욱 특별하게 만들어줄 디저트</p>
                    </li>
                    <li>
                        <p className={Style.key_icon}><i class="fa-solid fa-hand-holding-dollar"></i></p>
                        <p className={Style.key_title}>합리적 가격</p>
                        <p className={Style.key_text}>합리적 가격에 훌륭한 품질과 맛</p>
                    </li>
                    <li>
                        <p className={Style.key_icon}><i class="fa-regular fa-lemon"></i></p>
                        <p className={Style.key_title}>저당 디저트</p>
                        <p className={Style.key_text}>저렴한 가격에도 훌륭한 품질과 맛</p>
                    </li>
                  </ul>
                </div>
              
            </article>

            <article className={Style.brand_corevalue}>
                <h3 className='aboutus_title'><BsThreeDotsVertical className='title_icon' />CORE VALUE</h3>
                <div className={Style.core_list_wrap}>
                  <ul className={`${Style.core_list} is-flex`}>
                    <li>
                        <p className={Style.core_img}><img src="./images/AboutUs/value1.png" alt="행복한경험" /></p>
                        <p className={Style.core_title}>행복한 경험</p>
                        <p className={Style.core_text}> 고객들에게 행복과 기쁨을 주는 특별한 경험을</p>
                    </li>
                    <li>
                        <p className={Style.core_img}><img src="./images/AboutUs/value2.png" alt="도전" /></p>
                        <p className={Style.core_title}>도전</p>
                        <p className={Style.core_text}> 도전과 노력을 통해 <br/> 끊임없는 성장을</p>
                    </li>
                    <li>
                        <p className={Style.core_img}><img src="./images/AboutUs/value3.png" alt="함께하는 마음" /></p>
                        <p className={Style.core_title}>함께하는 마음</p>
                        <p className={Style.core_text}> 언제나 직원과 고객들이 하나 된 마음으로 </p>
                    </li>
                  </ul>
                </div>

            </article>


       </section>
    </div>
  )
}
