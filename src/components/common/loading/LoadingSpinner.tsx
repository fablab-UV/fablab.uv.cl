/* eslint-disable tailwindcss/no-custom-classname */
// TODO Revisar y estandarizar

import React from 'react'

interface LoadingSpinnerProps {
  size?: number // Tamaño en pixeles
  color?: string // Color del borde del spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 64,
  color = 'blue'
}) => {
  const spinnerSize = `${size}px`
  return (
    <div className="flex size-full items-center justify-center">
      <div
        className={`animate-spin rounded-full border-t-4 ${color}-500 border-black/50`}
        style={{ width: spinnerSize, height: spinnerSize }}
      ></div>
    </div>
  )
}

export default LoadingSpinner
