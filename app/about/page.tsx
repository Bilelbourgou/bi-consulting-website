"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import {
  Lightbulb,
  Target,
  TrendingUp,
  ArrowRight,
  Award,
  Users,
  Rocket,
  Heart,
  Shield,
  Globe,
  Zap,
  Star,
  CheckCircle2,
} from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la technologie pour créer des solutions avant-gardistes.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Notre engagement envers la qualité et la sécurité est au cœur de chaque projet que nous réalisons.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Notre équipe est animée par une véritable passion pour la technologie et l'excellence.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons main dans la main avec nos clients pour garantir le succès de chaque projet.",
  },
  {
    icon: Target,
    title: "Résultats",
    description: "Nous mesurons notre succès par les résultats concrets que nous apportons à nos clients.",
  },
  {
    icon: Globe,
    title: "Vision",
    description: "Nous anticipons les tendances pour vous préparer aux défis de demain.",
  },
]

const team = [
  {
    name: "Pierre Durand",
    role: "CEO & Fondateur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "15+ ans d'expérience en transformation digitale et leadership technologique.",
  },
  {
    name: "Marie Lambert",
    role: "Directrice Technique",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Experte en architecture cloud et intelligence artificielle.",
  },
  {
    name: "Thomas Bernard",
    role: "Directeur Marketing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Stratège marketing digital avec un track record de campagnes réussies.",
  },
  {
    name: "Sophie Martin",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Développeuse full-stack passionnée par les technologies modernes.",
  },
]

const milestones = [
  { year: "2018", title: "Création de BHItek", description: "Fondation de l'entreprise avec une vision claire : transformer le digital." },
  { year: "2019", title: "Première levée de fonds", description: "Obtention de notre premier financement pour accélérer notre croissance." },
  { year: "2020", title: "Expansion de l'équipe", description: "Doublement de nos effectifs et ouverture de nouveaux bureaux." },
  { year: "2021", title: "Lancement IA", description: "Introduction de nos premières solutions d'intelligence artificielle." },
  { year: "2023", title: "50+ Projets", description: "Franchissement du cap des 50 projets réalisés avec succès." },
  { year: "2024", title: "Expansion Internationale", description: "Ouverture vers les marchés européens et africains." },
]

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "30+", label: "Clients satisfaits" },
  { value: "95%", label: "Taux de satisfaction" },
  { value: "15+", label: "Experts dévoués" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        label="À Propos"
        title="Une entreprise innovante au service de votre croissance"
        highlightedWord="innovante"
        subtitle="Découvrez l'histoire, les valeurs et l'équipe qui font de BHItek votre partenaire technologique de confiance."
      />

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Notre Histoire
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  De la vision à la <span className="gradient-text">réalité</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    BHItek est née d&apos;une vision simple mais ambitieuse : rendre la technologie 
                    accessible et performante pour toutes les entreprises, quelle que soit leur taille.
                  </p>
                  <p>
                    Fondée en 2018 par une équipe de passionnés, notre entreprise s&apos;est rapidement 
                    imposée comme un acteur incontournable de la transformation digitale en France. 
                    Notre approche unique, combinant expertise technique et compréhension profonde 
                    des enjeux business, nous permet de créer des solutions vraiment adaptées.
                  </p>
                  <p>
                    Aujourd&apos;hui, avec plus de 50 projets réalisés et une équipe de 15 experts, 
                    nous continuons d&apos;innover et d&apos;accompagner nos clients vers le succès.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                <div className="relative glass rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-secondary/50 rounded-2xl p-6 text-center"
                      >
                        <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                        <div className="font-semibold text-foreground">Excellence</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-secondary/50 rounded-2xl p-6 text-center"
                      >
                        <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                        <div className="font-semibold text-foreground">Innovation</div>
                      </motion.div>
                    </div>
                    <div className="space-y-6 mt-12">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-secondary/50 rounded-2xl p-6 text-center"
                      >
                        <Rocket className="w-10 h-10 text-primary mx-auto mb-3" />
                        <div className="font-semibold text-foreground">Croissance</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-secondary/50 rounded-2xl p-6 text-center"
                      >
                        <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                        <div className="font-semibold text-foreground">Qualité</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ce qui nous <span className="gradient-text">anime</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des valeurs fondamentales qui guident chacune de nos actions et décisions.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass rounded-3xl p-8 h-full"
                >
                  <div className="w-14 h-14 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Notre Parcours
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Les étapes <span className="gradient-text">clés</span>
            </h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <div
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass rounded-2xl p-6 inline-block"
                      >
                        <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </motion.div>
                    </div>

                    <div className="hidden md:flex w-12 h-12 rounded-full gradient-orange items-center justify-center shrink-0 z-10 shadow-lg shadow-primary/30">
                      <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                    </div>

                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Notre Équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Les <span className="gradient-text">talents</span> derrière BHItek
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une équipe pluridisciplinaire de passionnés unis par une même vision.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl overflow-hidden text-center"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6 -mt-8 relative z-10">
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection direction="scale">
            <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Rejoignez l&apos;aventure BHItek
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Que vous soyez client ou talent, nous sommes impatients de vous rencontrer.
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
                  <Link href="/services">Voir nos services</Link>
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
