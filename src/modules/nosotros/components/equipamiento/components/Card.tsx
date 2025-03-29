'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface CardProps {
  image: string
  title: string
  description?: string
  link?: string
  color?: string
  opacity?: string
}

const Card: React.FC<CardProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const backgroundColor =
    props.color != null && /^#[0-9A-Fa-f]{6}$/.test(props.color)
      ? `${props.color}${props.opacity ?? 'CC'}`
      : '#000000CC'

  return (
    <motion.div
      className="mb-6 flex flex-col sm:mb-0 md:w-1/3"
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <div className="relative w-full flex-1 overflow-hidden rounded-md hover:shadow-xl">
        <div className="relative h-[32vw] w-full flex-1 overflow-hidden rounded-md">
          <Image
            src={props.image}
            alt={props.title}
            width={600}
            height={400}
            className="size-full rounded-md object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            priority
          />
        </div>

        {/* Overlay con contenido animado */}
        <motion.div
          animate={{ y: isHovered ? 0 : '100%' }}
          className="absolute inset-x-0 bottom-0 z-10 p-4 text-white"
          style={{
            backgroundColor
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <h2 className="text-xl font-bold">{props.title}</h2>
          <p className="mt-2 line-clamp-3 text-xl font-light">
            {props.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

interface CardListProps {
  data: CardProps[]
}

const CardList: React.FC<CardListProps> = (props) => {
  return (
    <div className="flex gap-4">
      {props.data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}

export default CardList
