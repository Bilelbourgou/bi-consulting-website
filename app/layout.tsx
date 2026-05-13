import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LoadingScreen } from '@/components/loading-screen'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biconsulting.tn'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'B&I Consulting | Transformation Digitale, IA & Marketing Digital en Tunisie',
    template: '%s | B&I Consulting'
  },
  description: 'B&I Consulting - Agence digitale à Djerba, Tunisie. Experts en développement web, intelligence artificielle, marketing digital. Transformez votre entreprise avec nos solutions innovantes.',
  keywords: [
    // Core brand & location
    'B&I Consulting',
    'agence digitale Tunisie',
    'agence web Tunisie',
    'agence digitale Djerba',
    'agence web Djerba',
    'entreprise informatique Djerba',
    'prestataire IT Tunisie',
    // Web development
    'création site web Tunisie',
    'développement web Tunisie',
    'développement web Djerba',
    'site web professionnel Tunisie',
    'refonte site web Tunisie',
    'site vitrine Tunisie',
    'site e-commerce Tunisie',
    'développeur web Tunisie',
    // AI & Tech
    'intelligence artificielle Tunisie',
    'intelligence artificielle Djerba',
    'développement IA Tunisie',
    'chatbot IA Tunisie',
    'automatisation processus Tunisie',
    'machine learning Tunisie',
    'développement application mobile Tunisie',
    'application iOS Android Tunisie',
    'développement SaaS Tunisie',
    'logiciel sur mesure Tunisie',
    'solution cloud Tunisie',
    'API intégration Tunisie',
    // Marketing digital
    'marketing digital Tunisie',
    'agence marketing digital Tunisie',
    'référencement SEO Tunisie',
    'référencement naturel Tunisie',
    'agence SEO Tunisie',
    'Google Ads Tunisie',
    'Facebook Ads Tunisie',
    'social media marketing Tunisie',
    'community manager Tunisie',
    'création contenu Tunisie',
    'stratégie digitale Tunisie',
    'branding Tunisie',
    'e-réputation Tunisie',
    // Transformation digitale
    'transformation digitale Tunisie',
    'transformation digitale',
    'digitalisation entreprise Tunisie',
    'consultant digital Tunisie',
    'consulting IT Tunisie',
    'solutions numériques Tunisie',
    'innovation technologique Tunisie',
  ],
  authors: [{ name: 'B&I Consulting', url: siteUrl }],
  creator: 'B&I Consulting',
  publisher: 'B&I Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-TN': '/',
    },
  },
  openGraph: {
    title: 'B&I Consulting | Transformation Digitale, IA & Marketing Digital',
    description: 'Agence digitale à Djerba, Tunisie. Développement web, IA, marketing digital. Solutions innovantes pour votre entreprise.',
    url: siteUrl,
    siteName: 'B&I Consulting',
    locale: 'fr_TN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B&I Consulting | Transformation Digitale, IA & Marketing Digital',
    description: 'Agence digitale à Djerba, Tunisie. Développement web, IA, marketing digital.',
    creator: '@biconsulting',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/bi-consulting-logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/bi-consulting-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/bi-consulting-logo.png',
  },
  category: 'technology',
  other: {
    'geo.region': 'TN-83',
    'geo.placename': 'Djerba, Tunisie',
    'geo.position': '33.8076;10.8451',
    'ICBM': '33.8076, 10.8451',
    'language': 'French',
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
    'target': 'all',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B3C5D' },
    { media: '(prefers-color-scheme: dark)', color: '#0B3C5D' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'B&I Consulting',
    alternateName: 'BI Consulting',
    description: 'Agence digitale spécialisée en développement web, intelligence artificielle, marketing digital et transformation numérique en Tunisie.',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/bi-consulting-logo.png`,
      width: 200,
      height: 72,
    },
    image: `${siteUrl}/images/bi-consulting-logo.png`,
    telephone: '+216 51 523 772',
    email: 'contact@biconsulting.tn',
    priceRange: '$$',
    currenciesAccepted: 'TND',
    paymentAccepted: 'Cash, Virement bancaire, Chèque',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Djerba',
      addressRegion: 'Médenine',
      addressCountry: 'TN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.8076,
      longitude: 10.8451,
    },
    sameAs: [
      'https://www.instagram.com/b.i_consulting',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: [
      { '@type': 'Country', name: 'Tunisia' },
      { '@type': 'City', name: 'Djerba' },
      { '@type': 'City', name: 'Tunis' },
      { '@type': 'City', name: 'Sfax' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Digitaux',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement Web',
            description: 'Création de sites web professionnels, applications web et plateformes e-commerce sur mesure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Intelligence Artificielle',
            description: 'Solutions IA, chatbots intelligents, automatisation de processus et machine learning.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing Digital',
            description: 'Stratégie SEO, réseaux sociaux, Google Ads, création de contenu et e-réputation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement Mobile',
            description: "Création d'applications mobiles iOS et Android natives et hybrides.",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branding & Design',
            description: 'Identité visuelle, charte graphique, logo et supports de communication.',
          },
        },
      ],
    },
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 20,
    },
    knowsAbout: [
      'Développement Web',
      'Intelligence Artificielle',
      'Marketing Digital',
      'SEO',
      'Applications Mobiles',
      'SaaS',
      'Branding',
      'Transformation Digitale',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'B&I Consulting',
    description: 'Agence digitale en Tunisie — développement web, IA, marketing digital.',
    publisher: { '@id': `${siteUrl}/#business` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'fr-TN',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LoadingScreen />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
