/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useTransform, useScroll } from 'framer-motion'
import { type Slide } from '../interfaces/slider.interface'

const SlideItem: React.FC<Slide> = ({ slide }) => {
  const { scrollYProgress } = useScroll() // Captura el progreso del scroll

  // Efecto de desplazamiento de la imagen (Parallax)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  // Efecto de Zoom en la imagen
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <div className="keen-slider__slide relative flex cursor-pointer transition-opacity duration-200">
      {slide.url != null ? (
        <Link href={slide.url} className="absolute inset-0 z-10">
          <span className="sr-only">Ir a {slide.title}</span>
        </Link>
      ) : (
        <div className="absolute inset-0 z-10" />
      )}

      {/* Imagen con efecto parallax y zoom */}
      <motion.div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 size-[110%]"
        >
          <Image
            src={slide.image}
            alt={`Imagen de ${slide.title}`}
            fill
            quality={100}
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* Overlay de fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#210a3e] via-transparent to-transparent"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#210a3e] via-transparent to-transparent"></div> */}

      {/* Contenido */}
      {slide.title != null && slide.description != null && (
        <div className="absolute inset-0 hidden flex-col justify-end p-4 md:flex">
          <div className="relative z-10 mx-32">
            <motion.div
              className="w-[65vh] rounded-lg bg-white px-10 py-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="my-5 text-4xl font-bold">{slide.title}</h1>
              <p className="mb-7 text-base">{slide.description}</p>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SlideItem
