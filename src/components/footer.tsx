import Link from "next/link";
import { foundation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1a1008] text-[#c8b898]">
      {/* Gradient accent top */}
      <div
        className="h-0.5 w-full"
        style={{
          background: "linear-gradient(90deg, #c4880a, #f0c060, #4a7830, #7b5fa3)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-semibold text-[#f0d090]">
            Lawendowa Barć pod Lasem
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[rgba(200,184,152,0.7)]">
            Fundacja edukacyjno-ekologiczna w Chajczynach. Pasieka, lawenda,
            ogród permakulturowy i warsztaty dla dzieci, dorosłych i całej okolicy.
          </p>
          <p className="mt-5 text-xs leading-6 text-[rgba(200,184,152,0.38)]">
            KRS {foundation.krs} · NIP {foundation.nip} · REGON {foundation.regon}
            <br />
            Nr konta: {foundation.bankAccount}
          </p>
        </div>

        {/* Kontakt */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#f0c060]">
            Kontakt
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[rgba(200,184,152,0.75)]">
            <li>📍 {foundation.address}</li>
            <li>
              <a
                href={`mailto:${foundation.email}`}
                className="transition-colors hover:text-[#f0d090]"
              >
                📧 {foundation.email}
              </a>
            </li>
            <li>
              📞 {foundation.phoneSylwia} / {foundation.phoneMieczyslaw}
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={foundation.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-lg border border-[rgba(255,255,255,0.1)] text-sm text-[rgba(200,184,152,0.7)] transition hover:border-[rgba(240,192,96,0.3)] hover:text-[#f0c060]"
            >
              f
            </a>
            <a
              href={foundation.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-lg border border-[rgba(255,255,255,0.1)] text-sm text-[rgba(200,184,152,0.7)] transition hover:border-[rgba(240,192,96,0.3)] hover:text-[#f0c060]"
            >
              IG
            </a>
          </div>
        </div>

        {/* Linki */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#f0c060]">
            Szybkie linki
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[rgba(200,184,152,0.75)]">
            {[
              { href: "/o-fundacji", label: "O fundacji" },
              { href: "/pasieka", label: "Pasieka" },
              { href: "/ogrod", label: "Ogród i lawenda" },
              { href: "/edukacja-i-warsztaty", label: "Warsztaty" },
              { href: "/wolontariat", label: "Wolontariat" },
              { href: "/wspieraj", label: "Wesprzyj nas" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#f0d090]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="border-t border-[rgba(255,255,255,0.06)] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-[11px] text-[rgba(200,184,152,0.38)] sm:flex-row">
          <span>© 2025 Lawendowa Barć pod Lasem. Wszelkie prawa zastrzeżone.</span>
          <span>Chajczyny, powiat bełchatowski</span>
        </div>
      </div>
    </footer>
  );
}
