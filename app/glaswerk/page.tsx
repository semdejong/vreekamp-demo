import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, Faq, PageHero, PhotoFrame, Ruled, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Glaswerk",
  description: "Nieuw glas of vervangen, enkel glas of isolerende beglazing. Schildersbedrijf Vreekamp in Markelo.",
};

const items = [
  {
    title: "Vervangen",
    text: "Een ruit die stuk is, haal ik eruit en vervang ik. Ik meet ter plaatse, zodat het glas in het kozijn past.",
  },
  {
    title: "Enkel glas",
    text: "Waar enkel glas volstaat, plaats ik enkel glas. Niet elke opening hoeft hetzelfde glas.",
  },
  {
    title: "Isolerende beglazing",
    text: "Gaat het om warmte, dan kijk ik naar isolerende beglazing. Ik zeg ter plaatse wat in uw kozijn kan.",
  },
  {
    title: "Kit rond het glas",
    text: "Een ruit hoort dicht te zitten. Het beglazingskitwerk doe ik erbij, of als losse klus als de kit is losgelaten.",
  },
];

const faqs = [
  {
    q: "Komt u zelf meten?",
    a: "Ja. Ik meet de opening ter plaatse en ik kijk meteen naar het hout, zodat het glas in het kozijn past.",
  },
  {
    q: "Kan er isolerend glas in een bestaand kozijn?",
    a: "Soms wel, soms niet. Dat hangt van de sponning en van het hout af. Ik zeg het pas als ik het kozijn heb gezien. Moet het hout eerst in orde, dan begint het bij houtrotreparatie.",
  },
  {
    q: "Hoort de kit bij de ruit?",
    a: "Ja. Beglazingskit zet ik bij een nieuwe ruit, en ook als losse klus wanneer de naad is losgelaten en het glas blijft zitten.",
  },
  {
    q: "Wat kost een ruit?",
    a: "Geen twee ruiten zitten hetzelfde. Ik kom kijken en noem dan een prijs. Op deze site zet ik geen bedragen.",
  },
];

export default function GlaswerkPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Glaswerk"
        title="Nieuw glas of vervangen"
        lede="Of het nu gaat om enkel glas of isolerende beglazing, ik bied voor elke situatie de juiste oplossing."
        photo={photos.doorOverview}
        stamp="Borculo"
      />

      <section data-section="aanpak" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Wat ik plaats</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Glas dat in het kozijn past</h2>
        <p className="mt-5 max-w-2xl text-lg">
          Glas en schilderwerk lopen vaak door elkaar. Een wc-raampje, een deur met glas, een kozijn dat ook geschilderd moet. U hoeft daarvoor niet twee bedrijven te bellen.
        </p>
        <Ruled items={items} />
        <p className="prose mt-8 max-w-2xl">
          Het kitwerk rond ramen en deuren staat ook bij <Link href="/kitwerk">kitwerk</Link>. Moet het hout eerst in orde, dan begint het bij{" "}
          <Link href="/houtrotreparatie">houtrotreparatie</Link>.
        </p>
      </section>

      <section data-section="meetbon" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Tape>Meetbon</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">Wat ik noteer als ik kom</h2>
            <p className="mt-5 text-lg">
              Geen prijs op de site, wel een vaste volgorde ter plaatse. Eerst de maat, dan het soort glas, dan het hout eromheen.
            </p>
          </div>
          <div className="md:col-span-7">
            <dl className="meetbon">
              <div>
                <dt>Maat</dt>
                <dd>Breedte en hoogte van de opening, gemeten in het kozijn.</dd>
              </div>
              <div>
                <dt>Soort</dt>
                <dd>Enkel glas, of isolerende beglazing als het om warmte gaat.</dd>
              </div>
              <div>
                <dt>Kozijn</dt>
                <dd>Of de sponning het glas kan dragen, en of het hout zacht is.</dd>
              </div>
              <div>
                <dt>Kit</dt>
                <dd>De naad rond de ruit, meteen mee of als de oude kit is losgelaten.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section data-section="borculo" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <PhotoFrame
            photo={photos.doorBottom}
            stamp="Onderhoud"
            caption="Onderzijde van de voordeur in Borculo. Deur, kozijn en wc-raampje kregen een onderhoudsbeurt. Het glas zelf is hier niet vervangen."
          />
          <PhotoFrame
            photo={photos.kitchenAfterWindow}
            stamp="Raam"
            caption="Raam in de keuken in Borculo, na het schilderwerk. Een kapotte ruit is een aparte klus: dan meet ik en vervang ik het glas."
          />
        </div>
        <p className="prose mt-8 max-w-2xl">
          Schilderen rond een raam dat blijft zitten, staat bij <Link href="/schilderwerk">schilderwerk</Link>.
        </p>
      </section>

      <section data-section="vragen" className="border-t-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="text-4xl md:text-6xl">Vragen</h2>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Een ruit laten vervangen"
        text="Bel of app mij met de plaats en, als u wilt, een foto. Het offerteformulier is een demonstratie en verstuurt niets."
      />
    </main>
  );
}
