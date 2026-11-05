import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export default function SiteFooter() {
  const { company, contact, services } = content;
  return (
    <footer data-section="footer" className="on-dark border-t-2 border-ink bg-ink text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-bold uppercase leading-none">{company.name}</p>
          <address className="mt-4 text-base leading-relaxed">
            {contact.street}
            <br />
            {contact.postal}
          </address>
          <p className="mt-4">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="font-display text-2xl font-bold uppercase">
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="break-all underline decoration-1 underline-offset-4">
              {contact.email}
            </a>
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-sm font-bold tracking-[0.14em] uppercase">Werktijden</p>
          <ul className="mt-3 space-y-2">
            {contact.hours.map((slot) => (
              <li key={slot.days}>
                {slot.days}
                <span className="block font-display text-xl font-bold">{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-sm font-bold tracking-[0.14em] uppercase">Diensten</p>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="underline decoration-1 underline-offset-4">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="font-display text-sm font-bold tracking-[0.14em] uppercase">Verder</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/werk" className="underline decoration-1 underline-offset-4">
                Werk
              </Link>
            </li>
            <li>
              <Link href="/over-lennart" className="underline decoration-1 underline-offset-4">
                Over Lennart
              </Link>
            </li>
            <li>
              <Link href="/contact" className="underline decoration-1 underline-offset-4">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="underline decoration-1 underline-offset-4">
                Privacy
              </Link>
            </li>
            <li>
              <a href={contact.facebook} className="underline decoration-1 underline-offset-4" target="_blank" rel="noopener noreferrer">
                {contact.facebookLabel}
              </a>
            </li>
            <li>
              <a href="https://sleads.nl" className="underline decoration-1 underline-offset-4" target="_blank" rel="noopener noreferrer">
                Concept door Sleads
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
