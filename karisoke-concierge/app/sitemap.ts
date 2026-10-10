import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Replace with your real public website URL before publishing.
const SITE_URL = "https://rwanda-karisoke-concierge.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/destinations",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}