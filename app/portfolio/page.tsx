"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Calendar, Users, TrendingUp, Globe } from "lucide-react"

const filters = ["Tous", "Web", "IA", "Marketing", "IT"]

const projects = [
  {
    id: 1,
    title: "Plateforme SaaS Analytics",
    category: "Web",
    description: "Tableau de bord analytique en temps réel avec visualisations avancées pour une entreprise de data science.",
    fullDescription: "Développement complet d'une plateforme SaaS de business intelligence permettant aux entreprises de visualiser et analyser leurs données en temps réel. Interface intuitive avec plus de 50 types de graphiques personnalisables.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    client: "DataViz Corp",
    year: "2024",
    results: [
      { label: "Utilisateurs actifs", value: "+10K" },
      { label: "Temps de chargement", value: "-60%" },
      { label: "Rétention", value: "94%" },
    ],
  },
  {
    id: 2,
    title: "Application Mobile FinTech",
    category: "Web",
    description: "Application de gestion financière personnelle avec IA prédictive pour anticiper les dépenses.",
    fullDescription: "Création d'une application mobile cross-platform pour la gestion des finances personnelles. Intégration d'algorithmes de machine learning pour prédire les dépenses et proposer des conseils d'épargne personnalisés.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop",
    tags: ["React Native", "Python", "TensorFlow", "AWS"],
    client: "FinanceApp",
    year: "2024",
    results: [
      { label: "Téléchargements", value: "+50K" },
      { label: "Note App Store", value: "4.8/5" },
      { label: "Économies utilisateurs", value: "+15%" },
    ],
  },
  {
    id: 3,
    title: "Chatbot IA Service Client",
    category: "IA",
    description: "Assistant virtuel intelligent pour le support client 24/7 avec compréhension du langage naturel.",
    fullDescription: "Développement d'un chatbot conversationnel avancé utilisant le NLP pour comprendre et répondre aux demandes clients. Intégration avec les systèmes CRM existants et escalade automatique vers les agents humains.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    tags: ["NLP", "Python", "TensorFlow", "API REST"],
    client: "ServicePro",
    year: "2024",
    results: [
      { label: "Requêtes traitées", value: "85%" },
      { label: "Temps réponse", value: "-70%" },
      { label: "Satisfaction", value: "4.6/5" },
    ],
  },
  {
    id: 4,
    title: "Campagne Digitale E-commerce",
    category: "Marketing",
    description: "Stratégie marketing multicanal complète pour une boutique en ligne de mode.",
    fullDescription: "Mise en place d'une stratégie de marketing digital complète incluant SEO, SEA, social media marketing et email automation. Optimisation continue des campagnes pour maximiser le ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    client: "ModaStyle",
    year: "2023",
    results: [
      { label: "ROI", value: "+250%" },
      { label: "Trafic organique", value: "+180%" },
      { label: "Conversions", value: "+95%" },
    ],
  },
  {
    id: 5,
    title: "Infrastructure Cloud Sécurisée",
    category: "IT",
    description: "Migration complète vers le cloud avec architecture haute disponibilité et sécurité renforcée.",
    fullDescription: "Migration de l'infrastructure IT vers AWS avec mise en place d'une architecture micro-services, containerisation Docker/Kubernetes, et implémentation de mesures de sécurité avancées.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    client: "TechCorp",
    year: "2024",
    results: [
      { label: "Disponibilité", value: "99.99%" },
      { label: "Coûts infra", value: "-40%" },
      { label: "Temps déploiement", value: "-80%" },
    ],
  },
  {
    id: 6,
    title: "Système de Recommandation IA",
    category: "IA",
    description: "Moteur de recommandation personnalisé pour e-commerce utilisant le deep learning.",
    fullDescription: "Développement d'un système de recommandation produits basé sur l'analyse comportementale et le machine learning. Amélioration significative du panier moyen et de l'engagement utilisateur.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    tags: ["Machine Learning", "Python", "PyTorch", "Redis"],
    client: "ShopMax",
    year: "2024",
    results: [
      { label: "Panier moyen", value: "+35%" },
      { label: "Taux de clic", value: "+45%" },
      { label: "Ventes croisées", value: "+60%" },
    ],
  },
  {
    id: 7,
    title: "Vidéosurveillance Multi-Sites",
    category: "IT",
    description: "Installation complète de caméras IP HD avec supervision centralisée pour une chaîne de magasins.",
    fullDescription: "Déploiement d'un système de vidéosurveillance professionnel comprenant 120 caméras IP 4K, serveurs NVR redondants, et plateforme de supervision centralisée accessible 24/7. Intégration avec le système d'alarme existant et configuration d'alertes intelligentes basées sur l'IA.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop",
    tags: ["Caméras IP", "NVR", "Hikvision", "Monitoring 24/7"],
    client: "RetailChain",
    year: "2024",
    results: [
      { label: "Caméras installées", value: "120" },
      { label: "Sites couverts", value: "15" },
      { label: "Réduction vols", value: "-75%" },
    ],
  },
  {
    id: 8,
    title: "Système d'Alarme Connecté",
    category: "IT",
    description: "Installation d'un système d'alarme anti-intrusion intelligent avec détection périmétrique.",
    fullDescription: "Mise en place d'un système d'alarme de dernière génération avec détecteurs de mouvement, capteurs d'ouverture, détection périmétrique extérieure et centrale connectée. Application mobile pour gestion à distance et notifications en temps réel.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
    tags: ["Alarme", "Ajax Systems", "Détection", "IoT"],
    client: "Résidence Prestige",
    year: "2024",
    results: [
      { label: "Zones protégées", value: "45" },
      { label: "Temps réponse", value: "<30s" },
      { label: "Fausses alertes", value: "0%" },
    ],
  },
  {
    id: 9,
    title: "Social Media Management",
    category: "Marketing",
    description: "Gestion complète des réseaux sociaux avec stratégie de contenu et community management.",
    fullDescription: "Prise en charge complète de la présence digitale sur Instagram, Facebook, LinkedIn et TikTok. Création de contenus engageants, gestion de la communauté, campagnes d'influence et analyse des performances pour une marque de cosmétiques.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    tags: ["Social Media", "Content Creation", "Community", "Influenceurs"],
    client: "BeautyBrand",
    year: "2024",
    results: [
      { label: "Followers", value: "+85K" },
      { label: "Engagement", value: "+150%" },
      { label: "Reach mensuel", value: "2M+" },
    ],
  },
  {
    id: 10,
    title: "Campagne Publicité Digitale",
    category: "Marketing",
    description: "Campagne publicitaire multiplateforme avec ciblage avancé et optimisation continue.",
    fullDescription: "Conception et gestion d'une campagne publicitaire digitale sur Google Ads, Meta Ads et LinkedIn Ads. Ciblage précis des audiences, A/B testing des créatifs, et optimisation quotidienne pour maximiser les conversions et réduire le coût par acquisition.",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800&h=500&fit=crop",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC"],
    client: "SaaS Startup",
    year: "2024",
    results: [
      { label: "ROAS", value: "4.5x" },
      { label: "CPA", value: "-45%" },
      { label: "Leads générés", value: "2500+" },
    ],
  },
  {
    id: 11,
    title: "Branding & Identité Visuelle",
    category: "Marketing",
    description: "Création d'une identité de marque complète pour une startup innovante.",
    fullDescription: "Développement d'une identité visuelle complète incluant logo, charte graphique, supports de communication print et digital, templates de présentation et guide de marque. Positionnement stratégique et storytelling de marque.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    tags: ["Branding", "Logo", "Charte graphique", "Design"],
    client: "TechInnovate",
    year: "2023",
    results: [
      { label: "Notoriété", value: "+200%" },
      { label: "Reconnaissance", value: "85%" },
      { label: "Cohérence", value: "100%" },
    ],
  },
  {
    id: 12,
    title: "Contrôle d'Accès Biométrique",
    category: "IT",
    description: "Installation d'un système de contrôle d'accès biométrique pour un immeuble de bureaux.",
    fullDescription: "Déploiement d'un système de contrôle d'accès multi-technologies combinant reconnaissance faciale, empreintes digitales et badges RFID. Gestion centralisée des accès, historique complet et intégration avec le système RH pour automatiser les droits d'accès.",
    image: "https://images.unsplash.com/photo-1585079374502-415f8516dcc3?w=800&h=500&fit=crop",
    tags: ["Biométrie", "RFID", "Contrôle accès", "Sécurité"],
    client: "Office Tower",
    year: "2024",
    results: [
      { label: "Points d'accès", value: "32" },
      { label: "Utilisateurs", value: "500+" },
      { label: "Incidents", value: "0" },
    ],
  },
  {
    id: 13,
    title: "Vidéosurveillance Résidentielle",
    category: "IT",
    description: "Installation de caméras de surveillance pour une résidence privée haut de gamme.",
    fullDescription: "Système de vidéosurveillance discret et performant pour une propriété de luxe. Caméras PTZ extérieures, caméras discrètes intérieures, vision nocturne infrarouge, et application mobile pour visualisation en direct et playback des enregistrements.",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&h=500&fit=crop",
    tags: ["Caméras PTZ", "Vision nocturne", "App mobile", "Cloud"],
    client: "Villa Privée",
    year: "2024",
    results: [
      { label: "Caméras", value: "16" },
      { label: "Stockage", value: "90 jours" },
      { label: "Accès mobile", value: "24/7" },
    ],
  },
  {
    id: 14,
    title: "Stratégie SEO Internationale",
    category: "Marketing",
    description: "Optimisation SEO multilingue pour un site e-commerce présent dans 12 pays.",
    fullDescription: "Audit SEO complet et mise en œuvre d'une stratégie de référencement international. Optimisation technique, création de contenu localisé et construction de liens pour améliorer le positionnement dans chaque marché.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    tags: ["SEO", "Content Strategy", "Analytics", "Hreflang"],
    client: "GlobalShop",
    year: "2024",
    results: [
      { label: "Positions Top 10", value: "+320%" },
      { label: "Trafic organique", value: "+240%" },
      { label: "Marchés couverts", value: "12" },
    ],
  },
  {
    id: 15,
    title: "Email Marketing Automation",
    category: "Marketing",
    description: "Mise en place d'une stratégie d'email marketing automatisé avec segmentation avancée.",
    fullDescription: "Conception de workflows d'email marketing automatisés : onboarding, nurturing, relance panier abandonné, fidélisation. Segmentation comportementale, personnalisation dynamique et optimisation continue des taux d'ouverture et de conversion.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop",
    tags: ["Email Marketing", "Automation", "Klaviyo", "CRM"],
    client: "E-commerce Fashion",
    year: "2024",
    results: [
      { label: "Taux d'ouverture", value: "45%" },
      { label: "Revenus email", value: "+35%" },
      { label: "Workflows actifs", value: "12" },
    ],
  },
  {
    id: 16,
    title: "Système Alarme Incendie",
    category: "IT",
    description: "Installation d'un système de détection incendie conforme aux normes ERP.",
    fullDescription: "Mise en place d'un système de sécurité incendie complet pour un établissement recevant du public : détecteurs de fumée et chaleur, centrale adressable, déclencheurs manuels, sirènes et éclairage de sécurité. Conformité totale avec les réglementations en vigueur.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop",
    tags: ["Détection incendie", "Normes ERP", "Sécurité", "Conformité"],
    client: "Centre Commercial",
    year: "2023",
    results: [
      { label: "Détecteurs", value: "250" },
      { label: "Zones", value: "48" },
      { label: "Conformité", value: "100%" },
    ],
  },
  {
    id: 17,
    title: "Portail RH Digital",
    category: "Web",
    description: "Plateforme complète de gestion des ressources humaines avec modules de formation.",
    fullDescription: "Création d'un portail RH moderne intégrant gestion des congés, suivi des objectifs, évaluations de performance et plateforme e-learning pour la formation continue des collaborateurs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
    client: "HRTech Solutions",
    year: "2023",
    results: [
      { label: "Utilisateurs", value: "2500+" },
      { label: "Processus automatisés", value: "75%" },
      { label: "Temps admin", value: "-50%" },
    ],
  },
  {
    id: 18,
    title: "Sécurisation Infrastructure PME",
    category: "IT",
    description: "Audit de sécurité et mise en conformité RGPD pour un réseau d'entreprise.",
    fullDescription: "Réalisation d'un audit complet de sécurité informatique, identification des vulnérabilités et mise en place de solutions de protection : pare-feu nouvelle génération, antivirus endpoint, sauvegarde automatisée et plan de continuité d'activité.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    tags: ["Cybersécurité", "Fortinet", "Veeam", "RGPD"],
    client: "PME Conseil",
    year: "2024",
    results: [
      { label: "Vulnérabilités corrigées", value: "100%" },
      { label: "Conformité RGPD", value: "Oui" },
      { label: "Incidents", value: "0" },
    ],
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Tous")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        label="Portfolio"
        title="Découvrez nos réalisations"
        highlightedWord="réalisations"
        subtitle="Explorez quelques-uns de nos projets récents qui illustrent notre expertise et notre engagement envers l'excellence."
      />

      {/* Filters */}
      <section className="py-8 sticky top-[72px] z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
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
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="group glass rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="gradient-orange text-primary-foreground rounded-lg">
                        Voir détails
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary text-sm font-medium">{project.category}</span>
                      <span className="text-muted-foreground text-sm">• {project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/80">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-8 -mt-16 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.year}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Users className="w-4 h-4" />
                    {selectedProject.client}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h2>
                <p className="text-muted-foreground text-lg mb-8">{selectedProject.fullDescription}</p>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Résultats</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.results.map((result) => (
                      <div key={result.label} className="bg-secondary/50 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{result.value}</div>
                        <div className="text-muted-foreground text-sm">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-secondary text-foreground font-medium"
                      >
                        {tag}
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
                    Démarrer un projet similaire
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection direction="scale">
            <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Votre projet mérite d&apos;être ici
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Rejoignez nos clients satisfaits et transformez votre vision en réalité.
              </p>
              <Button
                size="lg"
                className="gradient-orange text-primary-foreground rounded-xl hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/contact">
                  Discutons de votre projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
