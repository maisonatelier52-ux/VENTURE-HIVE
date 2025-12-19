// export default function ArticleJsonLd({ article }) {
//   if (!article) return null;

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "NewsArticle",
//           headline: article.heading,
//           image: [`https://venture-hive.com${article.image}`],
//           datePublished: new Date(article.date).toISOString(),
//           dateModified: new Date(article.date).toISOString(),
//           author: {
//             "@type": "Person",
//             name: article.author?.name,
//           },
//           publisher: {
//             "@type": "Organization",
//             name: "VENTURE HIVE",
//             logo: {
//               "@type": "ImageObject",
//               url: "https://venture-hive.com/images/logo.png",
//             },
//           },
//           mainEntityOfPage: {
//             "@type": "WebPage",
//             "@id": `https://venture-hive.com/${article.category}/${article.slug}`,
//           },
//         }),
//       }}
//     />
//   );
// }

export default function ArticleJsonLd({ article, category, author }) {
  if (!article) return null;

  const publishedDate = article.date
    ? new Date(article.date).toISOString()
    : undefined;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",

          headline: article.heading,
          description: article.metaDescription || article.content,
          image: [`https://venture-hive.com${article.image}`],

          datePublished: publishedDate,
          dateModified: publishedDate,

          articleSection: category,
          keywords: article.hashTags?.join(", "),

          author: {
            "@type": "Person",
            name: author?.name || "Venture Hive Staff",
          },

          publisher: {
            "@type": "Organization",
            name: "Venture Hive",
            logo: {
              "@type": "ImageObject",
              url: "https://venture-hive.com/images/logo.png",
            },
          },

          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://venture-hive.com/${category}/${article.slug}`,
          },

          isAccessibleForFree: true,
        }),
      }}
    />
  );
}

