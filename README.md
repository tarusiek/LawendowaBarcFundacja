# Lawendowa Barć pod Lasem

Statyczna strona fundacji zbudowana w Next.js App Router, przygotowana pod deploy na Vercel.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona działa lokalnie pod adresem `http://localhost:3000`.

## Komendy

```bash
npm run lint
npm run build
```

## Struktura

- `src/app` - route'y strony
- `src/components` - wspólne komponenty UI
- `src/lib/site-data.ts` - centralne dane kontaktowe, nawigacja i treści powtarzalne
- `public/brand/lawendowa-barc-logo.jpeg` - logo wyciągnięte z dokumentu Word

## Deploy

Projekt nie wymaga zmiennych środowiskowych. Na Vercel wystarczy standardowy build `next build`.
