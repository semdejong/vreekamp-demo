import type { Metadata } from "next";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import QuoteForm from "@/components/QuoteForm";
import { HoursTicket, Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel 06 44 99 37 84 of mail info@schildersbedrijfvreekamp.nl. Wansink 13, 7475 DR Markelo.",
};

export default function ContactPage() {
  const { contact } = content;
  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Tape>Contact</Tape>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-7xl">Bel of app mij</h1>
          <p className="mt-5 max-w-xl text-lg">
            Lennart Vreekamp, {contact.address}. U krijgt mij zelf aan de lijn.
          </p>
          <p className="mt-6">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="inline-flex min-h-12 items-center font-display text-4xl font-bold leading-none sm:text-6xl">
              {contact.phoneDisplay}
            </a>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
              Bel Lennart
            </a>
            <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost">
              App Lennart
            </a>
          </div>
        </div>
      </section>

      <section id="offerte" data-section="contact" className="scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="space-y-8 md:col-span-5">
            <div>
              <h2 className="text-3xl">Adres en mail</h2>
              <address className="mt-3 text-lg">
                {contact.street}
                <br />
                {contact.postal}
              </address>
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
