import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/intake"
    },
    sitemap: "https://lepleynutrition.com/sitemap.xml"
  };
}
