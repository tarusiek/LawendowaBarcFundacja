import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Callout } from "@/components/callout";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { foundation, highlights, homeStats, pageCards } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fff8ea]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#efe8d5] to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7b5fa3]">
              {foundation.tagline}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-[#243127] sm:text-6xl lg:text-7xl">
              Tam, gdzie lawenda spotyka las, a pszczoły uczą troski o naturę.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Tworzymy przyjazne miejsce edukacji ekologicznej: pasiekę, ogród
              permakulturowy i warsztaty dla dzieci, dorosłych oraz lokalnej społeczności.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/edukacja-i-warsztaty"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#324234] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#405642]"
              >
                Zobacz warsztaty
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-[#324234] shadow-sm transition hover:bg-[#f7f0df]"
              >
                Umów wizytę
              </Link>
            </div>
          </div>
          <div className="relative z-10">
            <VisualPanel
              tone="lavender"
              label="Lawendowe pole, pasieka i ściana lasu tworzą naturalną przestrzeń spotkań."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {homeStats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-[#fffdf8] p-5">
              <p className="text-4xl font-semibold text-[#324234]">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Serce fundacji"
            title="Pasieka i ogród są tu najważniejszymi nauczycielami."
            lead="Pokazujemy naturę z bliska: bez pośpiechu, z szacunkiem do ziemi i z prostym językiem, który pomaga zrozumieć nawet złożone procesy."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <FeatureBand
                key={item.href}
                title={item.title}
                text={item.text}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionIntro
            eyebrow="Misja"
            title="Małe kroki, które naprawdę zmieniają otoczenie."
            lead="Fundację założyli Sylwia i Mieczysław Łabędzcy z miłości do pszczół, lawendy i życia w zgodzie z naturą. Od 2019 roku rozwijają projekty, które łączą edukację, ochronę środowiska i zdrowy styl życia."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {pageCards.mission.map((card) => (
              <FeatureBand key={card.title} title={card.title} text={card.text} icon={card.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <VisualPanel
            tone="honey"
            label="Miód, lawenda, zioła i warsztaty tworzą doświadczenie, które zostaje w pamięci."
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7b5fa3]">
              Odwiedziny
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#243127]">
              Przyjedź po wiedzę, zapach lawendy i spokojny kontakt z naturą.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Lawendową Barć można odwiedzać po wcześniejszym ustaleniu telefonicznym.
              To dobre miejsce na lekcję terenową, rodzinne spotkanie, wolontariat
              albo rozmowę o tym, jak wspierać zapylacze u siebie.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-stone-700">
              <p className="flex items-center gap-3">
                <MapPin aria-hidden className="h-4 w-4 text-[#7b5fa3]" />
                {foundation.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone aria-hidden className="h-4 w-4 text-[#7b5fa3]" />
                {foundation.phoneSylwia} / {foundation.phoneMieczyslaw}
              </p>
              <p className="flex items-center gap-3">
                <Mail aria-hidden className="h-4 w-4 text-[#7b5fa3]" />
                {foundation.email}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Callout
        title="Chcesz pomóc pszczołom, ogrodowi albo edukacji?"
        text="Możesz przekazać darowiznę, wesprzeć nas rzeczowo albo dołączyć do wolontariatu. Każdy gest pomaga rozwijać miejsce pełne życia."
        href="/wspieraj"
        cta="Wesprzyj fundację"
      />
    </>
  );
}
