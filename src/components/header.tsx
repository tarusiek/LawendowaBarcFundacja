"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { foundation, navigation } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#fffdf8]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Strona główna Lawendowa Barć pod Lasem"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-stone-200 bg-white shadow-sm">
            <Image
              src="/brand/lawendowa-barc-logo.jpeg"
              alt=""
              width={38}
              height={24}
              className="h-7 w-auto object-contain"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold uppercase tracking-[0.12em] text-[#324234]">
              {foundation.shortName}
            </span>
            <span className="block truncate text-xs text-stone-600">
              Fundacja edukacyjno-ekologiczna
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Główna nawigacja">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[#324234] text-white"
                    : "text-stone-700 hover:bg-[#f0eadf] hover:text-[#324234]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-[#324234] shadow-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="h-4 w-4" /> : <Menu aria-hidden className="h-4 w-4" />}
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-stone-200 bg-[#fffdf8] px-4 py-3 shadow-sm lg:hidden"
          aria-label="Nawigacja mobilna"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-base font-medium ${
                    active ? "bg-[#324234] text-white" : "text-stone-800 hover:bg-[#f0eadf]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
