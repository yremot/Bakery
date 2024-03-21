import React from 'react'
import Style from './css/MSubMenu.module.css'
import { Link } from 'react-router-dom'

export default function MMenuSubVisual() {
  return (
    <div className={`${Style.mobile_sub_visual} is-flex`}>
      <p><Link to={'/menu'}>MENU</Link></p>
    </div>
  )
}
