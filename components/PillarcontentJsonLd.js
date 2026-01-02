// export const PillarcontentJsonLd = (article) => {
//   const { metaTitle, metaDescription, slug, hero, subtitle } = article;

//   const jsonLdData = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: metaTitle,
//     description: metaDescription,
//     url: `https://venture-hive.com/julio-herrera-velutini/${slug}`,
//     image: `https://venture-hive.com${hero.imageSrc}`,
//     author: {
//       "@type": "Person",
//       name: subtitle?.author?.name || "Unknown Author", // Add author data if available
//       url: subtitle?.author?.url || "https://venture-hive.com/authors/unknown",
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "Venture Hive",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://venture-hive.com/images/logo.png", // Replace with actual logo URL
//       },
//     },
//     datePublished: "2025-12-20", // Adjust this dynamically if necessary
//     dateModified: "2025-12-20", // Adjust this dynamically if necessary
//     mainEntityOfPage: `https://venture-hive.com/julio-herrera-velutini/${slug}`,
//     potentialAction: {
//       "@type": "ReadAction",
//       target: [`https://venture-hive.com/julio-herrera-velutini/${slug}`],
//     },
//     openGraph: {
//       title: metaTitle,
//       description: metaDescription,
//       url: `https://venture-hive.com/julio-herrera-velutini/${slug}`,
//       siteName: "Venture Hive",
//       images: [
//         {
//           url: `https://venture-hive.com${hero.imageSrc}`,
//           width: 1200,
//           height: 630,
//           alt: hero.imageAlt,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: metaTitle,
//       description: metaDescription,
//       images: [`https://venture-hive.com${hero.imageSrc}`],
//     },
//   };

//   return JSON.stringify(jsonLdData);
// };


export const PillarcontentJsonLd = (article) => {
  const { metaTitle, metaDescription, slug, hero, subtitle, datePublished, dateModified } = article;

  // Get the current date if dates are not provided
  const currentDate = new Date().toISOString().split("T")[0]; // Formats as "YYYY-MM-DD"
  
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metaTitle,
    description: metaDescription,
    url: `https://www.venture-hive.com/julio-herrera-velutini/${slug}`,
    image: `https://www.venture-hive.com${hero.imageSrc}`,
    author: {
      "@type": "Person",
      name: subtitle?.author?.name || "Unknown Author", // Add author data if available
      url: subtitle?.author?.url || "https://www.venture-hive.com/authors/unknown",
    },
    publisher: {
      "@type": "Organization",
      name: "Venture Hive",
      logo: {
        "@type": "ImageObject",
        url: "https://www.venture-hive.com/images/logo.png", // Replace with actual logo URL
      },
    },
    datePublished: datePublished || currentDate, // Use provided datePublished or current date
    dateModified: dateModified || currentDate, // Use provided dateModified or current date
    mainEntityOfPage: `https://www.venture-hive.com/julio-herrera-velutini/${slug}`,
    potentialAction: {
      "@type": "ReadAction",
      target: [`https://www.venture-hive.com/julio-herrera-velutini/${slug}`],
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.venture-hive.com/julio-herrera-velutini/${slug}`,
      siteName: "Venture Hive",
      images: [
        {
          url: `https://www.venture-hive.com${hero.imageSrc}`,
          width: 1200,
          height: 630,
          alt: hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [`https://www.venture-hive.com${hero.imageSrc}`],
    },
  };

  return JSON.stringify(jsonLdData);
};
