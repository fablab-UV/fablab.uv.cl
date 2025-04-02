'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import menuItems from '@/data/menuItems.json'

const NavBar: React.FC = () => {
  if (menuItems.length > 7) {
    throw new Error('El menú no puede tener más de 7 ítems.')
  }

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let timeoutId: NodeJS.Timeout

  const handleMouseEnter = (item: string): void => {
    clearTimeout(timeoutId)
    setHoveredItem(item)
  }

  const handleMouseLeave = (): void => {
    timeoutId = setTimeout(() => {
      setHoveredItem(null)
    }, 300)
  }

  return (
    <nav className="header-theme relative z-20 flex h-[70px] items-center justify-between px-4 md:px-10">
      <div className="flex w-full items-center">
        {/* Botón de hamburguesa */}
        <button
          className="ml-auto flex flex-col items-center justify-center gap-1 rounded-md border-none p-2 md:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <div className="h-0.5 w-6 bg-white"></div>
          <div className="h-0.5 w-6 bg-white"></div>
          <div className="h-0.5 w-6 bg-white"></div>
        </button>

        {/* Menú principal */}
        <div className="mx-auto hidden md:flex">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => {
                handleMouseEnter(item.name)
              }}
              onMouseLeave={handleMouseLeave}
              className="group relative"
            >
              <Link href={item.href}>
                <Button className="group h-[70px] rounded-none border-none bg-[#210a3e] text-white shadow-none hover:bg-white hover:text-[#0d0d0d]">
                  <span className="transition-transform duration-200 ease-in-out group-hover:scale-110">
                    {item.name.toUpperCase()}
                  </span>
                </Button>
              </Link>

              {item.subItems != null && hoveredItem === item.name && (
                <>
                  {/* Barra blanca que cubre toda la pantalla y se alinea con los subitems */}
                  <div
                    className="fixed left-0 z-40 hidden w-screen bg-white transition-all duration-200 ease-in-out md:block"
                    style={{
                      top: '260px',
                      height: `${item.subItems.length * 60}px`
                    }}
                  ></div>

                  {/* Contenedor de los subitems */}
                  <div className="absolute left-0 top-full z-50 mt-3 hidden w-screen bg-white md:block">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href}>
                        <div className="cursor-pointer p-2 py-4 text-left text-sm text-[#210a3e] hover:bg-gray-100">
                          {subItem.name.toUpperCase()}
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Menú desplegable en mobile */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-[70px] flex flex-col bg-white shadow-md md:hidden">
          {menuItems.map((item) => (
            <div key={item.name} className="border-b border-gray-300">
              <Link href={item.href}>
                <div className="p-4 text-center text-[#210a3e] hover:bg-gray-400">
                  {item.name.toUpperCase()}
                </div>
              </Link>
              {/* Submenú en mobile */}
              {item.subItems != null && (
                <div className="flex flex-col bg-gray-200">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href}>
                      <div className="cursor-pointer p-3 pl-6 text-left text-[#210a3e] hover:bg-gray-400">
                        {subItem.name.toUpperCase()}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="h-px bg-[#210a3e]"></div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
