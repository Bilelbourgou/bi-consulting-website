import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHeader
        label="Confidentialité"
        title="Politique de confidentialité"
        highlightedWord="confidentialité"
        subtitle="Comment nous traitons les informations transmises via le site."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-10 space-y-6">
            <p className="text-muted-foreground">
              B&I Consulting collecte uniquement les informations que vous choisissez de nous transmettre
              afin de répondre à vos demandes commerciales ou de support.
            </p>
            <div>
              <h2 className="text-2xl font-bold mb-3">Données concernées</h2>
              <p className="text-muted-foreground">
                Les formulaires peuvent inclure votre nom, email, téléphone, entreprise et message.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Utilisation</h2>
              <p className="text-muted-foreground">
                Ces données servent uniquement à vous recontacter et à préparer une réponse adaptée à votre projet.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-muted-foreground">
                Pour toute demande liée à vos données, écrivez à contact@biconsulting.tn.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
