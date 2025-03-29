/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { type ITechnology } from '@/interfaces/technologies/technology.interfaces'

// TODO  hacer El href opcional si es necesario
const TechnologyMediumCard: React.FC<ITechnology> = (props) => {
  return (
    <Link href={props.href}>
      <div className="rounded-lg">
        <div className="w-full rounded-lg border border-gray-200 bg-white">
          <img
            src={props.img}
            alt={props.titulo}
            className="h-48 w-full rounded-t-lg object-cover"
          />
          <div className="p-6">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              {props.titulo}
            </h2>
            <p className="mb-6 text-gray-600">{props.descripcion}</p>
            <span className="font-medium text-blue-600">Ver más</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TechnologyMediumCard
