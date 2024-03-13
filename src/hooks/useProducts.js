import { useEffect, useState } from 'react'
//import axios from 'axios'
import { getProducts } from '../api/firebase'


export default function useProducts() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
        // axios.get('/data/products.json').then((res)=>{
        //     setAllProducts(res.data)
        // })
        
        getProducts().then((res)=>{
          setAllProducts(res)    // 주의 res.data 아님 ( getProducts() 함수 반환값은 바로 배열로 저장됨 ) 
        })   

    },[])

  return (
    [allProducts]
  )
}

