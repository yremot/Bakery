import React from 'react'
import Style from './css/MInfo.module.css'

export default function Info() {
  return (
    // 정보영역
    <section className={Style.info}>
        <h2 className='hidden'>기본정보</h2>
        <ul className={`${Style.info_list} is-flex`}>
            <li>
                <p className={Style.info_icon}><i class="fa-solid fa-wheat-awn"></i></p>
                <p className={Style.info_text}>신선한 식재료</p>
            </li>
            <li>
                <p className={Style.info_icon}><i class="fa-solid fa-cake-candles"></i></p>
                <p className={Style.info_text}>특별한 디저트</p>
            </li>
            <li>
                <p className={Style.info_icon}><i class="fa-solid fa-hand-holding-dollar"></i></p>
                <p className={Style.info_text}>합리적 가격</p>
            </li>
            <li>
                <p className={Style.info_icon}><i class="fa-regular fa-lemon"></i></p>
                <p className={Style.info_text}>저당 디저트</p>
            </li>
        </ul>
    </section>
  )
}
