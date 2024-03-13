import React, { useState } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

    const mainMenu=[
        {key:'0', menuName:'Home', path:'/'},
        {key:'1', menuName:'MENU', path:'/menu'},
        {key:'2', menuName:'NEWS', path:'/news'},
        {key:'3', menuName:'ABOUT US', path:'/aboutus'},
    ]

    const [category, setCategory] = useState(mainMenu[0].menuName)

    const changeCategory=(category)=>{
        setCategory(category)
    }

   


  return (
    // 헤더영역
    <div className={Style.header_wrap}>
        <header className={Style.header}>
            <h1 className={Style.logo}><img src='/images/logo.png' alt='cocoberry'></img></h1>
            <nav className={Style.mainmenu}>
                <h2 className='hidden'>메인메뉴</h2>
                <ul className={Style.mainmenu_list}>

                    {
                        mainMenu.map((item)=>{
                            return(
                                <li className={`${item.menuName===category && Style.selected}`} onClick={()=>{changeCategory(item.menuName)}}>
                                    <Link to={`${item.path}`}> {item.menuName}</Link>
                                </li>
                            )
                        })
                    }

                    {/* <li className={Style.selected}><a href='#;'>HOME</a></li>
                    <li><a href='#;'>MENU</a>
                        <ul className={Style.submenu_list}>
                            <li><a href='#;'>메뉴</a></li>
                        </ul>
                    </li>
                    <li><a href='#;'>NEWS</a>
                        <ul className={Style.submenu_list}>
                            <li><a href='#;'>이벤트</a></li>
                            <li><a href='#;'>새소식</a></li>
                        </ul>
                    </li>
                    <li><a href='#;'>ABOUT US</a>
                        <ul className={Style.submenu_list}>
                            <li><a href='#;'>베이커리 소개</a></li>
                            <li><a href='#;'>매장 위치</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
            <nav className={Style.usermenu}>
                <h2 className='hidden'>사용자메뉴</h2>
                <ul className={Style.usermenu_list}>
                    <li><a href='#;'><i class="fa-regular fa-user"></i></a></li>
                    <li><a href='#;'><i class="fa-solid fa-magnifying-glass"></i></a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
 