import React from 'react'
import { Link } from 'react-router-dom'
import Style from './css/Menu.module.css'

export default function Menu({item}) {
  return (
    <li>
        <Link to={`/menu/${item.id}`}>
            <p className={Style.menu_img}><a href="#;">
            <img src={item.image} alt={item.name} />           
            </a></p>
            <p className={Style.menu_name}>{item.name} 
            {
                ((item.isNew)&&<span>New</span>) || ((item.isBest)&&<span>Best</span>)
            }
            </p>
            <p className={Style.menu_text}>{item.text}</p>
            <p className={Style.menu_price}>가격 : {item.price} 원</p>
            <button className={Style.menu_btn}><i class="fa-solid fa-chevron-right"></i></button>
        </Link>
    </li>
  )
}
