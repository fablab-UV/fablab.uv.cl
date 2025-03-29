import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'

// Importacion del slider y datos
import Slider from '@/components/common/slider/Slider'
import nosotrosSliderData from './data/nosotros-slides.json'

import NosotrosItem from '@/modules/nosotros/views/NosotrosItem'
import EquipamientoDestacado from '@/modules/nosotros/views/EquipamientoDestacado'
import Videos from './views/Videos'

const NosotrosModule: React.FC = () => {
  return (
    <MainLayout>
      <main className="flex flex-col gap-y-12">
        <Slider className="md:h-[45vh] lg:h-[48vh]" data={nosotrosSliderData} />
        <NosotrosItem />
        <EquipamientoDestacado />
        <Videos />
      </main>
    </MainLayout>
  )
}

export { NosotrosModule }
