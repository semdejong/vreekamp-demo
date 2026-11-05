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
              Bij een klant in Markelo heb ik de tegels en het sanitair gekit. De hoeken van het tegelwerk, de douche en de naad langs de vloer. Datum op de werkbon: mei 2017.
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
                { title: "Tegelvoegen", text: "De hoek waar twee tegelwanden elkaar raken.", on: true },
                { title: "Sanitair", text: "Aansluitingen bij het sanitair, dichtgezet.", on: true },
                { title: "Naad langs de vloer", text: "Daar waar wand, vloer en sanitair samenkomen.", on: true },
                { title: "Beglazingskit", text: "Zat niet op deze bon. Dat doe ik wel, rond ramen en deuren.", on: false },
              ]}
            />
          </div>
        </div>
      </section>

      <section data-section="fotos" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="max-w-3xl text-4xl md:text-6xl">Drie plekken in hetzelfde huis</h2>
        <p className="mt-5 max-w-2xl text-lg">
          Kitwerk is pas af als de naad over de hele lengte dicht zit. Hier waren dat drie plekken, niet één losse hoek.
        </p>
        <ol className="mt-10 grid gap-10">
          <li className="grid items-center gap-6 border-t-2 border-ink pt-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <PhotoFrame photo={photos.kitCorner} priority stamp="Wc" caption="Hoek van het tegelwerk bij het toilet, gekit." />
            </div>
            <div className="md:col-span-7">
              <h3 className="text-3xl">De hoek bij het toilet</h3>
              <p className="mt-3 max-w-xl">
                Twee wanden komen samen op de tegel. Daar zet ik de kit in de hoek, zodat er geen open voeg achterblijft achter het sanitair.
              </p>
            </div>
          </li>
          <li className="grid items-center gap-6 border-t-2 border-ink pt-8 md:grid-cols-12">
            <div className="md:order-2 md:col-span-5">
              <PhotoFrame photo={photos.kitShower} stamp="Douche" caption="Tegelvoegen in de douche, rond de kraan en langs de vloer." />
            </div>
            <div className="md:col-span-7">
              <h3 className="text-3xl">De douche</h3>
              <p className="mt-3 max-w-xl">
                Rond de kraan en langs de vloer van de douche. Water blijft in de bak als de naad heel is. Een gescheurde kit laat het erachter lopen.
              </p>
            </div>
          </li>
          <li className="grid items-center gap-6 border-t-2 border-ink pt-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <PhotoFrame photo={photos.kitFloor} stamp="Vloer" caption="Kitnaad langs de vloer en het sanitair in Markelo." />
            </div>
            <div className="md:col-span-7">
              <h3 className="text-3xl">Langs de vloer</h3>
              <p className="mt-3 max-w-xl">
                De naad waar sanitair, wand en vloer elkaar raken. Die vervang ik als de kit is losgelaten, ook buiten een douche.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section data-section="verder" className="border-t-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="text-4xl md:text-5xl">Hetzelfde werk, andere plek</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Bij nieuwe ondergronden kit ik meteen. Rond glas is het beglazingskit, samen met het plaatsen van een ruit of als de oude naad loslaat. Zeg bij het bellen even waar de naad zit.
          </p>
          <p className="prose mt-5">
            <Link href="/kitwerk">Alles over kitwerk</Link>
            {" · "}
            <Link href="/glaswerk">Glas en beglazingskit</Link>
          </p>
        </div>
      </section>

      <CtaBand title="Kitvoegen aan vervanging toe" text="Badkamer, wc of langs de vloer: ik kom kijken en vervang de kit." />
    </main>
  );
}
