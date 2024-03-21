import React from 'react'
import Style from './css/BrandInfo.module.css'
import { Link } from 'react-router-dom'

export default function Brand_Info() {
  return (
    // 브랜드영역
    <div className={Style.brand_wrap}>
        <section className={Style.brand}>
            <h2 className='hidden'>브랜드소개</h2>
            <p className={Style.brand_img}>
                <img src='./images/contents/brand.png' alt="브랜드이미지"/>
            </p>
            <div className={Style.brand_box}>
                <p className={Style.title}>
                맛과 행복이 있는 베이커리
                </p>
                <p className={Style.sub_title}>
                : Where Happiness is Baked
                </p>
                <p className={Style.text}>
                건강하고 맛있는 디저트를 위해 끊임없이 고민하고 연구하는 베이커리입니다. 저희는 신선한 재료와 특별한 레시피로 다양한 빵을 구워 여러분께 행복을 전하고자 합니다. 언제나 맛있고 행복한 디저트를 만들겠습니다.
                </p>
                <Link to={'/aboutus'}><button className='btn_pink'>Read More</button></Link>
            </div>
        </section>
    </div>
  )
}
