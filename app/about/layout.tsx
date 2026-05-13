import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhitek.com'

export const metadata: Metadata = {
  title: 'À Propos - B&I Consulting, Agence Digitale à Djerba, Tunisie',
  description: 'B&I Consulting est une agence digitale innovante basée à Djerba, Tunisie. Experts en développement web, intelligence artificielle et marketing digital, nous accompagnons les entreprises dans leur transformation numérique.',
  keywords: [
    // Brand & identity
    'B&I Consulting',
    'BHItek agence digitale',
    'agence digitale Djerba',
    'agence web Djerba Tunisie',
    'entreprise tech Tunisie',
    'startup digitale Tunisie',
    // Team & expertise
    'équipe développeurs Tunisie',
    'experts digitaux Tunisie',
    'développeurs web Tunisie',
    'consultant IT Tunisie',
    'expert SEO Tunisie',
    'expert IA Tunisie',
    // Trust signals
    'agence sérieuse Tunisie',
    'meilleure agence web Tunisie',
    'agence digitale fiable Tunisie',
    'agence certifiée Tunisie',
    // Values & approach
    'transformation digitale Tunisie',
    'innovation technologique Tunisie',
    'solutions sur mesure Tunisie',
    'accompagnement digital Tunisie',
    'consulting digital Tunisie',
    'digitalisation PME Tunisie',
  ],
  openGraph: {
    title: 'À Propos - B&I Consulting, Agence Digitale à Djerba | Tunisie',
    description: 'Découvrez B&I Consulting, agence digitale à Djerba. Experts en développement web, IA et marketing digital, nous transformons votre vision en résultats concrets.',
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
