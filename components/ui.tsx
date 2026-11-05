import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { content, type Photo } from "@/content";
import { Tape } from "@/components/Tape";
import { ctaType } from "@/lib/cta";

export { Tape };

export function PhotoFrame({
  photo,
  stamp,
  priority = false,
  sizes = "(min-width: 768px) 45vw, 100vw",
  caption,
  imageClassName = "h-auto w-full",
}: {
  photo: Photo;
  stamp?: string;
  priority?: boolean;
  sizes?: string;
  caption?: string;
  imageClassName?: string;
}) {
  return (
    <figure>
      <div className="frame">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
        <span className="tape-h" aria-hidden="true" />
        <span className="tape-v" aria-hidden="true" />
        {stamp ? <span className="stamp tape">{stamp}</span> : null}
      </div>
      {caption ? <figcaption className="mt-3 text-base leading-snug">{caption}</figcaption> : null}
    </figure>
  );
}

export function PageHero({
  tape,
  title,
  lede,
  photo,
  stamp,
  showActions = true,
  offerteHref = "/contact#offerte",
  children,
}: {
  tape: string;
  title: string;
  lede: string;
  photo?: Photo;
  stamp?: string;
  showActions?: boolean;
  offerteHref?: string;
  children?: ReactNode;
}) {
  const { contact } = content;
  return (
    <section data-section="hero" className="border-b-2 border-ink">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className={photo ? "md:col-span-7" : "md:col-span-10"}>
          <Tape>{tape}</Tape>
          <h1 className="mt-5 max-w-4xl text-balance text-[2.5rem] sm:text-6xl md:text-7xl">{title}</h1>
        </div>
        {photo ? (
          <div className="md:col-span-5 md:row-span-2">
            <div className="relative pb-3 pr-3">
              <div className="absolute bottom-0 right-0 top-8 left-8 bg-brand" aria-hidden="true" />
              <div className="relative">
                <PhotoFrame photo={photo} stamp={stamp} priority sizes="(min-width: 768px) 38vw, 100vw" />
              </div>
            </div>
          </div>
        ) : null}
        <div className={photo ? "md:col-span-7" : "md:col-span-10"}>
          <p className="max-w-xl text-lg leading-relaxed">{lede}</p>
          {showActions ? (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
                Bel {contact.phoneDisplay}
              </a>
              <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost">
                App Lennart
              </a>
              <Link href={offerteHref} data-cta="offerte" className="btn btn-ink col-span-2 sm:col-span-1">
                Offerte aanvragen
              </Link>
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Bel mij, of vraag een offerte aan",
  text = "U krijgt mij zelf aan de lijn. Liever schrijven? Het formulier op de contactpagina is een demonstratie en verstuurt niets.",
}: {
  title?: string;
  text?: string;
}) {
  const { contact } = content;
  return (
    <section data-section="cta" className="on-dark bg-ink text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
            Bel {contact.phoneDisplay}
          </a>
          <Link href="/contact#offerte" data-cta="offerte" className="btn btn-ghost-light">
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Ticket({
  kicker,
  date,
  place,
  rows,
}: {
  kicker: string;
  date?: string;
  place?: string;
  rows: { title: string; text?: string; on?: boolean }[];
}) {
  return (
    <div className="ticket">
      <div className="ticket-head">
        <div>
          <p className="ticket-kicker">{kicker}</p>
          {place ? <p className="mt-1 text-base text-background">{place}</p> : null}
        </div>
        {date ? (
          <p>
            <span className="mr-2 font-display text-xs tracking-[0.14em] uppercase">Datum</span>
            <span className="ticket-date">{date}</span>
          </p>
        ) : null}
      </div>
      {rows.map((row) => (
        <div key={row.title} className="ticket-row">
          <span className="box" data-on={row.on ? "true" : "false"} aria-hidden="true" />
          <div>
            <p className="font-display text-lg font-bold uppercase leading-tight">{row.title}</p>
            {row.text ? <p className="mt-1 text-base leading-relaxed">{row.text}</p> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Ruled({ items }: { items: readonly { title: string; text: string }[] }) {
  return (
    <ul className="mt-8 border-t-2 border-ink">
      {items.map((item) => (
        <li key={item.title} className="grid gap-2 border-b-2 border-ink py-5 md:grid-cols-12">
          <h3 className="text-2xl md:col-span-4">{item.title}</h3>
          <p className="md:col-span-8">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="mt-8 border-t-2 border-ink">
      {items.map((item) => (
        <details key={item.q} className="group border-b-2 border-ink">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl font-bold uppercase [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="font-sans text-2xl font-normal normal-case group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden font-sans text-2xl font-normal normal-case group-open:inline">
              –
            </span>
          </summary>
          <p className="max-w-3xl pb-5">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function HoursTicket() {
  return (
    <div className="ticket">
      <div className="ticket-head">
        <p className="ticket-kicker">Werktijden</p>
      </div>
      {content.contact.hours.map((slot) => (
        <div key={slot.days} className="ticket-row">
          <span className="box" data-on="true" aria-hidden="true" />
          <p>
            <span className="font-display text-lg font-bold uppercase">{slot.days}</span>
            <span className="mt-1 block font-display text-2xl font-bold leading-none">{slot.time}</span>
          </p>
        </div>
      ))}
      <div className="ticket-row">
        <span className="box" aria-hidden="true" />
        <p className="text-base">Zaterdag is een gewone werkdag voor mij, tot 17:00. Handig als u doordeweeks werkt.</p>
      </div>
    </div>
  );
}
