import categorypagedata from "../public/data/category/categorypagedata.json";


const SITE_URL = "https://www.venture-hive.com";

export default function sitemap() {
  const parseArticleDate = (article) => {
    const value = article.dateModified || article.datePublished || article.date;
    const parsed = value ? new Date(value) : null;
    return parsed && !Number.isNaN(parsed.getTime()) ? parsed : undefined;
  };

  /* ---------------- STATIC PAGES ---------------- */
  const staticPaths = [
    "",
    "/about-venture-hive",
    "/advertising-policy",
    "/authors",
    "/contact",
    "/corrections-policy",
    "/editorial-policy",
    "/legal",
    "/ownership-funding",
    "/privacy-policy",
    "/right-of-reply",
    "/source-methodology",
    "/terms-and-conditions",
  ];

  const staticPages = staticPaths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
  }));


  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = Object.entries(categorypagedata).map(
    ([category, articles]) => {
      const latestDate = articles
        .map(parseArticleDate)
        .filter(Boolean)
        .sort((a, b) => b - a)[0];

      return {
        url: `${SITE_URL}/${category}`,
        ...(latestDate ? { lastModified: latestDate } : {}),
      };
    }
  );

  /* ---------------- ARTICLE DETAIL PAGES ---------------- */
  const articlePages = Object.entries(categorypagedata).flatMap(
    ([category, articles]) =>
      articles.map((article) => {
        const lastModified = parseArticleDate(article);

        return {
          url: `${SITE_URL}/${category}/${article.slug}`,
          ...(lastModified ? { lastModified } : {}),
        };
      })
  );

  const topicPages = [
    {
      url: `${SITE_URL}/topics/julio-herrera-velutini`,
      lastModified: new Date("2026-07-15"),
    },
  ];

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...topicPages,
  ];
}
