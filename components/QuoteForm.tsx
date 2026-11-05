"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

type Variant = "algemeen" | "houtrot";

const plekken = [
  { value: "kozijn", label: "Kozijn" },
  { value: "deur", label: "Deur" },
  { value: "dakkapel", label: "Dakkapel" },
  { value: "anders", label: "Anders" },
];

const zijdes = ["Binnen", "Buiten", "Allebei"];

export default function QuoteForm({ variant = "algemeen" }: { variant?: Variant }) {
  const reactId = useId();
  const id = reactId.replace(/:/g, "");
  const { contact, services } = content;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("naam") || "").trim()) next.naam = "Vul uw naam in.";
    if (!String(data.get("telefoon") || "").trim()) next.telefoon = "Vul uw telefoonnummer in.";
    if (!String(data.get("plaats") || "").trim()) next.plaats = "Vul uw plaats in.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setDone(false);
      const first = Object.keys(next)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="ticket" role="status">
        <div className="ticket-head">
          <p className="ticket-kicker">Niets verzonden</p>
        </div>
        <div className="space-y-4 px-5 py-6">
          <p>
            Dit is een demonstratieformulier. Uw gegevens zijn niet verstuurd en niet opgeslagen. Een gekozen foto blijft op uw apparaat.
          </p>
          <p>Voor een echte afspraak belt of appt u mij.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call">
              Bel {contact.phoneDisplay}
            </a>
            <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost">
              App Lennart
            </a>
          </div>
          <button type="button" className="btn btn-ink" onClick={() => setDone(false)}>
            Formulier opnieuw
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="ticket" onSubmit={onSubmit} noValidate aria-label="Offerte aanvragen">
      <div className="ticket-head">
        <div>
          <p className="ticket-kicker">Werkbon</p>
          <p className="mt-1 text-base text-background">Offerte, demonstratie</p>
        </div>
      </div>
      <p className="border-b border-ink px-5 py-4 text-base">
        Dit formulier verstuurt niets en bewaart niets. Wilt u echt een afspraak, bel of app mij.{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy
        </Link>
      </p>

      {Object.keys(errors).length > 0 ? (
        <div role="alert" className="border-b border-ink px-5 py-4 text-error">
          <p className="font-display font-bold uppercase">Nog even dit</p>
          <ul className="mt-1 list-disc pl-5">
            {Object.values(errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <Field id={`${id}-naam`} name="naam" label="Naam" required autoComplete="name" error={errors.naam} />
      <Field id={`${id}-telefoon`} name="telefoon" label="Telefoon" type="tel" required autoComplete="tel" error={errors.telefoon} />
      <Field id={`${id}-plaats`} name="plaats" label="Plaats" required autoComplete="address-level2" error={errors.plaats} />

      {variant === "houtrot" ? (
        <fieldset className="border-t border-ink px-5 py-4">
          <legend className="font-display text-sm font-bold tracking-[0.12em] uppercase">Waar zit het houtrot</legend>
          <div className="mt-2 grid sm:grid-cols-2">
            {plekken.map((plek) => (
              <label key={plek.value} className="checkline">
                <input type="checkbox" name="plek" value={plek.value} />
                <span>{plek.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : (
        <>
          <fieldset className="border-t border-ink px-5 py-4">
            <legend className="font-display text-sm font-bold tracking-[0.12em] uppercase">Soort klus</legend>
            <div className="mt-2 grid sm:grid-cols-2">
              {services.map((service) => (
                <label key={service.href} className="checkline">
                  <input type="checkbox" name="klus" value={service.title} />
                  <span>{service.title}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="border-t border-ink px-5 py-4">
            <legend className="font-display text-sm font-bold tracking-[0.12em] uppercase">Binnen of buiten</legend>
            <div className="mt-2 grid sm:grid-cols-3">
              {zijdes.map((zijde) => (
                <label key={zijde} className="checkline">
                  <input type="radio" name="zijde" value={zijde} />
                  <span>{zijde}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      <div className="border-t border-ink px-5 py-4">
        <label htmlFor={`${id}-toelichting`} className="font-display text-sm font-bold tracking-[0.12em] uppercase">
          Toelichting
        </label>
        <textarea id={`${id}-toelichting`} name="toelichting" className="field-area mt-2" />
      </div>

      <div className="border-t border-ink px-5 py-4">
        <label htmlFor={`${id}-foto`} className="font-display text-sm font-bold tracking-[0.12em] uppercase">
          Foto, niet verplicht
        </label>
        <p className="mt-1 text-base">De foto wordt niet meegestuurd. Hij blijft op uw apparaat.</p>
        <input id={`${id}-foto`} name="foto" type="file" accept="image/*" className="mt-3 block w-full text-base" />
      </div>

      <div className="border-t border-ink px-5 py-5">
        <button type="submit" data-cta="offerte" className="btn btn-ink w-full sm:w-auto">
          Offerte aanvragen
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const errorId = `${id}-fout`;
  return (
    <div className="border-t border-ink px-5 py-4">
      <label htmlFor={id} className="font-display text-sm font-bold tracking-[0.12em] uppercase">
        {label}
        {required ? <span className="ml-2 font-sans text-base font-medium normal-case tracking-normal">verplicht</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="field"
      />
      {error ? (
        <p id={errorId} className="mt-1 text-base text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
