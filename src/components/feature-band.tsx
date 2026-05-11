import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type FeatureBandProps = {
  title: string;
  text: string;
  href?: string;
  cta?: string;
  icon: LucideIcon;
};

export function FeatureBand({
  title,
  text,
  href,
  cta = "Zobacz więcej",
  icon: Icon,
}: FeatureBandProps) {
  const content = (
    <div className="group h-full rounded-xl border border-[rgba(180,130,60,0.18)] bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(196,136,10,0.3)] hover:shadow-[0_16px_48px_rgba(80,40,10,0.12)]">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-[rgba(196,136,10,0.2)] bg-[#fdf3dc] text-[#c4880a]">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <h2 className="mt-5 text-xl font-semibold leading-snug text-[#1e1408]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[#6a5040]">{text}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c4880a]">
          {cta}
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
