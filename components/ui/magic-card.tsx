'use client'

import React, { useState, useRef } from 'react'

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  isMagic?: boolean
  className?: string
}

export function MagicCard({
  children,
  isMagic = false,
  className = '',
  ...props
}: MagicCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMagic || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
      className={`
        relative overflow-hidden rounded-xl border border-border
        bg-background backdrop-blur-md
        transition-all duration-300 ease-out
        ${isMagic ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {isMagic && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--glow),
              transparent 70%)`,
            transition: 'opacity glow0.4s ease, background 0.1s ease',
          }}
        />
      )}

      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  )
}
