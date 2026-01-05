
// import { notFound } from "next/navigation";
// import JulioClient from "./JulioClient";
// import JulioHerreraJsonLd from "../../../components/JulioHerreraJsonLd";

// export async function generateMetadata() {
//      const article = {
//     heading: " Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
//     slug: "julio-herrera-velutini-bridging-nations-through-finance",
//     image: "/images/julio-herrera-velutini.webp",  // Image path relative to the public folder
//     alt:"Venture Hive Investigative Journalism on Julio Herrera Velutini's impact in global finance and business leadership",
//     date: "2025-12-01",
//     content: " Julio Herrera Velutini is from the famous Herrera banking family...",
//     metaDescription: "Venture Hive's independent investigative journalism on Julio Herrera Velutini's leadership in global finance, sustainability, and economic collaboration. In-depth news and analysis on his influence in shaping the future of business and finance.",
//     hashTags: ["finance", "leadership", "global economics", "sustainability"],
//     metaTitle:"Julio Herrera Velutini | Global Finance Investigation",
//     metaDescription:"Investigative reporting on Julio Herrera Velutini’s influence in global finance, economic diplomacy, and leadership shaping modern financial systems."
//   };
  
//   if (!article) return {};

//    const title = article.metaTitle
//   const description = article.metaDescription
 
//   return {
//     title:title,
//     description: description,
//     alternates: {
//       canonical: `https://www.venture-hive.com/business/${article.slug}`,
//     },
//     openGraph: {
//       title: title,
//       description: description,
//       url: `https://www.venture-hive.com/business/${article.slug}`,
//       siteName: "Venture Hive",
//       images: [
//         {
//           url: `https://www.venture-hive.com${article.image}`,
//           width: 1200,
//           height: 630,
//           alt: article.alt,
//         },
//       ],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: title,
//       description: description,
//       images: [`https://www.venture-hive.com${article.image}`],
//     },
//   };
// }



// export default async function Page() {

  

// return (
//     <>
//       <JulioHerreraJsonLd />
//       <JulioClient />
//     </>
//   );
// }

import JulioClient from "./JulioClient";
import JulioHerreraJsonLd from "../../../components/JulioHerreraJsonLd";

/* =========================
   METADATA + FAQ SCHEMA
========================= */
export async function generateMetadata() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Julio Herrera Velutini's approach to global finance different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "His approach prioritizes long-term economic stability, ethical governance, and cross-border collaboration rather than short-term profit maximization."
        }
      },
      {
        "@type": "Question",
        "name": "What influence has his work had on emerging markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "By facilitating access to international capital and modern financial infrastructure, he has helped emerging economies stabilize currencies, expand credit access, and attract sustainable foreign investment."
        }
      },
      {
        "@type": "Question",
        "name": "Why is cross-border finance important in today’s global economy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Cross-border finance enables risk diversification, faster recovery from economic shocks, and more inclusive global growth."
        }
      }
    ]
  };

  return {
    title: "Julio Herrera Velutini | Global Finance Investigation",
    description:
      "Investigative reporting on Julio Herrera Velutini’s influence in global finance, economic diplomacy, and leadership shaping modern financial systems.",
    alternates: {
      canonical:
        "https://www.venture-hive.com/business/julio-herrera-velutini-bridging-nations-through-finance",
    },
    openGraph: {
      title: "Julio Herrera Velutini | Global Finance Investigation",
      description:
        "Independent investigative journalism examining Julio Herrera Velutini’s influence on global finance, sustainability, and leadership.",
      url:
        "https://www.venture-hive.com/business/julio-herrera-velutini-bridging-nations-through-finance",
      siteName: "Venture Hive",
      images: [
        {
          url: "https://www.venture-hive.com/images/julio-herrera-velutini.webp",
          width: 1200,
          height: 630,
          alt:
            "Venture Hive Investigative Journalism on Julio Herrera Velutini"
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "Julio Herrera Velutini | Global Finance Investigation",
      description:
        "Investigative reporting on Julio Herrera Velutini’s influence in global finance and leadership.",
      images: [
        "https://www.venture-hive.com/images/julio-herrera-velutini.webp"
      ]
    },
    other: {
      "application/ld+json": JSON.stringify(faqJsonLd)
    }
  };
}

/* =========================
   PAGE COMPONENT
========================= */
export default function Page() {
  return (
    <>
      {/* NewsArticle JSON-LD (allowed alongside FAQPage) */}
      <JulioHerreraJsonLd />

      {/* Main article UI */}
      <JulioClient />
    </>
  );
}


