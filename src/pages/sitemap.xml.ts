import type { APIRoute } from "astro";
import { site } from "@/config/site";
import { tools } from "@/data/tools";
import { articles } from "@/data/articles";

const staticPages = [
  "",
  "outils",
  "blog",
  "a-propos",
  "contact",
  "confidentialite",
  "conditions-utilisation",
  "mentions-legales"
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const pages = [
    ...staticPages,
    ...tools.filter((tool) => tool.status === "available").map((tool) => `outils/${tool.slug}`),
    ...articles.map((article) => `blog/${article.slug}`)
  ];

  const toAbsoluteUrl = (page: string) => {
    const path = page ? `/${page}/` : "/";
    return new URL(path, site.url).toString();
  };

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${toAbsoluteUrl(page)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
