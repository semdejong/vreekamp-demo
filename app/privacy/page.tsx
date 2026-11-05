import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { Tape } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacytekst van de conceptsite van Schildersbedrijf Vreekamp in Markelo.",
};

export default function PrivacyPage() {
  const { company, contact } = content;
  return (
    <main id="inhoud" className="mx-auto max-w-3xl px-5 py-14 md:py-20">
      <Tape>Privacy</Tape>
      <h1 className="mt-5 text-5xl md:text-6xl">Privacy</h1>
      <div data-section="privacy" className="mt-8 space-y-4">
        <p>
          Deze tekst hoort bij de conceptsite van {company.name}, {contact.address}. Contact:{" "}
          <a href={`mailto:${contact.email}`} data-cta="mailen" className="underline underline-offset-4">
            {contact.email}
          </a>{" "}
          en{" "}
          <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="underline underline-offset-4">
            {contact.phoneDisplay}
          </a>
          .
        </p>
        <p>
          Het offerteformulier op deze site is een demonstratie. Wat u invult, wordt niet verzonden en niet opgeslagen. Een foto die u kiest, blijft op uw apparaat.
        </p>
        <p>Belt of mailt u mij, dan gebruik ik uw naam en uw telefoonnummer of e-mailadres om u te antwoorden.</p>
        <p>
          De site zet geen volgcookies. Er draait een cookieloos script van Sleads om te zien of deze demo bekeken wordt. Concept door{" "}
          <a href="https://sleads.nl" className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Sleads
          </a>
          .
        </p>
        <p>
          <Link href="/contact" className="underline underline-offset-4">
            Naar contact
          </Link>
        </p>
      </div>
    </main>
  );
}
