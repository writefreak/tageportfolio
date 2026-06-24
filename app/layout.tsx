import type { Metadata } from "next";
import {
  Newsreader,
  Inter,
  JetBrains_Mono,
  Bricolage_Grotesque,
  Geist,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/ui/custom-cursor";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://endwellheritage.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Endwell Heritage — Frontend Engineer",
    template: "%s — Endwell Heritage",
  },
  description:
    "Endwell Heritage is a frontend engineer building fast, considered interfaces with React, Next.js, and TypeScript. Founder of TageLabs.",
  keywords: [
    "Endwell Heritage",
    "Heritage Kaleidoscope",
    "frontend engineer Nigeria",
    "Next.js developer Port Harcourt",
    "React developer",
    "TageLabs",
  ],
  authors: [{ name: "Endwell Heritage", url: siteUrl }],
  creator: "Endwell Heritage",
  openGraph: {
    title: "Endwell Heritage — Frontend Engineer",
    description:
      "Frontend engineer building fast, considered interfaces with React, Next.js, and TypeScript.",
    url: siteUrl,
    siteName: "Endwell Heritage",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Endwell Heritage — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endwell Heritage — Frontend Engineer",
    description:
      "Frontend engineer building fast, considered interfaces with React, Next.js, and TypeScript.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Endwell Heritage",
  alternateName: "Kaleidoscope",
  jobTitle: "Frontend Engineer",
  url: siteUrl,
  worksFor: {
    "@type": "Organization",
    name: "TageLabs Digital Solutions",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans ", inter.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
