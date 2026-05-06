import type { Metadata } from "next";
import { FeatureBand } from "@/components/feature-band";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { BookOpen, Flower2, HeartPulse, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Edukacja i warsztaty",
};

const topics = [
  {
    title: "Pszczelarstwo",
    text: "Życie ula, praca pszczelarza, produkty pszczele i rola zapylaczy w przyrodzie.",
    icon: BookOpen,
  },
  {
    title: "Lawenda i zioła",
    text: "Uprawa, zapach, właściwości i proste zastosowania w domu, kuchni i rękodziele.",
    icon: Flower2,
  },
  {
    title: "Permakultura",
    text: "Naturalne metody uprawy, rabaty przyjazne glebie i ogrody wspierające bioróżnorodność.",
    icon: Leaf,
  },
  {
    title: "Zdrowy styl życia",
    text: "Naturalne produkty, uważność na codzienne wybory i spokojny kontakt z przyrodą.",
    icon: HeartPulse,
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="Edukacja i warsztaty"
            title="Uczymy przez działanie, dotyk, zapach i rozmowę."
            lead="Organizujemy spotkania dla szkół, rodzin, seniorów i grup zorganizowanych. Najważniejsze jest doświadczenie: zobaczyć, powąchać, zapytać i spróbować zrozumieć naturę z bliska."
          />
          <VisualPanel
            tone="leaf"
            label="Edukacja w plenerze pomaga zapamiętać więcej niż najpiękniejsza sala lekcyjna."
          />
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <FeatureBand key={topic.title} {...topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <VisualPanel
            tone="lavender"
            label="Warsztaty z lawendą mogą prowadzić od pola aż do pachnących woreczków i naturalnych produktów."
          />
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-[#243127]">
              Dla kogo są zajęcia?
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Program dopasowujemy do wieku, pory roku i potrzeb grupy. Inaczej
              opowiadamy przedszkolakom, inaczej młodzieży, a jeszcze inaczej
              dorosłym, którzy chcą założyć własną rabatę przyjazną pszczołom.
            </p>
            <ul className="mt-6 grid gap-3 text-base text-stone-700">
              {["szkoły i przedszkola", "rodziny", "seniorzy", "grupy zorganizowane"].map(
                (item) => (
                  <li key={item} className="rounded-md bg-white px-4 py-3 shadow-sm">
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
