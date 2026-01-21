
// import { notFound } from "next/navigation";
// import categorypagedata from "../../public/data/category/categorypagedata";
// import CategoryClient from "./CategoryClient";

// export async function generateMetadata({ params }) {
//   const { category } = await params;

//   if (!category || !categorypagedata[category]) {
//     return {};
//   }

//   const formatted =
//     category.charAt(0).toUpperCase() + category.slice(1);

//   const title = `${formatted} News & Analysis | Venture Hive`;
//   const description = `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Venture Hive.`;
//   const url = `https://www.venture-hive.com/${category}`;

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: url,
//     },

//     // ✅ OPEN GRAPH
//     openGraph: {
//       title,
//       description,
//       url,
//       siteName: "VENTURE HIVE",
//       type: "website",
//       images: [
//         {
//           url: "https://www.venture-hive.com/images/venture-hive-logo.webp",
//           width: 1200,
//           height: 630,
//           alt: `${formatted} News – Venture Hive`,
//         },
//       ],
//     },

//     // ✅ TWITTER (optional but recommended)
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
//     },
//   };
// }

// export default async function CategoryPage({ params }) {
//   const { category } = await params;

//   if (!category || !categorypagedata[category]) {
//     notFound();
//   }

//   return <CategoryClient category={category} />;
// }




// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// import RightSidebar from "../../components/RightSidebar";
// import categorypagedata from "../../public/data/category/categorypagedata";
// import authorsPageData from "../../public/data/authors";

// const SITE_URL = "https://www.venture-hive.com";

// /* ---------------------------------
//    METADATA
// ---------------------------------- */
// export async function generateMetadata({ params }) {
//   const { category } = await params;

//   if (!category || !categorypagedata[category]) {
//     return {};
//   }

//   const formatted =
//     category.charAt(0).toUpperCase() + category.slice(1);

//   const url = `${SITE_URL}/${category}`;

//   return {
//     title: `${formatted} News & Analysis | Venture Hive`,
//     description: `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Venture Hive.`,
//     alternates: {
//       canonical: url,
//     },
//     openGraph: {
//       title: `${formatted} News & Analysis | Venture Hive`,
//       description: `Latest ${formatted.toLowerCase()} news and analysis from Venture Hive.`,
//       url,
//       siteName: "VENTURE HIVE",
//       type: "website",
//       images: [
//         {
//           url: `${SITE_URL}/images/venture-hive-logo.webp`,
//           width: 1200,
//           height: 630,
//           alt: `${formatted} News – Venture Hive`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${formatted} News & Analysis | Venture Hive`,
//       description: `Latest ${formatted.toLowerCase()} news and analysis.`,
//       images: [`${SITE_URL}/images/venture-hive-logo.webp`],
//     },
//   };
// }

// /* ---------------------------------
//    PAGE
// ---------------------------------- */
// export default async function CategoryPage({ params }) {
//   const { category } = await params;

//   if (!category || !categorypagedata[category]) {
//     notFound();
//   }

//   const articles = categorypagedata[category] || [];

//   const authorData =
//     authorsPageData.categories.find(
//       (item) => item.category.toLowerCase() === category.toLowerCase()
//     )?.author;

//   /* STATIC BUSINESS ARTICLE (unchanged) */
//   const staticBusinessArticle = {
//     heading: "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
//     slug: "julio-herrera-velutini-bridging-nations-through-finance",
//     category: "business",
//     image: "/images/julio-herrera-velutini.webp",
//     date: "14 Dec, 2025",
//     content:
//       "An in-depth look at how global finance, diplomacy, and leadership intersect in a fractured world.",
//     author: {
//       name: "Daniel Whitmore",
//       profileImage: "/images/daniel-whitmore.webp",
//     },
//   };

//   const categoryArticles =
//     category === "business"
//       ? [...articles, staticBusinessArticle]
//       : articles;

//   const formatted =
//     category.charAt(0).toUpperCase() + category.slice(1);

//   /* ---------------------------------
//      JSON-LD
//   ---------------------------------- */
//   const collectionJsonLd = {
//   "@context": "https://schema.org",
//   "@type": "CollectionPage",
//   name: `${formatted} News`,
//   description: `Latest ${formatted.toLowerCase()} news and analysis from Venture Hive.`,
//   url: `${SITE_URL}/${category}`,
// };

//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: SITE_URL,
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: formatted,
//         item: `${SITE_URL}/${category}`,
//       },
//     ],
//   };

//   return (
//     <>
//       {/* JSON-LD */}
//       <script
//         id="category-collection-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
//       />
//       <script
//         id="category-breadcrumb-jsonld"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       <div className="flex flex-col min-h-screen bg-zinc-50 px-5 md:px-20">

//         {/* BREADCRUMB */}
//         <div className="text-sm text-gray-500 mt-4 mb-2">
//           <Link href="/" className="hover:text-black">Home</Link>
//           <span className="mx-2">›</span>
//           <span className="capitalize font-medium text-black">
//             {category}
//           </span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mb-10">

//           {/* LEFT COLUMN */}
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold mb-3 capitalize">
//               {`${category} – News & Analysis from Venture Hive`}
//             </h1>

//             <p className="text-gray-600 text-sm mb-6 max-w-3xl">
//              Explore the latest {category} news, in-depth political analysis, and
//             investigative reporting from <strong>Venture Hive</strong>. Our journalism
//             delivers clear insights, verified facts, and expert perspectives on today’s
//             most important stories.
//             </p>

//             {/* ARTICLES GRID */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {categoryArticles.map((item) => {
//                 const itemAuthor = item.author || authorData;

//                 return (
//                   <Link
//                     key={item.slug}
//                     href={`/${category}/${item.slug}`}
//                     aria-label={`Read ${item.heading}`}
//                     title={item.heading}
//                   >
//                     <article className="h-full flex flex-col bg-white p-3 rounded shadow-sm">

//                       <div className="relative w-full h-40">
//                         <Image
//                           src={item.image}
//                           alt={item.heading}
//                           fill
//                           className="object-cover rounded"
//                           sizes="(max-width: 768px) 100vw, 50vw"
//                           fetchPriority="high"
//                         />
//                         <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//                           {category}
//                         </span>
//                       </div>

//                       <h2 className="text-lg font-medium mt-2">
//                         {item.heading}
//                       </h2>

//                       <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
//                         <div className="flex items-center gap-2">
//                           <div className="relative w-8 h-8">
//                             <Image
//                               src={itemAuthor?.profileImage}
//                               alt={itemAuthor?.name}
//                                width={600}
//                                 height={400}
//                               sizes="(max-width: 768px) 100vw, 50vw"
//                               className="rounded-full object-cover"
//                             />
//                           </div>
//                           <span>{itemAuthor?.name}</span>
//                         </div>
//                         <time dateTime={new Date(item.date).toISOString()}>
//                           {item.date}
//                         </time>
//                       </div>

//                       <p className="text-gray-600 text-sm line-clamp-3 mt-auto">
//                         {item.content.slice(0, 180)}
//                       </p>

//                     </article>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <aside className="lg:sticky lg:top-6 h-max">
//             <RightSidebar
//               categoryData={categorypagedata}
//               authors={authorsPageData}
//             />
//           </aside>

//         </div>
//       </div>
//     </>
//   );
// }


import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import RightSidebar from "../../components/RightSidebar";
import categorypagedata from "../../public/data/category/categorypagedata";
import authorsPageData from "../../public/data/authors";

const SITE_URL = "https://www.venture-hive.com";

/* ---------------------------------
   METADATA
---------------------------------- */
export async function generateMetadata({ params }) {
  const { category } = await params;

  if (!category || !categorypagedata[category]) {
    return {};
  }

  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

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

/* ---------------------------------
   PAGE
---------------------------------- */
export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!category || !categorypagedata[category]) {
    notFound();
  }

  const articles = categorypagedata[category] || [];

  const authorData =
    authorsPageData.categories.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )?.author;

  /* STATIC BUSINESS ARTICLE (unchanged) */
  const staticBusinessArticle = {
    heading: "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
    slug: "julio-herrera-velutini-bridging-nations-through-finance",
    category: "business",
    image: "/images/julio-herrera-velutini.webp",
    date: "14 Dec, 2025",
    content:
      "An in-depth look at how global finance, diplomacy, and leadership intersect in a fractured world.",
    author: {
      name: "Daniel Whitmore",
      profileImage: "/images/daniel-whitmore.webp",
    },
  };

  const categoryArticles =
    category === "business"
      ? [...articles, staticBusinessArticle]
      : articles;

  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  /* ---------------------------------
   JSON-LD
  ---------------------------------- */
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
      {/* JSON-LD */}
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
        {/* BREADCRUMB */}
        <div className="text-sm text-gray-500 mt-4 mb-2">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">›</span>
          <span className="capitalize font-medium text-black">
            {category}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mb-10">
          {/* LEFT COLUMN */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 capitalize">
              {`${category} – News & Analysis from Venture Hive`}
            </h1>

            <p className="text-gray-600 text-sm mb-6 max-w-3xl">
             Explore the latest {category} news, in-depth political analysis, and
            investigative reporting from <strong>Venture Hive</strong>.
            </p>

            {/* ARTICLES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryArticles.map((item) => {
                const itemAuthor = item.author || authorData;

                return (
                  <Link
                    key={item.slug}
                    href={`/${category}/${item.slug}`}
                    aria-label={`Read ${item.heading}`}
                    title={item.heading}
                  >
                    <article className="h-full flex flex-col bg-white p-3 rounded shadow-sm">
                      <div className="relative w-full h-40">
                        <Image
                          src={item.image}
                          alt={item.heading}
                          fill
                          className="object-cover rounded"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          fetchPriority="high"
                          loading="eager"
                          quality={75} // Adjusted image quality
                        />
                        <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                          {category}
                        </span>
                      </div>

                      <h2 className="text-lg font-medium mt-2">{item.heading}</h2>

                      <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8">
                            <Image
                              src={itemAuthor?.profileImage}
                              alt={itemAuthor?.name}
                               width={600}
                               height={400}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="rounded-full object-cover"
                            />
                          </div>
                          <span>{itemAuthor?.name}</span>
                        </div>
                        <time dateTime={new Date(item.date).toISOString()}>
                          {item.date}
                        </time>
                      </div>

                      <p className="text-gray-600 text-sm line-clamp-3 mt-auto">
                        {item.content.slice(0, 180)}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
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
