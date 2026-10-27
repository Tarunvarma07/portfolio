import type { MetadataRoute } from "next";
import { person } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return person.siteUrl ? [{ url: person.siteUrl }] : [];
}
