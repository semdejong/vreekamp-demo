import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import QuoteForm from "@/components/QuoteForm";
import { Faq, PageHero, PhotoFrame, Tape, Ticket } from "@/components/ui";

export const metadata: Metadata = {
  title: "Houtrotreparatie",
  description: "Houtrot in kozijn of deur? Eerst de oorzaak, dan het herstel. Lennart Vreekamp in Markelo en omgeving.",
};

const herken = [
  { title: "Zacht hout", text: "Drukt u met een schroevendraaier op de onderkant van een kozijn en het hout geeft mee, dan is het zacht. Verf kan dat nog verbergen." },
  { title: "Bladderende verf", text: "Verf die bij de hoeken van een kozijn bladdert, wijst vaak op vocht eronder. De hoek is de plek waar water blijft staan." },
  { title: "Onderkant van deuren", text: "De onderdorpel en de onderkant van een deur blijven nat na regen. Daar begint houtrot het vaakst." },
];

const aanpak = [
  { title: "Oorzaak", text: "Houtrot is een veelvoorkomend probleem bij houten ondergronden. Allereerst moet de oorzaak achterhaald worden. Alleen de zachte plek vullen, terwijl het water blijft komen, helpt niet." },
  { title: "Constructie", text: "Klopt de constructie niet, dan pas ik die aan. Een dorpel die water vasthoudt, of een aansluiting die openstaat, hoort bij het herstel." },
  { title: "Deelvervanging of vulmiddel", text: "Daarna bepaal ik of een deelvervanging nodig is of dat een houtrotvulmiddel volstaat. Soms allebei: hardhout erin, en de naad afgewerkt met vulmiddel." },
];

const tips = [
  "Laat het hout drogen als dat kan. Zet geen emmer, mat of doek tegen het kozijn.",
  "Schilder niet over zacht hout heen. De verf houdt het vocht dan vast.",
  "Forceer een klemmende deur niet. Het hout kan verder scheuren.",
  "Maak een foto van de plek als u belt. Dan weet ik beter wat ik mee moet nemen.",
];

const faqs = [
  {
    q: "Moet het hele kozijn eruit?",
    a: "Niet per se. Ik kijk eerst waarom het hout rot is. Soms is een deelvervanging genoeg: rotte stukken eruit, opvullen met hardhout en afwerken met houtrotvulmiddel. Soms moet de constructie aangepast, bijvoorbeeld als water blijft staan. Een heel nieuw kozijn is alleen nodig als het hout te ver heen is. Dat bepaal ik ter plaatse.",
  },
  {
    q: "Kan dit in de winter?",
    a: "Ik kan in de winter langskomen en de schade bekijken. Of ik het hout meteen kan repareren en aflakken, hangt af van vocht en temperatuur. Buitenschilderwerk doe ik als het droog genoeg is. Bel mij, dan plan ik een moment waarop het werk verantwoord is.",
  },
  {
    q: "Wat kost het?",
    a: "Dat hangt af van hoe diep de rot zit en of er een deelvervanging nodig is. Ik kom kijken en geef u daarna een prijs. Op deze site zet ik geen bedragen.",
  },
  {
    q: "Werkt u ook in Borculo of verder?",
    a: "Ik werk in Markelo en omgeving. In Borculo heb ik een voordeurkozijn hersteld en de woonkamer en keuken geschilderd. Woont u verder weg, bel even. Dan hoort u of ik kan komen.",
  },
];

export default function HoutrotPage() {
  return (
    <main id="inhoud">
      <PageHero
        tape="Houtrotreparatie"
        title="Houtrot? Eerst de oorzaak, dan het herstel."
        lede="Houtrot komt veel voor bij houten ondergronden. Ik achterhaal eerst de oorzaak. Klopt de constructie niet, dan pas ik die aan. Daarna bepaal ik of een deelvervanging nodig is of dat een houtrotvulmiddel volstaat."
        photo={photos.doorOverview}
        stamp="Borculo"
        offerteHref="#offerte"
      />

      <section data-section="herkennen" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Herken houtrot</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Wat u aan het kozijn ziet</h2>
        <p className="mt-4 max-w-2xl">Dit zijn algemene kenmerken. Of het bij u houtrot is, zeg ik pas als ik het hout heb gezien.</p>
        <ul className="mt-8 border-t-2 border-ink">
          {herken.map((item) => (
            <li key={item.title} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
              <h3 className="text-2xl md:col-span-4">{item.title}</h3>
              <p className="md:col-span-8">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <PhotoFrame photo={photos.doorRot} stamp="Zacht hout" caption="Kozijnstijl in Borculo: het hout onderaan is weggerot." />
          <PhotoFrame photo={photos.doorSill} stamp="Onderdorpel" caption="Schade langs de onderkant van deur en kozijn." />
        </div>
      </section>

      <section data-section="aanpak" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Mijn aanpak</Tape>
          <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Oorzaak, constructie, dan het hout</h2>
          <ol className="mt-8 border-t-2 border-ink">
            {aanpak.map((item) => (
              <li key={item.title} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
                <h3 className="text-2xl md:col-span-4">{item.title}</h3>
                <p className="md:col-span-8">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-section="case" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Borculo</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Voordeurkozijn, stap voor stap</h2>
        <p className="mt-5 max-w-2xl text-lg">
          Bij een klant in Borculo zat in een groot deel van het voordeurkozijn houtrot. De voordeur, het kozijn en het wc-raampje kregen daarna een onderhoudsbeurt. Datum op de werkbon: maart 2017.
        </p>
        <ol className="mt-8 space-y-10">
          <li className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-3xl">1. Uitzagen</h3>
              <p className="mt-3">De rotte delen zijn uit het kozijn gezaagd. Wat zacht is, blijft niet zitten.</p>
            </div>
            <PhotoFrame photo={photos.doorSawn} stamp="Uitgezaagd" caption="De stijl nadat het rotte hout eruit is." />
          </li>
          <li className="grid gap-6 md:grid-cols-2">
            <div className="md:order-2">
              <h3 className="text-3xl">2. Frezen</h3>
              <p className="mt-3">Het aangetaste hout is weggefreesd tot op gezond hout. Alleen dan heeft vullen zin.</p>
            </div>
            <PhotoFrame photo={photos.doorRot} stamp="Voor" caption="Zo zag de stijl eruit voordat het rotte hout eruit ging." />
          </li>
          <li className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-3xl">3. Meranti</h3>
              <p className="mt-3">De gaten zijn opgevuld met Meranti hardhout. Dat is een deelvervanging: nieuw hout op de plek van het rotte deel.</p>
            </div>
            <PhotoFrame photo={photos.doorTape} stamp="In het werk" caption="Deur en kozijn afgeplakt, dorpel opengewerkt." />
          </li>
          <li>
            <h3 className="text-3xl">4. 2-componenten epoxy</h3>
            <p className="mt-3 max-w-2xl">
              Afgewerkt met een 2-componenten epoxy houtrotvulmiddel, zodat het kozijn weer jaren mee kan. Daarna is het hout geschilderd, samen met de voordeur en het wc-raampje.
            </p>
            <p className="prose mt-4">
              <Link href="/werk/borculo-woonkamer-en-voordeur">De hele klus, inclusief de woonkamer en de keuken</Link>
            </p>
          </li>
        </ol>
      </section>

      <section data-section="materiaal" className="border-t-2 border-ink bg-ink text-background">
        <div className="on-dark mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Tape>Op de bon in Borculo</Tape>
            <h2 className="mt-5 text-4xl text-background md:text-5xl">Meranti en epoxy</h2>
            <p className="mt-4 text-lg">
              Dit is wat er in dat kozijn is gegaan. Geen verflaag over zacht hout. Eerst het hout, dan de afwerking, dan het schilderwerk van deur, kozijn en wc-raampje.
            </p>
          </div>
          <div className="md:col-span-7">
            <Ticket
              kicker="Materiaal"
              place="Borculo"
              date="maart 2017"
              rows={[
                { title: "Meranti hardhout", text: "Deelvervanging: de gaten opgevuld met hardhout op de plek van het rotte deel.", on: true },
                { title: "2-componenten epoxy", text: "Houtrotvulmiddel om het herstel af te werken, zodat het kozijn weer jaren mee kan.", on: true },
                { title: "Verf", text: "Pas toen het hout in orde was. Samen met de voordeur en het wc-raampje.", on: true },
              ]}
            />
          </div>
        </div>
      </section>

      <section data-section="waar" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="max-w-3xl text-4xl md:text-5xl">Waar ik het tegenkom</h2>
        <p className="mt-4 max-w-2xl">
          Houtrot is een veelvoorkomend probleem bij houten ondergronden. Vaak zit het waar water blijft staan. Of dat bij u zo is, zeg ik pas als ik het heb gezien.
        </p>
        <ul className="mt-8 border-t-2 border-ink">
          {[
            ["Kozijn", "Onderaan de stijl en in de hoeken, waar de verf soms al bladdert."],
            ["Deur", "De onderkant en de onderdorpel, die nat blijven na regen."],
            ["Dakkapel", "Hout dat langs het dak nat wordt. Zit het daar, zet dat dan op de werkbon."],
          ].map(([title, text]) => (
            <li key={title} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
              <h3 className="text-2xl md:col-span-4">{title}</h3>
              <p className="md:col-span-8">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="tips" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Tot ik langskom</Tape>
          <h2 className="mt-5 max-w-3xl text-4xl md:text-5xl">Wat u zelf kunt doen</h2>
          <p className="mt-4 max-w-2xl">Algemene tips, geen garantie dat de schade daarna stopt. Het herstel doe ik ter plaatse.</p>
          <ul className="mt-6 max-w-2xl border-t-2 border-ink">
            {tips.map((tip) => (
              <li key={tip} className="border-b-2 border-ink py-4">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="faq" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="text-4xl md:text-6xl">Vragen</h2>
        <Faq items={faqs} />
      </section>

      <section id="offerte" data-section="offerte" className="scroll-mt-28 border-t-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Tape>Werkbon</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">Laat mij kijken</h2>
            <p className="mt-4 text-lg">
              Vul in waar het houtrot zit, of bel meteen. Het formulier is een demonstratie en verstuurt niets.
            </p>
          </div>
          <div className="md:col-span-7">
            <QuoteForm variant="houtrot" />
          </div>
        </div>
      </section>
    </main>
  );
}
