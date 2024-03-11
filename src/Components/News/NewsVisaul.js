import React from 'react'
import Style from './css/NewsVisual.module.css'

export default function NewsVisual() {
  return (
    <div className={`${Style.sub_visual} sub_visual_wrap`}>
      <section className='sub_visual is-flex'>
        <h2 class='sub_title'>News</h2>
      </section>

    </div>
  )
}
