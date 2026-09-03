import articlesData from "../../public/data/category/categorypagedata";

const SITE_URL = "https://www.venture-hive.com";

// Helper: parse DD/MM/YYYY → Date object
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
  }
  return new Date(dateStr);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const now = new Date();
  const twoDaysAgo = new Date(now);
  twoDaysAgo.setDate(now.getDate() - 2);

  // For news sitemaps Google only indexes articles published within the last 2 days.
  const articles = Object.entries(articlesData).flatMap(([category, posts]) =>
    posts
      .filter((post) => {
        const postDate = parseDate(post.datePublished || post.date);
        return postDate >= twoDaysAgo && postDate <= now;
      })
      .map((post) => ({
        url: `${SITE_URL}/${category}/${post.slug}`,
        title: post.heading,
        date: parseDate(post.datePublished || post.date).toISOString(),
      }))
  );

  // Google News sitemap supports max 1000 URLs
  const newsItems = articles
    .slice(0, 1000)
    .map(
      (article) => `
  <url>
    <loc>${escapeXml(article.url)}</loc>
    <news:news>
      <news:publication>
        <news:name>Venture Hive</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
    </news:news>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=600",
    },
  });
}
