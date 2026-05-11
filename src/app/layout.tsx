import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lawendowa Barć pod Lasem",
    template: "%s | Lawendowa Barć pod Lasem",
  },
  description:
    "Fundacja edukacyjno-ekologiczna w Chajczynach: pasieka, lawenda, ogród permakulturowy, warsztaty i działania dla natury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${lora.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
