import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Pasieka",
};

export default function ApiaryPage() {
  return (
    <PageShell
      eyebrow="Pasieka"
      title="Tam, gdzie pszczoły opowiadają swoje historie."
      lead="Pszczoły są sercem fundacji. W pasiece pokazujemy, jak działa ul, jak powstaje miód i dlaczego zapylacze są tak ważne dla całego ekosystemu."
      intro="Kolorowe ule, ramki z miodem i spokojna praca pszczelarza pomagają zrozumieć życie pszczelej rodziny."
      blocks={[
        {
          title: "Nasze pszczoły",
          text: "Każdy ul to tętniąca życiem społeczność. Uczymy, jak wygląda codzienna praca pszczół i jak człowiek może wspierać je mądrze, bez pośpiechu i nadmiernej ingerencji.",
          label: "Życie ula to precyzyjny rytm natury.",
          tone: "honey",
        },
        {
          title: "Miód i produkty pszczele",
          text: "Opowiadamy o miodzie, wosku, pyłku i propolisie. Pokazujemy, skąd biorą się naturalne produkty pszczele i jak traktować je z szacunkiem do pracy całej rodziny pszczelej.",
          label: "Złoty miód jest smakiem lata zamkniętym w słoiku.",
          tone: "earth",
        },
        {
          title: "Pszczela edukacja",
          text: "Warsztaty w pasiece są spotkaniem z przyrodą z bliska. Dzieci i dorośli mogą zobaczyć narzędzia pszczelarza, porozmawiać o zapylaniu i lepiej zrozumieć rolę pszczół.",
          label: "Najlepsza lekcja dzieje się w terenie.",
          tone: "leaf",
        },
      ]}
      callout={{
        title: "Chcesz odwiedzić pasiekę?",
        text: "Zadzwoń lub napisz, aby ustalić termin spotkania, warsztatu albo wizyty edukacyjnej.",
        href: "/kontakt",
        cta: "Skontaktuj się",
      }}
    />
  );
}
