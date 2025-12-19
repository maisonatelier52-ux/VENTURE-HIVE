"use client";

import RightSidebar from "../../components/RightSidebar";
import Link from "next/link";
import Image from "next/image";
import categorypagedata from "../../public/data/category/categorypagedata";
import authorsPageData from "../../public/data/authors";
import CategoryJsonLd from "../../components/CategoryJsonLd";

export default function CategoryClient({ category }) {
  const articles = categorypagedata[category] || [];

  const authorData =
    authorsPageData.categories.find(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    )?.author;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 px-5 md:px-20">
         <CategoryJsonLd category={category} articles={articles}/>

     <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mb-10 mt-4">

        {/* LEFT COLUMN */}
        <div>
            {/* ✅ SEO REQUIRED H1 */}
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 capitalize">
            {category} News & Analysis from Venture Hive
            </h1>

            <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Explore the latest {category} news, in-depth political analysis, and
            investigative reporting from <strong>Venture Hive</strong>. Our journalism
            delivers clear insights, verified facts, and expert perspectives on today’s
            most important stories.
            </p>

            {/* ARTICLES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((item) => (
                <Link
                aria-label={`Read ${item.heading}`}
                key={item.slug}
                href={`/${category}/${item.slug}`}
                title={item.heading}
                >
                <article className="h-full flex flex-col bg-white p-3 rounded shadow-sm">
                    {/* IMAGE */}
                    <div className="relative w-full h-40">
                    <Image
                        src={item.image}
                        alt={item.heading}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {category}
                    </span>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-lg font-medium mt-2">
                    {item.heading}
                    </h2>

                    {/* AUTHOR + DATE */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                        <Image
                            src={authorData?.profileImage}
                            alt={authorData?.name}
                            fill
                            className="rounded-full object-cover"
                            sizes="32px"
                        />
                        </div>
                        <span>{authorData?.name}</span>
                    </div>
                    <time dateTime={new Date(item.date).toISOString()}>
                        {item.date}
                    </time>
                    </div>

                    {/* EXCERPT */}
                    <p className="text-gray-600 text-sm line-clamp-3 mt-auto">
                    {item.content.slice(0, 180)}
                    </p>
                </article>
                </Link>
            ))}
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
  );
}
