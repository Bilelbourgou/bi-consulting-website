"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Instagram,
} from "lucide-react"

const CONTACT_EMAIL = "contact@biconsulting.tn"
const CONTACT_PHONE = "+216 51 523 772"
const CONTACT_PHONE_URI = "+21651523772"
const INSTAGRAM_URL = "https://www.instagram.com/b.i_consulting/"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    description: "Réponse sous 24h",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE_URI}`,
    description: "Lun-Ven 9h-18h",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Discuter maintenant",
    href: "https://wa.me/21651523772",
    description: "Réponse instantanée",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Djerba, Tunisie",
    href: "https://maps.google.com/?q=Djerba,Tunisia",
    description: "Sur rendez-vous",
    color: "from-purple-500 to-pink-500",
  },
]

const faqs = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer: "Nous réalisons des projets variés : applications web et mobiles, plateformes SaaS, solutions IA et stratégies marketing digital. Chaque projet est adapté à vos besoins spécifiques.",
  },
  {
    question: "Combien de temps dure un projet typique ?",
    answer: "La durée varie selon la complexité. Un site vitrine peut prendre 2-4 semaines, une application complexe 3-6 mois. Nous établissons un planning précis dès le début.",
  },
  {
    question: "Comment fonctionne votre processus de travail ?",
    answer: "Notre processus en 5 étapes : Analyse → Stratégie → Développement → Lancement → Optimisation. Vous êtes impliqué à chaque étape avec des points réguliers.",
  },
  {
    question: "Proposez-vous un support après le lancement ?",
    answer: "Oui, nous proposons différentes formules de maintenance et support : correction de bugs, mises à jour, monitoring 24/7, et évolutions fonctionnelles.",
  },
]

const socialLinks = [
  { icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const subjectLabels: Record<string, string> = {
      development: "Développement Web/Mobile",
      ai: "Intelligence Artificielle",
      marketing: "Marketing Digital",
      other: "Autre",
    }
    const subjectValue = String(formData.get("subject") || "other")
    const body = [
      `Prénom: ${formData.get("firstName") || ""}`,
      `Nom: ${formData.get("lastName") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Téléphone: ${formData.get("phone") || ""}`,
      `Entreprise: ${formData.get("company") || ""}`,
      `Sujet: ${subjectLabels[subjectValue] || subjectValue}`,
      "",
      String(formData.get("message") || ""),
    ].join("\n")

    setIsSubmitting(true)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Demande - ${subjectLabels[subjectValue] || subjectValue}`)}&body=${encodeURIComponent(body)}`
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        label="Contact"
        title="Parlons de votre projet ensemble"
        highlightedWord="projet"
        subtitle="Notre équipe est prête à vous accompagner dans votre transformation digitale. Contactez-nous pour discuter de vos besoins."
      />

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {contactMethods.map((method) => (
              <StaggerItem key={method.title}>
                <motion.a
                  href={method.href}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="block glass rounded-2xl p-6 h-full group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">{method.description}</p>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="glass rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-2 text-foreground">Envoyez-nous un message</h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 gradient-orange rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Email préparé</h3>
                    <p className="text-muted-foreground mb-6">
                      Votre client email s'ouvre avec le message prérempli. Envoyez-le pour finaliser votre demande.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-border text-foreground hover:bg-secondary"
                    >
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          Prénom
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Jean"
                          required
                          className="bg-secondary/50 border-border"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Nom
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Dupont"
                          required
                          className="bg-secondary/50 border-border"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean.dupont@exemple.com"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Téléphone (optionnel)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+216 XX XXX XXX"
                        className="bg-secondary/50 border-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Entreprise (optionnel)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nom de votre entreprise"
                        className="bg-secondary/50 border-border"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="development">Développement Web/Mobile</option>
                        <option value="ai">Intelligence Artificielle</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={5}
                        required
                        className="bg-secondary/50 border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-orange text-primary-foreground py-6 text-lg rounded-xl hover:scale-[1.02] transition-transform"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          Préparation...
                        </span>
                      ) : (
                        <>
                          Préparer l'email
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Info & FAQ */}
            <div className="space-y-8">
              <AnimatedSection direction="right">
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Informations</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                        <p className="text-muted-foreground">Lundi - Vendredi : 9h00 - 18h00</p>
                        <p className="text-muted-foreground">Samedi : Sur rendez-vous</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Délai de réponse</h4>
                        <p className="text-muted-foreground">Nous répondons généralement sous 24 heures ouvrées.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Suivez-nous</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="glass rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Questions fréquentes</h3>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        className="bg-secondary/30 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full p-4 flex items-center justify-between text-left"
                        >
                          <span className="font-medium text-foreground pr-4">{faq.question}</span>
                          <motion.div
                            animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                            className="shrink-0"
                          >
                            <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedFaq === index ? "auto" : 0,
                            opacity: expandedFaq === index ? 1 : 0,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 pb-4 text-muted-foreground">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection direction="scale">
            <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Venez nous rencontrer
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nos bureaux sont situés à Djerba, en Tunisie. Prenez rendez-vous pour une rencontre en personne.
              </p>
              <Button
                size="lg"
                className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://maps.google.com/?q=Djerba,Tunisia" target="_blank" rel="noopener noreferrer">
                  Voir sur Google Maps
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
