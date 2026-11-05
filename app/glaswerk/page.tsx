import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Glaswerk",
  description: "Nieuw glas of vervangen, enkel glas of isolerende beglazing. Schildersbedrijf Vreekamp in Markelo.",
};

const items = [
  { title: "Vervangen", text: "Een ruit die stuk is, haal ik eruit en vervang ik. Ik meet ter plaatse, zodat het glas in het kozijn past." },
  { title: "Enkel glas", text: "Waar enkel glas volstaat, plaats ik enkel glas. Niet elke opening hoeft hetzelfde glas." },
  { title: "Isolerende beglazing", text: "Gaat het om warmte, dan kijk ik naar isolerende beglazing. Ik zeg ter plaatse wat in uw kozijn kan." },
  { title: "Kit rond het glas", text: "Een ruit hoort dicht te zitten. Het beglazingskitwerk doe ik erbij, of als losse klus als de kit is losgelaten." },
];

export default function GlaswerkPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Glaswerk"
        title="Nieuw glas of vervangen"
        lede="Of het nu gaat om enkel glas of isolerende beglazing, ik bied voor elke situatie de juiste oplossing."
      />

      <section data-section="aanpak" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Wat ik plaats</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Glas dat in het kozijn past</h2>
        <p className="mt-5 max-w-2xl text-lg">
          Glas en schilderwerk lopen vaak door elkaar. Een wc-raampje, een deur met glas, een kozijn dat ook geschilderd moet. U hoeft daarvoor niet twee bedrijven te bellen.
        </p>
        <ul className="mt-8 border-t-2 border-ink">
          {items.map((item) => (
            <li key={item.title} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
              <h3 className="text-2xl md:col-span-4">{item.title}</h3>
              <p className="md:col-span-8">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="prose mt-8 max-w-2xl">
          Het kitwerk rond ramen en deuren staat ook bij <Link href="/kitwerk">kitwerk</Link>. Moet het hout eerst in orde, dan begint het bij{" "}
          <Link href="/houtrotreparatie">houtrotreparatie</Link>.
        </p>
      </section>

      <section data-section="afspraak" className="border-t-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-4xl md:text-5xl">Eerst kijken, dan het glas</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Ik kom de maat en de staat van het kozijn opnemen. Daarna hoort u wat erin kan en wat het kost. Op deze site zet ik geen prijzen, omdat geen twee ruiten hetzelfde zitten.
          </p>
        </div>
      </section>

      <CtaBand title="Een ruit laten vervangen" text="Bel of app mij met de plaats en, als u wilt, een foto. Het offerteformulier is een demonstratie en verstuurt niets." />
    </main>
  );
}
