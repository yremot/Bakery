import React from 'react'
import Style from './css/News.module.css'

export default function News() {
  return (
    <div className={Style.news_wrap}>
        <section className={Style.news}>
            <h2 className='section_title'>News</h2>
            <div className={Style.news_list_wrap}>
                <ul className={`${Style.news_list} is-flex`}>
                    <li>
                      <p className={`${Style.news_img} ${Style.news_img01}`}>딸기 신메뉴 출시</p>
                      <p className={Style.news_title}>딸기 신메뉴 출시</p>
                      <p className={Style.news_text}>신선한 딸기의 달콤함이 가득한 메뉴를 맛보세요.</p>
                    </li>
                    <li>
                      <p className={`${Style.news_img} ${Style.news_img02}`}>선물 패키지 이벤트</p>
                      <p className={Style.news_title}>선물 패키지 이벤트</p>
                      <p className={Style.news_text}>선물용 디저트 박스로 주변인들에게 마음을 전해보세요.</p>
                    </li>
                    <li>
                      <p className={`${Style.news_img} ${Style.news_img03}`}>회원 포인트 적립 이벤트</p> 
                      <p className={Style.news_title}>회원 포인트 적립 이벤트</p>
                      <p className={Style.news_text}>회원가입한 회원들께 이번달 적립 포인트 2배 이벤트를 진행합니다.</p>
                    </li>
                </ul>
                
            </div>
            <button className={Style.news_btn_left}><i class="fa-solid fa-chevron-left"></i></button>
            <button className={Style.news_btn_right}><i class="fa-solid fa-chevron-right"></i></button>
        </section>
    </div>
  )
}
