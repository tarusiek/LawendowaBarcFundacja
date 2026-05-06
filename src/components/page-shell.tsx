import { Callout } from "@/components/callout";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";

type StoryBlock = {
  title: string;
  text: string;
  label: string;
  tone: "honey" | "lavender" | "leaf" | "earth";
};

type PageShellProps = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  blocks: StoryBlock[];
  callout?: {
    title: string;
    text: string;
    href: string;
    cta: string;
  };
};

export function PageShell({ eyebrow, title, lead, intro, blocks, callout }: PageShellProps) {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <SectionIntro eyebrow={eyebrow} title={title} lead={lead} />
          <VisualPanel label={intro} tone={blocks[0]?.tone ?? "leaf"} />
        </div>
      </section>

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:px-8">
          {blocks.map((block, index) => (
            <article
              key={block.title}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <VisualPanel label={block.label} tone={block.tone} />
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7b5fa3]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#243127]">
                  {block.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-700">{block.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {callout ? <Callout {...callout} /> : null}
    </>
  );
}
