import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'B&I Consulting - Transformation Digitale',
    short_name: 'B&I Consulting',
    description: 'Agence digitale à Djerba, Tunisie. Développement web, intelligence artificielle et marketing digital.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B3C5D',
    theme_color: '#0B3C5D',
    orientation: 'portrait',
    icons: [
      {
        src: '/images/bi-consulting-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/bi-consulting-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
