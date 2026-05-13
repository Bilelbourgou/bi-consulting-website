import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHeader
        label="Légal"
        title="Mentions légales"
        highlightedWord="légales"
        subtitle="Informations d'identification et de contact de B&I Consulting."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Éditeur du site</h2>
              <p className="text-muted-foreground">
                B&I Consulting, agence digitale basée à Djerba, Tunisie.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-muted-foreground">Email : contact@biconsulting.tn</p>
              <p className="text-muted-foreground">Téléphone : +216 51 523 772</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Hébergement</h2>
              <p className="text-muted-foreground">
                Ce site est hébergé sur une infrastructure cloud administrée par B&I Consulting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
