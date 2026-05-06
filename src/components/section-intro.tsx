type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, lead, align = "left" }: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7b5fa3]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] text-[#243127] sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {lead ? <p className="mt-5 text-pretty text-lg leading-8 text-stone-700">{lead}</p> : null}
    </div>
  );
}
