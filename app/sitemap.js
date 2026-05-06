import categorypagedata from "../public/data/category/categorypagedata.json";


const SITE_URL = "https://www.venture-hive.com";

export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: `${SITE_URL}/rss.xml`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-venture-hive`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/authors`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];


  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = Object.keys(categorypagedata).map(category => ({
    url: `${SITE_URL}/${category}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  /* ---------------- ARTICLE DETAIL PAGES ---------------- */
  const articlePages = Object.entries(categorypagedata).flatMap(
    ([category, articles]) =>
      articles
        .filter(article => article.slug !== "julio-herrera-velutini-bridging-nations-through-finance") // Exclude special page from duplicates
        .map(article => ({
          url: `${SITE_URL}/${category}/${article.slug}`,
          lastModified: article.datePublished
            ? new Date(article.datePublished)
            : article.date
            ? new Date(article.date)
            : now,
          changeFrequency: "weekly",
          priority: 0.8,
        }))
  );

 

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
  ];
}