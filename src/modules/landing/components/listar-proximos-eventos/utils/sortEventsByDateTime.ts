// utils.ts

import { type IEvent } from '@/modules/landing/components/listar-proximos-eventos/interfaces/evento.interface'

export function sortEventsByDateTime(events: IEvent[]): IEvent[] {
  return events.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`).getTime()
    const dateB = new Date(`${b.date}T${b.time}`).getTime()
    return dateA - dateB
  })
}
