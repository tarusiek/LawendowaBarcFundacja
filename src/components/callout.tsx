import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CalloutProps = {
  title: string;
  text: string;
  href: string;
  cta: string;
};

export function Callout({ title, text, href, cta }: CalloutProps) {
  return (
    <section className="bg-[#324234]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 text-[#fffaf0] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4b85f]">
            Zapraszamy
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-stone-100">{text}</p>
        </div>
        <Link
          href={href}
          className="inline-flex w-fit items-center gap-2 rounded-md bg-[#f1cf63] px-5 py-3 text-sm font-semibold text-[#243127] shadow-sm transition hover:bg-[#f7dc83]"
        >
          {cta}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
