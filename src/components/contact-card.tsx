import type { LucideIcon } from "lucide-react";

type ContactCardProps = {
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export function ContactCard({ title, value, href, icon: Icon }: ContactCardProps) {
  return (
    <a
      href={href}
      className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#efe8d5] text-[#324234]">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-[#7b5fa3]">
            {title}
          </span>
          <span className="mt-2 block break-words text-lg font-semibold text-[#243127]">{value}</span>
        </span>
      </div>
    </a>
  );
}
