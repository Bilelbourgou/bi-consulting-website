"use client"

import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "CEO, TechVision",
    content:
      "B&I Consulting a transformé notre présence digitale. Leur expertise en IA nous a permis d'automatiser 60% de nos processus.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Thomas Bernard",
    role: "Directeur Marketing, InnovateCorp",
    content:
      "Une équipe exceptionnelle qui comprend vraiment les enjeux du business. Nos conversions ont augmenté de 150% en 6 mois.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sophie Martin",
    role: "CTO, DataFlow",
    content:
      "La qualité du code et l'architecture proposée sont remarquables. Une collaboration fluide et des résultats concrets.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

const stats = [
  { value: "+50", label: "Projets Réalisés" },
  { value: "+30", label: "Clients Satisfaits" },
  { value: "95%", label: "Taux de Satisfaction" },
  { value: "24/7", label: "Support Client" },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center glass rounded-2xl p-8"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ce que nos <span className="gradient-text">clients</span> disent
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="glass rounded-3xl p-8"
            >
              <Quote className="w-10 h-10 text-primary mb-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.15 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {["TechVision", "InnovateCorp", "DataFlow", "CloudSys", "NextGen"].map(
              (name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="text-xl md:text-2xl font-bold text-foreground/50 cursor-default"
                >
                  {name}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
