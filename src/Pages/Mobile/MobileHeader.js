import React, { useEffect, useState } from 'react'
import Style from './css/MHeader.module.css'
import { GoBell } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';

export default function MobileHeader() {
  const mainMenu=[
    {index:'0', menuName:'Home', path:'/',subMenuList:[]},
    {index:'1', menuName:'MENU', path:'/menu', subMenuList:[{index:0, name:'메뉴', path:'/menu'}]},
    {index:'2', menuName:'NEWS', path:'/news', subMenuList:[{index:1, name:'이벤트', path:'/news'},{index:2, name:'새소식', path:'/'}]},
    {index:'3', menuName:'ABOUT US', path:'/aboutus', subMenuList:[{index:3, name:'브랜드 소개', path:'/aboutus'},{index:4, name:'매장 소개', path:'/aboutus_shop'}]},
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const mobilemenu = useRef()  
  const grayLayer = useRef()  

  useEffect(()=>{
    mobilemenu.current.style.right = '-70vw'
    mobilemenu.current.style.display = 'none'
    grayLayer.current.style.display='none'
  },[])

  function openMobileMenu(){
    gsap.set('body,html', {overflow:'hidden'})
    mobilemenu.current.style.display = 'block'
    grayLayer.current.style.display='block'
    gsap.killTweensOf(mobilemenu.current)
    gsap.to(mobilemenu.current,{right:0,duration:0.5,ease:'power1.out'})
  }
  function closeMobileMenu(){
    grayLayer.current.style.display='none'
    gsap.killTweensOf(mobilemenu.current)
    gsap.to(mobilemenu.current,{right:'-70vw',duration:0.5,ease:'power1.out',onComplete:()=>{
      gsap.set('body,html', {overflow:'visible'})
      mobilemenu.current.style.display = 'none'
    }})
    setActiveIndex(null) 
  }

  function changeSelectedIndex(index){
    setActiveIndex(index)
  }


  return (
    <header className={Style.header}>
        <h1 className={Style.logo}><Link to={'/'}><img src="/images/Mobile/cocoberry.png" alt="cocoberry"/></Link></h1>
        <button  className={Style.alarm_btn}><GoBell/></button>
        <button className={Style.menu_btn} onClick={openMobileMenu}><IoMenu  /></button>
        <nav id={Style.mobilemenu} ref={mobilemenu} >                   
          <div id={Style.mobilemenu_inner}>
              <p>환영합니다.<br/>로그인 해주세요.
                  <span id={Style.mobileclose_btn} onClick={closeMobileMenu} ><img src="/images/closebtn.png" alt="닫기"/></span>
              </p>
              <ul id={Style.mobileloginmenu}>
                  <li>로그인</li>
                  <li>회원가입</li>
              </ul>
              <ul id={Style.mobilemenu_list}>        
                {
                  mainMenu.map((item)=>(
                    <li key={item.index} className={`${item.index===activeIndex && Style.selected}`} style={item.index===activeIndex ? {height:55+(55*item.subMenuList.length)} : {height:55}} onClick={()=>{
                      changeSelectedIndex(item.index)
                      }}>
                      {(item.subMenuList.length < 1)?
                      <>
                        {item.menuName}
                      </>
                      :
                      <>
                        {item.menuName}
                        <span className={Style.mobile_icon}><img src="/images/mobilemenu_icon04.png" alt="서브메뉴버튼"/></span>
                        <ul className={Style.mobilesubmenu_list}>
                            {
                              item.subMenuList.map((item)=>(
                                <li><Link to={item.path}>{item.name}</Link></li>
                              ))
                            }
                        </ul>
                      </>

                      }
                    </li>
                  ))
                }


                  {/* <li>HOME</li>
                  <li>MENU
                      <span className={Style.mobile_icon}><img src="/images/mobilemenu_icon04.png" alt="서브메뉴버튼"/></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>메뉴</li>
                      </ul>
                  </li>
                  <li>NEWS
                      <span className={Style.mobile_icon}><img src="/images/mobilemenu_icon04.png" alt="서브메뉴버튼"/></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>이벤트</li>
                          <li>새소식</li>
                      </ul>
                  </li>
                  <li>ABOUT US
                      <span className={Style.mobile_icon}><img src="/images/mobilemenu_icon04.png" alt="서브메뉴버튼"/></span>
                      <ul className={Style.mobilesubmenu_list}>
                          <li>브랜드 소개</li>
                          <li>매장 소개</li>
                      </ul>
                  </li> */}
              </ul>
          </div>
        </nav>
        <div id={Style.mobile_grayLayer} onClick={closeMobileMenu} ref={grayLayer}></div>
    </header>
  )
}
