import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Replace with your real public website URL before publishing.
const SITE_URL = "https://rwanda-karisoke-concierge.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}