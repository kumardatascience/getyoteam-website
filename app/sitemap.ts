import type { MetadataRoute } from "next";
import { services, projects, blogPosts } from "@/app/lib/data";

export const dynamic = "force-static";

const BASE = "https://getyoteam.com";
const now  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services
    .filter((s) => s.slug)
    .map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const portfolioPages = projects.map((p) => ({
    url: `${BASE}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE,                  lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/services`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`,        lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/about`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,     lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    ...servicePages,
    ...portfolioPages,
    ...blogPages,
  ];
}
