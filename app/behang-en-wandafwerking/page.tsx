import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Faq, PageHero, Ruled, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Behang en wandafwerking",
  description: "Fotobehang, patroonbehang, glasvlies en glasweefsel. Wandafwerking door Lennart Vreekamp in Markelo.",
};

const soorten = [
  {
    title: "Fotobehang",
    text: "Eén wand die een beeld draagt. Ik stem het formaat af op de wand en op wat u in de kamer wilt zien. De andere wanden blijven rustig, tenzij u iets anders wilt.",
  },
  {
    title: "Patroonbehang",
    text: "De wand zelf is het patroon. De banen moeten aansluiten, anders ziet u de naad eerder dan het dessin. Daar neem ik de tijd voor.",
  },
  {
    title: "Glasvlies",
    text: "Een strakke wandafwerking. Geschikt als de wand daarna nog een kleur krijgt. Het vlies is de ondergrond, de verf is de keuze.",
  },
  {
    title: "Glasweefsel",
    text: "Steviger op een wand die wat te verduren heeft. De structuur blijft zichtbaar. Ook dit werk ik af zoals de kamer vraagt.",
  },
];

const voorbereiding = [
  {
    title: "De wand eerst",
    text: "Ik kijk of de wand vlak is en of oud behang loslaat. Loslatend behang haal ik eraf. Over een wand die dat niet kan hebben, hang ik niet heen.",
  },
  {
    title: "Het huis",
    text: "Nieuwbouw is een lege kamer en veel licht. Een bewoond huis heeft meubels en een kleur die al bestaat. Ik weeg de keuze af aan het type huis en aan uw wens.",
  },
  {
    title: "Behang of verf",
    text: "Soms is een geschilderde wand genoeg. Twijfelt u, dan beginnen we bij kleuradvies. Advies en uitvoering doe ik zelf.",
  },
];

const faqs = [
  {
    q: "Moet ik het behang al hebben?",
    a: "Zeg bij het bellen of u het behang al heeft of dat u nog wilt kiezen. Ik stem het formaat af op de wand.",
  },
  {
    q: "Kunt u over bestaand behang heen?",
    a: "Alleen als de wand dat toelaat. Loslatend of bobbelend behang gaat er eerst af. Dat bepaal ik ter plaatse, niet aan de telefoon.",
  },
  {
    q: "Kan glasvlies daarna geverfd worden?",
    a: "Ja. Glasvlies is een wandafwerking die daarna een kleur krijgt. Welke kleur, bepalen we in de kamer. Zie ook kleuradvies en schilderwerk.",
  },
  {
    q: "Wat kost het?",
    a: "Dat hangt van de wand, het soort behang en de voorbereiding af. Ik kom kijken en geef dan een prijs. Op deze site zet ik geen bedragen.",
  },
];

export default function BehangPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Behang en wandafwerking"
        title="Behang dat bij het huis past"
        lede="Of het nu gaat om fotobehang, patroonbehang, glasvlies of glasweefsel: ik weeg de keuze af aan het type huis en aan uw wens."
      />

      <section data-section="staalkaart" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Staalkaart</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Vier soorten, vier verschillende wanden</h2>
        <p className="mt-5 max-w-2xl text-lg">
          De stroken hieronder zijn een schema, geen behangmonster en geen foto van een klus. Ze laten het verschil zien: één beeld, een patroon, een glad vlies, of een weefsel.
        </p>
        <div className="staal mt-8" aria-hidden="true">
          <div className="staal-row">
            <p className="staal-name">Fotobehang</p>
            <div className="staal-field bg-brand" />
          </div>
          <div className="staal-row">
            <p className="staal-name">Patroon</p>
            <div className="staal-field patroon-field" />
          </div>
          <div className="staal-row">
            <p className="staal-name">Glasvlies</p>
            <div className="staal-field bg-muted" />
          </div>
          <div className="staal-row">
            <p className="staal-name">Glasweefsel</p>
            <div className="staal-field weefsel-field" />
          </div>
        </div>
        <Ruled items={soorten} />
      </section>

      <section data-section="voorbereiding" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Voor ik hang</Tape>
          <h2 className="mt-5 max-w-3xl text-4xl md:text-5xl">De wand beslist mee</h2>
          <Ruled items={voorbereiding} />
          <p className="prose mt-8">
            <Link href="/kleuradvies">Kleuradvies</Link>
            {" · "}
            <Link href="/schilderwerk">De wand schilderen</Link>
          </p>
        </div>
      </section>

      <section data-section="vragen" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="text-4xl md:text-6xl">Vragen</h2>
        <Faq items={faqs} />
      </section>

      <CtaBand title="Een wand laten afwerken" text="Vertel welk behang u in gedachten heeft, of dat u nog wilt kiezen. Ik kom de wand bekijken." />
    </main>
  );
}
