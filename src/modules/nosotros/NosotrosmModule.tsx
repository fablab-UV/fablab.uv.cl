import React from 'react'
import { MainLayout } from '@/layouts/main-layout/MainLayout'

import NosotrosItem from '@/modules/nosotros/views/NosotrosItem'

// Importacion del slider y datos
import Slider from '@/components/common/slider/Slider'
import nosotrosSliderData from './data/nosotros-slides.json'

const NosotrosModule: React.FC = () => {
  return (
    <MainLayout>
      <Slider className="md:h-[45vh] lg:h-[48vh]" data={nosotrosSliderData} />
      <NosotrosItem />
    </MainLayout>
  )
}

export { NosotrosModule }
