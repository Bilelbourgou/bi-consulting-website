"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle, Send, MapPin, ArrowRight } from "lucide-react"

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@bhitek.com",
    href: "mailto:contact@bhitek.com",
    gradient: "gradient-orange",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 75 123 456",
    href: "tel:+21675123456",
    gradient: "gradient-orange",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Discuter maintenant",
    href: "https://wa.me/21675123456",
    gradient: "bg-gradient-to-br from-green-500 to-green-600",
    external: true,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Djerba, Tunisie",
    href: null,
    gradient: "bg-secondary",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Message envoyé avec succès!")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[oklch(0.35_0.1_250/0.1)] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Parlons de votre <span className="gradient-text">projet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Vous avez une idée, un projet ou simplement une question ? Notre
            équipe est là pour vous répondre rapidement.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Restons en contact
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous sommes disponibles pour discuter de votre projet et vous
                proposer les meilleures solutions.
              </p>
            </div>

            <div className="space-y-4">
              {contactOptions.map((option, index) => {
                const Icon = option.icon
                const Wrapper = option.href ? (option.external ? 'a' : Link) : 'div'
                const wrapperProps = option.href 
                  ? option.external 
                    ? { href: option.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: option.href }
                  : {}
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={option.href ? { scale: 1.02 } : {}}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="flex items-center gap-4 glass rounded-2xl p-4 group cursor-pointer"
                    >
                      <div className={`w-12 h-12 ${option.gradient} rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{option.label}</div>
                        <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {option.value}
                        </div>
                      </div>
                    </Wrapper>
                  </motion.div>
                )
              })}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button
                variant="outline"
                className="w-full border-border/50 hover:bg-secondary/50"
                asChild
              >
                <Link href="/contact">
                  Voir toutes les options
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 glass rounded-3xl p-8"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Sujet de votre message"
                  className="bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou posez votre question..."
                  rows={5}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-orange text-primary-foreground py-6 text-lg rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-primary/25"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
