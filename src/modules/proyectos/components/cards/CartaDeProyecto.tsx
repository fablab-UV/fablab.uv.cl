/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { type Proyecto } from '@/modules/proyectos/interfaces/proyecto.interface'

interface ProyectoProps {
  className?: string
  proyecto: Proyecto
}

const formatoFechaSimplificado = (fecha: string) => {
  const date = new Date(fecha)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

const CartaDeProyecto: React.FC<ProyectoProps> = (props) => {
  return (
    <section className="group h-full flex-col rounded-lg transition-shadow duration-300 hover:shadow-2xl">
      <Link href={props.proyecto.repositorio_url}>
        {/* Contenedor de la carta */}

        <div className="relative h-56 overflow-hidden rounded-t-md">
          {/* Imagen del proyecto */}
          <Image
            src={props.proyecto.imagen}
            alt={props.proyecto.nombre}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            priority
          />
        </div>

        {/* Sección de Texto */}
        <div className="px-3 py-2">
          <h2 className="line-clamp-2 text-lg font-semibold group-hover:text-[#210a3e]">
            {props.proyecto.nombre}
          </h2>
          <p className="text-lg font-extralight">
            {formatoFechaSimplificado(props.proyecto.fecha_creacion)}
          </p>
          <p className="line-clamp-3 text-lg font-normal">
            {props.proyecto.descripcion}
          </p>
        </div>
      </Link>
    </section>
  )
}

export default CartaDeProyecto
