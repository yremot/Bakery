import React from 'react'
import Style from './css/NewsList.module.css'

export default function NewsList() {
  return (
    <div className={Style.news_wrap}>
        <section className={Style.news}>
            <h2 className='hidden'>뉴스목록</h2>
            <div className={Style.news_list_wrap}>
                <ul className={Style.news_list}>
                    <li>
                        <p className={Style.date_bar}>March 2024</p>
                        <p className={Style.date}>30</p>
                        <p className={Style.month}>March</p>
                        <p className={Style.day}>SATURDAY</p>
                        <p className={Style.title}>딸기 신메뉴 출시</p>
                        <p className={Style.text}>신선한 딸기의 달콤함이 가득한 메뉴를 맛보세요.</p>
                        <button>Read More</button>
                    </li>
                    <li>
                        <p className={Style.date_bar}>March 2024</p>
                        <p className={Style.date}>29</p>
                        <p className={Style.month}>March</p>
                        <p className={Style.day}>SATURDAY</p>
                        <p className={Style.title}>선물 패키지 이벤트</p>
                        <p className={Style.text}>선물용 디저트 박스로 주변인들에게 마음을 전해보세요.</p>
                        <button>Read More</button>
                    </li>
                    <li>
                        <p className={Style.date_bar}>March 2024</p>
                        <p className={Style.date}>28</p>
                        <p className={Style.month}>March</p>
                        <p className={Style.day}>SATURDAY</p>
                        <p className={Style.title}>회원 포인트 적립 이벤트</p>
                        <p className={Style.text}>회원가입한 회원들께 이번달 적립 포인트 2배 이벤트를 진행합니다.</p>
                        <button>Read More</button>
                    </li>
                    <li>
                        <p className={Style.date_bar}>March 2024</p>
                        <p className={Style.date}>27</p>
                        <p className={Style.month}>March</p>
                        <p className={Style.day}>SATURDAY</p>
                        <p className={Style.title}>딸기 신메뉴 출시</p>
                        <p className={Style.text}>신선한 딸기의 달콤함이 가득한 메뉴를 맛보세요.</p>
                        <button>Read More</button>
                    </li>
                    <li>
                        <p className={Style.date_bar}>March 2024</p>
                        <p className={Style.date}>26</p>
                        <p className={Style.month}>March</p>
                        <p className={Style.day}>SATURDAY</p>
                        <p className={Style.title}>선물 패키지 이벤트</p>
                        <p className={Style.text}>선물용 디저트 박스로 주변인들에게 마음을 전해보세요.</p>
                        <button>Read More</button>
                    </li>
                    <li>
                        <p className={Style.date_bar}>March 2024</p>
                        <p className={Style.date}>25</p>
                        <p className={Style.month}>March</p>
                        <p className={Style.day}>SATURDAY</p>
                        <p className={Style.title}>회원 포인트 적립 이벤트</p>
                        <p className={Style.text}>회원가입한 회원들께 이번달 적립 포인트 2배 이벤트를 진행합니다.</p>
                        <button>Read More</button>
                    </li>


                </ul>
            </div>

            <div className={`${Style.page_list_wrap} `}>
                <ul className={`${Style.page_list} is-flex`}>
                    <li className={Style.selected}>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <button className={Style.page_left_btn}><i class="fa-solid fa-chevron-left"></i></button>
                <button className={Style.page_right_btn}><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>
    </div>
  )
}
