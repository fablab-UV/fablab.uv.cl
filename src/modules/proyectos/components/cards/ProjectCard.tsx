/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

import { type IProjectCard } from '@/modules/proyectos/interfaces/project.interface'

interface IProjectCardProps {
  className?: string
  project: IProjectCard
}

const ProjectCard: React.FC<IProjectCardProps> = (props) => {
  const { project, className } = props

  const { title, description, img, href } = project

  return (
    <Link className={`${className} `} href={href}>
      <div className="flex h-full flex-1 flex-col rounded-lg transition-shadow duration-300 hover:shadow-lg">
        <img
          src={img}
          alt={title}
          className="h-52 w-full rounded-t-lg bg-black object-cover"
        />
        <div className="p-3">
          <h2 className="mb-1 font-medium md:text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export { ProjectCard }
