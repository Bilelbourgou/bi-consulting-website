"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lightbulb, Target, TrendingUp, ArrowRight } from "lucide-react"

const highlights = [
  {
    icon: Lightbulb,
    title: "Expertise",
    description:
      "Une équipe de professionnels passionnés avec une expertise technique approfondie.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "Des solutions à la pointe de la technologie pour répondre aux défis de demain.",
  },
  {
    icon: TrendingUp,
    title: "Résultats",
    description:
      "Un engagement envers l'excellence et des résultats mesurables pour votre entreprise.",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Une entreprise{" "}
              <span className="gradient-text">innovante</span> au service de
              votre croissance
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              B&amp;I Consulting est une entreprise innovante spécialisée dans
              la technologie et le marketing digital. Notre mission est
              d&apos;accompagner les entreprises dans leur transformation
              digitale en proposant des solutions sur mesure, adaptées à leurs
              besoins spécifiques.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Avec une équipe pluridisciplinaire d&apos;experts, nous combinons
              créativité et expertise technique pour délivrer des projets
              d&apos;excellence qui génèrent des résultats concrets et
              mesurables.
            </p>
            
            <Button
              size="lg"
              className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/about">
                En savoir plus
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, x: -8 }}
                className="glass rounded-2xl p-6 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                  >
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
