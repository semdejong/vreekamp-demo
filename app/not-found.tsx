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
    </main>
  );
}
