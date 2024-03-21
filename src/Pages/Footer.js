import React from 'react'
import Style from './css/Footer.module.css'

export default function Footer() {
  return (
    <div className={Style.footer_wrap}>
        <footer className={Style.footer}>
            <h2 class="hidden">하단영역</h2>
            <p>
                (우) 44687 부산광역시 남구 옥현로 129, 울산벤처빌딩 802호 인플러스
            </p>
            <ul className={Style.footer_list}>
                <li>
                    Tex : (012)345-6789
                </li>
                <li>
                    Fax :(012)345-6789
                </li>
                <li>
                    Email : aaaa0919@naver.com
                </li>
            </ul>
            <p>
                ⓒ INPLUS all rights reserved.
            </p>
        </footer>
    </div>
  )
}
