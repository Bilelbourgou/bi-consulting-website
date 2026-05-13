import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PageHeader } from "@/components/landing/page-header"

export default function CgvPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHeader
        label="Conditions"
        title="Conditions générales de vente"
        highlightedWord="vente"
        subtitle="Cadre général applicable aux prestations proposées par B&I Consulting."
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-3xl p-8 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">Prestations</h2>
              <p className="text-muted-foreground">
                B&I Consulting propose des services de développement web, applications, IA, automatisation,
                marketing digital, branding et conseil en transformation digitale.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Devis et démarrage</h2>
              <p className="text-muted-foreground">
                Chaque mission fait l'objet d'un devis ou d'une proposition validée avant le démarrage.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Support</h2>
              <p className="text-muted-foreground">
                Les modalités de maintenance, support et évolutions sont précisées selon le périmètre du projet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
