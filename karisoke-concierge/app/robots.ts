import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Replace with your real public website URL before publishing.
const SITE_URL = "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}