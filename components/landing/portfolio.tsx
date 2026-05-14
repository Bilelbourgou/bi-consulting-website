"use client"

import { useState, useRef } from "react"
import { useInView, motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = ["Tous", "Web", "IA", "Marketing", "IT"]

const projects = [
  {
    title: "Plateforme SaaS Analytics",
    category: "Web",
    description:
      "Tableau de bord analytique en temps réel avec visualisations avancées",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Chatbot IA Service Client",
    category: "IA",
    description: "Assistant virtuel intelligent pour le support client 24/7",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    tags: ["NLP", "TensorFlow", "API"],
  },
  {
    title: "Campagne Digitale E-commerce",
    category: "Marketing",
    description: "Stratégie marketing multicanal avec +200% de ROI",
    image:
      "https://www.intotheminds.com/blog/app/uploads/social-media-marketing-smm-banner.jpg",
    tags: ["SEO", "Ads", "Analytics"],
  },
  {
    title: "Vidéosurveillance Entreprise",
    category: "IT",
    description:
      "Installation de caméras IP HD avec supervision à distance 24/7",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
    tags: ["Caméras IP", "NVR", "Monitoring"],
  },
  {
    title: "Social Media Management",
    category: "Marketing",
    description: "Gestion complète des réseaux sociaux avec +150% d'engagement",
    image:
      "https://www.vdigitaldoc.com/wp-content/uploads/2024/02/Social-Media-Management.jpg",
    tags: ["Social Media", "Content", "Community"],
  },
  {
    title: "Système d'Alarme Connecté",
    category: "IT",
    description:
      "Installation d'alarmes anti-intrusion avec détection intelligente",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    tags: ["Alarme", "Détection", "IoT"],
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Nos <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Découvrez quelques-uns de nos projets récents qui illustrent notre
            expertise et notre engagement envers l&apos;excellence.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.div
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter
                    ? "gradient-orange text-primary-foreground"
                    : "border-border text-foreground hover:bg-secondary"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-foreground bg-secondary/50 hover:bg-secondary"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            asChild
          >
            <Link href="/portfolio">
              Voir tous les projets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
