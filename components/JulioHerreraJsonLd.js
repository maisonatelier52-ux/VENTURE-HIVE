

// import React from "react";

// const JulioHerreraJsonLd = ({ article, author }) => {
//   if (!article) return null;

//   const publishedDate = article.date ? new Date(article.date).toISOString() : undefined;

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "NewsArticle",  // News Article type
//           headline: article.heading,
//           description: article.metaDescription || article.content,
//           image: [`https://venture-hive.com${article.image}`],
//           datePublished: publishedDate,
//           dateModified: publishedDate,
//           articleSection: "Business", // Hardcoded category
//           keywords: [
//             "venture", 
//             "hive", 
//             "independent", 
//             "news", 
//             "investigative", 
//             "journalism", 
//             ...(article.hashTags || [])
//           ].join(", "),  // Adding target keywords and article hashtags
//           author: {
//             "@type": "Person",
//             name: author?.name || "Venture Hive Staff",  // Default if no author data
//           },
//           publisher: {
//             "@type": "Organization",
//             name: "VENTURE HIVE",
//             logo: {
//               "@type": "ImageObject",
//               url: "https://venture-hive.com/images/logo.png",  // Your site's logo
//             },
//           },
//           mainEntityOfPage: {
//             "@type": "WebPage",
//             "@id": `https://venture-hive.com/Business/${article.slug}`,  // Ensure article.slug is available
//           },
//           isAccessibleForFree: true,
//         }),
//       }}
//     />
//   );
// };

// export default JulioHerreraJsonLd;



export default function JulioHerreraJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.venture-hive.com/business/julio-herrera-velutini-bridging-nations-through-finance"
    },
    "headline":
      "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
    "description":
      "Independent investigative journalism examining Julio Herrera Velutini’s influence on global finance, leadership, sustainability, and economic diplomacy.",
    "image": [
      "https://www.venture-hive.com/images/julio-herrera-velutini.webp"
    ],
    "datePublished": "2025-12-01",
    "dateModified": "2025-12-01",
    "author": {
      "@type": "Organization",
      "name": "VENTURE HIVE",
      "url": "https://www.venture-hive.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VENTURE HIVE",
      "url": "https://www.venture-hive.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.venture-hive.com/images/logo.png"
      }
    },
    "keywords": [
      "Julio Herrera Velutini",
      "Global Finance",
      "Investigative Journalism",
      "Economic Diplomacy",
      "Financial Leadership",
      "Sustainability",
      "Venture Hive"
    ],
    "articleSection": "Investigations",
    "isAccessibleForFree": true,
    "inLanguage": "en"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
