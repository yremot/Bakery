import React from 'react'
import Style from './css/New.module.css'

export default function New() {
  return (
    // 신제품영역
    <div className={Style.new_wrap}>
        <section className={Style.new}>
            <h2 className={Style.new_title}>이달의 신메뉴</h2>
            <p className={Style.new_text}>신선한 딸기의 달콤함이 가득한 메뉴를 맛보세요. 상큼하고 달콤한 국내산 딸기가 듬뿍 들어가 더욱 달콤해졌습니다.</p>
            <button className='btn_pink'>Read More</button>
            <div className={Style.new_list_wrap}>
                <ul className={`${Style.new_list} is-flex`}>
                    <li><a href='#;'>
                    <p className={`${Style.new_item_img} ${Style.scone}`}>생딸기 스콘</p>
                        <p className={Style.new_item_title}>생딸기 스콘</p>
                        <p className={Style.new_item_text}>상큼한 생딸기가 스콘 사이에 듬뿍 들어가 달콤한 크림과 함께 더욱 부드럽고 고소해진 생딸기 스콘</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.new_item_img} ${Style.cake}`}>생딸기 쇼트 케이크</p>
                        <p className={Style.new_item_title}>생딸기 쇼트 케이크</p>
                        <p className={Style.new_item_text}>신선한 생딸기로 장식된 촉촉한 스폰지 케이크에 부드러운 크림이 어우러진 상큼한 딸기 쇼트 케이크</p>
                    </a></li>
                    <li><a href="#;">
                        <p className={`${Style.new_item_img} ${Style.croissant}`}>생딸기 크루아상</p>
                        <p className={Style.new_item_title}>생딸기 크루아상</p>
                        <p className={Style.new_item_text}>신선한 생딸기와 바삭한 크루아상의 만남으로 달콤한 딸기의 맛과 바삭함을 한번에 즐길 수 있는 생딸기 크루아상</p>
                    </a></li>
                </ul>
            </div>
        </section>
    </div>
  )
}
