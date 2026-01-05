

// export default function ArticleJsonLd({ article, category, author }) {
//   if (!article) return null;

//   const publishedDate = article.date
//     ? new Date(article.date).toISOString()
//     : undefined;

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "NewsArticle",

//           headline: article.heading,
//           description: article.metaDescription || article.content,
//           image: [`https://www.venture-hive.com${article.image}`],

//           datePublished: publishedDate,
//           dateModified: publishedDate,

//           articleSection: category,
//           keywords: article.hashTags?.join(", "),

//           author: {
//             "@type": "Person",
//             name: author?.name || "Venture Hive Staff",
//           },

//           publisher: {
//             "@type": "Organization",
//             name: "Venture Hive",
//             logo: {
//               "@type": "ImageObject",
//               url: "https://www.venture-hive.com/images/logo.png",
//             },
//           },

//           mainEntityOfPage: {
//             "@type": "WebPage",
//             "@id": `https://www.venture-hive.com/${category}/${article.slug}`,
//           },

//           isAccessibleForFree: true,
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

  const section =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "@id": `https://www.venture-hive.com/${category}/${article.slug}#article`,

          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.venture-hive.com/${category}/${article.slug}`,
          },

          headline: article.heading,
          description: article.metaDescription || article.content,
          image: [`https://www.venture-hive.com${article.image}`],

          datePublished: publishedDate,
          dateModified: publishedDate,

          articleSection: section,
          keywords: article.hashTags?.join(", "),
          wordCount: article.wordCount || 1800,

          author: {
            "@type": "Person",
            name: author?.name || "Venture Hive Editorial Team",
          },

          publisher: {
            "@type": "Organization",
            name: "Venture Hive",
            url: "https://www.venture-hive.com",
            logo: {
              "@type": "ImageObject",
              url: "https://www.venture-hive.com/images/logo.png",
            },
          },

          about: {
            "@type": "Thing",
            name: article.heading,
          },

          isAccessibleForFree: true,
          inLanguage: "en",
        }),
      }}
    />
  );
}


