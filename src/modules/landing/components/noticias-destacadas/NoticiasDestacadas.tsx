'use client'

import { useState } from 'react'
import Image from 'next/image'

import images from './data/noticias-data.json'

const ExpandingCarousel: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center px-8 py-12 xl:px-16 2xl:px-20">
        <div className="flex w-full items-center justify-between pb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Noticas Destacadas</h2>
          <div className="flex cursor-pointer items-center">
            <p className="text-2xl font-light text-[#00B49E] hover:text-[#00C9AC]/80 hover:underline">
              Descubre Más Noticas
            </p>
          </div>
        </div>

        <div className="relative flex gap-4 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-[30vw] flex-1 cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 ease-out ${
                hoveredIndex === index ? 'flex-[2]' : 'flex-[1] opacity-90'
              }`}
              onMouseEnter={() => {
                setHoveredIndex(index)
              }}
              onMouseLeave={() => {
                setHoveredIndex(null)
              }}
            >
              <div className="relative size-full overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={600}
                  height={400}
                  className="size-full rounded-xl object-cover transition-transform duration-300 ease-out hover:scale-105"
                  priority
                />
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 bg-[#100E09]/80 p-4 text-white transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h4 className="line-clamp-2 text-lg font-bold">
                  {image.title}
                </h4>
                <div className="flex gap-4">
                  <p className="text-lg font-medium">{image.category}</p>
                  <p className="text-lg font-light">{image.date}</p>
                </div>
                <p className="line-clamp-3 text-lg">{image.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpandingCarousel
