import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Dental services",
  title: {
    default: `Dentist in Fairfax, VA | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Dentist in Fairfax, VA offering family, cosmetic, emergency, implant, Invisalign, and restorative dental care. Schedule an appointment with Fairfax Dental Atelier.",
  keywords: [
    "Dentist in Fairfax, VA",
    "Fairfax dentist",
    "cosmetic dentist Fairfax",
    "emergency dentist Fairfax VA",
    "family dentist Fairfax",
    "dental implants Fairfax VA",
    "Invisalign Fairfax VA",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `Dentist in Fairfax, VA | ${siteConfig.name}`,
    description:
      "Modern family, cosmetic, implant, Invisalign, and emergency dentistry in Fairfax, Virginia.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Modern dental treatment room in a premium Fairfax dental clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist in Fairfax, VA",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-950">{children}</body>
    </html>
  );
}
