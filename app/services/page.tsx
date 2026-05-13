"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
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
  Wifi,
  Camera,
  Shield,
  Server,
  Settings,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Database,
  BarChart3,
  Mail,
  Users,
  Lock,
  Cloud,
} from "lucide-react"

const services = [
  {
    id: "dev-ia",
    title: "Développement & Intelligence Artificielle",
    shortTitle: "Développement & IA",
    description: "Des solutions logicielles innovantes propulsées par l'intelligence artificielle pour transformer votre business et automatiser vos processus.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        icon: Smartphone,
        title: "Applications Web & Mobile",
        description: "Développement d'applications performantes et modernes avec les dernières technologies.",
      },
      {
        icon: Cpu,
        title: "Plateformes SaaS",
        description: "Création de plateformes cloud scalables et sécurisées pour vos services en ligne.",
      },
      {
        icon: Settings,
        title: "Automatisation des Processus",
        description: "Optimisation et automatisation de vos workflows pour gagner en efficacité.",
      },
      {
        icon: Brain,
        title: "Intelligence Artificielle",
        description: "Intégration de solutions IA : chatbots, analyse prédictive, machine learning.",
      },
      {
        icon: Link2,
        title: "APIs & Intégrations",
        description: "Connexion de vos systèmes et création d'APIs robustes et documentées.",
      },
      {
        icon: Database,
        title: "Architecture Cloud",
        description: "Conception d'architectures cloud modernes, évolutives et hautement disponibles.",
      },
    ],
    benefits: [
      "Réduction des coûts opérationnels de 40%",
      "Automatisation intelligente des tâches répétitives",
      "Expérience utilisateur optimisée",
      "Scalabilité et performance garanties",
      "Support technique 24/7",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "PostgreSQL", "MongoDB"],
  },
  {
    id: "marketing",
    title: "Marketing Digital & Stratégie",
    shortTitle: "Marketing Digital",
    description: "Stratégies marketing complètes et data-driven pour accroître votre visibilité, générer des leads qualifiés et maximiser vos conversions.",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-500",
    features: [
      {
        icon: PieChart,
        title: "Stratégie Marketing",
        description: "Élaboration de stratégies marketing personnalisées basées sur l'analyse de données.",
      },
      {
        icon: Search,
        title: "SEO & Référencement",
        description: "Optimisation pour les moteurs de recherche et amélioration de votre visibilité organique.",
      },
      {
        icon: Palette,
        title: "Branding & Design",
        description: "Création d'identités visuelles fortes et mémorables qui reflètent vos valeurs.",
      },
      {
        icon: MessageSquare,
        title: "Social Media Marketing",
        description: "Gestion complète de vos réseaux sociaux et création de contenu engageant.",
      },
      {
        icon: FileText,
        title: "Content Marketing",
        description: "Production de contenu de qualité pour attirer et convertir votre audience.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Suivi des performances et rapports détaillés pour optimiser vos campagnes.",
      },
    ],
    benefits: [
      "Augmentation du trafic qualifié de 200%",
      "Amélioration du taux de conversion",
      "ROI mesurable sur chaque campagne",
      "Positionnement de marque renforcé",
      "Engagement accru sur les réseaux sociaux",
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Canva", "Figma"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        label="Nos Services"
        title="Des solutions complètes pour votre business"
        highlightedWord="complètes"
        subtitle="Découvrez notre gamme de services conçus pour transformer et accélérer la croissance de votre entreprise."
      />

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, serviceIndex) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${serviceIndex % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <AnimatedSection direction={serviceIndex % 2 === 0 ? "left" : "right"}>
                  <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Service Info */}
                    <div className="lg:w-1/2 space-y-8">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </div>

                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">Avantages</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-full bg-secondary text-foreground/80 text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform"
                        asChild
                      >
                        <Link href="/contact">
                          Demander un devis
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:w-1/2">
                      <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                        {service.features.map((feature) => (
                          <StaggerItem key={feature.title}>
                            <motion.div
                              whileHover={{ scale: 1.02, y: -4 }}
                              className="glass rounded-2xl p-6 h-full"
                            >
                              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-primary" />
                              </div>
                              <h4 className="text-lg font-semibold mb-2 text-foreground">
                                {feature.title}
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                {feature.description}
                              </p>
                            </motion.div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
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
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
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
