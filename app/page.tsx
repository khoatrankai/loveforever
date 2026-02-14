'use client'

import { useEffect, useState } from 'react'
import FloatingHearts from '@/components/floating-hearts'
import Hero from '@/components/hero'
import Message from '@/components/message'
import ChaseScene from '@/components/chase-scene'
import Wishes from '@/components/wishes'
import Footer from '@/components/footer'

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      <FloatingHearts />
      <Hero />
      <Message />
      <ChaseScene />
      <Wishes />
      <Footer />
    </main>
  )
}
