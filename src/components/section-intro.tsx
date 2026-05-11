type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`flex items-center gap-2.5 text-[10.5px] font-bold uppercase tracking-[0.16em] ${
            dark ? "text-[#f0c060]" : "text-[#c4880a]"
          } ${align === "center" ? "justify-center" : ""}`}
        >
          <span
            className={`inline-block h-px w-6 ${
              dark ? "bg-[rgba(240,192,96,0.5)]" : "bg-[rgba(196,136,10,0.4)]"
            }`}
          />
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`mt-4 text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl ${
          dark ? "text-[#f5ead0]" : "text-[#1e1408]"
        }`}
      >
        {title}
      </h1>
      {lead ? (
        <p
          className={`mt-5 text-pretty text-lg leading-8 ${
            dark ? "text-[rgba(245,234,208,0.72)]" : "text-[#6a5040]"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
