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
            Geen losse foto’s. Per klus een werkbon, de stappen en het resultaat. Eén in Borculo, maart 2017. Eén in Markelo, mei 2017.
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
              Twee nieuwe lagen op wanden en plafonds, een warme grijs/bruine accentwand die terugkomt in de keuken, en houtrot in het kozijn hersteld met Meranti en een 2-componenten epoxy.
            </p>
            <p className="mt-3">
              U ziet het kozijn vóór en in het werk, en de keuken vóór en na. De stappen: uitzagen, frezen, Meranti, epoxy.
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
            <p className="mt-3">
              Bij een klant in Markelo de tegels en het sanitair gekit. De hoek bij het toilet, de douche, en de naad waar wand en vloer elkaar raken.
            </p>
            <Link href="/werk/markelo-kitwerk" className="btn btn-ink mt-5">
              Bekijk de klus
            </Link>
          </div>
        </article>
      </section>

      <section data-section="open-bon" className="border-t-2 border-ink bg-muted">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Tape>Uw klus</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">De bon is nog leeg</h2>
            <p className="mt-4 text-lg">
              Dit zijn de twee klussen die ik hier helemaal laat zien. Uw huis krijgt zijn eigen bon, nadat ik ben komen kijken. Vink vast wat u denkt dat het is. De rest bepalen we ter plaatse.
            </p>
            <Link href="/contact#offerte" data-cta="offerte" className="btn btn-ink mt-6">
              Offerte aanvragen
            </Link>
          </div>
          <div className="md:col-span-7">
            <Ticket
              kicker="Nog in te vullen"
              rows={[
                { title: "Schilderwerk", on: false },
                { title: "Glaswerk", on: false },
                { title: "Houtrotreparatie", on: false },
                { title: "Kitwerk", on: false },
                { title: "Behang en wandafwerking", on: false },
                { title: "Kleuradvies", on: false },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand title="Uw klus op de werkbon" />
    </main>
  );
}
