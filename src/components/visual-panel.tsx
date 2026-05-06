type VisualPanelProps = {
  tone?: "honey" | "lavender" | "leaf" | "earth";
  label: string;
};

const toneClasses = {
  honey: "from-[#f5d36b] via-[#f2b950] to-[#8b6a28]",
  lavender: "from-[#c7b4e2] via-[#8d75b9] to-[#394531]",
  leaf: "from-[#bdd9a5] via-[#6f9b67] to-[#273528]",
  earth: "from-[#dbc5a4] via-[#9f7e57] to-[#324234]",
};

export function VisualPanel({ tone = "leaf", label }: VisualPanelProps) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/70 bg-stone-100 shadow-[0_24px_80px_rgba(39,53,40,0.14)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${toneClasses[tone]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(255,255,255,0.6),transparent_24%),radial-gradient(circle_at_76%_68%,rgba(255,255,255,0.26),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
      <p className="absolute bottom-5 left-5 right-5 max-w-sm text-sm font-medium leading-6 text-white drop-shadow">
        {label}
      </p>
    </div>
  );
}
