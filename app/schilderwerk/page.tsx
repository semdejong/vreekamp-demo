import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, PageHero, PhotoFrame, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description: "Binnen- en buitenschilderwerk in Markelo en omgeving. Lennart Vreekamp komt zelf. Bel 06 44 99 37 84.",
};

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
            <div className="prose mt-5 max-w-xl space-y-4">
              <p>
                Binnenschilderwerk is wanden en plafonds, maar ook deuren en kozijnen die dagelijks worden aangeraakt. Ik kijk naar de ondergrond voordat de verf erop gaat.
              </p>
              <p>
                In Borculo kregen de wanden en plafonds twee nieuwe lagen. Eén wand kreeg een warme grijs/bruine tint. Die kleur kwam terug in de keuken en geeft contrast met het lichte schilderwerk eromheen. Het resultaat is fris, zonder dat alles dezelfde tint is.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
            <PhotoFrame
              photo={photos.livingBefore}
              stamp="Voor"
              caption="Woonkamer in Borculo, vóór de nieuwe lagen."
            />
          </div>
        </div>
      </section>

      <section data-section="buiten" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6 md:order-2">
            <Tape>Buiten</Tape>
            <h2 className="mt-5 text-4xl md:text-5xl">Deuren, kozijnen, ramen</h2>
            <div className="prose mt-5 max-w-xl space-y-4">
              <p>
                Buiten onderhoud ik voordeuren, kozijnen en ramen. In Borculo ging dat samen met het werk binnen: de voordeur, het kozijn en het wc-raampje kregen een onderhoudsbeurt.
              </p>
              <p>
                Zat er houtrot in het kozijn, dan herstel ik dat eerst. Schilderen over zacht hout heen heeft geen zin. Hoe ik dat aanpak, staat op de pagina over houtrotreparatie.
              </p>
              <p>
                <Link href="/houtrotreparatie">Houtrotreparatie</Link>
                {" · "}
                <Link href="/werk/borculo-woonkamer-en-voordeur">De klus in Borculo</Link>
                {" · "}
                <Link href="/kleuradvies">Kleuradvies</Link>
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
            <PhotoFrame photo={photos.doorOverview} stamp="Voor" caption="Voordeur in Borculo, vóór de onderhoudsbeurt." />
          </div>
        </div>
      </section>

      <section data-section="zaterdag" className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="text-4xl md:text-5xl">Ook op zaterdag</h2>
        <p className="mt-4 max-w-2xl text-lg">
          Maandag tot en met vrijdag ben ik bereikbaar van 08:00 tot 18:00. Zaterdag van 08:00 tot 17:00. Dat is handig als u doordeweeks werkt en toch wilt dat ik langskom om de klus te bekijken.
        </p>
      </section>

      <CtaBand title="Een schilderklus, binnen of buiten" text="Beschrijf kort wat er moet gebeuren, of bel mij. Ik kom kijken en zeg wat het kost." />
    </main>
  );
}
