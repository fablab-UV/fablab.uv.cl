/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { type Slide } from '../interfaces/slider.interface'

const SlideItem: React.FC<Slide> = ({ slide }) => {
  return (
    <Link href={slide.url}>
      <section
        className={`keen-slider__slide flex cursor-pointer transition-opacity duration-200`}
      >
        <Image
          src={slide.image}
          alt={`Imagen de ${slide.title}`}
          fill
          quality={100}
          priority={true}
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#100e09] via-transparent to-transparent"></div>

        {/* Overlay for the image */}
        {slide.title != null && slide.description != null ? (
          <section className="absolute inset-0 hidden size-full flex-col justify-end p-4 md:flex">
            <div className="relative z-10 mx-32">
              <div className="w-[65vh] rounded-lg bg-white px-10 py-2 shadow-lg transition-transform duration-300 hover:scale-105">
                <h1 className="my-5 text-4xl font-bold">{slide.title}</h1>
                <p className="mb-7 text-base">{slide.description}</p>
              </div>
            </div>
          </section>
        ) : null}
      </section>
    </Link>
  )
}

export default SlideItem
