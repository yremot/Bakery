import React, { useEffect, useState } from 'react'
import Style from './css/Strawberry.module.css'
import { useParams } from 'react-router-dom'
// import useProducts from '../../hooks/useProducts'
import { getProductDetail } from '../../api/firebase'
import regExp from '../../util/regExp'


export default function Strawberry() {

  const {menuItem} = useParams()

  const [selectProduct, setSelectItem] = useState({})

  useEffect(()=>{
    getProductDetail(menuItem).then((res)=>{
        setSelectItem(res)
    })
    window.scrollTo(0,0)
  }, [menuItem])

//  const [allProducts] = useProducts()
//  // menuItem을 params로 id 값 가져오기
//
//   const selectProduct=getSelectItems(allProducts, menuItem)
//
//   function getSelectItems(allProducts, menuItem){
//     return (
//         allProducts.find((item)=>(item.id===menuItem))
//     )
//   }
 

  return (
    <div className={Style.contents_wrap}>
        <section className={Style.contents}>
            <h2 className='hidden'>{selectProduct?.name} 상세</h2>
            <div className={Style.strawberry_img_wrap}>
                <img src={selectProduct?.image} alt={selectProduct?.name} className={Style.main_img}/>
                {/* <ul className={`${Style.sub_img_list} is-flex`}>
                    <li className={Style.selected}><img src="/images/menu/strawberry1.png" alt="딸기파이1" /></li>
                    <li><img src="/images/menu/strawberry2.png" alt="딸기파이2" /></li>
                </ul> */}
            </div>
            <div className={Style.strawberry_text_wrap}>
                <p className={Style.name}>{selectProduct?.name}</p>
                <p className={Style.name_eng}>{selectProduct?.category}</p>
                <p className={Style.text}>{selectProduct?.text}</p> 
                <p className={Style.price}>가격 :  {regExp.comma(selectProduct?.price)}원</p>
                <div className={Style.ingredient_wrap}>
                    <p className={Style.ingredient_title}><i class="fa-solid fa-circle"></i>주재료</p>
                    <ul className={`${Style.ingredient_list} is-flex`}>
                        <li>
                            <p className={Style.ingredient_img}></p>
                            <p className={Style.ingredient_name}>딸기</p>
                        </li>
                        <li>
                            <p className={Style.ingredient_img}></p>
                            <p className={Style.ingredient_name}>파이</p>
                        </li>
                        <li>
                            <p className={Style.ingredient_img}></p>
                            <p className={Style.ingredient_name}>생크림</p>
                        </li>
                    </ul>
                </div>

            </div>
            <nav className={`${Style.tab_menu_wrap}`}>
                <h2 className='hidden'>탭메뉴</h2>
                <ul className={`${Style.tab_menu_list} is-flex`}>
                    <li className={Style.selected}>소개</li>
                    <li>리뷰</li>
                </ul>
            </nav>
            <div className={Style.contents_detail}>
                <img src="/images/menu/strawberry_img0.jpg" alt="딸기파이설명이미지" />
                <img src="/images/menu/strawberry_img1.jpg" alt="딸기파이설명이미지2" />
                <button className='btn_pink'>목록 보기</button>
            </div>

        </section>
    </div>
  )
}
