import type { Metadata } from "next";
import Link from "next/link";
import { photos } from "@/content";
import { CtaBand, PhotoFrame, Tape, Ticket } from "@/components/ui";

export const metadata: Metadata = {
  title: "Markelo, kitwerk",
  description: "Tegels en sanitair gekit bij een klant in Markelo. Kitwerk door Lennart Vreekamp.",
};

export default function MarkeloPage() {
  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-6">
            <Tape>Markelo</Tape>
            <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl">Tegels en sanitair gekit</h1>
            <p className="mt-5 max-w-xl text-lg">
              Bij een klant in Markelo heb ik de tegels en het sanitair gekit. De hoeken van het tegelwerk, de douche en de naad langs de vloer.
            </p>
            <p className="prose mt-4">
              <Link href="/werk">Alle klussen</Link>
              {" · "}
              <Link href="/kitwerk">Kitwerk</Link>
            </p>
          </div>
          <div className="md:col-span-6">
            <Ticket
              kicker="Werkbon"
              place="Markelo"
              date="mei 2017"
              rows={[
                { title: "Tegelvoegen", on: true },
                { title: "Sanitair", on: true },
                { title: "Naad langs de vloer", on: true },
                { title: "Beglazingskit", on: false },
              ]}
            />
          </div>
        </div>
      </section>

      <section data-section="fotos" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="text-4xl md:text-5xl">Drie plekken</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <PhotoFrame photo={photos.kitCorner} priority stamp="Wc" caption="Hoek van het tegelwerk bij het toilet, gekit." />
          <PhotoFrame photo={photos.kitShower} stamp="Douche" caption="Tegelvoegen in de douche, rond de kraan en langs de vloer." />
          <PhotoFrame photo={photos.kitFloor} stamp="Vloer" caption="Kitnaad waar sanitair, wand en vloer elkaar raken." />
        </div>
        <p className="mt-8 max-w-2xl">
          Hetzelfde werk doe ik bij nieuwe ondergronden, en als beglazingskit rond ramen en deuren. Zeg bij het bellen even waar de naad zit.
        </p>
      </section>

      <CtaBand title="Kitvoegen aan vervanging toe" text="Badkamer, wc of langs de vloer: ik kom kijken en vervang de kit." />
    </main>
  );
}
