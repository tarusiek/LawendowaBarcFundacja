import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { BrickDivider } from "@/components/brick-divider";
import { Callout } from "@/components/callout";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { foundation, highlights, homeStats, pageCards } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#f5ede0]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(140,80,30,0.055) 28px, rgba(140,80,30,0.055) 29px), repeating-linear-gradient(90deg, transparent, transparent 56px, rgba(140,80,30,0.04) 56px, rgba(140,80,30,0.04) 57px)`,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="flex items-center gap-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#c4880a]">
              <span className="inline-block h-px w-6 bg-[rgba(196,136,10,0.4)]" />
              {foundation.tagline}
            </p>
            <h1 className="mt-5 max-w-2xl text-balance text-5xl font-semibold leading-[1.05] text-[#1e1408] sm:text-6xl lg:text-7xl">
              Tam, gdzie lawenda spotyka las, a pszczoły{" "}
              <em className="not-italic text-[#c4880a]">uczą troski</em> o naturę.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6a5040]">
              Tworzymy przyjazne miejsce edukacji ekologicznej: pasiekę, ogród
              permakulturowy i warsztaty dla dzieci, dorosłych oraz lokalnej społeczności.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/edukacja-i-warsztaty"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1e1408] px-6 py-3.5 text-sm font-bold text-[#f0c060] shadow-md transition hover:bg-[#2a1f0e]"
              >
                Odkryj pasiekę 🐝
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(180,130,60,0.35)] bg-white px-6 py-3.5 text-sm font-semibold text-[#2a1f0e] shadow-sm transition hover:bg-[#fdf3dc]"
              >
                Umów wizytę →
              </Link>
            </div>
          </div>
          <div className="relative">
            <VisualPanel
              tone="honey"
              label="Lawendowe pole, pasieka i ściana lasu tworzą naturalną przestrzeń spotkań."
            />
            <div
              className="pointer-events-none absolute -right-4 top-8 h-16 w-12 rounded-[50%_50%_60%_60%_/_40%_40%_70%_70%] opacity-85 shadow-[0_8px_24px_rgba(180,100,0,0.35)]"
              style={{
                background: "radial-gradient(circle at 40% 35%, #f9d060, #c87810)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="bg-[#1e1408]">
        <div className="mx-auto grid max-w-7xl divide-x divide-[rgba(255,255,255,0.07)] md:grid-cols-3">
          {homeStats.map((stat) => (
            <div key={stat.label} className="px-8 py-10">
              <p className="font-display text-5xl font-semibold text-[#f0c060]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[rgba(200,184,152,0.6)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <BrickDivider />

      {/* ── HIGHLIGHTS ── */}
      <section className="bg-[#faf6ef]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Serce fundacji"
            title="Pasieka i ogród są tu najważniejszymi nauczycielami."
            lead="Pokazujemy naturę z bliska: bez pośpiechu, z szacunkiem do ziemi i z prostym językiem, który pomaga zrozumieć nawet złożone procesy."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

      <BrickDivider />

      {/* ── MISSION (dark brick) ── */}
      <section
        className="relative overflow-hidden bg-[#3a2510]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 33px, rgba(0,0,0,0.3) 33px, rgba(0,0,0,0.3) 35px),
            repeating-linear-gradient(90deg, transparent, transparent 65px, rgba(0,0,0,0.18) 65px, rgba(0,0,0,0.18) 67px)
          `,
        }}
      >
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <SectionIntro
            eyebrow="Misja"
            title="Małe kroki, które naprawdę zmieniają otoczenie."
            lead="Fundację założyli Sylwia i Mieczysław Łabędzcy z miłości do pszczół, lawendy i życia w zgodzie z naturą. Od 2019 roku rozwijają projekty, które łączą edukację, ochronę środowiska i zdrowy styl życia."
            dark
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {pageCards.mission.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-5 backdrop-blur-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(240,192,96,0.25)] bg-[rgba(240,192,96,0.12)] text-[#f0c060]">
                  <card.icon aria-hidden className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#f5ead0]">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[rgba(245,234,208,0.62)]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrickDivider />

      {/* ── VISIT ── */}
      <section className="bg-[#faf6ef]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <VisualPanel
            tone="leaf"
            label="Miód, lawenda, zioła i warsztaty tworzą doświadczenie, które zostaje w pamięci."
          />
          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#c4880a]">
              <span className="inline-block h-px w-6 bg-[rgba(196,136,10,0.4)]" />
              Odwiedziny
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#1e1408]">
              Przyjedź po wiedzę, zapach lawendy i spokojny kontakt z naturą.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6a5040]">
              Lawendową Barć można odwiedzać po wcześniejszym ustaleniu telefonicznym.
              To dobre miejsce na lekcję terenową, rodzinne spotkanie, wolontariat
              albo rozmowę o tym, jak wspierać zapylacze u siebie.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-[#4a3520]">
              <p className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[rgba(196,136,10,0.2)] bg-[#fdf3dc] text-[#c4880a]">
                  <MapPin aria-hidden className="h-4 w-4" />
                </span>
                {foundation.address}
              </p>
              <p className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[rgba(196,136,10,0.2)] bg-[#fdf3dc] text-[#c4880a]">
                  <Phone aria-hidden className="h-4 w-4" />
                </span>
                {foundation.phoneSylwia} / {foundation.phoneMieczyslaw}
              </p>
              <p className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[rgba(196,136,10,0.2)] bg-[#fdf3dc] text-[#c4880a]">
                  <Mail aria-hidden className="h-4 w-4" />
                </span>
                {foundation.email}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrickDivider />

      <Callout
        title="Chcesz pomóc pszczołom, ogrodowi albo edukacji?"
        text="Możesz przekazać darowiznę, wesprzeć nas rzeczowo albo dołączyć do wolontariatu. Każdy gest pomaga rozwijać miejsce pełne życia."
        href="/wspieraj"
        cta="Wesprzyj fundację"
      />
    </>
  );
}
