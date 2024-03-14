import React from 'react'
import Style from './css/MBest.module.css'
import useProducts from '../../../hooks/useProducts'
import regExp from '../../../util/regExp'

export default function MBest() {

    const [allProducts] = useProducts()

    let bestItems = getBestItems(allProducts)


    function getBestItems(allProducts){
        return(
            allProducts.filter((item)=>(item.isBest===true))
        )
    }

  return (
    <section className={Style.mobile_best}>
        <h2 className='mobile_title'>Best</h2>
        <div className={Style.best_wrap}>
            <ul className={Style.best_list}>
                {
                    bestItems.map((item)=>{
                        return(
                            <li>
                                <p className={Style.best_img}>
                                    <img src={item.image} alt={item.name} />
                                </p>
                                <p className={Style.best_text}> 
                                    <span className={Style.best_sub_text}>{regExp.comma(item.price)} 원</span>
                                    {item.name}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className={Style.best_btn}>
            <p className={Style.best_bar}>
                <span className={Style.best_pinkbar}></span>
            </p>
        </div>
    </section>
  )
}
