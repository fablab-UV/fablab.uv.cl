import React from 'react'

import proyectos2023Data from './data/2023.json'
import proyectos2024Data from './data/2024.json'

import { ProyectView } from './view/ProjectView'

import { type Proyecto } from './interfaces/proyecto.interface'

const ProjectModule: React.FC = () => {
  const proyectos: Proyecto[] = [
    ...proyectos2023Data,
    ...proyectos2024Data
  ].sort((a, b) => {
    const fechaA = new Date(a.fecha_creacion)
    const fechaB = new Date(b.fecha_creacion)
    return fechaB.getTime() - fechaA.getTime()
  })

  return <ProyectView proyectos={proyectos} />
}

export { ProjectModule }
