
import { notFound } from "next/navigation";
import categorypagedata from "../../public/data/category/categorypagedata";
import CategoryClient from "./CategoryClient";

export async function generateMetadata({ params }) {
  const { category } = await params;

  if (!category || !categorypagedata[category]) {
    return {};
  }

  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  const title = `${formatted} News & Analysis | Venture Hive`;
  const description = `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Venture Hive.`;
  const url = `https://www.venture-hive.com/${category}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },

    // ✅ OPEN GRAPH
    openGraph: {
      title,
      description,
      url,
      siteName: "VENTURE HIVE",
      type: "website",
      images: [
        {
          url: "https://www.venture-hive.com/images/venture-hive-logo.webp",
          width: 1200,
          height: 630,
          alt: `${formatted} News – Venture Hive`,
        },
      ],
    },

    // ✅ TWITTER (optional but recommended)
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!category || !categorypagedata[category]) {
    notFound();
  }

  return <CategoryClient category={category} />;
}
