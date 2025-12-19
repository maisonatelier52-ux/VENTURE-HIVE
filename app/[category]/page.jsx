// "use client";

// import RightSidebar from "../../components/RightSidebar";
// import Link from "next/link";
// // import { usePathname } from "next/navigation";
// import { notFound, useParams } from "next/navigation";
// import categorypagedata from "../../public/data/category/categorypagedata"
// import authorsPageData from "../../public/data/authors"
// import Image from "next/image";


// export default function CategoryPage(){
  
//   // const pathName = usePathname();
//   // console.log("PathName:", pathName);
//   const { category } = useParams();      

//   const articles = categorypagedata[category] || [];
//   const authorData =
//     authorsPageData.categories.find(
//       (item) => item.category.toLowerCase() === category.toLowerCase()
//     )?.author;
   
//     if (!categorypagedata[category]) {
//     notFound(); 
//   }
    
  

//     return(
//          <div className="flex flex-col min-h-screen font-serif bg-zinc-50 font-sans px-5 md:px-20">

//       {/* Main Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-4 mb-5">

//         {/* LEFT CONTENT — Masonry Layout */}
//         <div className="columns-1 md:columns-2 gap-6 space-y-6">

//           {articles.map((item) => (
//             <Link key={item.id} href={`/${category}/${item.slug}`} title={item.heading}>
//                 <div
//               key={item.id}
//               className="break-inside-avoid p-3 rounded space-y-3"
//             >
//               {/* IMAGE + OVERLAY */}
//               <div className="relative">
//                <div className="relative w-full h-40">
//                   <Image
//                     src={item.image}
//                     alt={item.heading}
//                     fill
//                     className="object-cover rounded"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </div>
//              <h2 className="absolute bottom-2 left-2 text-white text-sm font-medium drop-shadow bg-black p-1 px-2">
//                 {category}
//                 </h2>


//               </div>

//               {/* HEADING */}
//               <h3 className="text-xl font-medium">{item.heading}</h3>

//               {/* PROFILE + DATE */}
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                  <div className="relative w-9 h-9">
//                     <Image
//                       src={authorData.profileImage}
//                       alt={authorData.name}
//                       fill
//                       className="rounded-full object-cover"
//                       sizes="36px"
//                     />
//                   </div>
//                   <span className="font-medium text-sm text-gray-400">
//                     {authorData.name}
//                   </span>
//                 </div>
//                 <span className="text-gray-400 text-sm">{item.date}</span>
//               </div>

//               {/* CONTENT */}
//               <p className="text-gray-400 text-md line-clamp-3">
//                 {item.content}
//               </p>
//             </div>
//             </Link>
            
//           ))}
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="lg:sticky lg:top-5 h-max self-start">
//         <RightSidebar categoryData={categorypagedata} authors={authorsPageData}/>
//         </div>
//       </div>
//     </div>
//     )
// }


import { notFound } from "next/navigation";
import categorypagedata from "../../public/data/category/categorypagedata";
import CategoryClient from "./CategoryClient";

/**
 * ✅ SEO metadata — Next.js 16 SAFE
 */
export async function generateMetadata({ params }) {
  const { category } = await params; // ✅ FIX

  if (!category || !categorypagedata[category]) {
    return {};
  }

  const formatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${formatted} News & Analysis | Venture Hive`,
    description: `Latest ${formatted.toLowerCase()} news, in-depth analysis, and investigative journalism from Venture Hive.`,
    alternates: {
      canonical: `https://venture-hive.com/${category}`,
    },
  };
}

/**
 * ✅ Server Page — Next.js 16 SAFE
 */
export default async function CategoryPage({ params }) {
  const { category } = await params; // ✅ FIX

  if (!category || !categorypagedata[category]) {
    notFound();
  }

  return <CategoryClient category={category} />;
}
