import type { Metadata } from "next";
import Link from "next/link";
import { content, photos } from "@/content";
import { CtaBand, Faq, PageHero, PhotoFrame, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kleuradvies",
  description: "Kleuradvies op maat voor nieuwbouw en renovatie in Markelo en omgeving. Lennart Vreekamp.",
};

const faqs = [
  {
    q: "Moet ik al een kleur weten?",
    a: "Nee. De eerste vraag is of u het rustig wilt houden, of dat de verf het woord mag doen. De tint volgt daarna, in de kamer.",
  },
  {
    q: "Komt u langs om te kijken?",
    a: "Ja. Kleur bekijkt u in het licht van de kamer, niet op een scherm. Ik kijk naar de meubels, de ondergrond en naar wat blijft.",
  },
  {
    q: "Doet u daarna ook het schilderwerk?",
    a: "Ja. Advies en uitvoering zijn bij mij dezelfde persoon. Geen aparte adviseur en een schilder die het later anders uitvoert.",
  },
  {
    q: "Nieuwbouw of een bestaand huis?",
    a: "Allebei. Nieuwbouw is nog leeg: de kleur zet de toon. Renovatie heeft al meubels en een geschiedenis. Ik geef kleuradvies op maat voor beide.",
  },
];

export default function KleuradviesPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Kleuradvies"
        title="Laat het huis spreken"
        lede="Kleuren zijn heel bepalend voor uw woning. Ik geef kleuradvies op maat, voor nieuwbouw en voor renovatie."
        photo={photos.buckets}
      />

      <section data-section="vraag" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>De vraag</Tape>
        <blockquote className="mt-6 max-w-3xl border-l-[12px] border-violet py-1 pl-5 text-2xl leading-snug md:text-3xl">
          {content.kleuradvies.quote}
        </blockquote>
        <div className="mt-10 grid gap-0 border-2 border-ink md:grid-cols-2">
          <div className="border-b-2 border-ink p-6 md:border-r-2 md:border-b-0 md:p-8">
            <p className="font-display text-sm font-bold tracking-[0.14em] uppercase">Rustig</p>
            <h2 className="mt-3 text-4xl">Het huis leeft door de meubels</h2>
            <p className="mt-4">De verf blijft licht en houdt de kamer open. De bank, de tafel en het hout doen het werk. Dat is een keuze, geen gemis.</p>
          </div>
          <div className="bg-violet p-6 text-background md:p-8">
            <p className="font-display text-sm font-bold tracking-[0.14em] uppercase">Spreken</p>
            <h2 className="mt-3 text-4xl text-background">De verf doet het woord</h2>
            <p className="mt-4">Eén wand, of een paar vlakken, krijgen een tint die u ziet zodra u binnenkomt. De rest kan licht blijven, zodat het contrast klopt.</p>
          </div>
        </div>
      </section>

      <section data-section="borculo" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Borculo</Tape>
          <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Eén wand die terugkomt in de keuken</h2>
          <p className="mt-5 max-w-2xl text-lg">
            In Borculo viel de keuze op spreken, maar niet overal. Eén wand in een warme grijs/bruine tint, zodat de woonkamer spreekt. Die kleur is terug te zien in de keuken en geeft contrast met het overige, lichte schilderwerk.
          </p>
          <div className="mt-8 grid border-2 border-ink sm:grid-cols-2" aria-hidden="true">
            <p className="flex min-h-36 items-end bg-[#f7f4ee] p-4 font-display text-2xl font-bold uppercase">Licht schilderwerk</p>
            <p className="flex min-h-36 items-end bg-[#3f342c] p-4 font-display text-2xl font-bold uppercase text-background">Warm grijs/bruin</p>
          </div>
          <p className="mt-3 max-w-2xl text-base">Schema van het contrast. Geen kleurcode en geen nummer uit een waaier.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <PhotoFrame photo={photos.livingBefore} stamp="Voor" caption="De woonkamer vóór de accentwand." />
            <PhotoFrame photo={photos.kitchenAfterSide} stamp="Na" caption="Doorkijk naar de woonkamer. De accentwand is de warme grijs/bruine tint." />
          </div>
          <p className="prose mt-8">
            <Link href="/werk/borculo-woonkamer-en-voordeur">Bekijk die klus</Link>
            {" · "}
            <Link href="/schilderwerk">Schilderwerk</Link>
            {" · "}
            <Link href="/behang-en-wandafwerking">Behang</Link>
          </p>
        </div>
      </section>

      <section data-section="nieuw-of-oud" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="max-w-3xl text-4xl md:text-6xl">Nieuwbouw en renovatie</h2>
        <div className="mt-8 border-t-2 border-ink">
          <div className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
            <h3 className="text-2xl md:col-span-4">Nieuwbouw</h3>
            <p className="md:col-span-8">De kamers zijn nog leeg. Het licht heeft weinig tegenwerking van meubels. De kleur die u nu kiest, zet de toon voor wat er later in komt.</p>
          </div>
          <div className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
            <h3 className="text-2xl md:col-span-4">Renovatie</h3>
            <p className="md:col-span-8">Er staat al een huis. Ik kijk naar de bank, de vloer en de deuren die blijven. Soms is één wand genoeg. Soms moet juist alles lichter, zodat de meubels het woord doen.</p>
          </div>
        </div>
      </section>

      <section data-section="vragen" className="border-t-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="text-4xl md:text-6xl">Vragen</h2>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand title="Twijfelt u over de kleur" text="Bel mij. Ik kom kijken en we bepalen of het huis rustig blijft of dat de verf het woord doet." />
    </main>
  );
}
