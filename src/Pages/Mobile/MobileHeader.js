import React from 'react'
import Style from './css/MHeader.module.css'
import { GoBell } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

export default function MobileHeader() {
  return (
    <header className={Style.header}>
        <h1 className={Style.logo}><img src="/images/Mobile/cocoberry.png" alt="cocoberry"/></h1>
        <button><GoBell className={Style.alarm_btn}/></button>
        <button><IoMenu className={Style.menu_btn} /></button>
    </header>
  )
}
