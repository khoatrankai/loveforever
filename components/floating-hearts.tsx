'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  duration: number
  size: number
  delay: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const initialHearts: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      size: 20 + Math.random() * 30,
      delay: Math.random() * 2,
    }))
    setHearts(initialHearts)

    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHearts = [...prev]
        const randomIndex = Math.floor(Math.random() * newHearts.length)
        newHearts[randomIndex] = {
          ...newHearts[randomIndex],
          id: Math.random(),
          left: Math.random() * 100,
          delay: 0,
        }
        return newHearts
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.duration}s linear forwards`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
