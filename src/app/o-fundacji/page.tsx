import type { Metadata } from "next";
import { DocumentCard } from "@/components/document-card";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { documents, foundation, pageCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "O fundacji",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="O fundacji"
            title="Z miłości do pszczół, lawendy i życia blisko natury."
            lead="Fundacja działa lokalnie w powiecie bełchatowskim, ale jej tematy są uniwersalne: edukacja ekologiczna, ochrona środowiska, rośliny miododajne i zdrowy styl życia."
          />
          <VisualPanel
            tone="earth"
            label="Chajczyny to spokojna baza działań fundacji, pasieki i lawendowego ogrodu."
          />
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7b5fa3]">
              Historia
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#243127]">
              Od pasieki przy lesie do centrum edukacji ekologicznej.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-stone-700">
              <p>
                Sylwia i Mieczysław Łabędzcy od lat rozwijają miejsce, w którym
                pszczoły, zioła i lawenda są częścią codziennej pracy.
              </p>
              <p>
                W czerwcu 2019 roku zarejestrowali fundację, aby jeszcze szerzej
                dzielić się wiedzą, prowadzić warsztaty i wspierać lokalną społeczność.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {pageCards.mission.map((card) => (
              <FeatureBand key={card.title} title={card.title} text={card.text} icon={card.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe3]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#243127]">Dane fundacji</h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-stone-500">Nazwa</dt>
                <dd className="mt-1 text-base text-[#243127]">{foundation.fullName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-stone-500">Adres</dt>
                <dd className="mt-1 text-base text-[#243127]">{foundation.address}</dd>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="font-semibold text-stone-500">KRS</dt>
                  <dd className="mt-1 font-mono text-base text-[#243127]">{foundation.krs}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-500">NIP</dt>
                  <dd className="mt-1 font-mono text-base text-[#243127]">{foundation.nip}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-500">REGON</dt>
                  <dd className="mt-1 font-mono text-base text-[#243127]">{foundation.regon}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#243127]">Dokumenty</h2>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Poniższe miejsca są przygotowane pod skany i pliki PDF, które można
              dodać w kolejnej aktualizacji strony.
            </p>
            <div className="mt-6 grid gap-4">
              {documents.map((document) => (
                <DocumentCard key={document.title} {...document} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
