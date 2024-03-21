import React, { useEffect, useRef, useState } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Header() {

    const mainMenu=[
        {key:'0', menuName:'Home', path:'/',subMenuList:[]},
        {key:'1', menuName:'MENU', path:'/menu', subMenuList:[{index:0, name:'메뉴', path:'/menu'}]},
        {key:'2', menuName:'NEWS', path:'/news', subMenuList:[{index:1, name:'이벤트', path:'/news'},{index:2, name:'새소식', path:'/news'}]},
        {key:'3', menuName:'ABOUT US', path:'/aboutus', subMenuList:[{index:3, name:'브랜드 소개', path:'/aboutus'},{index:4, name:'매장 소개', path:'/aboutus_shop'}]},
    ]
    const [category, setCategory] = useState(mainMenu[0].menuName)

    const changeCategory=(category)=>{
        setCategory(category)
    }

    const headerWrap = useRef();
    const submenu = useRef([]);
   
    useEffect(()=>{
        headerWrap.current.style.height='80px'
        for(const item of submenu.current){
            item.style.opacity=0
            item.style.display='none'
        }
    },[])

    function openmenu(){
        gsap.killTweensOf(headerWrap.current)
        gsap.to(headerWrap.current,{height:'230px',duration:0.3, ease:'power1.out'})
        gsap.killTweensOf(submenu.current)
        gsap.to(submenu.current,{display:'block',delay:0.1,ease:'power1.out',duration:0.3,opacity:1})
    }
    function closemenu(){
        gsap.killTweensOf(submenu.current)
        gsap.to(submenu.current,{display:'none',ease:'power1.out',duration:0.3,opacity:1})
        gsap.killTweensOf(headerWrap.current)
        gsap.to(headerWrap.current,{height:'80px',duration:0.5, ease:'power1.out'})

    }


  return (
    // 헤더영역
    <div className={Style.header_wrap} ref={headerWrap} onMouseLeave={closemenu}>
        <header className={Style.header}>
            <Link to='/'>
                <h1 className={Style.logo}><img src='/images/logo.png' alt='cocoberry'></img></h1>
            </Link>
            <nav className={Style.mainmenu} onMouseEnter={openmenu}>
                <h2 className='hidden'>메인메뉴</h2>
                <ul className={Style.mainmenu_list}>

                    {
                        mainMenu.map((item)=>{
                            return(
                                <li onClick={()=>{changeCategory(item.menuName)}}>
                                        {
                                        (item.subMenuList.length < 1) ? 
                                        <>
                                        <Link to={`${item.path}`}> {item.menuName}</Link>
                                        </>
                                        :
                                        <>
                                        <Link to={`${item.path}`}> {item.menuName}</Link>
                                            <ul className={Style.submenu_list}>
                                                {
                                                    item.subMenuList.map((item)=>(
                                                        <li ref={(el)=>{submenu.current[item.index]=el}}><Link to={`${item.path}`}> {item.name}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </>
                                
                                        }

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
 