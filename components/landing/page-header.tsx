"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface PageHeaderProps {
  title: string
  highlightedWord: string
  subtitle: string
  label: string
}

export function PageHeader({ title, highlightedWord, subtitle, label }: PageHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 400

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(27, 58, 107, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 400
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const titleParts = title.split(highlightedWord)

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full bg-primary/10">
            {label}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {titleParts[0]}
            <span className="gradient-text">{highlightedWord}</span>
            {titleParts[1]}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
