/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import Image from 'next/image'
import headerData from '../../data/header/header-data.json'
import Link from 'next/link'

const DesktopHeader: React.FC = () => {
  const { school, faculty, logoPath } = headerData

  return (
    <div className="header-theme h-36 max-h-36 p-4">
      <div className="mx-24 flex h-full items-center justify-between px-10">
        <Link href="/">
          <div className="relative flex h-24 w-64">
            <Image
              alt="Logo Fablab"
              src={logoPath}
              priority
              fill
              sizes="(max-width: 600px) 100vw,
            (max-width: 900px) 100vw,
            (max-width: 1200px) 100vw,
            (max-width: 1800px) 80vw,
            2560px"
              className="aspect-video object-contain"
            />
          </div>
        </Link>
        <div className="flex h-full flex-col justify-center text-right">
          <h2 className="text-4xl font-bold">{school}</h2>
          <p className="text-2xl">{faculty}</p>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
