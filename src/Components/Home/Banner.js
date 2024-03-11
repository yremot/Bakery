import React from 'react'
import Style from './css/Banner.module.css'

export default function Banner() {
  return (
    <div className={Style.banner_wrap}>
        <div className={`${Style.banner_table} is-flex`}><a href="#;">
        <p>테이블오더</p>
        </a></div>
        <div className={`${Style.banner_shop} is-flex`}><a href="#;">
        <p>가맹점문의</p>
        </a></div>

    </div>
  )
}
