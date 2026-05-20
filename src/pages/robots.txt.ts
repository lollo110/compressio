import type { APIRoute } from "astro";
import { site } from "@/config/site";

export const GET: APIRoute = () => {
  return new Response(`User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site.url).toString()}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
