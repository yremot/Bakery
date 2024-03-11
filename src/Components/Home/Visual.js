import React from 'react'
import Style from './css/Visual.module.css'

export default function Visual() {
  return (
    // 비주얼영역
    <div className={Style.visual_wrap}>
        <ul className={Style.visual_list}>
            <li className={Style.visual0}>
                <section className={Style.visual}>
                    <h2 className={Style.visual_title}>CoCoBerry</h2>
                    <p className={Style.visual_text}>비주얼, 맛 모두를 사로잡은 디저트</p>
                </section>
            </li>
            <li className={Style.visual1}>
                <section className={Style.visual}>
                    <h2 className={Style.visual_title}>CoCoBerry</h2>
                    <p className={Style.visual_text}>비주얼, 맛 모두를 사로잡은 디저트</p>
                </section>
            </li>
            <li className={Style.visual2}>
                <section className={Style.visual}>
                    <h2 className={Style.visual_title}>CoCoBerry</h2>
                    <p className={Style.visual_text}>비주얼, 맛 모두를 사로잡은 디저트</p>
                </section>
            </li>
        </ul>
        <div className={Style.dot_list_wrap} >
            <ul className={`${Style.dot_list} is-flex`}>
                <li className={Style.selected}></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>
  )
}
