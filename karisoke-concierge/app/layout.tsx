import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Replace this placeholder with your real public website URL
// before publishing. Use the same URL in robots.ts and sitemap.ts.
const SITE_URL = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Karisoke Concierge | Rwanda Travel, Hotels & Tours",

  description:
    "Plan your Rwanda trip with Karisoke Concierge. Explore destinations, accommodation, airport transfers, and personalised tours. Enquire on WhatsApp.",

  applicationName: "Karisoke Concierge",

  openGraph: {
    type: "website",
    locale: "en_RW",
    siteName: "Karisoke Concierge",
    title: "Karisoke Concierge | Discover Rwanda",
    description:
      "Discover Rwanda with personalised travel planning, accommodation, transport, and tours.",
    images: [
      {
        url: "/images/gorillas.jpeg",
        alt: "Gorilla and its young — Karisoke Concierge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Karisoke Concierge | Discover Rwanda",
    description:
      "Plan your Rwanda journey with personalised travel services.",
    images: ["/images/gorillas.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <Navbar />

        <div className="min-w-0 flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}