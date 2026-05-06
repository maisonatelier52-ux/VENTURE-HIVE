import categorypagedata from "../../public/data/category/categorypagedata";

const SITE_URL = "https://www.venture-hive.com";
const SITE_NAME = "VENTURE HIVE";
const SITE_DESCRIPTION =
  "VENTURE HIVE delivers trusted journalism across politics, business, investigations, sports, and opinion with depth, clarity, and integrity.";

export async function GET() {
  // Flatten all articles from all categories
  const allArticles = Object.entries(categorypagedata).flatMap(
    ([category, posts]) =>
      posts.map((post) => ({
        ...post,
        category,
      }))
  );

  // Sort by date, newest first
  const sorted = allArticles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Take latest 50 articles
  const latest = sorted.slice(0, 50);

  const rssItems = latest
    .map((item) => {
      const url = `${SITE_URL}/${item.category}/${item.slug}`;
      const pubDate = item.datePublished
        ? new Date(item.datePublished).toUTCString()
        : new Date(item.date).toUTCString();

      const description = (item.metaDescription || item.content || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

      const title = item.heading
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      const imageUrl = item.image?.startsWith("http")
        ? item.image
        : `${SITE_URL}${item.image}`;

      return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${item.category}</category>
      <media:content url="${imageUrl}" medium="image" />
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/images/venture-hive-logo.webp</url>
      <title>${SITE_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}