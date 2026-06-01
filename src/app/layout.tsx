import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stepstothrive.co.uk"),
  title: {
    default:
      "Steps to Thrive: child & educational psychology in Amersham",
    template: "%s | Steps to Thrive",
  },
  description:
    "Dr Johannah Slifi, HCPC-registered Educational Psychologist supporting children, young people, families and schools across Amersham and Buckinghamshire.",
  keywords: [
    "Educational Psychologist",
    "Child Psychologist",
    "Amersham",
    "Buckinghamshire",
    "EBSA",
    "Emotionally Based School Avoidance",
    "Neurodivergence",
    "Emotional Regulation",
    "School Refusal",
    "Dr Johannah Slifi",
    "Steps to Thrive",
    "HCPC",
  ],
  authors: [{ name: "Dr Johannah Slifi" }],
  creator: "Steps to Thrive",
  publisher: "Steps to Thrive",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title:
      "Steps to Thrive: child & educational psychology in Amersham",
    description:
      "Educational psychology rooted in evidence, delivered with warmth. Supporting children, young people, families and schools.",
    url: "https://www.stepstothrive.co.uk",
    siteName: "Steps to Thrive",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF6EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Steps to Thrive",
              description:
                "Educational psychology for children, young people, families and schools across Amersham and Buckinghamshire.",
              url: "https://www.stepstothrive.co.uk",
              founder: {
                "@type": "Person",
                name: "Dr Johannah Slifi",
                jobTitle: "Educational Psychologist",
                hasCredential: [
                  "HCPC Registered",
                  "Doctorate in Professional Educational, Child and Adolescent Psychology",
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amersham",
                addressRegion: "Buckinghamshire",
                addressCountry: "GB",
              },
              areaServed: [
                "Amersham",
                "Buckinghamshire",
                "Chesham",
                "Beaconsfield",
                "High Wycombe",
                "Gerrards Cross",
              ],
              serviceType: [
                "Educational Psychology Assessment",
                "Family Consultation",
                "School Training and Workshops",
                "Reflective Supervision",
                "Emotionally Based School Avoidance Support",
                "Neurodivergence Support",
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*28)] lg:[--header-height:calc(var(--spacing)*44)]",
          inter.variable,
          fraunces.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
