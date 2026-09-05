
import { notFound } from "next/navigation";
import Link from "next/link";

import RightSidebar from "../../components/RightSidebar";
import CategoryArticleList from "../../components/CategoryArticleList";
import categorypagedata from "../../public/data/category/categorypagedata";
import authorsPageData from "../../public/data/authors";

const SITE_URL = "https://www.venture-hive.com";

export async function generateStaticParams() {
  return Object.keys(categorypagedata).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;

  if (!category || !categorypagedata[category]) {
    return {};
  }

  const formatted = category.charAt(0).toUpperCase() + category.slice(1);
  const url = `${SITE_URL}/${category}`;

  return {
    title: `${formatted} News & Analysis | Venture Hive`,
    description: `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Venture Hive.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${formatted} News & Analysis | Venture Hive`,
      description: `Latest ${formatted.toLowerCase()} news and analysis from Venture Hive.`,
      url,
      siteName: "VENTURE HIVE",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/venture-hive-logo.webp`,
          width: 1200,
          height: 630,
          alt: `${formatted} News – Venture Hive`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formatted} News & Analysis | Venture Hive`,
      description: `Latest ${formatted.toLowerCase()} news and analysis.`,
      images: [`${SITE_URL}/images/venture-hive-logo.webp`],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!category || !categorypagedata[category]) {
    notFound();
  }

  const articles = categorypagedata[category] || [];

  const authorData = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )?.author;

  // ✅ Server-render EVERY article for this category (no slicing on the
  // server) so each one has a real crawlable <Link href> in the initial
  // HTML. Pagination beyond ~10 is handled client-side purely via visibility
  // toggling inside CategoryArticleList — see that component for details.
  const categoryArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  const formatted = category.charAt(0).toUpperCase() + category.slice(1);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${formatted} News`,
    description: `Latest ${formatted.toLowerCase()} news and analysis from Venture Hive.`,
    url: `${SITE_URL}/${category}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: formatted,
        item: `${SITE_URL}/${category}`,
      },
    ],
  };

  return (
    <>
      <script
        id="category-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="flex flex-col min-h-screen bg-zinc-50 px-5 md:px-20">
        <div className="text-sm text-gray-500 mt-4 mb-2">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">›</span>
          <span className="capitalize font-medium text-black">{category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 capitalize">
              {`${category} – News & Analysis from Venture Hive`}
            </h1>

            <p className="text-gray-600 text-sm mb-6 max-w-3xl">
              Explore the latest {category} news, in-depth political analysis, and
              investigative reporting from <strong>Venture Hive</strong>.
            </p>

            <CategoryArticleList
              articles={categoryArticles}
              category={category}
              authorData={authorData}
            />
          </div>

          <aside className="lg:sticky lg:top-6 h-max">
            <RightSidebar
              categoryData={categorypagedata}
              authors={authorsPageData}
            />
          </aside>
        </div>
      </div>
    </>
  );
}