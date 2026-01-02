

// export default function JulioHerreraJsonLd() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": "https://www.venture-hive.com/Business/julio-herrera-velutini-bridging-nations-through-finance"
//     },
//     "headline":
//       "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
//     "description":
//       "Independent investigative journalism examining Julio Herrera Velutini’s influence on global finance, leadership, sustainability, and economic diplomacy.",
//     "image": [
//       "https://venture-hive.com/images/julio-herrera-velutini.webp"
//     ],
//     "datePublished": "2025-12-01",
//     "dateModified": "2025-12-01",
//     "author": {
//       "@type": "Organization",
//       "name": "VENTURE HIVE",
//       "url": "https://venture-hive.com"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "VENTURE HIVE",
//       "url": "https://venture-hive.com",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://venture-hive.com/images/logo.png"
//       }
//     },
//     "keywords": [
//       "Julio Herrera Velutini",
//       "Global Finance",
//       "Investigative Journalism",
//       "Economic Diplomacy",
//       "Financial Leadership",
//       "Sustainability",
//       "Venture Hive"
//     ],
//     "articleSection": "Investigations",
//     "isAccessibleForFree": true,
//     "inLanguage": "en"
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//     />
//   );
// }


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://venture-hive.com/business/julio-herrera-velutini-bridging-nations-through-finance"
  },
  "headline": "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
  "description": "Independent investigative journalism examining Julio Herrera Velutini’s influence on global finance, leadership, sustainability, and economic diplomacy.",
  "image": ["https://venture-hive.com/images/julio-herrera-velutini.webp"],
  "datePublished": "2025-12-01",
  "dateModified": "2025-12-01",
  "author": {
    "@type": "Person",
    "name": "Venture Hive Editorial Team",
    "url": "https://venture-hive.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Venture Hive",
    "logo": {
      "@type": "ImageObject",
      "url": "https://venture-hive.com/images/logo.png"
    }
  },
  "articleSection": "Investigations",
  "inLanguage": "en",
  "isAccessibleForFree": true
};
