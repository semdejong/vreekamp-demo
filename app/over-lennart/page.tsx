import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content, photos } from "@/content";
import { ctaType } from "@/lib/cta";
import { CtaBand, HoursTicket, PhotoFrame, Tape, Ticket } from "@/components/ui";

export const metadata: Metadata = {
  title: "Over Lennart",
  description: "Lennart Vreekamp, schilder in Markelo. Eén aanspreekpunt voor schilderwerk, glas, houtrot, kit en behang.",
};

export default function OverPage() {
  const { company, contact, about, services } = content;
  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <Tape>Over Lennart</Tape>
            <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl">Lennart Vreekamp</h1>
          </div>
          <div className="md:col-span-5 md:row-span-2">
            <PhotoFrame photo={photos.portrait} priority sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <div className="md:col-span-7">
            <p className="max-w-xl text-lg">{about.lead}</p>
            <p className="mt-4 max-w-xl">{about.more}</p>
            <p className="mt-4 max-w-xl">
              Ik woon aan de {contact.street} in {company.city}, in de gemeente {company.region}. Als u belt, krijgt u mij. Niet een planner, en niet iemand die de klus daarna doorgeeft.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
                Bel {contact.phoneDisplay}
              </a>
              <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost">
                App Lennart
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-section="een-persoon" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Tape>De bon</Tape>
            <h2 className="mt-5 text-4xl md:text-6xl">Wat er wel en niet op staat</h2>
            <p className="mt-5 text-lg">
              Schildersbedrijf Vreekamp ben ik zelf. Van het eerste telefoontje tot de oplevering is het dezelfde persoon. Zaterdag is een gewone werkdag, van 08:00 tot 17:00.
            </p>
          </div>
          <div className="md:col-span-6">
            <Ticket
              kicker="Aanspreekpunt"
              place="Markelo"
              rows={[
                { title: "Ik neem zelf op", on: true },
                { title: "Ik kom zelf kijken", on: true },
                { title: "Ik doe het werk", on: true },
                { title: "Planner ertussen", on: false },
                { title: "Onderaannemer", on: false },
              ]}
            />
          </div>
        </div>
      </section>

      <section data-section="werk" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <Tape>Eén persoon</Tape>
            <h2 className="mt-5 text-4xl md:text-6xl">Wat ik in één huis kan doen</h2>
            <div className="mt-5 max-w-xl space-y-4">
              <p>
                Ik schilder binnen en buiten, plaats of vervang glas, herstel houtrot, kit badkamers en vloeren, en hang behang. In één huis kan dat bij elkaar horen. Dan doet u het met één afspraak.
              </p>
              <p>
                Ik werk in Markelo, Hof van Twente en omgeving. De klussen die ik laat zien, deed ik in Markelo en in Borculo. Woont u iets verder, bel even.
              </p>
              <p>
                Kleuradvies geef ik op maat, voor nieuwbouw en voor renovatie. Of het huis rustig blijft of dat de verf spreekt, bepalen we ter plaatse. Daarna schilder ik het zelf.
              </p>
            </div>
            <ul className="mt-8 border-t-2 border-ink">
              {services.map((service) => (
                <li key={service.href} className="border-b-2 border-ink">
                  <Link href={service.href} className="flex min-h-14 items-center justify-between gap-4 font-display text-xl font-bold uppercase">
                    {service.title}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <HoursTicket />
            <div className="mt-8">
              <PhotoFrame photo={photos.roller} caption="Een roller op een grijze ondergrond. Zo ziet een laag eruit als die erop zit." />
            </div>
            <Image
              src={company.logo}
              alt="Logo Lennart Vreekamp Schildersbedrijf, met verfroller en verfsplash"
              width={1046}
              height={720}
              className="mt-8 h-auto w-full border-2 border-ink bg-white"
            />
          </div>
        </div>
      </section>

      <section data-section="adres" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Adres</Tape>
        <h2 className="mt-5 text-4xl md:text-6xl">Wansink 13, Markelo</h2>
        <address className="mt-5 text-lg">
          {contact.street}
          <br />
          {contact.postal}
        </address>
        <p className="mt-4 max-w-xl">
          Hof van Twente, Overijssel. Mail naar{" "}
          <a href={`mailto:${contact.email}`} data-cta="mailen" className="underline underline-offset-4">
            {contact.email}
          </a>
          . Schildersbedrijf Vreekamp staat ook op{" "}
          <a href={contact.facebook} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          .
        </p>
      </section>

      <CtaBand />
    </main>
  );
}
