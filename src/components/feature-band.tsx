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

export function FeatureBand({ title, text, href, cta = "Zobacz więcej", icon: Icon }: FeatureBandProps) {
  const content = (
    <div className="group h-full rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-[#efe8d5] text-[#324234]">
        <Icon aria-hidden className="h-5 w-5" />
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-[#243127]">{title}</h2>
      <p className="mt-3 text-base leading-7 text-stone-700">{text}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5b6f38]">
          {cta}
          <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
