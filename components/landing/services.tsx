"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Brain,
  Smartphone,
  Cpu,
  Link2,
  TrendingUp,
  Search,
  Palette,
  MessageSquare,
  FileText,
  PieChart,
  Settings,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    title: "Développement & IA",
    description:
      "Des solutions logicielles innovantes propulsées par l'intelligence artificielle",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    items: [
      { icon: Smartphone, label: "Applications Web & Mobile" },
      { icon: Cpu, label: "Plateformes SaaS" },
      { icon: Settings, label: "Automatisation" },
      { icon: Brain, label: "Intelligence Artificielle" },
      { icon: Link2, label: "APIs & Intégrations" },
    ],
  },
  {
    title: "Marketing Digital",
    description:
      "Stratégies marketing complètes pour accroître votre visibilité et vos conversions",
    icon: TrendingUp,
    color: "from-blue-600 to-blue-400",
    items: [
      { icon: PieChart, label: "Stratégie Marketing" },
      { icon: Search, label: "SEO & Référencement" },
      { icon: Palette, label: "Branding & Design" },
      { icon: MessageSquare, label: "Social Media Marketing" },
      { icon: FileText, label: "Création de Contenu" },
    ],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Des solutions <span className="gradient-text">complètes</span> pour
            votre business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Découvrez notre gamme de services conçus pour transformer et
            accélérer la croissance de votre entreprise.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group glass rounded-3xl p-8 transition-all duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + itemIndex * 0.05 }}
                    className="flex items-center gap-3 text-foreground/80 group-hover:text-foreground transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            asChild
          >
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
