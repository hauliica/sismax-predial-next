import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/Footer";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Presidencia Municipal de Acuña",
    default: "Pago Predial En Linea",
  },
  description: "Paga tu predial en linea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans min-h-screen bg-background antialiased",
          fontSans.variable,
        )}
      >
        <NavMenu />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
