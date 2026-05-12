"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Analyse",
    description:
      "Nous étudions vos besoins, vos objectifs et votre marché pour comprendre parfaitement votre projet.",
    icon: Search,
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "Nous élaborons une stratégie sur mesure avec un plan d'action détaillé et des KPIs clairs.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Notre équipe technique met en œuvre la solution avec les meilleures technologies du marché.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Lancement",
    description:
      "Nous déployons votre projet et assurons une mise en production fluide et sécurisée.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Optimisation",
    description:
      "Nous analysons les performances et optimisons continuellement pour maximiser vos résultats.",
    icon: TrendingUp,
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Notre Processus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Comment nous <span className="gradient-text">travaillons</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Une méthodologie éprouvée pour transformer vos idées en solutions
            concrètes et performantes.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50 
                }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 glass rounded-3xl p-8 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0
                        ? "lg:flex-row-reverse"
                        : "lg:flex-row"
                    }`}
                  >
                    <span className="text-4xl font-bold gradient-text">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>

                {/* Icon in center */}
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="hidden lg:flex w-16 h-16 rounded-full gradient-orange items-center justify-center shrink-0 z-10 shadow-lg shadow-primary/30"
                >
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            asChild
          >
            <Link href="/process">
              Découvrir notre méthodologie
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
