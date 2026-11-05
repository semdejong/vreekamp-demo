import type { Metadata, Viewport } from "next";
import { Caveat, Oswald, Work_Sans } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CallBar from "@/components/CallBar";

const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s | ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.foreground };

// Sleads demo-analytics (cookieloos). Events tellen alleen voor slugs die via POST /api/demos geregistreerd zijn.
const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--violet": c.violet,
  "--tape": c.tape,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${work.variable} ${oswald.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col pb-24 md:pb-0">
        <a href="#inhoud" className="skip">
          Naar de inhoud
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <CallBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
