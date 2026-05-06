import type { Metadata } from "next";
import { ContactCard } from "@/components/contact-card";
import { DonationBox } from "@/components/donation-box";
import { SectionIntro } from "@/components/section-intro";
import { VisualPanel } from "@/components/visual-panel";
import { contactCards, foundation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#fff8ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
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

      <section className="bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="bg-[#f4efe3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#243127]">Dane adresowe</h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-stone-700">
              <p>{foundation.fullName}</p>
              <p>{foundation.address}</p>
              <p>
                Facebook:{" "}
                <a className="font-semibold text-[#5b6f38]" href={foundation.facebook}>
                  lawendowabarc
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a className="font-semibold text-[#5b6f38]" href={foundation.instagram}>
                  lawendowa_barc_pod_lasem
                </a>
              </p>
            </div>
          </div>
          <DonationBox />
        </div>
      </section>
    </>
  );
}
