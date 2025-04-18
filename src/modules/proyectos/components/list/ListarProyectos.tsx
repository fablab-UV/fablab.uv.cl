import React from 'react'

import CartaDeProyecto from '../cards/CartaDeProyecto'
import { type Proyecto } from '@/modules/proyectos/interfaces/proyecto.interface'

interface ProyectListProps {
  className?: string
  proyectos: Proyecto[]
}

const ListarProyectos: React.FC<ProyectListProps> = (props) => {
  return (
    <section
      className={`${props.className} grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3`}
    >
      {props.proyectos.map((proyecto, index) => (
        <CartaDeProyecto proyecto={proyecto} key={index} />
      ))}
    </section>
  )
}

export default ListarProyectos
