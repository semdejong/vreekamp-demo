/**
 * Bedrijfsgegevens Schildersbedrijf Vreekamp.
 * Geen oprichtingsjaar, geen jaren ervaring, geen KvK, geen verzonnen reviews of prijzen.
 */
export const content = {
  slug: "vreekamp-demo",

  company: {
    name: "Schildersbedrijf Vreekamp",
    person: "Lennart Vreekamp",
    tagline: "Schildersbedrijf in Markelo",
    description:
      "Lennart Vreekamp schildert binnen en buiten in Markelo en omgeving. Eén schilder, één nummer. Ook glas, houtrot, kitwerk, behang en kleuradvies.",
    logo: "/LogoLennart.jpg",
    logoMark: "/VreekampLogoSticky2.png",
    city: "Markelo",
    region: "Hof van Twente",
  },

  colors: {
    primary: "#2338a8",
    primaryForeground: "#ffffff",
    accent: "#d7263d",
    background: "#f1eee8",
    foreground: "#24242a",
    muted: "#e4dfd6",
    violet: "#5b2a86",
    tape: "#efe2a8",
  },

  seo: {
    title: "Schildersbedrijf Vreekamp | Schilder in Markelo",
    description:
      "Lennart Vreekamp schildert binnen en buiten in Markelo en omgeving. Eén schilder, één nummer. Bel 06 44 99 37 84.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "06 44 99 37 84",
    phoneTel: "tel:+31644993784",
    phoneSms: "sms:+31644993784",
    email: "info@schildersbedrijfvreekamp.nl",
    street: "Wansink 13",
    postal: "7475 DR Markelo",
    address: "Wansink 13, 7475 DR Markelo",
    hours: [
      { days: "Maandag t/m vrijdag", time: "08:00–18:00" },
      { days: "Zaterdag", time: "08:00–17:00" },
    ],
    facebook: "https://www.facebook.com/schildersbedrijfvreekamp/",
    facebookLabel: "Facebook",
  },

  nav: [
    { label: "Werk", href: "/werk" },
    { label: "Over Lennart", href: "/over-lennart" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    {
      title: "Schilderwerk",
      href: "/schilderwerk",
      short: "Als allround schildersbedrijf ben ik voor elke schilderklus binnen en buiten inzetbaar.",
    },
    {
      title: "Glaswerk",
      href: "/glaswerk",
      short: "Nieuw glas of vervangen. Enkel glas of isolerende beglazing, passend bij de situatie.",
    },
    {
      title: "Houtrotreparatie",
      href: "/houtrotreparatie",
      short: "Eerst de oorzaak achterhalen. Daarna deelvervanging of een houtrotvulmiddel.",
    },
    {
      title: "Kitwerk",
      href: "/kitwerk",
      short: "Beglazingskit, kitvoegen in badkamer, wc of langs de vloer, en kit op nieuwe ondergronden.",
    },
    {
      title: "Behang en wandafwerking",
      href: "/behang-en-wandafwerking",
      short: "Fotobehang, patroonbehang, glasvlies en glasweefsel. De wand netjes afgewerkt.",
    },
    {
      title: "Kleuradvies",
      href: "/kleuradvies",
      short: "Kleuradvies op maat voor nieuwbouw en renovatie.",
    },
  ],

  promises: [
    {
      title: "Communicatie en één aanspreekpunt",
      text: "Goede communicatie en één aanspreekpunt. U spreekt met mij, van het eerste telefoontje tot de oplevering.",
    },
    {
      title: "Hoge kwaliteit",
      text: "Hoge kwaliteit. Strakke randen, dekkende lagen, en hout dat eerst in orde is voordat de verf erop gaat.",
    },
    {
      title: "Professionele producten",
      text: "Professionele producten. Bij houtrot werk ik met Meranti hardhout en een 2-componenten epoxy houtrotvulmiddel.",
    },
    {
      title: "Duurzaamheid",
      text: "Duurzaamheid. Ik achterhaal de oorzaak, zodat ik niet alleen de plek afwerk die u ziet.",
    },
  ],

  steps: [
    {
      title: "Bellen of appen",
      text: "U belt of appt mij. Ik neem zelf op. Geen planner ertussen.",
    },
    {
      title: "Langskomen en bekijken",
      text: "Ik kom bij u langs en bekijk de klus. Zit er een oorzaak onder, dan zoek ik die eerst.",
    },
    {
      title: "Offerte of afspraak",
      text: "Na het bezoek krijgt u een prijs, of we spreken meteen een moment af.",
    },
    {
      title: "Uitvoeren",
      text: "Ik voer het werk zelf uit. Schilderen, glas, houtrot, kit of behang, ook als dat in één huis samenvalt.",
    },
    {
      title: "Oplevering",
      text: "We lopen het werk samen na. U weet bij wie u moet zijn als er nog iets is.",
    },
  ],

  hero: {
    title: "Eén schilder. Eén nummer. Klaar.",
    lede: "Binnen- en buitenschilderwerk in Markelo en omgeving. U belt mij, ik kom kijken, ik schilder.",
  },

  about: {
    lead: "Mijn naam is Lennart Vreekamp. Ik woon in Markelo en ik werk met veel plezier en enthousiasme in de schildersbranche.",
    more: "Schildersbedrijf Vreekamp ben ik zelf. U belt, ik neem op, ik kom kijken en ik doe het werk. Geen planner en geen onderaannemer ertussen.",
  },

  kleuradvies: {
    quote:
      "Wilt u het rustig houden en het huis laten leven door bijvoorbeeld de meubels? Of laten spreken door de kleuren van het schilderwerk?",
  },
};

export type Content = typeof content;

export const photos = {
  portrait: {
    src: "/img/Lennart-1.jpg",
    width: 1900,
    height: 1200,
    alt: "Lennart Vreekamp in witte schildersoverall op een ladder, met een verfblik in de hand.",
  },
  roller: {
    src: "/img/RollerDark.jpg",
    width: 1688,
    height: 1137,
    alt: "Verfroller op een grijze, gespatte ondergrond.",
  },
  buckets: {
    src: "/img/VerfEmmers.jpg",
    width: 1280,
    height: 665,
    alt: "Verfemmers van bovenaf, in een rode tint.",
  },
  doorOverview: {
    src: "/img/IMG-20170317-WA0069.jpg",
    width: 1200,
    height: 1600,
    alt: "Groene voordeur met wit kozijn in Borculo, vóór de onderhoudsbeurt.",
  },
  doorSill: {
    src: "/img/IMG-20170317-WA0068.jpg",
    width: 1200,
    height: 1600,
    alt: "Onderkant van de groene voordeur en het witte kozijn in Borculo, met schade langs de dorpel.",
  },
  doorRot: {
    src: "/img/IMG-20170317-WA0076.jpg",
    width: 898,
    height: 1600,
    alt: "Witte kozijnstijl in Borculo waarvan het hout onderaan is weggerot.",
  },
  doorSawn: {
    src: "/img/IMG-20170317-WA0074.jpg",
    width: 898,
    height: 1600,
    alt: "Kozijnstijl in Borculo waarvan het rotte hout is uitgezaagd.",
  },
  doorTape: {
    src: "/img/IMG-20170317-WA0072.jpg",
    width: 1600,
    height: 1200,
    alt: "Voordeur in Borculo tijdens de reparatie: afgeplakt, met de dorpel opengewerkt.",
  },
  doorBottom: {
    src: "/img/IMG-20170317-WA0071.jpg",
    width: 1600,
    height: 1200,
    alt: "Onderzijde van de groene voordeur en het witte kozijn in Borculo.",
  },
  livingBefore: {
    src: "/img/IMG-20170317-WA0063.jpg",
    width: 1600,
    height: 898,
    alt: "Woonkamer in Borculo vóór het schilderwerk, met een lichte wand.",
  },
  kitchenBefore: {
    src: "/img/IMG-20170317-WA0077.jpg",
    width: 1600,
    height: 1200,
    alt: "Keuken in Borculo vóór het schilderwerk, met ongelakte houten wandbetimmering.",
  },
  kitchenBeforeGrey: {
    src: "/img/IMG-20170317-WA0064.jpg",
    width: 1600,
    height: 898,
    alt: "Keuken in Borculo vóór de nieuwe verflaag, met de wand boven het aanrecht.",
  },
  kitchenAfter: {
    src: "/img/IMG-20170318-WA0015.jpg",
    width: 1200,
    height: 1600,
    alt: "Keuken in Borculo na het schilderwerk, met lichte wanden en de eettafel.",
  },
  kitchenAfterSide: {
    src: "/img/IMG-20170318-WA0016.jpg",
    width: 1200,
    height: 1600,
    alt: "Doorkijk vanuit de keuken in Borculo naar de woonkamer, met de grijze accentwand.",
  },
  kitchenAfterDoor: {
    src: "/img/IMG-20170319-WA0009.jpg",
    width: 1200,
    height: 1600,
    alt: "Binnendeur en keukenwand in Borculo na het schilderwerk.",
  },
  kitchenAfterHob: {
    src: "/img/IMG-20170319-WA0010.jpg",
    width: 1200,
    height: 1600,
    alt: "Keuken in Borculo na het schilderwerk, met fornuis en lichtgrijze wand.",
  },
  kitchenAfterWindow: {
    src: "/img/IMG-20170319-WA0011.jpg",
    width: 1200,
    height: 1600,
    alt: "Keuken in Borculo na het schilderwerk, met raam, spoelbak en lichte wanden.",
  },
  kitchenAfterSink: {
    src: "/img/IMG-20170319-WA0012.jpg",
    width: 1200,
    height: 1600,
    alt: "Aanrecht in Borculo na het schilderwerk, met een lichtgrijze wand erboven.",
  },
  kitCorner: {
    src: "/img/Kitten-Markelo1.jpg",
    width: 720,
    height: 960,
    alt: "Gekitte tegelhoek bij het toilet in Markelo.",
  },
  kitShower: {
    src: "/img/Kitten-Markelo2.jpg",
    width: 720,
    height: 960,
    alt: "Douche in Markelo met gekitte tegelvoegen.",
  },
  kitFloor: {
    src: "/img/Kitten-Markelo3.jpg",
    width: 720,
    height: 960,
    alt: "Kitnaad langs de vloer en het sanitair in Markelo.",
  },
} as const;

export type Photo = (typeof photos)[keyof typeof photos];
