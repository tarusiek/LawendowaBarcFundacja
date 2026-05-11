"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { foundation } from "@/lib/site-data";

const leftLinks = [
  { href: "/", label: "Start" },
  { href: "/pasieka", label: "Pasieka" },
  { href: "/ogrod", label: "Ogród" },
  { href: "/edukacja-i-warsztaty", label: "Warsztaty" },
];

const rightLinks = [
  { href: "/projekty", label: "Projekty" },
  { href: "/wolontariat", label: "Wolontariat" },
  { href: "/kontakt", label: "Kontakt" },
];

const mobileLinks = [
  ...leftLinks,
  ...rightLinks,
  { href: "/wspieraj", label: "Wspieraj" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      pathname === href
        ? "text-[#c4880a] font-semibold"
        : "text-[#4a3520] hover:text-[#c4880a] hover:bg-[rgba(196,136,10,0.08)]"
    }`;

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#1e1408]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <p className="hidden text-[10px] font-medium tracking-wide text-[rgba(240,192,96,0.7)] sm:block">
            📍 {foundation.address} &nbsp;·&nbsp; 📞 {foundation.phoneSylwia}
          </p>
          <p className="text-[10px] font-medium tracking-wide text-[rgba(240,192,96,0.7)] sm:hidden">
            📍 Chajczyny · 📞 {foundation.phoneSylwia}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={foundation.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-semibold text-[rgba(240,192,96,0.65)] transition-colors hover:text-[#f0c060]"
            >
              Facebook
            </a>
            <a
              href={foundation.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-semibold text-[rgba(240,192,96,0.65)] transition-colors hover:text-[#f0c060]"
            >
              Instagram
            </a>
            <a
              href={`mailto:${foundation.email}`}
              className="text-[10px] font-semibold text-[rgba(240,192,96,0.65)] transition-colors hover:text-[#f0c060]"
            >
              📧 Email
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-[rgba(180,130,60,0.15)] bg-[rgba(250,246,239,0.97)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Left nav — desktop */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Nawigacja lewa"
          >
            {leftLinks.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            className="flex shrink-0 flex-col items-center gap-1.5 px-4 lg:px-6"
            aria-label="Strona główna Lawendowa Barć pod Lasem"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[rgba(180,130,60,0.25)] bg-white shadow-md">
              <Image
                src="/brand/lawendowa-barc-logo.jpeg"
                alt=""
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
                priority
              />
            </span>
            <span className="hidden whitespace-nowrap font-display text-[11px] font-semibold text-[#2a1f0e] lg:block">
              Lawendowa Barć
            </span>
          </Link>

          {/* Right nav — desktop */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Nawigacja prawa"
          >
            {rightLinks.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/wspieraj"
              className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-[#1e1408] px-4 py-2 text-sm font-semibold text-[#f0c060] shadow-sm transition hover:bg-[#2a1f0e]"
            >
              Wesprzyj 🍯
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-[rgba(180,130,60,0.3)] bg-white px-3 py-2 text-sm font-medium text-[#2a1f0e] shadow-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X aria-hidden className="h-4 w-4" />
            ) : (
              <Menu aria-hidden className="h-4 w-4" />
            )}
            Menu
          </button>
        </div>

        {/* Gradient accent line */}
        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, #c4880a 0%, #f0c060 25%, #4a7830 60%, #7b5fa3 100%)",
          }}
        />
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-[rgba(180,130,60,0.15)] bg-[#faf6ef] px-4 py-3 shadow-lg lg:hidden"
          aria-label="Nawigacja mobilna"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {mobileLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-[#1e1408] text-[#f0c060]"
                    : "text-[#2a1f0e] hover:bg-[rgba(196,136,10,0.1)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
