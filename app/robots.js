export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://www.venture-hive.com/sitemap.xml",
      "https://www.venture-hive.com/news-sitemap.xml",
    ],
  };
}
