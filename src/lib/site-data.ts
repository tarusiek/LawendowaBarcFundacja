import {
  BookOpen,
  CalendarHeart,
  FileText,
  Flower2,
  HandHeart,
  HeartHandshake,
  Home,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Sprout,
  Users,
} from "lucide-react";

export const foundation = {
  shortName: "Lawendowa Barć pod Lasem",
  fullName:
    "Fundacja Edukacyjnego Centrum Ekologicznego „Lawendowa Barć pod Lasem”",
  tagline: "Miód, lawenda i serce do przyrody",
  address: "Chajczyny 39, 97-425 Zelów",
  region: "Chajczyny, powiat bełchatowski",
  email: "lawendowabarcpodlasem@gmail.com",
  phoneSylwia: "605 088 302",
  phoneMieczyslaw: "605 081 055",
  facebook: "https://www.facebook.com/lawendowabarc",
  instagram: "https://www.instagram.com/lawendowa_barc_pod_lasem/",
  krs: "0000790834",
  nip: "7692234337",
  regon: "383625393",
  bankAccount: "71 1140 2004 0000 3902 7890 1871",
};

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/o-fundacji", label: "O fundacji" },
  { href: "/pasieka", label: "Pasieka" },
  { href: "/ogrod", label: "Ogród" },
  { href: "/edukacja-i-warsztaty", label: "Warsztaty" },
  { href: "/projekty", label: "Projekty" },
  { href: "/wolontariat", label: "Wolontariat" },
  { href: "/wspieraj", label: "Wspieraj" },
  { href: "/kontakt", label: "Kontakt" },
];

export const footerLinks = [
  { href: "/o-fundacji", label: "Dokumenty" },
  { href: "/wspieraj", label: "Darowizny" },
  { href: "/kontakt", label: "Umów wizytę" },
];

export const highlights = [
  {
    title: "Pasieka",
    href: "/pasieka",
    icon: Home,
    color: "honey" as const,
    text: "Poznaj życie ula, pracę pszczelarza i naturalne produkty pszczele.",
  },
  {
    title: "Ogród",
    href: "/ogrod",
    icon: Flower2,
    color: "lavender" as const,
    text: "Zobacz miejsce, w którym lawenda, zioła i rośliny miododajne tworzą żywy ekosystem.",
  },
  {
    title: "Edukacja",
    href: "/edukacja-i-warsztaty",
    icon: BookOpen,
    color: "leaf" as const,
    text: "Warsztaty terenowe dla szkół, rodzin, seniorów i grup zorganizowanych.",
  },
];

export const homeStats = [
  { value: "2019", label: "rok rejestracji fundacji" },
  { value: "15+", label: "lat doświadczenia z pasieką i lawendą" },
  { value: "1000+", label: "krzaków lawendy na miejscu" },
];

export const documents = [
  {
    title: "Statut fundacji",
    description: "Miejsce na skan lub plik PDF z aktualnym statutem.",
    icon: FileText,
  },
  {
    title: "Sprawozdania",
    description: "Miejsce na roczne sprawozdania i materiały formalne.",
    icon: Landmark,
  },
  {
    title: "Standardy ochrony nieletnich",
    description: "Miejsce na dokument wymagany przy działaniach edukacyjnych.",
    icon: Users,
  },
  {
    title: "Polityka prywatności",
    description: "Miejsce na dokument informacyjny dla odwiedzających stronę.",
    icon: FileText,
  },
];

export const contactCards = [
  {
    title: "Napisz do nas",
    value: foundation.email,
    href: `mailto:${foundation.email}`,
    icon: Mail,
  },
  {
    title: "Lawendowa",
    value: foundation.phoneSylwia,
    href: `tel:${foundation.phoneSylwia.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    title: "Mistrz",
    value: foundation.phoneMieczyslaw,
    href: `tel:${foundation.phoneMieczyslaw.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    title: "Odwiedź nas",
    value: foundation.region,
    href: "/kontakt",
    icon: MapPin,
  },
];

export const pageCards = {
  mission: [
    {
      title: "Chronimy małe ekosystemy",
      text: "Promujemy rośliny miododajne, naturalną uprawę i troskę o zapylacze.",
      icon: Leaf,
    },
    {
      title: "Uczymy przez działanie",
      text: "Pokazujemy, jak powstaje miód, jak rośnie lawenda i jak stworzyć ogród przyjazny naturze.",
      icon: BookOpen,
    },
    {
      title: "Łączymy ludzi",
      text: "Zapraszamy szkoły, rodziny, lokalną społeczność i wolontariuszy do wspólnej pracy.",
      icon: HeartHandshake,
    },
  ],
  projects: [
    {
      title: "Ścieżka edukacyjna",
      text: "Zajęcia o znaczeniu pszczół w przyrodzie i codziennych wyborach przyjaznych środowisku.",
      icon: Sprout,
    },
    {
      title: "Lawendowe spotkania",
      text: "Sezonowe warsztaty o właściwościach lawendy, zapachu, destylacji i rękodziele.",
      icon: CalendarHeart,
    },
    {
      title: "Ogród dla zapylaczy",
      text: "Sadzenie roślin miododajnych i tworzenie rabat, które karmią pszczoły przez cały sezon.",
      icon: Flower2,
    },
  ],
  volunteer: [
    {
      title: "Pomoc w ogrodzie",
      text: "Sadzenie, pielęgnacja rabat, przygotowanie przestrzeni do warsztatów.",
      icon: Sprout,
    },
    {
      title: "Wsparcie wydarzeń",
      text: "Pomoc przy grupach, spotkaniach plenerowych i edukacyjnych działaniach fundacji.",
      icon: Users,
    },
    {
      title: "Dobre ręce do pasieki",
      text: "Proste prace organizacyjne wokół pasieki pod opieką doświadczonych gospodarzy.",
      icon: HandHeart,
    },
  ],
};
