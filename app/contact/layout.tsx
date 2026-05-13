import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhitek.com'

export const metadata: Metadata = {
  title: 'Contact - Obtenez un Devis Gratuit | B&I Consulting Djerba',
  description: 'Contactez B&I Consulting à Djerba, Tunisie. Devis gratuit sous 24h pour votre projet digital: développement web, application mobile, IA, marketing digital et SEO. Notre équipe vous répond rapidement.',
  keywords: [
    // High-intent contact keywords
    'devis développement web Tunisie',
    'devis site web gratuit Tunisie',
    'devis application mobile Tunisie',
    'devis marketing digital Tunisie',
    'devis SEO Tunisie',
    // Contact intent
    'contact agence web Tunisie',
    'contact agence digitale Djerba',
    'agence web Djerba contact',
    'consultation gratuite digital Tunisie',
    'demande de devis web Tunisie',
    'agence web Tunisie prix',
    // Local contact
    'agence web Djerba adresse',
    'informatique Djerba contact',
    'prestataire IT Djerba',
    'développeur web Djerba',
    // Project types people search before contacting
    'créer site web Tunisie',
    'faire site web professionnel Tunisie',
    'développer application mobile Tunisie',
    'référencement site web Tunisie',
    'refonte site web Tunisie devis',
  ],
  openGraph: {
    title: 'Contact - Devis Gratuit Sous 24h | B&I Consulting Djerba, Tunisie',
    description: 'Contactez B&I Consulting à Djerba. Devis gratuit pour développement web, IA, marketing digital. Réponse sous 24h.',
    url: `${siteUrl}/contact`,
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
