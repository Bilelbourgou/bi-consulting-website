import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Services - Développement Web, IA, Marketing Digital & Sécurité',
  description: 'Services complets de transformation digitale: développement web et mobile, intelligence artificielle, marketing digital, SEO, installation caméras de surveillance et systèmes d\'alarme en Tunisie.',
  keywords: [
    'services développement web Tunisie',
    'intelligence artificielle Djerba',
    'marketing digital SEO Tunisie',
    'installation caméras surveillance',
    'système alarme Tunisie',
    'vidéosurveillance professionnelle',
    'création site web',
    'application mobile Tunisie',
  ],
  openGraph: {
    title: 'Nos Services - Développement Web, IA, Marketing Digital & Sécurité',
    description: 'Services complets: développement web, IA, marketing digital, installation caméras et alarmes en Tunisie.',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
