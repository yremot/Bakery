import React from 'react'
import Style from './css/MNews.module.css'

export default function MNews() {
  return (
    <section className={Style.mobile_news}>
        <h2 className='mobile_title'>News</h2>
        <div className={Style.news_list_wrap}>
            <ul className={Style.news_list}>
                <li>
                    <p className={Style.news_img}>
                        <img src="/images/Mobile/news0.png" alt="적립이벤트 사진" />
                    </p>
                    <p className={Style.news_title}>
                    회원 포인트 적립 이벤트
                    </p>
                    <p className={Style.news_text}>
                    회원가입한 회원들께 이번달 적립 포인트 2배 이벤트를 진행합니다.
                    </p>
                </li>
                <li>
                    <p className={Style.news_img}>
                        <img src="/images/Mobile/news1.png" alt="신메뉴 홍보 사진" />
                    </p>
                    <p className={Style.news_title}>
                    딸기 신메뉴 출시
                    </p>
                    <p className={Style.news_text}>
                    신선한 딸기의 달콤함이 가득한 메뉴를 맛보세요.
                    </p>
                </li>
            </ul>
        </div>
        <button className={Style.news_btn}>Read More</button>

    </section>
  )
}
