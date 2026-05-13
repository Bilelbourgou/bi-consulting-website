import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biconsulting.tn'

export const metadata: Metadata = {
  title: 'Portfolio - Réalisations & Projets Web, Mobile et IA | B&I Consulting',
  description: 'Explorez les projets réalisés par B&I Consulting: sites web professionnels, applications mobiles, solutions IA, chatbots et campagnes marketing digital. Plus de 50 projets livrés en Tunisie.',
  keywords: [
    // Portfolio/proof keywords
    'portfolio agence web Tunisie',
    'réalisations développement web Tunisie',
    'exemples sites web Tunisie',
    'projets web Tunisie',
    'références clients agence Tunisie',
    // Project-type specific
    'projets IA Tunisie',
    'exemples chatbot Tunisie',
    'projets application mobile Tunisie',
    'réalisations marketing digital Tunisie',
    'exemples campagnes SEO Tunisie',
    'projets e-commerce Tunisie',
    'création site web exemples Tunisie',
    // Trust & social proof
    'clients satisfaits agence web Tunisie',
    'meilleurs projets digitaux Tunisie',
    'agence web expérimentée Tunisie',
    'cas clients marketing digital Tunisie',
    // Local
    'projets digitaux Djerba',
    'agence web références Djerba',
    'réalisations numériques Tunisie',
  ],
  openGraph: {
    title: 'Portfolio - Réalisations Web, Mobile & IA | B&I Consulting Tunisie',
    description: 'Découvrez plus de 50 projets livrés: sites web, applications mobiles, IA et campagnes marketing digital en Tunisie.',
    url: `${siteUrl}/portfolio`,
  },
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
