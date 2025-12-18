import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://venture-hive.com",
      lastModified: new Date(),
    },
    {
      url: "https://venture-hive.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://venture-hive.com/privacy-policy",
      lastModified: new Date(),
    },
  ];
}
