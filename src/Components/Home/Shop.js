import React from 'react'
import Style from './css/Shop.module.css'

export default function Shop() {
  return (
    <div className={Style.shop_wrap}>
      <section className={Style.shop}>
        <h2 className='section_title'>Shop Info</h2>
        <p className={Style.shop_title}>매장위치</p>
        <p className={Style.shop_text}>근처 가까운 코코베리 매장을 검색해보세요.</p>

        <div className={Style.search_wrap}>
          <input type="text" size="20" maxlength="20" placeholder="Search" autocomplete="off"></input>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className={Style.shop_map}>

        </div>
      </section>

    </div>
  )
}
