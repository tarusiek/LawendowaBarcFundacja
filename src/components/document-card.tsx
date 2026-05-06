import type { LucideIcon } from "lucide-react";

type DocumentCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function DocumentCard({ title, description, icon: Icon }: DocumentCardProps) {
  return (
    <div className="rounded-lg border border-dashed border-stone-300 bg-[#fffdf8] p-5">
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-[#324234] shadow-sm">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-[#243127]">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
