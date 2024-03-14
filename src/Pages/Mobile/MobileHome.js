import React from 'react'
import MenuVisual from './Components/MVisual'
import MInfo from './Components/MInfo'
import MNew from './Components/MNew'
import MBrand from './Components/MBrand'
import MBest from './Components/MBest'
import MNews from './Components/MNews'
import MUnderInfo from './Components/MUnderInfo'

export default function MobileHome() {
  return (
    <>
        <MenuVisual/>
        <MInfo/>
        <MNew/>
        <MBrand/>
        <MBest/>
        <MNews/>
        <MUnderInfo/>
    </>
  )
}
