"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  FileText,
  Palette,
  TestTube,
  RefreshCw,
  BarChart,
  Users,
  Clock,
  Target,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Analyse & Découverte",
    description: "Nous commençons par comprendre en profondeur vos besoins, objectifs et contraintes.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    duration: "1-2 semaines",
    deliverables: [
      "Audit de l'existant",
      "Analyse des besoins",
      "Étude de marché",
      "Définition des personas",
      "Objectifs SMART",
    ],
    details: "Cette phase est cruciale pour garantir l'alignement parfait entre notre solution et vos attentes. Nous menons des entretiens approfondis, analysons votre secteur et identifions les opportunités.",
  },
  {
    number: "02",
    title: "Stratégie & Planification",
    description: "Nous élaborons une stratégie sur mesure avec un plan d'action détaillé et des KPIs clairs.",
    icon: Lightbulb,
    color: "from-orange-500 to-amber-500",
    duration: "1-2 semaines",
    deliverables: [
      "Cahier des charges",
      "Architecture technique",
      "Maquettes wireframe",
      "Planning détaillé",
      "Budget prévisionnel",
    ],
    details: "Notre équipe conçoit une roadmap précise qui définit chaque étape du projet, les ressources nécessaires et les jalons clés. Vous validez chaque élément avant de passer à la phase suivante.",
  },
  {
    number: "03",
    title: "Design & Conception",
    description: "Création des maquettes et prototypes pour visualiser le produit final.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    duration: "2-3 semaines",
    deliverables: [
      "Charte graphique",
      "Maquettes UI/UX",
      "Prototype interactif",
      "Design system",
      "Assets graphiques",
    ],
    details: "Nos designers créent des interfaces modernes et intuitives qui reflètent votre identité de marque tout en optimisant l'expérience utilisateur. Chaque pixel est pensé pour convertir.",
  },
  {
    number: "04",
    title: "Développement",
    description: "Notre équipe technique met en œuvre la solution avec les meilleures technologies.",
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
    duration: "4-12 semaines",
    deliverables: [
      "Code source",
      "Base de données",
      "APIs & intégrations",
      "Documentation technique",
      "Tests unitaires",
    ],
    details: "Nous utilisons les technologies les plus récentes et appliquons les meilleures pratiques de développement (Clean Code, CI/CD, tests automatisés) pour créer des solutions robustes et évolutives.",
  },
  {
    number: "05",
    title: "Tests & Qualité",
    description: "Validation complète de la solution pour garantir une qualité irréprochable.",
    icon: TestTube,
    color: "from-red-500 to-rose-500",
    duration: "1-2 semaines",
    deliverables: [
      "Tests fonctionnels",
      "Tests de performance",
      "Tests de sécurité",
      "Tests d'accessibilité",
      "Rapport de qualité",
    ],
    details: "Notre équipe QA effectue des tests rigoureux pour identifier et corriger tout problème avant le lancement. Nous vérifions la compatibilité, la performance et la sécurité de votre solution.",
  },
  {
    number: "06",
    title: "Lancement",
    description: "Déploiement en production et mise en ligne de votre projet.",
    icon: Rocket,
    color: "from-indigo-500 to-violet-500",
    duration: "1 semaine",
    deliverables: [
      "Mise en production",
      "Configuration serveur",
      "Migration des données",
      "Formation utilisateurs",
      "Documentation utilisateur",
    ],
    details: "Le grand jour ! Nous déployons votre solution en production avec un plan de migration soigneusement préparé. Votre équipe est formée pour une prise en main immédiate.",
  },
  {
    number: "07",
    title: "Optimisation & Support",
    description: "Suivi continu des performances et améliorations basées sur les données.",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
    duration: "Continu",
    deliverables: [
      "Monitoring 24/7",
      "Rapports analytics",
      "Optimisations A/B",
      "Mises à jour régulières",
      "Support technique",
    ],
    details: "Notre relation ne s'arrête pas au lancement. Nous analysons les performances, identifions les axes d'amélioration et faisons évoluer votre solution pour maximiser vos résultats.",
  },
]

const benefits = [
  {
    icon: Users,
    title: "Communication transparente",
    description: "Points réguliers, accès à un espace projet dédié et interlocuteur unique.",
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Planning réaliste et suivi rigoureux pour livrer dans les temps.",
  },
  {
    icon: Target,
    title: "Objectifs mesurables",
    description: "KPIs définis dès le départ pour mesurer le succès du projet.",
  },
  {
    icon: RefreshCw,
    title: "Méthodologie agile",
    description: "Flexibilité pour s'adapter aux évolutions de vos besoins.",
  },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        label="Notre Processus"
        title="Une méthodologie éprouvée pour votre succès"
        highlightedWord="éprouvée"
        subtitle="Découvrez notre approche en 7 étapes pour transformer vos idées en solutions digitales performantes."
      />

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-4xl font-bold gradient-text">{step.number}</span>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {step.title}
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Deliverables Card */}
                  <div className="lg:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-3xl p-8"
                    >
                      <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Livrables
                      </h3>
                      <ul className="space-y-4">
                        {step.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center py-8">
                    <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Nos Outils
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Technologies & <span className="gradient-text">méthodologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous utilisons les meilleurs outils et pratiques du marché pour garantir la qualité.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Gestion de projet</h3>
                <div className="flex flex-wrap gap-2">
                  {["Jira", "Notion", "Slack", "Figma"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-full bg-secondary text-foreground/80 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Développement</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "Python", "AWS"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-full bg-secondary text-foreground/80 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Qualité</h3>
                <div className="flex flex-wrap gap-2">
                  {["Jest", "Cypress", "SonarQube", "Lighthouse"].map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-full bg-secondary text-foreground/80 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection direction="scale">
            <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Parlons de votre projet et définissons ensemble la meilleure approche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/contact">
                    Contactez-nous
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary rounded-xl"
                  asChild
                >
                  <Link href="/portfolio">Voir nos réalisations</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
