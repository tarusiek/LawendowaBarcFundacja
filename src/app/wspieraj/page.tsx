import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrickDivider } from "@/components/brick-divider";
import { Callout } from "@/components/callout";
import { DonationBox } from "@/components/donation-box";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";

export const metadata: Metadata = { title: "Wspieraj" };

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5ede0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="Wspieraj nas"
            title="Twoje wsparcie pomaga rozwijać miejsce pełne życia."
            lead="Dzięki darowiznom możemy prowadzić warsztaty, kupować rośliny miododajne, pielęgnować ogród i opiekować się pszczołami."
          />
          <VisualPanel
            tone="honey"
            label="Darowizna zamienia się tu w sadzonki, edukację, troskę o ule i kolejne spotkania z naturą."
          />
        </div>
      </section>

      <BrickDivider />

      {/* Darowizna + inne formy */}
      <section className="bg-[#faf6ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-8">
          <DonationBox />
          <div className="rounded-xl border border-[rgba(180,130,60,0.18)] bg-white p-8 shadow-sm">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#c4880a]">
              Inne formy pomocy
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#1e1408]">
              Możesz pomóc także inaczej
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-[#6a5040]">
              <p>
                Przyjmujemy wsparcie rzeczowe, pomoc przy wydarzeniach oraz zaangażowanie
                wolontariuszy w prace ogrodowe i edukacyjne.
              </p>
              <p>
                Najlepiej skontaktować się przed przekazaniem rzeczy lub planowaną wizytą,
                żeby dopasować pomoc do aktualnych potrzeb fundacji.
              </p>
            </div>
            <Link
              href="/wolontariat"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1e1408] px-5 py-3 text-sm font-bold text-[#f0c060] transition hover:bg-[#2a1f0e]"
            >
              Dołącz do wolontariatu
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <BrickDivider />

      <Callout
        title="Masz pytania o darowiznę lub wsparcie rzeczowe?"
        text="Napisz lub zadzwoń — chętnie odpowiemy i dopasujemy formę wsparcia do Twoich możliwości."
        href="/kontakt"
        cta="Skontaktuj się"
      />
    </>
  );
}
