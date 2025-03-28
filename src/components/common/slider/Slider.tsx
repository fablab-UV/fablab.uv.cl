/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import React from 'react'
import SlideItem from './slide/SlideItem'
import 'keen-slider/keen-slider.min.css'
import { type Slider } from './interfaces/slider.interface'

import { useAutoScrollSlider } from './hooks/useAutoScrollSlider'

const AutoScrollSlider: React.FC<Slider> = (props) => {
  const sliderRef = useAutoScrollSlider({
    options: { mode: 'snap' },
    slideCount: props.data.length,
    autoScrollTime: 3000
  })

  return (
    <section
      ref={sliderRef}
      className={`${props.className} keen-slider w-full bg-black`}
    >
      {props.data.map((slide, index) => (
        <div className="bg-black" key={index}>
          <SlideItem slide={slide} />
        </div>
      ))}
    </section>
  )
}

export default AutoScrollSlider
