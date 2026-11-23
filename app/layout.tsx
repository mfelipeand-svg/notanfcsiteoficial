import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NotaNFC+ Studio — Experiências digitais que movem negócios",
  description: "Criamos sites, landing pages, catálogos digitais e experiências web estratégicas para marcas que querem crescer.",
  metadataBase: new URL("https://notanfc.com.br"),
  openGraph: {
    title: "NotaNFC+ Studio",
    description: "Estratégia, design e tecnologia para marcas que querem ir além.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}