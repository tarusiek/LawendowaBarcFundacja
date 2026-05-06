import Link from "next/link";
import { Camera, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { footerLinks, foundation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#273528] text-[#f8f3e7]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4b85f]">
            {foundation.shortName}
          </p>
          <p className="mt-4 max-w-md text-2xl font-semibold leading-tight">
            Miejsce, w którym pasieka, lawenda i edukacja rosną razem.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-6 text-stone-200">
            Odwiedziny i warsztaty umawiamy telefonicznie. Chętnie odpowiemy na
            pytania szkół, rodzin, grup zorganizowanych i osób, które chcą wesprzeć fundację.
          </p>
        </div>

        <div>
          <p className="font-semibold">Kontakt</p>
          <ul className="mt-4 space-y-3 text-sm text-stone-200">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#d4b85f]" />
              {foundation.address}
            </li>
            <li>
              <a className="flex gap-3 hover:text-white" href={`mailto:${foundation.email}`}>
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#d4b85f]" />
                {foundation.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[#d4b85f]" />
              <span>
                {foundation.phoneSylwia} / {foundation.phoneMieczyslaw}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Szybkie linki</p>
          <div className="mt-4 grid gap-2 text-sm text-stone-200">
            {footerLinks.map((link) => (
              <Link key={link.href} className="hover:text-white" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={foundation.facebook}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-stone-100 hover:bg-white/10"
              aria-label="Facebook Lawendowa Barć pod Lasem"
              target="_blank"
              rel="noreferrer"
            >
              <Share2 aria-hidden className="h-4 w-4" />
            </a>
            <a
              href={foundation.instagram}
              className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-stone-100 hover:bg-white/10"
              aria-label="Instagram Lawendowa Barć pod Lasem"
              target="_blank"
              rel="noreferrer"
            >
              <Camera aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
