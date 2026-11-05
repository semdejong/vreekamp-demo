import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, Faq, PageHero, PhotoFrame, Ruled, Tape, Ticket } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kitwerk",
  description: "Kitvoegen in badkamer, wc of langs de vloer, en beglazingskit. Schildersbedrijf Vreekamp, Markelo.",
};

const waar = [
  {
    title: "Badkamer en douche",
    text: "Kitvoegen die loslaten rond de douche, de kraan en de tegelhoek. Water hoort in de naad te blijven, niet erachter.",
  },
  {
    title: "Wc",
    text: "De hoek waar tegelwanden elkaar raken, en de aansluiting bij het sanitair. In Markelo heb ik die hoek gekit.",
  },
  {
    title: "Langs de vloer",
    text: "De naad waar wand, vloer en sanitair samenkomen. Die vervang ik als de kit is gescheurd of loslaat.",
  },
  {
    title: "Beglazingskit",
    text: "Rond ramen en deuren. Bij een nieuwe ruit, of als losse klus wanneer de oude kit is losgelaten.",
  },
  {
    title: "Nieuwe ondergrond",
    text: "Bij nieuw tegelwerk of een andere nieuwe ondergrond zet ik de kitnaden meteen, zodat de aansluiting dicht is.",
  },
];

const aanpak = [
  {
    title: "Oude kit eruit",
    text: "Wat loslaat, haal ik weg. Een nieuwe naad over oude kit heen trekken heeft geen zin.",
  },
  {
    title: "Droog",
    text: "De naad moet droog zijn voordat de nieuwe kit erin gaat. Ik zeg ter plaatse of dat meteen kan.",
  },
  {
    title: "Nieuwe naad",
    text: "Ik zet een volle naad in de hoek, in de douche of langs de vloer. Niet meer naden dan nodig, wel de naden die aan de beurt zijn.",
  },
];

const faqs = [
  {
    q: "Hoelang mag de douche niet gebruikt worden?",
    a: "Dat zeg ik ter plaatse. Het hangt van de kit en van de plek af. Een vaste wachttijd zet ik hier niet neer.",
  },
  {
    q: "Alleen de hoek, of de hele badkamer?",
    a: "U geeft aan wat loslaat. Ik vervang de naden die aan de beurt zijn. Wat dat precies is, bekijken we ter plaatse.",
  },
  {
    q: "Ook rond ramen?",
    a: "Ja. Dat is beglazingskit. Moet de ruit zelf vervangen, dan hoort het glas erbij. Zie de pagina over glaswerk.",
  },
  {
    q: "Wat kost het?",
    a: "Ik kom kijken. De prijs hangt van de lengte van de naad en van de ondergrond af. Op deze site zet ik geen bedragen.",
  },
];

export default function KitwerkPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Kitmontage"
        title="Kitwerk dat weer dicht zit"
        lede="Beglazingskit, kitvoegen in de badkamer, de wc of langs de vloer, en kitwerk bij nieuwe ondergronden."
        photo={photos.kitShower}
        stamp="Markelo"
      />

      <section data-section="waar" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Waar</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Badkamer, wc, vloer, glas</h2>
        <p className="mt-5 max-w-2xl text-lg">
          Zijn uw kitvoegen in de badkamer, de wc of langs de vloer aan vervanging toe? Dan vervang ik die. In Markelo heb ik bij een klant de tegels en het sanitair gekit.
        </p>
        <Ruled items={waar} />
      </section>

      <section data-section="markelo" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Tape>Markelo</Tape>
              <h2 className="mt-5 text-4xl md:text-5xl">Drie naden, één klus</h2>
              <p className="mt-4 text-lg">Mei 2017. De hoek bij het toilet, de douche, en de aansluiting langs de vloer. Geen losse foto’s: het is dezelfde bon.</p>
              <div className="mt-6">
                <Ticket
                  kicker="Werkbon"
                  place="Markelo"
                  date="mei 2017"
                  rows={[
                    { title: "Tegelhoek bij de wc", on: true },
                    { title: "Douche", on: true },
                    { title: "Naad langs de vloer", on: true },
                  ]}
                />
              </div>
              <p className="prose mt-6">
                <Link href="/werk/markelo-kitwerk">De klus in het groot</Link>
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <PhotoFrame photo={photos.kitCorner} caption="Tegelhoek bij het toilet, gekit." />
              <PhotoFrame photo={photos.kitFloor} caption="Naad waar sanitair, wand en vloer elkaar raken." />
            </div>
          </div>
        </div>
      </section>

      <section data-section="aanpak" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Zo werk ik</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-5xl">Eerst de oude naad, dan de nieuwe</h2>
        <p className="mt-4 max-w-2xl">Dit is de volgorde die ik aanhoud. Hoe lang een naad daarna met rust moet, zeg ik bij u, niet op deze pagina.</p>
        <Ruled items={aanpak} />
        <p className="prose mt-8">
          <Link href="/glaswerk">Beglazingskit en glas</Link>
          {" · "}
          <Link href="/schilderwerk">Schilderwerk</Link>
        </p>
      </section>

      <section data-section="vragen" className="border-t-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="text-4xl md:text-6xl">Vragen</h2>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand title="Kitnaden laten vervangen" text="Zeg even waar het zit: badkamer, wc, vloer of rond het glas. Ik kom kijken." />
    </main>
  );
}
