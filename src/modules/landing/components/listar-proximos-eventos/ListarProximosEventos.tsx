import React, { Suspense, lazy } from 'react'

import eventos from '@/modules/eventos/data/eventos.json'
import { type Evento } from '@/modules/landing/components/listar-proximos-eventos/interfaces/evento.interface'

import ListaProximosEventos from './components/ListaProximosEventos'

import { sortEventsByDateTime } from './utils/sortEventsByDateTime'

interface ListarProximosEventos {
  className?: string
}

const ListarProximosEventos: React.FC<ListarProximosEventos> = (props) => {
  const datos_eventos: Evento[] = eventos

  const sortedEvents = sortEventsByDateTime(datos_eventos)

  return (
    <section>
      <ListaProximosEventos eventos={sortedEvents} className="bg-[#210a3e]" />
    </section>
  )
}

export default ListarProximosEventos
