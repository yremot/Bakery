import React from 'react'
import Style from './css/MBrand.module.css'

export default function MBrand() {
  return (
    <section className={Style.brand}>
        <h2 className='hidden'>브랜드 스토리</h2>
        <p className={Style.brand_img}><img src="/images/Mobile/brand0.png" alt="브랜드 이미지" /></p>
        <p className={Style.title}>맛과 행복이 있는 베이커리</p>
        <p className={Style.sub_title}>: Where Happiness is Baked</p>
        <p className={Style.text}>
        건강하고 맛있는 디저트를 위해 끊임없이 고민하고 연구하는 베이커리입니다. 저희는 신선한 재료와 특별한 레시피로 다양한 빵을 구워 여러분께 행복을 전하고자 합니다. 
        </p>
    </section>
  )
}
