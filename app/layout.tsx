import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/Footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans", weight: ["200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Pago de Impuesto Predial En Línea | Presidencia Municipal de Acuña",
  description: "Paga tu Impuesto Predial En Linea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen overflow-x-hidden bg-background mx-auto font-sans antialiased", fontSans.variable)}>
        <NavMenu />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
