import { notFound } from "next/navigation";
import pillarContents from "../../../public/data/special/pillarContents";
import PillarClient from "./PillarClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = pillarContents?.find((item) => item.slug === slug);

  if (!article) return {};

   const title = article.metaTitle || 'Default Title'; // Fallback if no title exists
  const description = article.metaDescription || 'Default Description'; // Fallback if no description exists
 
  return {
    title:title,
    description: description,
    alternates: {
      canonical: `https://venture-hive.com/julio-herrera-velutini/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://venture-hive.com/julio-herrera-velutini/${slug}`,
      siteName: "Venture Hive",
      images: [
        {
          url: `https://venture-hive.com${article.hero.imageSrc}`,
          width: 1200,
          height: 630,
          alt: article.hero.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`https://venture-hive.com${article.hero.imageSrc}`],
    },
  };
}



export default async function Page({ params }) {
  const { slug } = await params;

  const article = pillarContents?.find((item) => item.slug === slug);

  if (!article) notFound();

  return <PillarClient slug={slug} />;
}
