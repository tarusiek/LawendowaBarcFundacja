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
      className="rounded-xl border border-[rgba(180,130,60,0.18)] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(196,136,10,0.3)] hover:shadow-[0_12px_36px_rgba(80,40,10,0.12)]"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[rgba(196,136,10,0.2)] bg-[#fdf3dc] text-[#c4880a]">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#c4880a]">
            {title}
          </span>
          <span className="mt-2 block break-words text-base font-semibold text-[#1e1408]">
            {value}
          </span>
        </span>
      </div>
    </a>
  );
}
