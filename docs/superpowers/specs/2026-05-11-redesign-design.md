# Redesign — Lawendowa Barć pod Lasem

**Data:** 2026-05-11  
**Zakres:** Pełny redesign graficzny wszystkich stron i komponentów  
**Stack:** Next.js, Tailwind CSS v4, Lora + Inter (Google Fonts), Lucide icons

---

## 1. Kierunek wizualny

**Klimat:** Natura · Miód · Pszczoły · Pola · Łąki · Las · Cegła  
**Osobowość marki:** Rzemieślnicze, ciepłe, autentyczne, premium — jak dobrze zaprojektowana ekologiczna pasieka z duszą. Nie korporacyjne, nie plastikowe.

### Paleta kolorów

| Token | Wartość | Zastosowanie |
|---|---|---|
| `--honey` | `#c4880a` | Akcenty, CTA, podkreślenia |
| `--honey-light` | `#f0c060` | Złoto w ciemnych sekcjach |
| `--honey-pale` | `#fdf3dc` | Tła kart, subtelne tła |
| `--dark` | `#1e1408` | Ciemne tło, tekst główny |
| `--dark-mid` | `#2a1f0e` | Header ciemny, footer |
| `--forest` | `#2a4a1a` | Forest green akcenty |
| `--forest-mid` | `#4a7830` | Linki, ikony |
| `--lavender` | `#7b5fa3` | Pasek informacyjny, akcenty |
| `--brick` | `#c4844a` | Ceglane przerywniki |
| `--cream` | `#faf6ef` | Tło strony |
| `--warm-white` | `#fffdf8` | Tła sekcji |
| `--stone` | `#f0ebe0` | Alternatywne tło sekcji |

### Typografia

- **Headings:** `Lora` (serif) — 400, 500, 600, 700; italic dla akcentów
- **Body:** `Inter` — 400, 500, 600; czytelna na każdym tle
- **Eyebrows:** Inter 700, uppercase, `tracking-[0.14em]`, kolor honey
- **Stats/numbers:** Lora 700, duże

### Dekoracje i tekstury

- **Honeycomb SVG pattern** — jako overlay na ciemnych panelach (opacity 0.10–0.14)
- **Ceglany przerywnik** — `repeating-linear-gradient` poziome i pionowe linie, h-5, opacity 0.3
- **Sylwetka lasu** — SVG path na panelach wizualnych
- **Sylwetka łąki** — SVG path z polnymi kwiatkami na sekcji Odwiedziny
- **Lawendowe paski** — pionowe linie w tle
- **Honey drop** — okrągły blob jako dekoracja hero

---

## 2. Komponenty globalne

### Header (Nawigacja B)

Trójwarstwowy:

1. **Top bar** — `background: #1e1408`, pełna szerokość
   - Lewo: `📍 Chajczyny 39` · `📞 605 088 302`
   - Prawo: Facebook · Instagram · 📧 Email
   - Czcionka: Inter 10px, kolor: `rgba(240,192,96,0.7)`

2. **Main bar** — `background: rgba(250,246,239,0.96)`, `backdrop-filter: blur(16px)`
   - Lewo: linki nawigacyjne (Start, Pasieka, Ogród, Warsztaty)
   - Środek: logo (ikona 🐝 w ciemnym kafelku 52px + nazwa Lora serif)
   - Prawo: linki (Projekty, Wolontariat, Kontakt) + przycisk CTA "Wesprzyj 🍯"
   - Aktywny link: kolor honey + podkreślenie 2.5px

3. **Bottom accent line** — gradient: `#c4880a → #f0c060 → #4a7830 → #7b5fa3`, h-0.5

Sticky, z-50, border-bottom `rgba(180,130,60,0.15)`.

**Mobile:** hamburger menu, pełna szerkość dropdown na ciemnym tle.

### Footer

- **Tło:** `#1a1008` (prawie czarne)
- **Top accent line:** gradient marki (honey → forest → lavender), h-0.5
- **Kolumny (3):** Opis marki + dane KRS | Kontakt | Szybkie linki
- **Brand name:** Lora 20px, kolor `#f0d090`
- **Linki:** `rgba(200,184,152,0.7)` → białe na hover
- **Social icons:** 34×34px, border `rgba(255,255,255,0.12)`, border-radius 8px

### Ceglany przerywnik (`<BrickDivider />`)

Nowy komponent — h-5, repeating gradient imitujący cegłę, opacity 0.3.  
Używany między sekcjami jako separator wizualny.

---

## 3. Strona główna (`/`)

### Sekcja Hero
- **Tło:** `#f5ede0` z subtelnymi liniami cegły (CSS `::before`)
- **Layout:** 2 kolumny — tekst po lewej, panel wizualny po prawej
- **Eyebrow:** "Miód · Lawenda · Serce do przyrody"
- **H1 (Lora 56px desktop):** "Tam, gdzie lawenda spotyka las, a pszczoły *uczą troski* o naturę" — słowa kluczowe w italic/honey
- **Przyciski:** dark primary "Odkryj pasiekę 🐝" + outline "Umów wizytę →"
- **Panel vizualny:** gradient honey→forest, honeycomb SVG overlay, sylwetka lasu u dołu, honey drop deco, etykieta z cytatem u dołu

### Stats bar
- **Tło:** `#2a1f0e` (ciemna czekolada)
- **3 kolumny:** 2019 / 15+ / 1000+
- **Wartości:** Lora 48px, kolor `#f0c060`

### Sekcja Highlights (3 karty)
- **Tło:** cream `#faf6ef`
- **Eyebrow + title + lead** (wyśrodkowane)
- **Karty:** białe, border-radius 16px, shadow, hover `-translate-y-1`
- **Thumbnail:** gradient (honey/leaf/lavender) z honeycomb/pattern overlay + emoji ikona
- **Karta:** title Lora 17px + text + link z "→"

### Sekcja Misja (cegła)
- **Tło:** `#3a2510` z CSS brick texture overlay
- **Layout:** 2 kolumny — tekst po lewej, 3 karty po prawej
- **Tekst:** jasny (cream), gold eyebrow
- **Karty misji:** `rgba(255,255,255,0.06)` border, ikony w złotych kafelkach

### Sekcja Odwiedziny
- **Tło:** gradient cream
- **Layout:** panel wizualny po lewej (łąka, las, lawenda SVG), dane kontaktowe po prawej
- **Cytat na panelu:** italic Lora, frosted glass

### Callout CTA
- **Tło:** gradient honey (`#d4880a → #a05c08`)
- **Honeycomb pattern overlay** (opacity 0.12)
- **Przycisk:** biały z ciemnym tekstem

---

## 4. Podstrony — układ ogólny

Każda podstrona używa `<PageShell>` z:
- **Hero sekcja** — mniejsza (py-20), z eyebrowem, H1 Lora, lead text, panelem wizualnym
- **Treść główna** — sekcje naprzemiennie: cream ↔ stone ↔ brick (dark)
- **Callout na dole** — każda strona kończy się CTA

### `/o-fundacji` — O fundacji
- Hero: "Fundacja z miłości do pszczół i lawendy"
- Sekcja: historia Sylwii i Mieczysława, timeline 2019→dziś
- Sekcja: dokumenty (Statut, Sprawozdania, Standardy) — karty z ikoną pliku
- Cegła: wartości fundacji (3 karty)

### `/pasieka` — Pasieka
- Hero: panel honey + las, H1 "Tam, gdzie pszczoły opowiadają swoje historie"
- Sekcja: "Nasze pszczoły" — tekst + panel (honey gradient)
- Sekcja: "Miód i apiterapia" — karty produktów na ciemnej cegle
- Sekcja: "Pszczela edukacja" — CTA warsztaty

### `/ogrod` — Ogród
- Hero: panel leaf (zielony) + łąka
- Sekcja: "Lawendowe pola" — panel lavender + tekst naprzemiennie
- Sekcja cegła: "Permakultura w praktyce"
- Sekcja: "Ogród przyjazny pszczołom" — karty roślin

### `/edukacja-i-warsztaty` — Edukacja
- Hero: panel lavender
- Sekcja: grupy docelowe (4 karty: dzieci, dorośli, seniorzy, szkoły)
- Sekcja cegła: tematyka warsztatów
- Sekcja: kalendarz / jak się umówić

### `/projekty` — Projekty
- Hero
- Grid kart projektów (3 kolumny)
- Sekcja cegła: współpraca i partnerzy

### `/wolontariat` — Wolontariat
- Hero
- 3 karty: Ogród / Warsztaty / Pasieka
- Formularz kontaktowy / CTA

### `/wspieraj` — Wspieraj
- Hero: callout honey
- Sekcja: nr konta, dane do przelewu
- Sekcja: wsparcie rzeczowe
- Sekcja: wolontariat (CTA do /wolontariat)

### `/kontakt` — Kontakt
- Hero
- Karty kontaktowe (4 karty: email, telefon x2, adres)
- Mapa / wskazówki dojazdu (placeholder)
- Formularz

---

## 5. Design tokens w CSS (`globals.css`)

```css
:root {
  --honey: #c4880a;
  --honey-light: #f0c060;
  --honey-pale: #fdf3dc;
  --dark: #1e1408;
  --dark-mid: #2a1f0e;
  --forest: #2a4a1a;
  --forest-mid: #4a7830;
  --lavender: #7b5fa3;
  --brick-color: #c4844a;
  --cream: #faf6ef;
  --warm-white: #fffdf8;
  --stone: #f0ebe0;
}
```

---

## 6. Komponenty do stworzenia / przebudowania

| Plik | Akcja |
|---|---|
| `src/app/globals.css` | Dodać design tokens, nowe utility klasy |
| `src/components/header.tsx` | Przebudowa — Nav B (top bar + centered logo) |
| `src/components/footer.tsx` | Przebudowa — ciemny, gradient accent |
| `src/components/feature-band.tsx` | Upgrade — thumbnail gradient, hover shadow |
| `src/components/visual-panel.tsx` | Upgrade — forest silhouette, honeycomb overlay |
| `src/components/section-intro.tsx` | Upgrade — eyebrow styling, lead size |
| `src/components/callout.tsx` | Upgrade — honey gradient, honeycomb pattern |
| `src/components/brick-divider.tsx` | NOWY — ceglany separator |
| `src/app/page.tsx` | Przebudowa layoutu |
| `src/app/o-fundacji/page.tsx` | Przebudowa layoutu |
| `src/app/pasieka/page.tsx` | Przebudowa layoutu |
| `src/app/ogrod/page.tsx` | Przebudowa layoutu |
| `src/app/edukacja-i-warsztaty/page.tsx` | Przebudowa layoutu |
| `src/app/projekty/page.tsx` | Przebudowa layoutu |
| `src/app/wolontariat/page.tsx` | Przebudowa layoutu |
| `src/app/wspieraj/page.tsx` | Przebudowa layoutu |
| `src/app/kontakt/page.tsx` | Przebudowa layoutu |

---

## 7. Kolejność implementacji

1. `globals.css` — design tokens + utility klasy
2. `header.tsx` — Nav B
3. `footer.tsx`
4. `brick-divider.tsx` (nowy komponent)
5. `visual-panel.tsx` — upgrade
6. `feature-band.tsx` — upgrade  
7. `section-intro.tsx` — upgrade
8. `callout.tsx` — upgrade
9. `page.tsx` (homepage)
10. Wszystkie podstrony (kolejno)

---

## 8. Uwagi implementacyjne

- Tailwind v4 — używać `@theme inline` dla custom tokenów, nie `theme.extend`
- Wszystkie SVG dekoracje (honeycomb, las, łąka) jako inline SVG w komponentach
- Czcionki już załadowane: Lora, Geist, Geist Mono — dodać Inter
- Logo `public/brand/lawendowa-barc-logo.jpeg` — używać w header (białe tło kafelka)
- Nie usuwać istniejących danych z `site-data.ts`
- Mobile-first: sticky header z hamburgerem, stack na mobile dla wszystkich grid-layoutów
