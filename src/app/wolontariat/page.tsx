import type { Metadata } from "next";
import { Callout } from "@/components/callout";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { pageCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Wolontariat",
};

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="Wolontariat"
            title="Każda para rąk jest tu mile widziana."
            lead="Jeśli chcesz pomagać pszczołom, dbać o ogród i uczyć się ekologii w praktyce, możesz dołączyć do działań fundacji."
          />
          <VisualPanel
            tone="leaf"
            label="Wolontariat to wspólna praca, rozmowy i satysfakcja z miejsca, które rośnie dzięki ludziom."
          />
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {pageCards.volunteer.map((item) => (
            <FeatureBand key={item.title} {...item} />
          ))}
        </div>
      </section>

      <Callout
        title="Chcesz dołączyć do wolontariatu?"
        text="Napisz lub zadzwoń. Opowiemy, co aktualnie dzieje się w ogrodzie, przy warsztatach i wokół pasieki."
        href="/kontakt"
        cta="Skontaktuj się"
      />
    </>
  );
}
