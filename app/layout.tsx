import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import FooterSection from "@/components/Footer";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

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

export const viewport = {
  width: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavMenu />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
