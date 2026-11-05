import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, Faq, PageHero, PhotoFrame, Ruled, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description: "Binnen- en buitenschilderwerk in Markelo en omgeving. Lennart Vreekamp komt zelf. Bel 06 44 99 37 84.",
};

const binnen = [
  {
    title: "Wanden en plafonds",
    text: "Twee nieuwe lagen als de dekking dat vraagt. In Borculo kregen de wanden en plafonds twee lagen. Eén wand werd warm grijs/bruin, de rest bleef licht.",
  },
  {
    title: "Deuren en kozijnen binnen",
    text: "Deuren die dagelijks worden aangeraakt. Ik kijk naar de ondergrond voordat de verf erop gaat, ook op een binnendeur.",
  },
  {
    title: "Houten betimmering",
    text: "In de keuken in Borculo zat ongelakte houten wandbetimmering. Die is meegenomen in het schilderwerk, samen met de wanden eromheen.",
  },
];

const buiten = [
  {
    title: "Voordeur en kozijn",
    text: "Buiten onderhoud ik voordeuren en kozijnen. In Borculo ging dat samen met het werk binnen: deur, kozijn en wc-raampje in één onderhoudsbeurt.",
  },
  {
    title: "Ramen",
    text: "Een raam hoort bij het kozijn. Schilderen, en als de ruit zelf vervangen moet, doe ik het glas ook. U hoeft daarvoor geen tweede bedrijf te bellen.",
  },
  {
    title: "Eerst het hout",
    text: "Zit er houtrot in, dan herstel ik dat vóór de verf. Schilderen over zacht hout heen heeft geen zin. Hoe ik dat doe, staat bij houtrotreparatie.",
  },
];

const faqs = [
  {
    q: "Doet u binnen en buiten in één keer?",
    a: "Als het bij elkaar hoort, wel. In Borculo schilderde ik de woonkamer en de keuken, en gaf ik de voordeur met kozijn en wc-raampje een onderhoudsbeurt. Of dat bij u in één afspraak past, zeg ik nadat ik heb gekeken.",
  },
  {
    q: "Moet de kamer leeg?",
    a: "Ik kijk ter plaatse wat vrij moet. Op de foto’s van de keuken in Borculo, na het werk, staan aanrecht, fornuis en tafel er nog.",
  },
  {
    q: "Schildert u buiten in de winter?",
    a: "Ik kom kijken, ook in de winter. Aflakken doe ik als het droog genoeg is. Bel mij, dan plannen we een moment waarop het werk verantwoord is.",
  },
  {
    q: "Wat kost het?",
    a: "Dat hangt van de ondergrond en van wat er geschilderd moet worden. Ik kom kijken en geef u daarna een prijs. Op deze site zet ik geen bedragen.",
  },
];

export default function SchilderwerkPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Schilderwerk"
        title="Binnen en buiten"
        lede="Als allround schildersbedrijf ben ik voor elke schilderklus binnen en buiten inzetbaar. U belt mij in Markelo, ik kom zelf."
        photo={photos.kitchenAfter}
        stamp="Borculo"
      />

      <section data-section="binnen" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Tape>Binnen</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">Wanden, plafonds, deuren</h2>
            <p className="mt-5 max-w-xl text-lg">
              Binnenschilderwerk is meer dan een kleur op de muur. Ik kijk naar de ondergrond, naar het licht en naar wat u in de kamer wilt houden.
            </p>
          </div>
          <div className="md:col-span-6">
            <PhotoFrame photo={photos.livingBefore} stamp="Voor" caption="Woonkamer in Borculo, vóór de nieuwe lagen." />
          </div>
        </div>
        <Ruled items={binnen} />
      </section>

      <section data-section="lagen" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Tape>Borculo</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">Twee lagen, één accent</h2>
            <p className="mt-5 text-lg">
              De wanden en plafonds kregen twee nieuwe lagen. Eén wand kreeg een warme grijs/bruine tint. Die kleur kwam terug in de keuken en geeft contrast met het lichte schilderwerk eromheen. Het resultaat is fris, zonder dat alles dezelfde tint is.
            </p>
            <p className="mt-4 text-base">De vlakken hiernaast zijn een schema van dat contrast. Geen kleurcode en geen staal uit een waaier.</p>
            <p className="prose mt-5">
              <Link href="/werk/borculo-woonkamer-en-voordeur">De klus in Borculo</Link>
              {" · "}
              <Link href="/kleuradvies">Kleuradvies</Link>
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="layer-stack" aria-hidden="true">
              <p className="bg-[#f7f4ee] text-ink">Tweede laag — licht</p>
              <p className="bg-[#e4dfd6] text-ink">Eerste laag — licht</p>
              <p className="bg-[#3f342c] text-background">Accentwand — warm grijs/bruin</p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <PhotoFrame photo={photos.kitchenAfterSide} stamp="Na" caption="Doorkijk naar de woonkamer. De accentwand is de warme grijs/bruine tint." />
              <PhotoFrame photo={photos.kitchenAfterHob} stamp="Na" caption="Keuken na het schilderwerk, licht afgewerkt rond het fornuis." />
            </div>
          </div>
        </div>
      </section>

      <section data-section="buiten" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6 md:order-2">
            <Tape>Buiten</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">Deuren, kozijnen, ramen</h2>
            <p className="mt-5 max-w-xl text-lg">
              Buitenwerk doe ik als het droog genoeg is. Zaterdag kan ik langskomen om te kijken, ook als u doordeweeks zelf aan het werk bent.
            </p>
          </div>
          <div className="md:col-span-6">
            <PhotoFrame photo={photos.doorOverview} stamp="Voor" caption="Voordeur in Borculo, vóór de onderhoudsbeurt." />
          </div>
        </div>
        <Ruled items={buiten} />
        <p className="prose mt-8">
          <Link href="/houtrotreparatie">Houtrotreparatie</Link>
          {" · "}
          <Link href="/glaswerk">Glaswerk</Link>
        </p>
      </section>

      <section data-section="vragen" className="border-t-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="text-4xl md:text-6xl">Vragen</h2>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand title="Een schilderklus, binnen of buiten" text="Beschrijf kort wat er moet gebeuren, of bel mij. Ik kom kijken en zeg wat het kost." />
    </main>
  );
}
