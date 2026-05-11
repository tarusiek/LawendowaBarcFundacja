import { HandHeart } from "lucide-react";
import { foundation } from "@/lib/site-data";

export function DonationBox() {
  return (
    <div className="rounded-xl border border-[rgba(196,136,10,0.25)] bg-[#fdf3dc] p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#c4880a] text-white shadow-sm">
          <HandHeart aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#c4880a]">
            Darowizna
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#1e1408]">
            Wesprzyj nasze działania
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#6a5040]">
            Każda wpłata pomaga rozwijać ogród, kupować rośliny miododajne,
            prowadzić warsztaty i opiekować się pszczołami.
          </p>
          <div className="mt-5 rounded-xl border border-[rgba(196,136,10,0.2)] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#c4880a]">
              Numer konta
            </p>
            <p className="mt-1.5 break-words font-mono text-lg font-semibold text-[#1e1408]">
              {foundation.bankAccount}
            </p>
            <p className="mt-1 text-xs text-[#9a7050]">mBank</p>
          </div>
        </div>
      </div>
    </div>
  );
}
