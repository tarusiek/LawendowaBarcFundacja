import { BrickDivider } from "@/components/brick-divider";
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

export function PageShell({
  eyebrow,
  title,
  lead,
  intro,
  blocks,
  callout,
}: PageShellProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5ede0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <SectionIntro eyebrow={eyebrow} title={title} lead={lead} />
          <VisualPanel label={intro} tone={blocks[0]?.tone ?? "leaf"} />
        </div>
      </section>

      <BrickDivider />

      {/* Story blocks */}
      <section className="bg-[#faf6ef]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-20">
            {blocks.map((block, index) => (
              <article
                key={block.title}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <VisualPanel label={block.label} tone={block.tone} />
                <div className="max-w-xl">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#c4880a]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1e1408]">
                    {block.title}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#6a5040]">{block.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {callout ? (
        <>
          <BrickDivider />
          <Callout {...callout} />
        </>
      ) : null}
    </>
  );
}
