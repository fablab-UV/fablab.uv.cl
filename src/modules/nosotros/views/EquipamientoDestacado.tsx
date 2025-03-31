import React from 'react'
import CardList from '../components/equipamiento/components/Card'

import equipamientoDestacadoData from '../components/equipamiento/data/categorias-equipamiento.json'

const EquipamientoDestacado: React.FC = () => {
  return (
    <section className="">
      <section className="px-8 xl:px-16 2xl:px-20">
        <div className="flex flex-col">
          {/* Contenido del header */}
          <div className="flex flex-col flex-wrap pb-8 sm:flex-row">
            <h1 className="flex flex-1 items-center text-4xl font-bold sm:mb-0 sm:w-2/5">
              Equipamiento
            </h1>
            {/* <p className="flex-1 pl-0 text-2xl font-light">
              Te damos el espacio y los recursos para que tu creatividad tome
              forma y tus ideas se hagan realidad.
            </p> */}
          </div>
        </div>
        {/* Contenido de los cards */}
        <CardList data={equipamientoDestacadoData} />
      </section>
    </section>
  )
}

export default EquipamientoDestacado
