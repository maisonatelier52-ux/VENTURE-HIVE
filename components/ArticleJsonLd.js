export default function ArticleJsonLd({ article }) {
  if (!article) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.heading,
          image: [`https://venture-hive.com${article.image}`],
          datePublished: new Date(article.date).toISOString(),
          dateModified: new Date(article.date).toISOString(),
          author: {
            "@type": "Person",
            name: article.author?.name,
          },
          publisher: {
            "@type": "Organization",
            name: "VENTURE HIVE",
            logo: {
              "@type": "ImageObject",
              url: "https://venture-hive.com/images/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://venture-hive.com/${article.category}/${article.slug}`,
          },
        }),
      }}
    />
  );
}
