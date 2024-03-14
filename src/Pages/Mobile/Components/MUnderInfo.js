import React from 'react'
import Style from './css/MUnderInfo.module.css'

export default function MUnderInfo() {
  return (
    <div className={Style.mobile_underinfo}>
        <form>
            <p>근처 가까운 코코베리 매장을 검색해보세요.</p>
            <input type="text" size="20" maxlength="20" placeholder="Search" autocomplete="off"></input>
            <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className={Style.banner_wrap}>
            <p className={`${Style.banner1} is-flex`}>테이블오더</p>
            <p className={`${Style.banner2} is-flex`}>가맹점 문의</p>
        </div>
    </div>
  )
}
