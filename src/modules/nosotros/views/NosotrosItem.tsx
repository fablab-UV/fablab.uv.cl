'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PrinterIcon, Lightbulb, ScanIcon, Zap } from 'lucide-react'

interface Service {
  icon: JSX.Element
  title: string
  description: string
  forWho: string
}

const services: Service[] = [
  {
    icon: <PrinterIcon className="size-10 text-[#06717e]" />,
    title: 'Impresión 3D para Prototipos',
    description:
      'Transformamos diseños digitales en objetos físicos con tecnologías FDM, DLP y SLA.',
    forWho: 'Estudiantes, investigadores y profesionales'
  },
  {
    icon: <Lightbulb className="size-10 text-[#06717e]" />,
    title: 'Diseño y Fabricación de Prototipos',
    description:
      'Servicio integral para materializar ideas en proyectos científico-tecnológicos.',
    forWho:
      'Ingenieros, investigadores y profesionales en proyectos de base científica y tecnológica'
  },
  {
    icon: <ScanIcon className="size-10 text-[#06717e]" />,
    title: 'Escaneo 3D para Ingeniería y Diseño',
    description:
      'Digitalización de objetos físicos para ingeniería, diseño y conservación del patrimonio.',
    forWho: 'Profesionales en ingeniería, diseño y conservación'
  }
]

const QuienesSomosFablabUV: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:items-center md:gap-16">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-5xl font-bold text-[#210a3e] md:text-6xl">
              Quiénes Somos
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-xl md:mx-0">
              FabLab UV es un laboratorio de fabricación digital que ofrece
              soluciones avanzadas para materializar ideas y proyectos
              científico-tecnológicos. Nuestro equipo especializado y tecnología
              de vanguardia nos permiten transformar conceptos en realidades
              tangibles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:w-1/2">
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
  icon,
  title,
  description,
  forWho
}) => {
  return (
    <Card className="flex items-center border-t-4 border-[#06717e] bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="mr-4">{icon}</div>
      <div>
        <CardHeader className="p-0">
          <CardTitle className="mb-2 text-xl font-semibold text-[#210a3e]">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="mb-2 text-gray-600">{description}</p>
          <div>
            <h4 className="flex items-center font-semibold text-[#06717e]">
              <Zap className="mr-2 size-4" />
              <p>Para quiénes:</p>
            </h4>
            <p className="font-extralight text-gray-700">{forWho}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default QuienesSomosFablabUV
