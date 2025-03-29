import React from 'react'
import { MapPinIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { type IEvent } from '@/interfaces/events/event.interface'
import { Separator } from '@/components/ui/separator'

interface IEventCardProps {
  className?: string
  event: IEvent
}

const EventCard: React.FC<IEventCardProps> = (props) => {
  const {
    date,
    time,
    title,
    institution,
    isPublic,
    category,
    description,
    location
  } = props.event

  const { className } = props

  return (
    <Card className={`${className} pt-6`}>
      <CardContent>
        <div className="flex">
          <div className="flex flex-col items-center justify-center">
            <div className="whitespace-nowrap text-2xl font-bold text-primary">
              {new Date(date).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short'
              })}
            </div>
            <div className="text-xl font-medium text-muted-foreground">
              {time}
            </div>
          </div>

          <Separator orientation="vertical" className="mx-3 h-auto" />

          <div className="grow overflow-hidden">
            <h3 className="truncate font-bold text-primary">{title}</h3>
            <div className="my-1 grow items-center overflow-hidden truncate font-semibold text-muted-foreground">
              {institution}
            </div>
            <div className="flex w-full gap-2 overflow-hidden">
              <Badge
                variant={isPublic ? 'secondary' : 'outline'}
                className="shrink-0 px-2 py-1"
              >
                {isPublic ? 'Publico' : 'Privado'}
              </Badge>
              <Badge variant="outline" className="truncate">
                <div className="grow overflow-hidden truncate">{category}</div>
              </Badge>
            </div>
          </div>
        </div>

        <Separator orientation="horizontal" className="my-3 w-auto" />

        <p className="line-clamp-2">{description}</p>

        <div className="flex items-center">
          <MapPinIcon className="mr-2 size-4 shrink-0 text-primary" />
          <span className="truncate font-thin">{location}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export { EventCard }
