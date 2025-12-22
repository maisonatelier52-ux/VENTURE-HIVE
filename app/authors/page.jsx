// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import RightSidebar from "../../components/RightSidebar";
// import authorsData from "../../public/data/authors.json";
// import categoryData from "../../public/data/category/categorypagedata";
// import specialPillars from "../../public/data/special/pillarContents.json";

// export default function AuthorsPage() {
//   const [selectedAuthor, setSelectedAuthor] = useState(null);

//   // Build author → articles mapping
//   const authorArticles = authorsData.categories.map(({ category, author }) => {
//     const normalizedCategory = category.toLowerCase();
//     let posts = [];

//     if (normalizedCategory === "special") {
//       posts = specialPillars.map((item) => ({
//         slug: item.slug,
//         heading: item.hero?.title,
//         image: item.hero?.imageSrc,
//         date: item.subtitle?.meta || "Special Feature",
//       }));
//     } else {
//       posts = categoryData[normalizedCategory] || [];
//     }

//     return {
//       ...author,
//       category: normalizedCategory,
//       posts,
//     };
//   });

//   return (
//     <div className="flex flex-col min-h-screen bg-zinc-50 px-4 sm:px-6 md:px-20">
//       <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-6 mb-10">
        
//         {/* LEFT CONTENT */}
//         <div>
//           {/* PAGE TITLE */}
//           <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
//             {selectedAuthor ? "Author Articles" : "Our Contributors"}
//           </h1>

//           {/* ================= ALL AUTHORS ================= */}
//           {!selectedAuthor && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {authorArticles.map((author) => (
//                 <div
//                   key={author.id}
//                   onClick={() => setSelectedAuthor(author)}
//                   className="cursor-pointer border rounded p-5 bg-white hover:shadow transition"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
//                       <Image
//                         src={author.profileImage}
//                         alt={author.name}
//                         fill
//                         className="rounded-full object-cover"
//                         sizes="(max-width: 640px) 56px, 64px"
//                       />
//                     </div>
//                     <div>
//                       <h2 className="text-lg font-semibold">
//                         {author.name}
//                       </h2>
//                       <p className="text-xs text-gray-500 uppercase">
//                         {author.category}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm text-gray-600 mt-4 line-clamp-3">
//                     {author.bio}
//                   </p>

//                   <p className="text-xs text-blue-600 mt-3">
//                     View Articles →
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ================= AUTHOR ARTICLES ================= */}
//           {selectedAuthor && (
//             <>
//               {/* BACK BUTTON */}
//               <button
//                 onClick={() => setSelectedAuthor(null)}
//                 className="text-sm mb-4 sm:mb-6 text-blue-600 hover:underline inline-flex items-center"
//               >
//                 ← Back to all authors
//               </button>

//               {/* AUTHOR HEADER */}
//               <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-8">
//                 <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
//                   <Image
//                     src={selectedAuthor.profileImage}
//                     alt={selectedAuthor.name}
//                     fill
//                     className="rounded-full object-cover"
//                     sizes="(max-width: 640px) 80px, 96px"
//                   />
//                 </div>
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-semibold">
//                     {selectedAuthor.name}
//                   </h2>
//                   <p className="text-gray-500 text-sm mt-1">
//                     {selectedAuthor.bio}
//                   </p>
//                 </div>
//               </div>

//               {/* ARTICLES LIST */}
//               <div className="space-y-6">
//                 {selectedAuthor.posts.map((post) => (
//                   <Link
//                     key={post.slug}
//                     href={
//                       selectedAuthor.category === "special"
//                         ? `/julio-herrera-velutini/${post.slug}`
//                         : `/${selectedAuthor.category}/${post.slug}`
//                     }
//                     title={post.heading}
//                     className="block border-b pb-4 hover:bg-gray-50 p-3 rounded transition"
//                   >
//                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      
//                       {/* ARTICLE IMAGE */}
//                       <div className="relative w-full sm:w-28 h-44 sm:h-20 shrink-0">
//                         <Image
//                           src={post.image}
//                           alt={post.heading}
//                           fill
//                           className="object-cover rounded"
//                           sizes="(max-width: 640px) 100vw, 112px"
//                         />
//                       </div>

//                       {/* ARTICLE CONTENT */}
//                       <div>
//                         <h3 className="font-semibold text-sm sm:text-base">
//                           {post.heading}
//                         </h3>
//                         <p className="text-xs text-gray-500 mt-1">
//                           {post.date}
//                         </p>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="lg:sticky lg:top-5 h-max">
//           <RightSidebar
//             categoryData={categoryData}
//             authors={authorsData}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import AuthorJsonLd from "../../components/AuthorJsonLd";
import AuthorClient from "./AuthorClient";



export const metadata = {
  title: "VENTURE HIVE Authors – Independent News & Investigative Journalism",
  description:
    "Meet the journalists and contributors behind VENTURE HIVE, delivering independent news, investigative journalism, and in-depth reporting across politics, business, sports, and global affairs.",

  alternates: {
    canonical: "https://venture-hive.com/authors",
  },

  openGraph: {
    title: "VENTURE HIVE Authors – Independent Journalism",
    description:
      "Explore articles from VENTURE HIVE contributors producing trusted independent news and investigative journalism.",
    url: "https://venture-hive.com/authors",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://venture-hive.com/images/og-authors.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE Contributors",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VENTURE HIVE Authors & Journalists",
    description:
      "Meet the contributors behind VENTURE HIVE’s independent news and investigative journalism.",
    images: ["https://venture-hive.com/images/og-authors.webp"],
  },
};

export default function AuthorsPage() {
  return (
    <>
      {/* Structured Data */}
      <AuthorJsonLd />

      {/* Client UI */}
      <AuthorClient />
    </>
  );
}

