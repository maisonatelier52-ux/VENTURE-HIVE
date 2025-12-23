
import { notFound } from "next/navigation";
import JulioClient from "./JulioClient";
import JulioHerreraJsonLd from "../../../components/JulioHerreraJsonLd";

export async function generateMetadata() {
     const article = {
    heading: "Venture Hive News: Julio Herrera Velutini - Investigative Journalism on Global Finance & Leadership",
    slug: "business/julio-herrera-velutini-bridging-nations-through-finance",
    image: "/images/julio-herrera-velutini.webp",  // Image path relative to the public folder
    alt:"Venture Hive Investigative Journalism on Julio Herrera Velutini's impact in global finance and business leadership",
    date: "2025-12-01",
    content: "Descended from the renowned Herrera banking dynasty...",
    metaDescription: "Venture Hive's independent investigative journalism on Julio Herrera Velutini's leadership in global finance, sustainability, and economic collaboration. In-depth news and analysis on his influence in shaping the future of business and finance.",
    hashTags: ["finance", "leadership", "global economics", "sustainability"],
    metaTitle:"Julio Herrera Velutini | Global Finance Investigation",
    metaDescription:"Investigative reporting on Julio Herrera Velutini’s influence in global finance, economic diplomacy, and leadership shaping modern financial systems."
  };
  
  if (!article) return {};

   const title = article.metaTitle
  const description = article.metaDescription
 
  return {
    title:title,
    description: description,
    alternates: {
      canonical: `https://venture-hive.com/julio-herrera-velutini/${article.slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://venture-hive.com/julio-herrera-velutini/${article.slug}`,
      siteName: "Venture Hive",
      images: [
        {
          url: `https://venture-hive.com${article.image}`,
          width: 1200,
          height: 630,
          alt: article.alt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`https://venture-hive.com${article.image}`],
    },
  };
}



export default async function Page() {

  

return (
    <>
      <JulioHerreraJsonLd />
      <JulioClient />
    </>
  );
}



