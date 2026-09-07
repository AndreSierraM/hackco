import type { MetadataRoute } from "next";
import { BRAND } from "@/config/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.siteUrl;

  const routes = [
    "",
    "/empresas",
    "/pricing",
    "/start",
    "/builders",
    "/devrel",
    "/about",
    "/trust",
    "/faq",
    "/hackathons",
    "/projects",
    "/demo",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/hackathons" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/empresas" || route === "/start" ? 0.9 : 0.7,
  }));
}
