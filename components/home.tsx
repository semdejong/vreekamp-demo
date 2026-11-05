import Link from "next/link";
import { content, photos } from "@/content";
import { ctaType } from "@/lib/cta";
import QuoteForm from "@/components/QuoteForm";
import { TapeBar } from "@/components/Tape";
import { HoursTicket, PhotoFrame, Tape, Ticket } from "@/components/ui";

export default function HomeContent() {
  const { contact, services, promises, steps, kleuradvies, about } = content;

  return (
    <main id="inhoud">
      <section data-section="hero" className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl items-start gap-6 px-5 py-6 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-7">
            <Tape>Schildersbedrijf in Markelo</Tape>
            <h1 className="mt-4 text-[2.65rem] leading-[0.86] sm:text-6xl md:mt-5 md:text-[5.4rem]">
              Eén schilder.
              <br />
              Eén nummer.
              <br />
              Klaar.
            </h1>
          </div>
          <div className="md:col-span-5 md:row-span-2">
            <div className="relative pb-3 pr-3">
              <div className="absolute right-0 bottom-0 left-8 top-8 bg-violet" aria-hidden="true" />
              <div className="relative">
                <PhotoFrame
                  photo={photos.portrait}
                  priority
                  sizes="(min-width: 768px) 42vw, 100vw"
                  imageClassName="h-[190px] w-full object-cover object-[72%_center] sm:h-[260px] md:h-auto md:object-contain"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed">{content.hero.lede}</p>
            <div className="mt-8 flex items-stretch gap-4">
              <span className="w-3 shrink-0 bg-accent" aria-hidden="true" />
              <div>
                <a
                  href={contact.phoneTel}
                  data-cta={ctaType(contact.phoneTel)}
                  className="inline-flex min-h-12 items-center font-display text-4xl font-bold leading-none tracking-tight sm:text-6xl"
                >
                  {contact.phoneDisplay}
                </a>
                <p className="mt-2 text-base">Maandag t/m vrijdag 08:00–18:00. Zaterdag 08:00–17:00.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
                Bel Lennart
              </a>
              <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost">
                App Lennart
              </a>
              <a href="#offerte" data-cta="offerte" className="btn btn-ink">
                Offerte aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-section="beloften" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Werkbon</Tape>
        <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">Wat u van mij krijgt</h2>
        <div className="mt-8">
          <Ticket kicker="Afspraken" rows={promises.map((item) => ({ title: item.title, text: item.text, on: true }))} />
        </div>
      </section>

      <section id="diensten" data-section="diensten" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Diensten</Tape>
          <h2 className="mt-5 text-4xl md:text-6xl">Wat ik doe</h2>
          <p className="mt-4 max-w-2xl text-lg">Zes dingen die ik zelf doe. Vaak hoort het bij elkaar, in één huis en één afspraak.</p>
          <div className="mt-8 border-t-2 border-ink">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="index-row">
                <span className="font-display text-2xl font-bold uppercase md:text-3xl">{service.title}</span>
                <span className="text-base leading-relaxed md:text-lg">{service.short}</span>
                <span className="font-display text-sm font-bold tracking-[0.14em] uppercase">Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-section="werk-borculo" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Tape>Borculo</Tape>
        <h2 className="mt-5 max-w-4xl text-4xl md:text-6xl">Woonkamer, keuken en een kozijn</h2>
        <p className="mt-5 max-w-3xl text-lg">
          Bij een klant in Borculo heb ik de woonkamer en de keuken geschilderd, en de voordeur met kozijn en wc-raampje een onderhoudsbeurt gegeven.
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Ticket
              kicker="Werkbon"
              place="Borculo"
              date="maart 2017"
              rows={[
                { title: "Schilderwerk", text: "Wanden en plafonds, twee nieuwe lagen. Eén wand in een warme grijs/bruine tint, dezelfde kleur terug in de keuken.", on: true },
                { title: "Houtrotreparatie", text: "Houtrot in een groot deel van het voordeurkozijn.", on: true },
                { title: "Glaswerk", on: false },
                { title: "Kitwerk", on: false },
              ]}
            />
            <ol className="mt-8 border-t-2 border-ink">
              {[
                ["Uitzagen", "De rotte delen uit het kozijn gezaagd."],
                ["Frezen", "Het aangetaste hout weggefreesd tot op gezond hout."],
                ["Meranti", "De gaten opgevuld met Meranti hardhout."],
                ["2-componenten epoxy", "Afgewerkt met een 2-componenten epoxy houtrotvulmiddel, zodat het kozijn weer jaren mee kan."],
              ].map(([title, text]) => (
                <li key={title} className="border-b-2 border-ink py-4">
                  <p className="font-display text-xl font-bold uppercase">{title}</p>
                  <p className="mt-1">{text}</p>
                </li>
              ))}
            </ol>
            <Link href="/werk/borculo-woonkamer-en-voordeur" className="btn btn-ink mt-6">
              De hele klus
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            <PhotoFrame photo={photos.doorRot} stamp="Voor" caption="Houtrot onderin de kozijnstijl." sizes="(min-width: 1024px) 22vw, 50vw" />
            <PhotoFrame photo={photos.doorSawn} stamp="Uitgezaagd" caption="Rot hout eruit, klaar voor Meranti." sizes="(min-width: 1024px) 22vw, 50vw" />
            <PhotoFrame photo={photos.kitchenBefore} stamp="Voor" caption="Keukenwand vóór de nieuwe lagen." sizes="(min-width: 1024px) 22vw, 50vw" />
            <PhotoFrame photo={photos.kitchenAfterSink} stamp="Na" caption="Keuken na twee nieuwe lagen, licht afgewerkt." sizes="(min-width: 1024px) 22vw, 50vw" />
          </div>
        </div>
      </section>

      <section data-section="werk-markelo" className="border-y-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Tape>Markelo</Tape>
              <h2 className="mt-5 text-4xl md:text-5xl">Tegels en sanitair gekit</h2>
              <p className="mt-4 text-lg">
                Bij een klant in Markelo heb ik de tegels en het sanitair gekit. Hoeken, douche en de naad langs de vloer.
              </p>
              <Link href="/werk/markelo-kitwerk" className="btn btn-ghost mt-6">
                De hele klus
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
              <PhotoFrame photo={photos.kitCorner} stamp="Wc" sizes="(min-width: 640px) 30vw, 100vw" />
              <PhotoFrame photo={photos.kitShower} stamp="Douche" sizes="(min-width: 640px) 30vw, 100vw" />
              <PhotoFrame photo={photos.kitFloor} stamp="Vloer" sizes="(min-width: 640px) 30vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section data-section="werkwijze" className="on-dark bg-ink text-background">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Tape>Zo werk ik</Tape>
          <h2 className="mt-5 text-4xl text-background md:text-6xl">Van bellen tot opleveren</h2>
          <div className="timeline mt-10">
            <TapeBar className="timeline-bar" />
            {steps.map((step) => (
              <div key={step.title} className="border-b border-background/30 py-5 md:border-b-0 md:px-3 md:pt-8">
                <h3 className="text-xl text-background">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-background">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-section="kleuradvies" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <Tape>Kleuradvies</Tape>
          <h2 className="mt-5 text-4xl md:text-5xl">Laat het huis spreken</h2>
          <blockquote className="mt-6 border-l-[12px] border-violet py-1 pl-5 text-2xl leading-snug">{kleuradvies.quote}</blockquote>
          <p className="mt-5 max-w-xl">
            In Borculo viel de keuze op één wand in een warme grijs/bruine tint. Die kleur kwam terug in de keuken. De rest bleef licht.
          </p>
          <Link href="/kleuradvies" className="btn btn-ghost mt-6">
            Kleuradvies
          </Link>
        </div>
        <div className="md:col-span-6">
          <PhotoFrame photo={photos.buckets} sizes="(min-width: 768px) 45vw, 100vw" caption="Verf voor een advies dat bij het huis past, nieuwbouw of renovatie." />
        </div>
      </section>

      <section data-section="over-lennart" className="border-y-2 border-ink bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <PhotoFrame
              photo={photos.portrait}
              sizes="(min-width: 768px) 36vw, 100vw"
              caption="Lennart Vreekamp, schilder in Markelo."
            />
          </div>
          <div className="md:col-span-7">
            <Tape>Over Lennart</Tape>
            <h2 className="mt-5 text-4xl md:text-6xl">Ik woon in Markelo</h2>
            <p className="mt-5 max-w-xl text-lg">{about.lead}</p>
            <p className="mt-4 max-w-xl">{about.more}</p>
            <Link href="/over-lennart" className="btn btn-ink mt-6">
              Meer over mij
            </Link>
          </div>
        </div>
      </section>

      <section data-section="werkgebied" className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <Tape>Werkgebied</Tape>
          <h2 className="mt-5 text-4xl md:text-6xl">Markelo en omgeving</h2>
          <p className="mt-5 max-w-xl text-lg">
            Ik woon en werk in Markelo, in de gemeente Hof van Twente. De klussen die ik hier laat zien, deed ik in Markelo en in Borculo. Woont u iets verder, bel even. Dan hoort u of ik kan komen.
          </p>
        </div>
        <div className="md:col-span-5" data-section="werktijden">
          <HoursTicket />
        </div>
      </section>

      <section id="offerte" data-section="contact" className="scroll-mt-28 border-t-2 border-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Tape>Contact</Tape>
            <h2 className="mt-5 text-4xl md:text-6xl">Bel, app of schrijf</h2>
            <p className="mt-5 text-lg">U krijgt mij zelf. Het formulier hiernaast is een demonstratie en verstuurt niets.</p>
            <p className="mt-6">
              <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="font-display text-4xl font-bold leading-none">
                {contact.phoneDisplay}
              </a>
            </p>
            <p className="mt-4">
              <a href={`mailto:${contact.email}`} data-cta="mailen" className="break-all underline underline-offset-4">
                {contact.email}
              </a>
            </p>
            <address className="mt-4">
              {contact.street}
              <br />
              {contact.postal}
            </address>
            <p className="mt-4">
              <a href={contact.facebook} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                {contact.facebookLabel}
              </a>
            </p>
          </div>
          <div className="md:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
