import type { Metadata } from "next";
import Link from "next/link";
import { content, photos } from "@/content";
import { CtaBand, PageHero, PhotoFrame, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kleuradvies",
  description: "Kleuradvies op maat voor nieuwbouw en renovatie in Markelo en omgeving. Lennart Vreekamp.",
};

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
        <div className="prose mt-8 max-w-2xl space-y-4">
          <p>
            Die keuze maak ik niet vanaf een staalwaaier alleen. Ik kom kijken naar het licht, de meubels en de ondergrond. Nieuwbouw vraagt iets anders dan een huis dat al bewoond is.
          </p>
          <p>
            In Borculo viel de keuze op één wand in een warme grijs/bruine tint, zodat de woonkamer spreekt. Die kleur is terug te zien in de keuken en geeft contrast met het overige, lichte schilderwerk.
          </p>
          <p>
            <Link href="/werk/borculo-woonkamer-en-voordeur">Bekijk die klus</Link>
            {" · "}
            <Link href="/schilderwerk">Schilderwerk</Link>
            {" · "}
            <Link href="/behang-en-wandafwerking">Behang</Link>
          </p>
        </div>
      </section>

      <section data-section="voorbeeld" className="border-t-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2 md:py-16">
          <PhotoFrame photo={photos.livingBefore} stamp="Voor" caption="De woonkamer vóór de accentwand." />
          <PhotoFrame photo={photos.kitchenAfterSide} stamp="Na" caption="Doorkijk naar de woonkamer. De accentwand is de warme grijs/bruine tint." />
        </div>
      </section>

      <CtaBand title="Twijfelt u over de kleur" text="Bel mij. Ik kom kijken en we bepalen of het huis rustig blijft of dat de verf het woord doet." />
    </main>
  );
}
