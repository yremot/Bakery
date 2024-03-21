import React from 'react'
import Style from './css/MSubMenuDetail.module.css'
import { Link } from 'react-router-dom'

export default function MMenuDetail() {
  return (
    <div className={Style.menu}>
        <div className={Style.menu_item_wrap}>
            <p className={Style.menu_img}>
                <img src="/images/menu/menu1.png" alt="딸기파이" />
            </p>
            <p className={Style.menu_name}>딸기파이</p>
            <p className={Style.menu_category}>PIE&COOKIE</p>
            <p className={Style.menu_text}>바삭하고 달달한 파이 사이에 부드러운 크림과 신선한 딸기가 어우러진 상큼한 맛. 달콤하고 고소한 딸기 파이.</p>
            <p className={Style.menu_price}>가격 : 4,200 원</p>
            <nav className={Style.tab_menu_wrap}>
                <h2 className='hidden'>탭메뉴</h2>
                <ul className={`${Style.tab_menu_list} is-flex`}>
                    <li className={Style.selected}>소개</li>
                    <li>리뷰</li>
                </ul>
            </nav>
            <div className={Style.contents_detail}>
                <img src="/images/Mobile/menu_detail_img1.png" alt="딸기파이설명이미지" />
                <img src="/images/Mobile/menu_detail_img2.png" alt="딸기파이설명이미지" />
                <Link to={`/menu`}><button className='btn_pink'>목록 보기</button></Link>
            </div>
        </div>


    </div>
  )
}
