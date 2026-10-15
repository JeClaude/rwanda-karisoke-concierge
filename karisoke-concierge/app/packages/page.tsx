import type { Metadata } from "next";
import PackagesContent from "./PackagesContent";

export const metadata: Metadata = {
  title: "Rwanda Travel Packages & Safaris | Karisoke Concierge",
  description:
    "Explore suggested Rwanda travel packages, from gorilla trekking escapes to Akagera safaris. Personalise your itinerary with Karisoke Concierge.",
  alternates: {
    canonical: "/packages",
  },
};

export default function PackagesPage() {
  return <PackagesContent />;
}