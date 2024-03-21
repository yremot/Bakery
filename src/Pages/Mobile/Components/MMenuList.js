import React from 'react'
import Style from './css/MSubMenu.module.css'
import { Link } from 'react-router-dom'

export default function MMenuList() {
  return (
    <div className={Style.menu}>
        <nav className={Style.tabmenu_wrap}>
            <h3 className='hidden'>탭메뉴</h3>
            <ul className={`${Style.tabmenu_list} is-flex`}>
                <li className={Style.selected}><a href="#;">All</a></li>
                <li><a href="#;">BREAD</a></li>
                <li><a href="#;">PIE&COOKIE</a></li>
                <li><a href="#;">CAKE</a></li>
            </ul>
        </nav>
        <div className={Style.menulist_wrap}>
            <ul className={Style.menulist}>
                <li><Link to={'/menu/:menuItem'}>
                    <p className={Style.menu_img}>
                        <img src="/images/menu/menu0.png" alt="초코칩 파운드 케이크" />
                    </p>
                    <p className={Style.menu_name}>
                        초코칩파운드케이크
                    </p>
                    <p className={Style.menu_text}>풍부한 크림 치즈와 상큼한 라즈베리가 어우러진 맛있는 크림치즈 케이크.</p>
                    <p className={Style.menu_price}>가격 : 12,000 원</p>
                </Link></li>
                <li>
                    <p className={Style.menu_img}>
                        <img src="/images/menu/menu1.png" alt="초코칩 파운드 케이크" />
                    </p>
                    <p className={Style.menu_name}>
                        초코칩파운드케이크
                    </p>
                    <p className={Style.menu_text}>풍부한 크림 치즈와 상큼한 라즈베리가 어우러진 맛있는 크림치즈 케이크.</p>
                    <p className={Style.menu_price}>가격 : 12,000 원</p>
                </li>
                <li>
                    <p className={Style.menu_img}>
                        <img src="/images/menu/menu2.png" alt="초코칩 파운드 케이크" />
                    </p>
                    <p className={Style.menu_name}>
                        초코칩파운드케이크
                    </p>
                    <p className={Style.menu_text}>풍부한 크림 치즈와 상큼한 라즈베리가 어우러진 맛있는 크림치즈 케이크.</p>
                    <p className={Style.menu_price}>가격 : 12,000 원</p>
                </li>
                <li>
                    <p className={Style.menu_img}>
                        <img src="/images/menu/menu3.png" alt="초코칩 파운드 케이크" />
                    </p>
                    <p className={Style.menu_name}>
                        초코칩파운드케이크
                    </p>
                    <p className={Style.menu_text}>풍부한 크림 치즈와 상큼한 라즈베리가 어우러진 맛있는 크림치즈 케이크.</p>
                    <p className={Style.menu_price}>가격 : 12,000 원</p>
                </li>
                <li>
                    <p className={Style.menu_img}>
                        <img src="/images/menu/menu2.png" alt="초코칩 파운드 케이크" />
                    </p>
                    <p className={Style.menu_name}>
                        초코칩파운드케이크
                    </p>
                    <p className={Style.menu_text}>풍부한 크림 치즈와 상큼한 라즈베리가 어우러진 맛있는 크림치즈 케이크.</p>
                    <p className={Style.menu_price}>가격 : 12,000 원</p>
                </li>
                <li>
                    <p className={Style.menu_img}>
                        <img src="/images/menu/menu3.png" alt="초코칩 파운드 케이크" />
                    </p>
                    <p className={Style.menu_name}>
                        초코칩파운드케이크
                    </p>
                    <p className={Style.menu_text}>풍부한 크림 치즈와 상큼한 라즈베리가 어우러진 맛있는 크림치즈 케이크.</p>
                    <p className={Style.menu_price}>가격 : 12,000 원</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
