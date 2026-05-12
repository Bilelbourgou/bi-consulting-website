import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre Processus - Méthodologie de Travail',
  description: 'Découvrez notre méthodologie de travail en 5 étapes: analyse, stratégie, développement, lancement et optimisation. Une approche structurée pour garantir le succès de votre projet digital.',
  keywords: [
    'processus développement web',
    'méthodologie agile Tunisie',
    'gestion projet digital',
    'étapes création site web',
    'workflow développement',
  ],
  openGraph: {
    title: 'Notre Processus - Méthodologie de Travail',
    description: 'Notre méthodologie en 5 étapes pour garantir le succès de votre projet digital.',
  },
  alternates: {
    canonical: '/process',
  },
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
