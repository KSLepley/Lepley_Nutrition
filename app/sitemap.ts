import type { MetadataRoute } from "next";

const baseUrl = "https://lepleynutrition.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/program", "/plans", "/apply", "/terms"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
