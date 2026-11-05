import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { Tape } from "@/components/ui";

export default function NotFound() {
  const { contact } = content;
  return (
    <main id="inhoud" data-section="niet-gevonden" className="mx-auto max-w-6xl px-5 py-16">
      <Tape>Pagina niet gevonden</Tape>
      <h1 className="mt-5 text-5xl md:text-7xl">Deze pagina bestaat niet</h1>
      <p className="mt-5 max-w-xl text-lg">Bel mij gerust, dan help ik u verder.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
          Bel {contact.phoneDisplay}
        </a>
        <Link href="/" className="btn btn-ghost">
          Naar de homepage
        </Link>
      </div>
      <ul className="mt-12 max-w-xl border-t-2 border-ink">
        {content.services.map((service) => (
          <li key={service.href} className="border-b-2 border-ink">
            <Link href={service.href} className="flex min-h-12 items-center font-display text-xl font-bold uppercase">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
