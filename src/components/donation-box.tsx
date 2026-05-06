import { Copy, HandHeart } from "lucide-react";
import { foundation } from "@/lib/site-data";

export function DonationBox() {
  return (
    <div className="rounded-lg border border-[#e6d49a] bg-[#fff8dc] p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#f1cf63] text-[#243127]">
          <HandHeart aria-hidden className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7a6620]">
            Darowizna
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#243127]">Wesprzyj nasze działania</h2>
          <p className="mt-3 text-base leading-7 text-stone-700">
            Każda wpłata pomaga rozwijać ogród, kupować rośliny miododajne,
            prowadzić warsztaty i opiekować się pszczołami.
          </p>
          <div className="mt-5 rounded-md bg-white p-4">
            <p className="text-sm text-stone-600">Numer konta</p>
            <p className="mt-1 break-words font-mono text-lg font-semibold text-[#243127]">
              {foundation.bankAccount}
            </p>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-stone-600">
            <Copy aria-hidden className="h-4 w-4" />
            Numer jest przygotowany do skopiowania ręcznie z tej sekcji.
          </p>
        </div>
      </div>
    </div>
  );
}
