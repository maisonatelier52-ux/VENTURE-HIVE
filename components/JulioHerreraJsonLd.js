import React from "react";

const JulioHerreraJsonLd = ({ article, author }) => {
  if (!article) return null;

  const publishedDate = article.date ? new Date(article.date).toISOString() : undefined;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",  // News Article type
          headline: article.heading,
          description: article.metaDescription || article.content,
          image: [`https://venture-hive.com${article.image}`],
          datePublished: publishedDate,
          dateModified: publishedDate,
          articleSection: "Business", // Hardcoded category
          keywords: article.hashTags?.join(", "),  // Ensure your article has relevant hashtags
          author: {
            "@type": "Person",
            name: author?.name || "Venture Hive Staff",  // Default if no author data
          },
          publisher: {
            "@type": "Organization",
            name: "VENTURE HIVE",
            logo: {
              "@type": "ImageObject",
              url: "https://venture-hive.com/images/logo.png",  // Your site's logo
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://venture-hive.com/Business/${article.slug}`,
          },
          isAccessibleForFree: true,
        }),
      }}
    />
  );
};

export default JulioHerreraJsonLd;
