import type { MetadataRoute } from "next";
import { person } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: person.siteUrl ? `${person.siteUrl}/sitemap.xml` : undefined,
  };
}
