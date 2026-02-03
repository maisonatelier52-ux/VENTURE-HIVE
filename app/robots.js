export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.venture-hive.com/sitemap.xml",
    host: "https://www.venture-hive.com",
  };
}