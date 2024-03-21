import React from 'react'
import Style from './css/AboutShop.module.css'
import './css/AboutUs.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiCurledLeaf } from "react-icons/gi";

export default function AboutShop() {
  return (
    <div className='aboutus_wrap'>
      <section className='aboutus'>
         <h2 className='hidden'>매장소개</h2>
         <p className='aboutus_title'><BsThreeDotsVertical className='title_icon' />매장 소개</p>
         <article className={Style.shop_info}>
            <h3 className='hidden'>매장 소개</h3>
            <div className={Style.shop_top_wrap}>
                <p className={Style.shop_info_img1}><img src="./images/AboutUs/shop_info0_.png" alt="매장사진1" /></p>
                <p className={Style.shop_info_img2}><img src="./images/AboutUs/shop_info1_.png" alt="매장사진2" /></p>
                <p className={Style.shop_info_title}>매일 아침 신선한 빵<GiCurledLeaf className={Style.icon}/></p>
                <p className={Style.shop_info_text}>코코베리는 매일 아침 신선한 빵을 굽습니다. 매일 아침마다 새로운 맛과 향을 선사하기 위해 저희는 신선한 재료를 선택하고, 정성껏 준비한 레시피로 빵을 만들어냅니다. </p>
            </div>
            <div className={Style.shop_under_wrap}>
                <p className={Style.shop_info_img3}><img src="./images/AboutUs/shop_info2.png" alt="매장사진3" /></p>
                <p className={Style.shop_info_title}>따뜻하고 편안한 실내<GiCurledLeaf className={Style.icon}/></p>
                <p className={Style.shop_info_text}> 매장 내부는 아늑하고 따뜻한 분위기로 꾸며져 있으며, 고객님들께 편안한 공간을 제공합니다. 신선한 재료와 열정으로 만들어진 다양한 빵과 디저트들은 맛과 향으로 여러분의 입맛을 사로잡을 것입니다. 
 또한, 저희 매장은 편리한 위치에 위치해 있어 접근성이 좋으며, 주변에 주차장도 충분히 마련되어 있습니다. 매일 많은 분들이 찾는 저희 베이커리로 오셔서 특별한 시간을 보내세요.</p>

            </div>

          </article>
          <article classname={Style.shop_map}>
            <h3 className='aboutus_title'><BsThreeDotsVertical className='title_icon' />매장 위치</h3>
            <p className={Style.shop_text}>현재 위치에서 가장 가까운 코코베리 매장을 검색해보세요.</p>
            <div className={Style.search_wrap}>
              <input type="text" size="20" maxlength="20" placeholder="Search" autocomplete="off"></input>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={Style.shop_map}>

            </div>
          </article>
      </section>  
    </div>
  )
}
