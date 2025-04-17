import React from 'react'
import { type IProjectCard } from '../interfaces/project.interface'

import { ProyectList } from '../components/list/ProyectList'
// import Slider from '@/components/common/slider/Slider'

// import proyectosData from '../data/proyectos.json'

// import { LeftSidebar } from '../components/lefftSidebar/LeftSidebar'
// import { getUniqueCategories } from '../utils/getUniqueCategories'

interface ProyectViewProps {
  proyectos: IProjectCard[]
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
          Proyectos
        </h1>
        <p className="mt-2 text-lg md:text-xl lg:text-xl">
          Aquí puedes ver los proyectos todos los proyectos realizados por el
          FabLab UV
        </p>
      </section>

      <section className="flex px-8 pt-8 xl:px-16 2xl:px-20">
        {/* <LeftSidebar
          className="flex h-full pr-8"
          categories={uniqueCategories}
        /> */}
        <ProyectList projects={proyectos} />
      </section>
    </section>
  )
}

export { ProyectView }
