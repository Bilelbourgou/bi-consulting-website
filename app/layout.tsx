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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhitek.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BHItek | Transformation Digitale, IA & Marketing Digital en Tunisie',
    template: '%s | BHItek'
  },
  description: 'BHItek - Agence digitale à Djerba, Tunisie. Experts en développement web, intelligence artificielle, marketing digital, installation caméras de surveillance et systèmes d\'alarme. Transformez votre entreprise avec nos solutions innovantes.',
  keywords: [
    'développement web Tunisie',
    'intelligence artificielle Djerba',
    'marketing digital Tunisie',
    'agence digitale Djerba',
    'installation caméras surveillance Tunisie',
    'système alarme Djerba',
    'vidéosurveillance Tunisie',
    'création site web Tunisie',
    'SEO Tunisie',
    'transformation digitale',
    'IT réseaux Djerba',
    'développement application mobile',
    'chatbot IA',
    'sécurité informatique Tunisie'
  ],
  authors: [{ name: 'BHItek', url: siteUrl }],
  creator: 'BHItek',
  publisher: 'BHItek',
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
    title: 'BHItek | Transformation Digitale, IA & Marketing Digital',
    description: 'Agence digitale à Djerba, Tunisie. Développement web, IA, marketing digital, installation caméras et alarmes. Solutions innovantes pour votre entreprise.',
    url: siteUrl,
    siteName: 'BHItek',
    images: [
      {
        url: '/images/bi-consulting-logo.png',
        width: 1200,
        height: 630,
        alt: 'B&I Consulting - Transformation Digitale en Tunisie',
      },
    ],
    locale: 'fr_TN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BHItek | Transformation Digitale, IA & Marketing Digital',
    description: 'Agence digitale à Djerba, Tunisie. Développement web, IA, marketing digital, installation caméras et alarmes.',
    images: ['/images/bi-consulting-logo.png'],
    creator: '@bhitek',
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
      { url: '/images/bi-consulting-logo.png' },
      { url: '/images/bi-consulting-logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/bi-consulting-logo.png' },
    ],
  },
  category: 'technology',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BHItek',
  description: 'Agence digitale spécialisée en développement web, intelligence artificielle, marketing digital et solutions de sécurité en Tunisie.',
  url: siteUrl,
  logo: `${siteUrl}/images/bi-consulting-logo.png`,
  image: `${siteUrl}/images/bi-consulting-logo.png`,
  telephone: '+216 75 123 456',
  email: 'contact@bhitek.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Djerba',
    addressCountry: 'TN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.8076,
    longitude: 10.8451,
  },
  sameAs: [
    'https://www.facebook.com/bhitek',
    'https://www.linkedin.com/company/bhitek',
    'https://www.instagram.com/bhitek',
    'https://twitter.com/bhitek',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Tunisia',
  },
  serviceType: [
    'Développement Web',
    'Intelligence Artificielle',
    'Marketing Digital',
    'Installation Caméras de Surveillance',
    'Systèmes d\'Alarme',
    'IT & Réseaux',
  ],
}

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
