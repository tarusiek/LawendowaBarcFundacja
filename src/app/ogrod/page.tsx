import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Ogród",
};

export default function GardenPage() {
  return (
    <PageShell
      eyebrow="Ogród"
      title="Lawendowy ogród pełen życia."
      lead="Ogród jest zieloną opowieścią o współpracy człowieka z naturą. Rosną tu lawenda, zioła, warzywa i rośliny miododajne, które zapraszają zapylacze przez cały sezon."
      intro="Lawenda, zioła i rabaty permakulturowe tworzą przestrzeń do nauki, odpoczynku i wspólnej pracy."
      blocks={[
        {
          title: "Lawendowe pola",
          text: "Lawenda jest wizytówką miejsca. Uprawiana naturalnie, bez chemii, staje się tematem warsztatów, rękodzieła, aromatu i rozmów o prostych sposobach dbania o rośliny.",
          label: "Zapach lawendy koi zmysły i przyciąga zapylacze.",
          tone: "lavender",
        },
        {
          title: "Permakultura w praktyce",
          text: "Tworzymy rabaty, które korzystają z naturalnych zależności między roślinami. To ogrodnictwo oparte na obserwacji, cierpliwości i szacunku do ziemi.",
          label: "Ogród może wspierać sam siebie, jeśli dobrze rozumie się jego rytm.",
          tone: "earth",
        },
        {
          title: "Ogród przyjazny pszczołom",
          text: "Pokazujemy, jakie rośliny miododajne warto sadzić przy domu, na działce lub balkonie. Nawet mała rabata może stać się stołówką dla zapylaczy.",
          label: "Kwiaty karmią pszczoły i zmieniają najbliższe otoczenie.",
          tone: "leaf",
        },
      ]}
      callout={{
        title: "Chcesz zobaczyć ogród w sezonie?",
        text: "Najlepszy termin wizyty ustalamy indywidualnie, zależnie od kwitnienia, pogody i planu warsztatów.",
        href: "/kontakt",
        cta: "Umów wizytę",
      }}
    />
  );
}
