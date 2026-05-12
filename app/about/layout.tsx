import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À Propos de BHItek - Notre Histoire et Nos Valeurs',
  description: 'Découvrez BHItek, agence digitale basée à Djerba, Tunisie. Notre équipe d\'experts en développement web, IA, marketing digital et solutions de sécurité transforme votre vision en réalité.',
  keywords: [
    'à propos BHItek',
    'agence digitale Djerba',
    'équipe développeurs Tunisie',
    'entreprise tech Tunisie',
    'histoire BHItek',
  ],
  openGraph: {
    title: 'À Propos de BHItek - Notre Histoire et Nos Valeurs',
    description: 'Découvrez BHItek, agence digitale à Djerba. Notre équipe d\'experts transforme votre vision en réalité.',
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
