import React from 'react'
import Visual from '../Components/Home/Visual'
import New from '../Components/Home/New'
import Info from '../Components/Home/Info'
import BrandInfo from '../Components/Home/BrandInfo'
import Best from '../Components/Home/Best'
import News from '../Components/Home/News'
import Shop from '../Components/Home/Shop'
import Banner from '../Components/Home/Banner'

export default function Home() {
  return (
    <>
      <Visual/>
      <Info/>
      <New/>
      <BrandInfo/>
      <Best/>
      <News/>
      <Shop/>
      <Banner/>
    </>
  )
}
