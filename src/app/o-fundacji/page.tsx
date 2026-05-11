import type { Metadata } from "next";
import { BrickDivider } from "@/components/brick-divider";
import { DocumentCard } from "@/components/document-card";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { documents, foundation, pageCards } from "@/lib/site-data";

export const metadata: Metadata = { title: "O fundacji" };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5ede0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
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

      <BrickDivider />

      {/* Historia */}
      <section className="bg-[#faf6ef]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="flex items-center gap-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#c4880a]">
              <span className="inline-block h-px w-6 bg-[rgba(196,136,10,0.4)]" />
              Historia
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1e1408]">
              Od pasieki przy lesie do centrum edukacji ekologicznej.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-[#6a5040]">
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
          <div className="grid gap-5 sm:grid-cols-3">
            {pageCards.mission.map((card) => (
              <FeatureBand
                key={card.title}
                title={card.title}
                text={card.text}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <BrickDivider />

      {/* Dane i dokumenty — dark brick */}
      <section
        className="relative overflow-hidden bg-[#3a2510]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 33px, rgba(0,0,0,0.3) 33px, rgba(0,0,0,0.3) 35px), repeating-linear-gradient(90deg, transparent, transparent 65px, rgba(0,0,0,0.18) 65px, rgba(0,0,0,0.18) 67px)`,
        }}
      >
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Dane */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[#f5ead0]">Dane fundacji</h2>
            <dl className="mt-6 grid gap-5 text-sm">
              <div>
                <dt className="font-semibold text-[#f0c060]">Nazwa</dt>
                <dd className="mt-1 text-base text-[rgba(245,234,208,0.85)]">
                  {foundation.fullName}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#f0c060]">Adres</dt>
                <dd className="mt-1 text-base text-[rgba(245,234,208,0.85)]">
                  {foundation.address}
                </dd>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "KRS", value: foundation.krs },
                  { label: "NIP", value: foundation.nip },
                  { label: "REGON", value: foundation.regon },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="font-semibold text-[#f0c060]">{label}</dt>
                    <dd className="mt-1 font-mono text-base text-[rgba(245,234,208,0.85)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </div>
            </dl>
          </div>

          {/* Dokumenty */}
          <div>
            <h2 className="text-xl font-semibold text-[#f5ead0]">Dokumenty</h2>
            <p className="mt-3 text-sm leading-7 text-[rgba(245,234,208,0.6)]">
              Poniższe miejsca są przygotowane pod skany i pliki PDF.
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
