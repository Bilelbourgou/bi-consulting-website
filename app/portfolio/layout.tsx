import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Nos Réalisations et Projets',
  description: 'Découvrez nos projets réussis: sites web, applications mobiles, chatbots IA, campagnes marketing, installations de vidéosurveillance et systèmes d\'alarme en Tunisie. Plus de 50 clients satisfaits.',
  keywords: [
    'portfolio développement web',
    'projets IA Tunisie',
    'réalisations marketing digital',
    'installation caméras Tunisie',
    'projets vidéosurveillance',
    'références clients Tunisie',
  ],
  openGraph: {
    title: 'Portfolio - Nos Réalisations et Projets',
    description: 'Découvrez nos projets: développement web, IA, marketing digital, vidéosurveillance et alarmes en Tunisie.',
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
