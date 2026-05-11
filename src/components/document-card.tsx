import type { LucideIcon } from "lucide-react";

type DocumentCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function DocumentCard({ title, description, icon: Icon }: DocumentCardProps) {
  return (
    <div className="rounded-xl border border-dashed border-[rgba(196,136,10,0.3)] bg-[#faf6ef] p-5 transition-colors hover:bg-[#fdf3dc]">
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[rgba(196,136,10,0.2)] bg-white text-[#c4880a] shadow-sm">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-base font-semibold text-[#1e1408]">{title}</h2>
          <p className="mt-1.5 text-sm leading-6 text-[#6a5040]">{description}</p>
        </div>
      </div>
    </div>
  );
}
