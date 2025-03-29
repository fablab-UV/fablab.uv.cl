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
    <Link className={`${className}`} href={href}>
      <section className="">
        <img
          src={img}
          alt={title}
          className="max-h-48 min-h-48 w-full rounded-lg object-cover"
        />
        <div className="pt-1">
          <h2 className="mb-1 font-medium md:text-lg">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </section>
    </Link>
  )
}

export { ProjectCard }
