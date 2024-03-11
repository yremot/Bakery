import React from 'react'
import Style from './css/Strawberry.module.css'

export default function Strawberry() {
  return (
    <div className={Style.contents_wrap}>
        <section className={Style.contents}>
            <h2 className='hidden'>딸기파이 상세</h2>
            <div className={Style.strawberry_img_wrap}>
                <img src="/images/menu/menu1.png" alt="딸기파이" className={Style.main_img}/>
                <ul className={`${Style.sub_img_list} is-flex`}>
                    <li className={Style.selected}><img src="/images/menu/strawberry1.png" alt="딸기파이1" /></li>
                    <li><img src="/images/menu/strawberry2.png" alt="딸기파이2" /></li>
                </ul>
            </div>
            <div className={Style.strawberry_text_wrap}>
                <p className={Style.name}>딸기파이</p>
                <p className={Style.name_eng}>Strawberry Pie</p>
                <p className={Style.text}>바삭하고 달달한 파이 사이에 부드러운 크림과 신선한 딸기가 어우러진 상큼한 맛. 달콤하고 고소한 딸기 파이.</p>
                <p className={Style.price}>가격 : 4,200 원</p>
                <div className={Style.ingredient_wrap}>
                    <p className={Style.ingredient_title}><i class="fa-solid fa-circle"></i>주재료</p>
                    <ul className={`${Style.ingredient_list} is-flex`}>
                        <li>
                            <p className={Style.ingredient_img}></p>
                            <p className={Style.ingredient_name}>딸기</p>
                        </li>
                        <li>
                            <p className={Style.ingredient_img}></p>
                            <p className={Style.ingredient_name}>파이</p>
                        </li>
                        <li>
                            <p className={Style.ingredient_img}></p>
                            <p className={Style.ingredient_name}>생크림</p>
                        </li>
                    </ul>
                </div>

            </div>
            <nav className={`${Style.tab_menu_wrap}`}>
                <h2 className='hidden'>탭메뉴</h2>
                <ul className={`${Style.tab_menu_list} is-flex`}>
                    <li className={Style.selected}>소개</li>
                    <li>리뷰</li>
                </ul>
            </nav>
            <div className={Style.contents_detail}>
                <img src="/images/menu/strawberry_img0.jpg" alt="딸기파이설명이미지" />
                <img src="/images/menu/strawberry_img1.jpg" alt="딸기파이설명이미지2" />
                <button className='btn_pink'>목록 보기</button>
            </div>

        </section>
    </div>
  )
}
