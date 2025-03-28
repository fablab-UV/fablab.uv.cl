import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button' // Asegúrate de tener el botón de ShadCN configurado

interface EventCardProps {
  imageUrl: string
  title: string
  description: string
  location: string
}

const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,

  description,
  location
}) => {
  return (
    <div className="flex h-[85vh] flex-col overflow-hidden rounded-lg bg-white p-8 shadow-lg md:flex-row">
      {/* Imagen del evento */}
      <div className="relative md:h-auto md:w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-contain object-center"
        />
      </div>

      {/* Contenido */}
      <div className="hidden flex-col md:flex md:w-1/2">
        <div>
          <p className="mb-6 text-base text-gray-600">{description}</p>

          <p className="font-bold">¿Qué experiencia vivirás?</p>

          {/* Lista de características */}
          <ul className="mb-4 space-y-2 pt-6">
            <li className="flex items-center">
              <span className="text-pink-fluor mr-2">🤖</span> Competencia
              Performática Escolar de Robótica Regional
            </li>
            <li className="flex items-center">
              <span className="text-pink-fluor mr-2">🔍</span> Expo Ingeniería &
              Tecnología UV + Expo Póster de Arte Generativo
            </li>
            <li className="flex items-center">
              <span className="text-pink-fluor mr-2">🎶</span> Música,
              Foodtrucks y la mejor energía para compartir
            </li>
          </ul>

          <span>
            ¡Coméntale a tus amigos, corre a inscribirte y eleva tu pasión por
            la tecnología!
          </span>

          <p className="mb-4 font-bold">¡100% GRATIS 🚀!</p>

          <p>
            📍
            <span className="font-bold">Direccion: </span>
            <span className="font-semibold">{location}</span>
          </p>
        </div>

        {/* Botón de acción */}
        <div className="pt-6">
          <Button variant="default" className="header-theme h-12 w-full">
            <p className="p-4 text-xl">Sé parte del gran día</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { EventCard }
