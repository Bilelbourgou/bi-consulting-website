import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biconsulting.tn'

export const metadata: Metadata = {
  title: 'Notre Processus - Méthodologie Agile & Livrables Garantis | B&I Consulting',
  description: 'Découvrez notre méthodologie de travail éprouvée: analyse des besoins, stratégie sur mesure, développement agile, lancement et optimisation continue. Un processus transparent pour garantir le succès de votre projet digital en Tunisie.',
  keywords: [
    // Methodology keywords
    'processus développement web Tunisie',
    'méthodologie agile Tunisie',
    'méthode de travail agence web',
    'workflow développement web',
    'étapes création site web Tunisie',
    'gestion projet digital Tunisie',
    // Process trust signals
    'projet web livré dans les délais Tunisie',
    'agence web transparente Tunisie',
    'développement agile Tunisie',
    'sprint développement web',
    'livraison projet web Tunisie',
    // Why people look for process pages
    'comment fonctionne agence web Tunisie',
    'délais création site web Tunisie',
    'tarif agence web Tunisie',
    'comment choisir agence web Tunisie',
    'accompagnement projet digital Tunisie',
    'suivi projet web Tunisie',
    // General
    'transformation digitale étapes Tunisie',
    'consulting digital Tunisie',
  ],
  openGraph: {
    title: 'Notre Processus - Méthodologie Agile Garantie | B&I Consulting Tunisie',
    description: 'Découvrez notre méthode de travail en 5 étapes: analyse, stratégie, développement agile, lancement et optimisation. Projets web livrés dans les délais en Tunisie.',
    url: `${siteUrl}/process`,
  },
  alternates: {
    canonical: '/process',
  },
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
