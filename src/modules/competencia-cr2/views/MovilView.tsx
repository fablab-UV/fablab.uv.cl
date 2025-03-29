import React from 'react'
import Image from 'next/image'

import competenciaData from '../data/competencia.json'
import postData from '../data/postData.json'

import { EventCard } from '../components/EventCard'

const MovilView: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen w-full">
        <Image
          src={competenciaData.image}
          alt={`Imagen de ${competenciaData.title}`}
          layout="fill"
          objectPosition="center"
        />
      </section>

      <section className="hidden pt-8 lg:flex">
        <div className="w-full">
          <h2 className="text-pink-fluor size-full text-center font-bold md:text-2xl lg:text-4xl">
            ¡EL EVENTO DE ROBÓTICA ÚNICO EN VALPARAÍSO, ESTÁ DE VUELTA!
          </h2>
        </div>
      </section>

      <section className="p-8">
        <EventCard
          imageUrl={postData.image}
          title="VIRALBOTS 2024"
          description="Si eres estudiante de enseñanza media, profesor, innovador y tu mente ya está fuera de la caja. Este día es para ti 🙌."
          location="General Cruz 222, Valparaíso. Facultad de Ingeniería Universidad de Valparaíso."
        />
      </section>
    </div>
  )
}

export { MovilView }
