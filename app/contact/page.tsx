import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import QuoteForm from "@/components/QuoteForm";
import { HoursTicket, Ruled, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel 06 44 99 37 84 of mail info@schildersbedrijfvreekamp.nl. Wansink 13, 7475 DR Markelo.",
};

const zeggen = [
  {
    title: "Naam en nummer",
    text: "Zodat ik u terug kan spreken. U krijgt mij zelf, niet een planner.",
  },
  {
    title: "Plaats",
    text: "Markelo, Borculo of ergens in de omgeving. Woont u verder weg, bel even. Dan hoort u of ik kan komen.",
  },
  {
    title: "Binnen, buiten, of allebei",
    text: "Een kamer, een kozijn, of het hele huis. In Borculo deed ik woonkamer, keuken en voordeur in één klus.",
  },
  {
    title: "Soort klus",
    text: "Schilderen, glas, houtrot, kit, behang of een kleur. Noem wat u ziet, ook als u de naam niet precies weet.",
  },
  {
    title: "Een foto",
    text: "Mag, als u die bij de hand heeft. Handig bij houtrot of een kapotte ruit. Verplicht is het niet.",
  },
];

export default function ContactPage() {
  const { contact, company } = content;
  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Tape>Contact</Tape>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl">Bel of app mij</h1>
          <p className="mt-5 max-w-xl text-lg">
            {company.person}, {contact.address}. U krijgt mij zelf aan de lijn. Maandag tot en met vrijdag 08:00–18:00, zaterdag 08:00–17:00.
          </p>
          <p className="mt-6">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="inline-flex min-h-12 items-center font-display text-4xl font-bold leading-none sm:text-6xl">
              {contact.phoneDisplay}
            </a>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
              Bel Lennart
            </a>
            <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost">
              App Lennart
            </a>
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="btn btn-ink col-span-2 sm:col-span-1">
              Mail
            </a>
          </div>
        </div>
      </section>

      <section data-section="bellen" className="border-b-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Als u belt</Tape>
          <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Dit heb ik nodig om te kunnen kijken</h2>
          <p className="mt-4 max-w-2xl text-lg">Geen uitgebreid verhaal. Een paar feiten, dan kom ik langs en noem ik een prijs.</p>
          <Ruled items={zeggen} />
          <p className="prose mt-8 max-w-2xl">
            Zit het in het hout, gebruik dan de werkbon op <Link href="/houtrotreparatie#offerte">houtrotreparatie</Link>. Daar vraagt het formulier waar het rot zit: kozijn, deur, dakkapel of ergens anders.
          </p>
        </div>
      </section>

      <section id="offerte" data-section="contact" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="space-y-8 md:col-span-5">
            <div>
              <h2 className="text-3xl">Adres en mail</h2>
              <address className="mt-3 text-lg">
                {company.name}
                <br />
                {contact.street}
                <br />
                {contact.postal}
              </address>
              <p className="mt-3">Hof van Twente, Overijssel.</p>
              <p className="mt-3">
                <a href={`mailto:${contact.email}`} data-cta="mailen" className="break-all underline underline-offset-4">
                  {contact.email}
                </a>
              </p>
              <p className="mt-3">
                <a href={contact.facebook} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                  {contact.facebookLabel}
                </a>
              </p>
            </div>
            <div data-section="werktijden">
              <HoursTicket />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="mb-4 text-3xl">Offerte aanvragen</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
