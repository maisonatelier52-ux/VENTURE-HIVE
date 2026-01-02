export default function CategoryJsonLd({ category, articles }) {
  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

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
