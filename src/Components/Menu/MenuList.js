import React, { useState } from 'react'
import Style from './css/MenuList.module.css'
import useProducts from '../../hooks/useProducts'
import Menu from './Menu'

export default function MenuList() {

  const [allProducts] = useProducts()

  const initCategory=['All', "BREAD", "PIE&COOKIE", "CAKE"]

  const [allCategory, setAllCategory] = useState(initCategory)

  const [category, setCategory] = useState(initCategory[0])


  const changeCategory=(item)=>{
    setCategory(()=>item)
  }

  const categoryItems=getCategoryItems(allProducts,category)

  function getCategoryItems(allProducts,category){
    if(category==='All'){
        return allProducts
    }else{
        return (
            allProducts.filter((item)=>(item.category===category))
        )
    }
  }

  //console.log(allProducts)
  
  return (
    <div className={Style.menuitem_wrap}>
        <section className={Style.menuitem}>
            <h2 className='hidden'>메뉴리스트</h2>
            <nav className={Style.tabmenu}>
                <h3 class='hidden'>메뉴 탭버튼</h3>
                <ul className={`${Style.tabmenu_list} is-flex`}>
                    {
                        allCategory.map((item)=>{
                            return(
                                <li className={`${category===item && Style.selected}`} onClick={()=>{
                                    changeCategory(item)
                                }}><a href="#;">{item}</a></li>
                            )
                        })
                    }
                    {/* <li className={Style.selected}><a href="#;">All</a></li>
                    <li><a href="#;">NEW</a></li>
                    <li><a href="#;">BEST</a></li>
                    <li><a href="#;">BASIC</a></li> */}

                </ul>
            </nav>
            <div className={Style.menu_list_wrap}>
                <ul className={Style.menu_list}>
                    {
                        categoryItems.map((item)=>{
                            return(
                            <Menu item={item}/> 
                            )
                        })
                    }
                    {/* <li>
                        <p className={Style.menu_img}><a href="#;">
                        <img src="./images/menu/menu0.png" alt="초코칩파운드케이크" />                      
                        </a></p>
                        <p className={Style.menu_name}>초코칩 파운드 케이크</p>
                        <p className={Style.menu_text}>진한 초콜릿 칩이 살짝 녹아있는 고소한 파운드 케이크. 코코베리의 대표 시그니처 메뉴</p>
                        <p className={Style.menu_price}>가격 : 10,000 원</p>
                        <button className={Style.menu_btn}><i class="fa-solid fa-chevron-right"></i></button>
                    </li>
                    <li><Link to='/menu/:menuItem'>
                        <p className={Style.menu_img}><a href="#;">
                        <img src="./images/menu/menu1.png" alt="딸기 파이" />                      
                        </a></p>
                        <p className={Style.menu_name}>딸기 파이</p>
                        <p className={Style.menu_text}>바삭하고 달달한 파이 사이에 부드러운 크림과 신선한 딸기가 어우러진 상큼한 맛. </p>
                        <p className={Style.menu_price}>가격 : 4,200 원</p>
                        <button className={Style.menu_btn}><i class="fa-solid fa-chevron-right"></i></button>
                    </Link></li>
                    <li>
                        <p className={Style.menu_img}><a href="#;">
                        <img src="./images/menu/menu2.png" alt="레몬 머랭 파이" />                      
                        </a></p>
                        <p className={Style.menu_name}>레몬 머랭 파이</p>
                        <p className={Style.menu_text}>상큼한 레몬 머랭 크림과 고소하고 바삭한 타르트 쉘의 완변한 조화를 느낄 수 있는 레몬 머랭 파이</p>
                        <p className={Style.menu_price}>가격 : 12,000 원</p>
                        <button className={Style.menu_btn}><i class="fa-solid fa-chevron-right"></i></button>
                    </li>
                    <li>
                        <p className={Style.menu_img}><a href="#;">
                        <img src="./images/menu/menu3.png" alt="초코칩 쿠키" />                      
                        </a></p>
                        <p className={Style.menu_name}>초코칩 쿠키</p>
                        <p className={Style.menu_text}>구워진 초콜릿 칩이 가득한 바삭하고 촉촉한 초코칩 쿠키.</p>
                        <p className={Style.menu_price}>가격 : 1,200 원</p>
                        <button className={Style.menu_btn}><i class="fa-solid fa-chevron-right"></i></button>
                    </li>
                     */}
                </ul>
            </div>
            <div className={`${Style.page_list_wrap} `}>
                <ul className={`${Style.page_list} is-flex`}>
                    <li className={Style.selected}>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <button className={Style.page_left_btn}><i class="fa-solid fa-chevron-left"></i></button>
                <button className={Style.page_right_btn}><i class="fa-solid fa-chevron-right"></i></button>
            </div>

        </section>
    </div>
  )
}
