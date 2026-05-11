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
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #d4880a 0%, #9a5c08 100%)" }}
    >
      {/* Honeycomb pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
        style={{ opacity: 0.11 }}
      >
        <defs>
          <pattern
            id="hc-callout"
            x="0"
            y="0"
            width="40"
            height="46"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20 2.5L37.5 12.5V32.5L20 42.5L2.5 32.5V12.5Z"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hc-callout)" />
      </svg>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.65)]">
            Zapraszamy
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-[rgba(255,255,255,0.8)]">{text}</p>
        </div>
        <Link
          href={href}
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#7a4408] shadow-lg transition hover:bg-[#fffdf8]"
        >
          {cta}
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
