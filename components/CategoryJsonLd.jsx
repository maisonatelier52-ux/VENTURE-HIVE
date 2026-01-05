// export default function CategoryJsonLd({ category, articles }) {
//   const formatted =
//     category.charAt(0).toUpperCase() + category.slice(1);

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "CollectionPage",
//     "name": `${formatted} News & Analysis | Venture Hive`,
//     "description": `Latest ${formatted.toLowerCase()} news, analysis, and investigative journalism from Venture Hive.`,
//     "url": `https://www.venture-hive.com/${category}`,
//     "isPartOf": {
//       "@type": "WebSite",
//       "name": "Venture Hive",
//       "url": "https://www.venture-hive.com"
//     },
//     "breadcrumb": {
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.venture-hive.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": formatted,
//           "item": `https://www.venture-hive.com/${category}`
//         }
//       ]
//     }
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{
//         __html: JSON.stringify(jsonLd),
//       }}
//     />
//   );
// }


export default function CategoryJsonLd({ category, articles }) {
  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  const itemListElements = articles.map((article, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `https://www.venture-hive.com/${category}/${article.slug}`,
    "name": article.heading,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${formatted} News & Analysis | Venture Hive`,
    "description": `Latest ${formatted.toLowerCase()} news, analysis, and investigative journalism from Venture Hive.`,
    "url": `https://www.venture-hive.com/${category}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Venture Hive",
      "url": "https://www.venture-hive.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.venture-hive.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": formatted,
          "item": `https://www.venture-hive.com/${category}`
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": articles.length,
      "itemListElement": itemListElements
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

