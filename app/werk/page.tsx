import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, PhotoFrame, Tape, Ticket } from "@/components/ui";

export const metadata: Metadata = {
  title: "Werk",
  description: "Twee klussen van Schildersbedrijf Vreekamp: woonkamer en voordeur in Borculo, kitwerk in Markelo.",
};

export default function WerkPage() {
  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Tape>Werk</Tape>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl">Twee klussen, van begin tot eind</h1>
          <p className="mt-5 max-w-2xl text-lg">
            Geen losse foto’s. Per klus een werkbon, de stappen en het resultaat. Eén in Borculo, één in Markelo.
          </p>
        </div>
      </section>

      <section data-section="overzicht" className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:py-20">
        <article className="grid items-start gap-6 lg:grid-cols-2">
          <PhotoFrame photo={photos.doorOverview} stamp="Borculo" caption="Voordeur vóór de onderhoudsbeurt." />
          <div>
            <Ticket
              kicker="Werkbon"
              place="Borculo"
              date="maart 2017"
              rows={[
                { title: "Schilderwerk binnen", on: true },
                { title: "Onderhoud voordeur en kozijn", on: true },
                { title: "Houtrotreparatie", on: true },
              ]}
            />
            <h2 className="mt-6 text-3xl md:text-4xl">Woonkamer, keuken en voordeur</h2>
            <p className="mt-3">
              Twee nieuwe lagen op wanden en plafonds, een warme grijs/bruine accentwand, en houtrot in het kozijn hersteld met Meranti en epoxy.
            </p>
            <Link href="/werk/borculo-woonkamer-en-voordeur" className="btn btn-ink mt-5">
              Bekijk de klus
            </Link>
          </div>
        </article>

        <article className="grid items-start gap-6 border-t-2 border-ink pt-12 lg:grid-cols-2">
          <PhotoFrame photo={photos.kitShower} stamp="Markelo" caption="Douche na het kitten." />
          <div>
            <Ticket
              kicker="Werkbon"
              place="Markelo"
              date="mei 2017"
              rows={[
                { title: "Kitwerk tegels", on: true },
                { title: "Sanitair", on: true },
                { title: "Naad langs de vloer", on: true },
              ]}
            />
            <h2 className="mt-6 text-3xl md:text-4xl">Tegels en sanitair gekit</h2>
            <p className="mt-3">Bij een klant in Markelo de tegels en het sanitair gekit. Hoeken, douche en de vloer.</p>
            <Link href="/werk/markelo-kitwerk" className="btn btn-ink mt-5">
              Bekijk de klus
            </Link>
          </div>
        </article>
      </section>

      <CtaBand title="Uw klus op de werkbon" />
    </main>
  );
}
