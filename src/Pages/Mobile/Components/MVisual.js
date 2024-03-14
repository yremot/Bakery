import React from 'react'
import Style from './css/MVisual.module.css'

export default function MVisual() {
  return (
    <div className={Style.visual_wrap}>
      <ul className={Style.visual_list}>
        <li>
          <p className={Style.visual_title}>비주얼, 맛 모두를 사로잡은 디저트</p>
        </li>
        <li>
          <p className={Style.visual_title}>비주얼, 맛 모두를 사로잡은 디저트</p>
        </li>
        <li>
          <p className={Style.visual_title}>비주얼, 맛 모두를 사로잡은 디저트</p>
        </li>
      </ul>
      <div className={Style.dot_wrap}>
        <ul className={`${Style.dot_list} is-flex`}>
          <li className={Style.selected}></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
