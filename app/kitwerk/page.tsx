import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, PageHero, PhotoFrame } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kitwerk",
  description: "Kitvoegen in badkamer, wc of langs de vloer, en beglazingskit. Schildersbedrijf Vreekamp, Markelo.",
};

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
        <h2 className="max-w-3xl text-4xl md:text-6xl">Badkamer, wc, vloer, glas</h2>
        <div className="prose mt-5 max-w-2xl space-y-4">
          <p>
            Zijn uw kitvoegen in de badkamer, de wc of langs de vloer aan vervanging toe? Dan vervang ik die. Ook bij een nieuwe ondergrond zet ik de kitnaden.
          </p>
          <p>
            Voor beglazingskitwerk kunt u ook bij mij terecht. Een ruit die nieuw geplaatst is, of een naad die is losgelaten: de kit hoort erbij.
          </p>
          <p>
            In Markelo heb ik bij een klant de tegels en het sanitair gekit. De hoeken van het tegelwerk, de douche en de aansluiting langs de vloer.
          </p>
          <p>
            <Link href="/werk/markelo-kitwerk">Bekijk het kitwerk in Markelo</Link>
            {" · "}
            <Link href="/glaswerk">Glaswerk</Link>
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <PhotoFrame photo={photos.kitCorner} caption="Tegelhoek bij het toilet." />
          <PhotoFrame photo={photos.kitShower} caption="Voegen in de douche." />
          <PhotoFrame photo={photos.kitFloor} caption="Naad langs vloer en sanitair." />
        </div>
      </section>

      <CtaBand title="Kitnaden laten vervangen" text="Zeg even waar het zit: badkamer, wc, vloer of rond het glas. Ik kom kijken." />
    </main>
  );
}
