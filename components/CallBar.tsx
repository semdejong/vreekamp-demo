"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export default function CallBar() {
  const pathname = usePathname();
  const hasForm = pathname === "/" || pathname === "/contact" || pathname === "/houtrotreparatie";
  const offerteHref = hasForm ? "#offerte" : "/contact#offerte";
  const { contact } = content;

  return (
    <div data-section="belbalk" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
      <a href={contact.phoneTel} data-cta={ctaType(contact.phoneTel)} className="btn btn-call min-h-16 rounded-none">
        Bel {contact.phoneDisplay}
      </a>
      <Link href={offerteHref} data-cta="offerte" className="btn btn-brand min-h-16 rounded-none">
        Offerte
      </Link>
    </div>
  );
}
