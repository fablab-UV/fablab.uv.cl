'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PrinterIcon, Lightbulb, ScanIcon, Zap } from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  forWho: string
}

const services: Service[] = [
  {
    icon: PrinterIcon, // Pasar el componente, NO un JSX.Element
    title: 'Impresión 3D para Prototipos',
    description:
      'Transformamos diseños digitales en objetos físicos con tecnologías FDM, DLP y SLA.',
    forWho: 'Estudiantes, investigadores y profesionales'
  },
  {
    icon: Lightbulb,
    title: 'Diseño y Fabricación de Prototipos',
    description:
      'Servicio integral para materializar ideas en proyectos científico-tecnológicos.',
    forWho:
      'Ingenieros, investigadores y profesionales en proyectos de base científica y tecnológica'
  },
  {
    icon: ScanIcon,
    title: 'Escaneo 3D para Ingeniería y Diseño',
    description:
      'Digitalización de objetos físicos para ingeniería, diseño y conservación del patrimonio.',
    forWho: 'Profesionales en ingeniería, diseño y conservación'
  }
]

const QuienesSomosFablabUV: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="px-8 xl:px-16 2xl:px-20">
        <div className="flex flex-1 pb-8 text-center md:text-left">
          {/* Contenedor de la imagen */}
          <div className="relative w-full flex-1 overflow-hidden rounded-md shadow-lg">
            <Image
              src="/assets/img/nosotros/portada/portada.webp"
              alt="FabLab UV"
              width={600}
              height={400}
              className="size-full rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              priority
            />
          </div>

          {/* Sección de Texto */}
          <div className="flex flex-1 flex-col pl-8">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              Quiénes Somos
            </h1>
            <p className="text-2xl">
              FabLab UV es un laboratorio de fabricación digital que ofrece
              soluciones avanzadas para materializar ideas y proyectos
              científico-tecnológicos. Nuestro equipo especializado y tecnología
              de vanguardia nos permiten transformar conceptos en realidades
              tangibles.
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-8 font-bold md:text-4xl">Servicios</h4>
        </div>

        {/* Sección de Servicios */}
        <div className="md:flex md:items-center md:gap-16">
          <div className="flex flex-1 gap-8 md:w-1/2">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceCard: React.FC<Service> = ({
  icon: Icon, // Recibe el componente
  title,
  description,
  forWho
}) => {
  return (
    <Card className="group flex items-center border-t-4 border-[#005896] bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-[#00AAD0] hover:shadow-xl">
      <div>
        <CardHeader className="mb-2 flex flex-row items-center p-0">
          {/* Renderiza el icono correctamente */}
          <Icon className="size-10 text-[#005896] group-hover:text-[#00AAD0]" />
          <CardTitle className="ml-2 text-lg font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-lg">
          <p className="mb-2">{description}</p>
          <div>
            <h4 className="mb-1 flex items-center font-semibold text-[#005896] group-hover:text-[#00AAD0]">
              <Zap className="mr-2" />
              <p>Para quiénes:</p>
            </h4>
            <p className="text-lg font-light">{forWho}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default QuienesSomosFablabUV
