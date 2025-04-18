import React from 'react'
import { type Proyecto } from '../interfaces/proyecto.interface'

import ListarProyectos from '../components/list/ListarProyectos'
// import Slider from '@/components/common/slider/Slider'

// import proyectosData from '../data/proyectos.json'

// import { LeftSidebar } from '../components/lefftSidebar/LeftSidebar'
// import { getUniqueCategories } from '../utils/getUniqueCategories'

interface ProyectViewProps {
  proyectos: Proyecto[]
}

const ProyectView: React.FC<ProyectViewProps> = (props) => {
  const { proyectos } = props

  // const categories = proyectos.map((proyecto) => proyecto.category)
  // const uniqueCategories = getUniqueCategories(categories)

  return (
    <section className="min-h-screen pb-16">
      {/* <Slider className="md:h-[45vh] lg:h-[48vh]" data={proyectosData} /> */}
      <section className="flex flex-col px-8 pt-8 xl:px-16 2xl:px-20">
        <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
          Nuestros Proyectos
        </h1>
      </section>

      <section className="flex px-8 pt-8 xl:px-16 2xl:px-20">
        {/* <LeftSidebar
          className="flex h-full pr-8"
          categories={uniqueCategories}
        /> */}
        <ListarProyectos proyectos={proyectos} />
      </section>
    </section>
  )
}

export { ProyectView }
