import type { Metadata } from "next";
import { DonationBox } from "@/components/donation-box";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";

export const metadata: Metadata = {
  title: "Wspieraj",
};

export default function SupportPage() {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
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

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <DonationBox />
          <div className="rounded-lg bg-[#f4efe3] p-6">
            <h2 className="text-2xl font-semibold text-[#243127]">Możesz pomóc także inaczej</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-stone-700">
              <p>
                Przyjmujemy wsparcie rzeczowe, pomoc przy wydarzeniach oraz zaangażowanie
                wolontariuszy w prace ogrodowe i edukacyjne.
              </p>
              <p>
                Najlepiej skontaktować się przed przekazaniem rzeczy lub planowaną wizytą,
                żeby dopasować pomoc do aktualnych potrzeb fundacji.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
