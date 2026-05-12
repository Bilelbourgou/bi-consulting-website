import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Parlons de Votre Projet',
  description: 'Contactez BHItek pour discuter de votre projet digital. Développement web, IA, marketing digital, installation caméras et alarmes à Djerba, Tunisie. Devis gratuit sous 24h.',
  keywords: [
    'contact BHItek',
    'devis développement web Tunisie',
    'agence digitale Djerba contact',
    'installation caméras devis',
    'consultation gratuite digital',
  ],
  openGraph: {
    title: 'Contact - Parlons de Votre Projet',
    description: 'Contactez BHItek à Djerba, Tunisie. Développement web, IA, marketing digital, caméras et alarmes. Devis gratuit.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
