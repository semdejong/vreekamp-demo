import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, PhotoFrame, Tape, Ticket } from "@/components/ui";

export const metadata: Metadata = {
  title: "Borculo, woonkamer en voordeur",
  description: "Woonkamer, keuken en voordeur in Borculo. Houtrot in het kozijn hersteld met Meranti en epoxy.",
};

export default function BorculoPage() {
  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <Tape>Borculo</Tape>
            <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl">Woonkamer, keuken en voordeur</h1>
            <p className="mt-5 max-w-xl text-lg">
              Bij een klant in Borculo heb ik de woonkamer en de keuken geschilderd. De voordeur, het kozijn en het wc-raampje kregen een onderhoudsbeurt.
            </p>
            <p className="prose mt-4">
              <Link href="/werk">Alle klussen</Link>
            </p>
          </div>
          <div className="md:col-span-5">
            <PhotoFrame photo={photos.doorOverview} priority stamp="Voor" caption="De groene voordeur vóór het herstel van het kozijn." />
          </div>
        </div>
      </section>

      <section data-section="werkbon" className="mx-auto max-w-6xl px-5 py-14">
        <Ticket
          kicker="Werkbon"
          place="Borculo"
          date="maart 2017"
          rows={[
            { title: "Schilderwerk", text: "Wanden en plafonds twee nieuwe lagen. Eén wand warm grijs/bruin, dezelfde tint in de keuken.", on: true },
            { title: "Onderhoud buiten", text: "Voordeur, kozijn en wc-raampje.", on: true },
            { title: "Houtrotreparatie", text: "Rotte delen uitgezaagd en gefreesd, Meranti, 2-componenten epoxy.", on: true },
          ]}
        />
      </section>

      <section data-section="schilderwerk" className="border-y-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="max-w-3xl text-4xl md:text-6xl">Twee lagen, één accent</h2>
          <div className="prose mt-5 max-w-2xl space-y-4">
            <p>
              De wanden en plafonds zijn voorzien van twee nieuwe lagen verf. Op één wand is een warme grijs/bruine tint aangebracht, zodat de woonkamer spreekt. Die kleur is terug te zien in de keuken en geeft contrast met het overige, licht gemaakte schilderwerk. Het eindresultaat is fris.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <PhotoFrame photo={photos.livingBefore} stamp="Voor" caption="Woonkamer vóór het schilderwerk." />
            <PhotoFrame photo={photos.kitchenAfterSide} stamp="Na" caption="Doorkijk naar de woonkamer met de accentwand." />
            <PhotoFrame photo={photos.kitchenBefore} stamp="Voor" caption="Keukenwand vóór de nieuwe verflaag." />
            <PhotoFrame photo={photos.kitchenAfter} stamp="Na" caption="Keuken na het schilderwerk." />
            <PhotoFrame photo={photos.kitchenBeforeGrey} stamp="Voor" caption="Wand boven het aanrecht, vóór de nieuwe laag." />
            <PhotoFrame photo={photos.kitchenAfterSink} stamp="Na" caption="Aanrechtzijde na het schilderwerk." />
            <PhotoFrame photo={photos.kitchenAfterWindow} stamp="Na" caption="Raamzijde van de keuken." />
            <PhotoFrame photo={photos.kitchenAfterDoor} stamp="Na" caption="Binnendeur en keukenwand afgewerkt." />
          </div>
        </div>
      </section>

      <section data-section="houtrot" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Houtrot</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Kozijn: uitzagen, frezen, Meranti, epoxy</h2>
        <p className="mt-5 max-w-2xl text-lg">
          In een groot deel van het kozijn was houtrot ingetreden. Dat is opgelost door de rotte delen uit te zagen en te frezen, de gaten op te vullen met Meranti hardhout en af te werken met een 2-componenten epoxy houtrotvulmiddel.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          <li>
            <PhotoFrame photo={photos.doorRot} stamp="Voor" caption="Rot hout onderin de stijl." />
            <h3 className="mt-4 text-2xl">Uitzagen en frezen</h3>
            <p className="mt-2">Rotte delen eruit, tot op gezond hout.</p>
          </li>
          <li>
            <PhotoFrame photo={photos.doorSawn} stamp="Uitgezaagd" caption="De stijl nadat het rotte deel eruit is." />
            <h3 className="mt-4 text-2xl">Meranti</h3>
            <p className="mt-2">Gaten opgevuld met Meranti hardhout.</p>
          </li>
          <li>
            <PhotoFrame photo={photos.doorTape} stamp="In het werk" caption="Afgeplakt, dorpel open, daarna epoxy en verf." />
            <h3 className="mt-4 text-2xl">Epoxy</h3>
            <p className="mt-2">Afgewerkt met 2-componenten epoxy houtrotvulmiddel, zodat het kozijn weer jaren mee kan.</p>
          </li>
        </ol>
        <p className="prose mt-8">
          <Link href="/houtrotreparatie">Hoe ik houtrot aanpak</Link>
          {" · "}
          <Link href="/schilderwerk">Schilderwerk binnen en buiten</Link>
          {" · "}
          <Link href="/kleuradvies">De kleurkeuze</Link>
        </p>
      </section>

      <CtaBand title="Ook een kozijn of een kamer" text="Bel mij. Ik kom kijken of het hout zacht is en wat de wanden nodig hebben." />
    </main>
  );
}
