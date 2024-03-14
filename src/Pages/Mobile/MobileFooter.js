import React from 'react'
import Style from './css/MFooter.module.css'

export default function MobileFooter() {
  return (
    <footer className={Style.footer}>
      <p>Address : London, England</p>
      <p>Call Us : 011-1011-0111</p>
      <p>mot0919@naver.com</p>
      <p>Monday-Friday 9:00 am - 06:00 pm</p>
    </footer>
  )
}
