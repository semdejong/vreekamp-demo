"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export default function SiteHeader() {
  const { company, contact, nav, services } = content;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const sheetId = useId();

  useEffect(() => {
    setMenuOpen(false);
    setSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointer(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!sheetOpen) return;
    const sheet = sheetRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const focusable = sheet ? Array.from(sheet.querySelectorAll<HTMLElement>("a, button")) : [];
    focusable[0]?.focus();
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSheetOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [sheetOpen]);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (wide.matches) setSheetOpen(false);
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  const linkClass = (href?: string) =>
    `inline-flex min-h-11 items-center font-display text-base font-bold uppercase tracking-wide ${
      href && pathname === href ? "border-b-4 border-tape" : "border-b-4 border-transparent"
    }`;

  return (
    <header data-section="header" className={`sticky top-0 border-b-2 border-ink bg-background ${sheetOpen ? "z-[80]" : "z-40"}`}>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-5">
        <Link href="/" className="mr-auto inline-flex min-h-11 items-center">
          <Image
            src={company.logoMark}
            alt={`${company.person} Schildersbedrijf`}
            width={355}
            height={106}
            className="h-11 w-auto max-w-[42vw] md:h-14 md:max-w-none"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-4 lg:flex">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className={linkClass()}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Diensten
              <span
                aria-hidden="true"
                className={`ml-2 inline-block border-x-[5px] border-x-transparent ${menuOpen ? "border-b-[6px] border-b-current" : "border-t-[6px] border-t-current"}`}
              />
            </button>
            {menuOpen ? (
              <div id={menuId} className="absolute left-0 top-full z-50 mt-2 min-w-72 border-2 border-ink bg-background shadow-[6px_6px_0_#24242a]">
                <ul className="py-1">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className={`flex min-h-11 items-center border-l-4 px-4 font-display text-base font-semibold uppercase tracking-wide hover:bg-tape ${
                          pathname === service.href ? "border-violet bg-tape" : "border-transparent"
                        }`}
                        aria-current={pathname === service.href ? "page" : undefined}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={contact.phoneTel}
          data-cta={ctaType(contact.phoneTel)}
          className="btn btn-call px-3 sm:px-4"
          aria-label={`Bel ${contact.phoneDisplay}`}
        >
          <span className="lg:hidden">Bel</span>
          <span className="hidden lg:inline">{contact.phoneDisplay}</span>
        </a>

        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 flex-col items-center justify-center gap-1.5 border-2 border-ink px-3 lg:hidden"
          aria-expanded={sheetOpen}
          aria-controls={sheetId}
          onClick={() => setSheetOpen(true)}
        >
          <span className="sr-only">Menu openen</span>
          <span className="block h-0.5 w-6 bg-ink" aria-hidden="true" />
          <span className="block h-0.5 w-6 bg-ink" aria-hidden="true" />
          <span className="block h-0.5 w-6 bg-ink" aria-hidden="true" />
        </button>
      </div>

      {sheetOpen ? (
        <div
          id={sheetId}
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col bg-background px-5 py-5"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-lg font-bold uppercase tracking-wide">Menu</p>
            <button type="button" className="btn btn-ink" onClick={() => setSheetOpen(false)}>
              Sluit
            </button>
          </div>
          <nav aria-label="Mobiel menu" className="mt-6 min-h-0 flex-1 overflow-y-auto">
            <p className="font-display text-sm font-bold tracking-[0.14em] uppercase">Diensten</p>
            <ul className="mt-2 border-t-2 border-ink">
              {services.map((service) => (
                <li key={service.href} className="border-b-2 border-ink">
                  <Link
                    href={service.href}
                    className={`flex min-h-12 items-center border-l-4 pl-3 font-display text-2xl font-bold uppercase ${
                      pathname === service.href ? "border-violet" : "border-transparent"
                    }`}
                    aria-current={pathname === service.href ? "page" : undefined}
                    onClick={() => setSheetOpen(false)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 border-t-2 border-ink">
              {nav.map((item) => (
                <li key={item.href} className="border-b-2 border-ink">
                  <Link
                    href={item.href}
                    className={`flex min-h-12 items-center border-l-4 pl-3 font-display text-2xl font-bold uppercase ${
                      pathname === item.href ? "border-violet" : "border-transparent"
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-3 flex shrink-0 flex-col gap-2 border-t-2 border-ink bg-background pt-3">
            <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call" onClick={() => setSheetOpen(false)}>
              Bel {contact.phoneDisplay}
            </a>
            <a href={contact.phoneSms} data-cta={ctaType(contact.phoneSms)} className="btn btn-ghost" onClick={() => setSheetOpen(false)}>
              App Lennart
            </a>
            <Link href="/contact#offerte" data-cta="offerte" className="btn btn-brand" onClick={() => setSheetOpen(false)}>
              Offerte
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
