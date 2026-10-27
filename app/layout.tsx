import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { person } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${person.name} — ${person.role}, ${person.focus}`;
const description =
  "Software engineer working across Python backends, production applications, and applied AI. Projects, experience, and contact details.";

export const metadata: Metadata = {
  metadataBase: person.siteUrl ? new URL(person.siteUrl) : undefined,
  title,
  description,
  alternates: person.siteUrl ? { canonical: "/" } : undefined,
  openGraph: { title, description, type: "website", siteName: person.wordmark },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#fafaf8" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
