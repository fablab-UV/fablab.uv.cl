/* eslint-disable tailwindcss/no-custom-classname */

import { type Evento } from '../interfaces/evento.interface'
import { EventCard } from './TarjetaProximoEvento'

interface IEventListProps {
  className?: string
  eventos: Evento[]
}

const ListaProximosEventos: React.FC<IEventListProps> = (props) => {
  return (
    <section className={`${props.className} overflow-x-auto`}>
      <div className="flex gap-x-4 px-4">
        {props.eventos.map((evento, index) => (
          <div key={index} className="flex-shrink-0">
            <EventCard event={evento} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ListaProximosEventos
