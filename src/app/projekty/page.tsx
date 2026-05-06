import type { Metadata } from "next";
import { Callout } from "@/components/callout";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { pageCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projekty",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="Projekty i inicjatywy"
            title="Działania, które łączą ludzi i przyrodę."
            lead="Realizujemy projekty wspierające bioróżnorodność, lokalną społeczność i edukację. Najlepiej działają te pomysły, przy których można wspólnie coś posadzić, zobaczyć i zostawić po sobie dobre miejsce."
          />
          <VisualPanel
            tone="honey"
            label="Od ścieżek edukacyjnych po sezonowe spotkania: projekty fundacji mają być praktyczne i ciepłe."
          />
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {pageCards.projects.map((project) => (
            <FeatureBand key={project.title} {...project} />
          ))}
        </div>
      </section>

      <Callout
        title="Masz pomysł na wspólne działanie?"
        text="Współpracujemy ze szkołami, organizacjami i osobami, którym bliska jest edukacja ekologiczna."
        href="/kontakt"
        cta="Porozmawiajmy"
      />
    </>
  );
}
