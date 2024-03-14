import useProducts from '../../hooks/useProducts'
import regExp from '../../util/regExp'
import Style from './css/Best.module.css'


export default function Best() {


 const [allProducts]=useProducts()

  let bestProduts=getBestItems(allProducts)

  bestProduts=bestProduts.slice(1)

  function getBestItems(products){
    return (
       products.filter((item)=>(item.isBest===true))
    )
  }




  return (
    <div className={Style.best_wrap}>
        <div className={`${Style.best_item} ${Style.best1}`}>
            <p className={Style.best_item_name}>
                초코칩 파운드 케이크
                <span>10,000 원</span>
            </p>
        </div>
        <section className={Style.best}>
            <h2 className='hidden'>베스트메뉴</h2>
            <p className={Style.sign}><img src="./images/contents/diamond.png" alt="다이아 기호" />OUR SIGNITURE</p>
            <p className={Style.title}>BEST MENU</p>
            <div className={Style.best_list_wrap}>
                <ul className={`${Style.best_list} is-flex`}>
                    <li>
                        <p className={Style.icon}><i class="fa-solid fa-bread-slice"></i></p>
                        <p className={Style.num}>Top 1</p>
                        <p className={Style.best_title}>초코칩 파운드 케이크</p>
                        <p className={Style.best_text}>진한 초콜릿 칩이 살짝 녹아있는 고소한 파운드 케이크. 코코베리의 대표 시그니처 메뉴</p>
                    </li>
                    <li>
                        <p className={Style.icon}><i class="fa-solid fa-cheese"></i></p>
                        <p className={Style.num}>Top 2</p>
                        <p className={Style.best_title}>몽블랑</p>
                        <p className={Style.best_text}>밤이 들어가 더욱 고소하고 풍부한 크림에 더욱 고급스러워진 몽블랑 </p>
                    </li>
                    <li>
                        <p className={Style.icon}><i class="fa-solid fa-cookie"></i></p>
                        <p className={Style.num}>Top 3</p>
                        <p className={Style.best_title}>레몬 머랭 파이</p>
                        <p className={Style.best_text}>상큼한 레몬 머랭 크림과 고소하고 바삭한 타르트 쉘의 완변한 조화를 느낄 수 있는 레몬 머랭 파이</p>
                    </li>
                </ul>
            </div>


        </section>
        {/* <div className={`${Style.best_item} ${Style.best2}`}>
            <p className={Style.best_item_name}>
                <span>Top 2</span>
                몽블랑
            </p>
        </div>
        <div className={`${Style.best_item} ${Style.best3}`}>
            <p className={Style.best_item_name}>
                <span>Top 3</span>
                레몬 머랭 파이
            </p>
        </div>
        <div className={`${Style.best_item} ${Style.best4}`}>
            <p className={Style.best_item_name}>
                <span>Top 4</span>
                크림 초코칩 쿠키
            </p>
        </div>
        <div className={`${Style.best_item} ${Style.best5}`}>
            <div className={Style.selected}><i class="fa-solid fa-circle-plus"></i></div>
            <p className={Style.best_item_name}>
                <span>Top 5</span>
                우유 롤케이크
            </p>
        </div> */}

        {
            bestProduts.map((item)=>{
               return(
                <div className={`${Style.best_item} ${Style.best2}`}>
                    <p className={Style.best_item_image}><img src={item.image} alt={item.name} /></p>
                    <p className={Style.best_item_name}>
                    {item.name} 
                    <span>{regExp.comma(item.price)} 원</span>
                    </p>


                </div>
               )
            })
        
        }




       
    

    </div>
  )
}
