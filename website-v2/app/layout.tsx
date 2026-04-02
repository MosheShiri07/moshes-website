import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { siteConfig } from "@/lib/data";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: `${siteConfig.name} — IT & Security Engineer`,
  description: siteConfig.description,
  keywords: ["IT Security Engineer","Cloud Infrastructure","Zero Trust","AWS","GCP","Azure","Terraform","BlinkOps","Cloudflare","Python","Automation","Rapyd","DevSecOps"],
  authors: [{ name: siteConfig.name }],
  openGraph: { title: `${siteConfig.name} — IT & Security Engineer`, description: siteConfig.description, url: "https://mosheshiri.com", siteName: siteConfig.name, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — IT & Security Engineer`, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-[#f8fafc] dark:bg-black text-slate-900 dark:text-white antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
