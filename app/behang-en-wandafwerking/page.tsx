import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Behang en wandafwerking",
  description: "Fotobehang, patroonbehang, glasvlies en glasweefsel. Wandafwerking door Lennart Vreekamp in Markelo.",
};

const soorten = [
  { title: "Fotobehang", text: "Eén wand die een beeld draagt. Ik stem het formaat af op de wand en op wat u in de kamer wilt zien." },
  { title: "Patroonbehang", text: "De wand zelf is het patroon. De banen moeten kloppen, anders ziet u de naad eerder dan het dessin." },
  { title: "Glasvlies", text: "Een strakke wandafwerking. Geschikt als de wand daarna nog een kleur krijgt." },
  { title: "Glasweefsel", text: "Steviger op een wand die wat te verduren heeft. Ook dit werk ik af zoals de kamer vraagt." },
];

export default function BehangPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Behang en wandafwerking"
        title="Behang dat bij het huis past"
        lede="Of het nu gaat om fotobehang, patroonbehang, glasvlies of glasweefsel: ik weeg de keuze af aan het type huis en aan uw wens."
      />

      <section data-section="soorten" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>De keuze</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Niet elke wand hetzelfde behang</h2>
        <p className="mt-5 max-w-2xl text-lg">
          Wandafwerking is meer dan een rol op de muur. Ik kijk naar het huis en naar wat u wilt, en dan werk ik de wand af.
        </p>
        <ul className="mt-8 border-t-2 border-ink">
          {soorten.map((item) => (
            <li key={item.title} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
              <h3 className="text-2xl md:col-span-4">{item.title}</h3>
              <p className="md:col-span-8">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="prose mt-8">
          Twijfelt u tussen behang en verf, dan hoort daar <Link href="/kleuradvies">kleuradvies</Link> bij. De wand schilderen kan ook, zie{" "}
          <Link href="/schilderwerk">schilderwerk</Link>.
        </p>
      </section>

      <CtaBand title="Een wand laten afwerken" text="Vertel welk behang u in gedachten heeft, of dat u nog wilt kiezen. Ik kom de wand bekijken." />
    </main>
  );
}
