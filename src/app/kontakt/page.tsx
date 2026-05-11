import type { Metadata } from "next";
import { BrickDivider } from "@/components/brick-divider";
import { Callout } from "@/components/callout";
import { ContactCard } from "@/components/contact-card";
import { DonationBox } from "@/components/donation-box";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { contactCards, foundation } from "@/lib/site-data";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5ede0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="Kontakt"
            title="Umów wizytę, warsztat albo rozmowę o współpracy."
            lead="Lawendową Barć można odwiedzać po wcześniejszym ustaleniu telefonicznym. Napisz lub zadzwoń, a wspólnie wybierzemy najlepszy termin."
          />
          <VisualPanel
            tone="lavender"
            label="Najlepsze spotkania zaczynają się od krótkiej rozmowy i dobrego terminu."
          />
        </div>
      </section>

      <BrickDivider />

      {/* Karty kontaktowe */}
      <section className="bg-[#faf6ef]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <ContactCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <BrickDivider />

      {/* Dane + darowizna — dark brick */}
      <section
        className="relative overflow-hidden bg-[#3a2510]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 33px, rgba(0,0,0,0.3) 33px, rgba(0,0,0,0.3) 35px), repeating-linear-gradient(90deg, transparent, transparent 65px, rgba(0,0,0,0.18) 65px, rgba(0,0,0,0.18) 67px)`,
        }}
      >
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] p-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[#f5ead0]">Dane adresowe</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[rgba(245,234,208,0.75)]">
              <p>{foundation.fullName}</p>
              <p>{foundation.address}</p>
              <p>
                <a
                  className="font-semibold text-[#f0c060] hover:underline"
                  href={foundation.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook: lawendowabarc
                </a>
              </p>
              <p>
                <a
                  className="font-semibold text-[#f0c060] hover:underline"
                  href={foundation.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: lawendowa_barc_pod_lasem
                </a>
              </p>
            </div>
          </div>
          <DonationBox />
        </div>
      </section>

      <BrickDivider />

      <Callout
        title="Chcesz odwiedzić pasiekę lub ogród?"
        text="Zadzwoń lub napisz — razem znajdziemy najlepszy termin na Twoje odwiedziny."
        href="/kontakt"
        cta="Napisz do nas"
      />
    </>
  );
}
