import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhitek.com'

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services de B&I Consulting',
  description: 'Solutions digitales complètes pour votre transformation numérique en Tunisie.',
  url: `${siteUrl}/services`,
  numberOfItems: 10,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Développement Web',
        description: 'Création de sites web professionnels, responsive et optimisés SEO. Sites vitrines, e-commerce, applications web sur mesure.',
        provider: { '@type': 'LocalBusiness', name: 'B&I Consulting', url: siteUrl },
        areaServed: 'Tunisia',
        serviceType: 'Développement Web',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Intelligence Artificielle & Automatisation',
        description: "Développement de solutions IA, chatbots intelligents, automatisation de processus métier et machine learning.",
        provider: { '@type': 'LocalBusiness', name: 'B&I Consulting', url: siteUrl },
        areaServed: 'Tunisia',
        serviceType: 'Intelligence Artificielle',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Applications Mobiles iOS & Android',
        description: "Développement d'applications mobiles natives et hybrides pour iOS et Android.",
        provider: { '@type': 'LocalBusiness', name: 'B&I Consulting', url: siteUrl },
        areaServed: 'Tunisia',
        serviceType: 'Développement Mobile',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Marketing Digital & SEO',
        description: 'Stratégie SEO, campagnes Google Ads et Facebook Ads, social media marketing, création de contenu.',
        provider: { '@type': 'LocalBusiness', name: 'B&I Consulting', url: siteUrl },
        areaServed: 'Tunisia',
        serviceType: 'Marketing Digital',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Branding & Design Graphique',
        description: 'Création de logo, identité visuelle, charte graphique et supports de communication.',
        provider: { '@type': 'LocalBusiness', name: 'B&I Consulting', url: siteUrl },
        areaServed: 'Tunisia',
        serviceType: 'Branding',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Nos Services - Développement Web, IA & Marketing Digital en Tunisie',
  description: 'Découvrez nos services digitaux: création site web professionnel, développement application mobile, intelligence artificielle, SEO, marketing digital et branding. Devis gratuit pour les entreprises en Tunisie.',
  keywords: [
    // Web
    'création site web Tunisie',
    'développement web professionnel Tunisie',
    'agence web Tunisie',
    'site vitrine Tunisie',
    'site e-commerce Tunisie',
    'refonte site web Tunisie',
    // AI & Mobile
    'développement application mobile Tunisie',
    'application iOS Android Tunisie',
    'intelligence artificielle Tunisie',
    'chatbot IA Tunisie',
    'automatisation processus Tunisie',
    'développement SaaS Tunisie',
    'logiciel sur mesure Tunisie',
    // Marketing
    'marketing digital Tunisie',
    'agence SEO Tunisie',
    'référencement naturel Tunisie',
    'Google Ads Tunisie',
    'Facebook Ads Tunisie',
    'social media marketing Tunisie',
    'community manager Tunisie',
    'création contenu Tunisie',
    'branding Tunisie',
    'identité visuelle Tunisie',
    // Intent-based
    'devis développement web Tunisie',
    'prestataire digital Tunisie',
    'agence numérique Tunisie',
    'services informatiques Djerba',
  ],
  openGraph: {
    title: 'Nos Services - Développement Web, IA & Marketing Digital | B&I Consulting',
    description: 'Création site web, applications mobiles, IA, SEO et marketing digital pour votre entreprise en Tunisie. Devis gratuit sous 24h.',
    url: `${siteUrl}/services`,
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {children}
    </>
  )
}

