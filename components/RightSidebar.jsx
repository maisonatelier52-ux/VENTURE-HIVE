"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RightSidebar({ categoryData, authors }) {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const staticSpecialArticle = {

  title: "Julio Herrera Velutini: Bridging Nations Through Finance in a Fractured World",
  image: "/images/julio-herrera-velutini.webp",
  date: "14 December 2025",
  href: `/Business/Julio-herrera-velutini-bridging-nations-through-finance`
};





  // Helper: get author for category
  function getAuthor(category) {
    return authors.categories.find(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    )?.author;
  }

  // -------------------------------  
  // 1️⃣ GET latest post per category
  // -------------------------------
  const latestFromEachCategory = Object.keys(categoryData)
    .map((cat) => {
      const posts = categoryData[cat];
      if (!posts?.length) return null;

      const sorted = [...posts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return { ...sorted[0], category: cat };
    })
    .filter(Boolean);

  const recentFour = latestFromEachCategory
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  // -------------------------------  
  // 2️⃣ CAROUSEL POSTS (2nd latest)
  // -------------------------------
  const secondLatest = Object.keys(categoryData)
    .map((cat) => {
      const posts = categoryData[cat];
      if (!posts?.length) return null;

      const idx = posts.length >= 2 ? posts.length - 2 : posts.length - 1;
      return { ...posts[idx], category: cat };
    })
    .filter(Boolean)
    .filter((p) => !recentFour.some((r) => r.slug === p.slug))
    .slice(0, 3)
    .map((p) => ({ ...p, author: getAuthor(p.category) }));

  // -------------------------------  
  // 3️⃣ RECENT POSTS (3rd latest)
  // -------------------------------
  const thirdLatest = Object.keys(categoryData)
    .map((cat) => {
      const posts = categoryData[cat];
      if (!posts?.length) return null;

      const idx =
        posts.length >= 3 ? posts.length - 3 :
        posts.length >= 2 ? posts.length - 2 :
        posts.length - 1;

      return { ...posts[idx], category: cat };
    })
    .filter(Boolean)
    .filter(
      (p) =>
        !recentFour.some((r) => r.slug === p.slug) &&
        !secondLatest.some((s) => s.slug === p.slug)
    )
    .slice(0, 4)
    .map((p) => ({ ...p, author: getAuthor(p.category) }));

  // -------------------------------  
  // 4️⃣ POPULAR ARTICLES (skip used)
  // -------------------------------

  function isUsed(slug) {
    return (
      recentFour.some((p) => p.slug === slug) ||
      secondLatest.some((p) => p.slug === slug) ||
      thirdLatest.some((p) => p.slug === slug)
    );
  }

  let popularArticles = [];

  Object.keys(categoryData).forEach((cat) => {
    if (popularArticles.length >= 5) return;

    const posts = categoryData[cat];
    if (!posts?.length) return;

    const sorted = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    const found = sorted.find((post) => !isUsed(post.slug));

    if (found) {
      popularArticles.push({
        ...found,
        category: cat,
        author: getAuthor(cat),
      });
    }
  });


  function isUsedTrending(slug) {
  return (
    isUsed(slug) || // checks recentFour, secondLatest, thirdLatest
    popularArticles.some((p) => p.slug === slug) // also skip already popular
  );
}
let trendingArticle = null;

// Collect ALL posts from ALL categories into one array
const allPosts = Object.keys(categoryData).flatMap((cat) =>
  categoryData[cat].map((post) => ({ ...post, category: cat }))
);

// Sort by latest date
const sortedAll = allPosts.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Find the first unused post
trendingArticle = sortedAll.find((post) => !isUsedTrending(post.slug));


function isUsedSmallTrending(slug) {
  return (
    isUsedTrending(slug) || // includes recentFour, secondLatest, thirdLatest, popularArticles
    (trendingArticle && trendingArticle.slug === slug)
  );
}

let smallTrending = [];

Object.keys(categoryData).forEach((cat) => {
  if (smallTrending.length >= 3) return;

  const posts = categoryData[cat];
  if (!posts?.length) return;

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const found = sorted.find((post) => !isUsedSmallTrending(post.slug));

  if (found) {
    smallTrending.push({
      ...found,
      category: cat,
      author: getAuthor(cat),
    });
  }
});

const getAllNews = Object.keys(categoryData).flatMap((cat) =>
  categoryData[cat].map((post) => ({
    ...post,
    category: cat,
  }))
);

function handleSearchInput(e) {
  const value = e.target.value;
  setQuery(value);

  if (value.trim().length < 2) {
    setResults([]);
    return;
  }

  const filtered = allPosts.filter((post) =>
    post.heading.toLowerCase().includes(value.toLowerCase())
  );

  setResults(filtered.slice(0, 6));
}

  return (
    <div>
      <h2 className="text-lg font-medium border-b pb-2 mb-4">
        • POPULAR ARTICLES
      </h2>

      <div className="space-y-6">
        {popularArticles.map((item, i) => (
          <Link href={`/${item.category}/${item.slug}`} key={i}>
          <div
           
            className="grid grid-cols-[30px_1fr_90px] gap-3 pb-4 border-b"
          >
            <span className="text-xl font-medium">{i + 1}.</span>

            <div>
              <h3 className="text-sm font-semibold">
                {item.heading.length > 60
                  ? item.heading.slice(0, 60) + "..."
                  : item.heading}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {item.date} • {item.category.toUpperCase()}
              </p>
            </div>

            <div className="relative w-20 h-16">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                className="object-cover rounded"
                sizes="80px"
              />
            </div>
          </div>
          </Link>
        ))}

       <h2 className="text-lg font-medium border-b pb-2 mb-4">• SEARCH</h2>

        <div className="relative">
          <div className="w-full max-w-xl border border-gray-400 rounded flex overflow-hidden">
            <input
              type="text"
              value={query}
              onChange={handleSearchInput}
              placeholder="Search articles..."
              className="flex-1 p-2 outline-none"
            />

            <button
              // onClick={handleSearchSubmit}
              className="px-4 py-2 bg-gray-700 text-white font-medium"
            >
              Search
            </button>
          </div>

          {/* Autocomplete dropdown */}
          {results.length > 0 && (
            <div className="absolute z-20 bg-white border w-full shadow-lg mt-1 rounded">
              {results.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.category}/${item.slug}`}
                  className="block px-3 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => {
                    setResults([]);
                    setQuery("");
                  }}
                >
                  {item.heading.length > 60
                    ? item.heading.slice(0, 60) + "..."
                    : item.heading}
                </Link>
              ))}
            </div>
          )}

        </div>


            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              • TRENDING
            </h2>

            {trendingArticle && (
              <div className="space-y-3">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={trendingArticle.image}
                    alt={trendingArticle.heading}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <Link href={`/${trendingArticle.category}/${trendingArticle.slug}`}>
                 <h3 className="text-md font-semibold">
                  {trendingArticle.heading.length > 80
                    ? trendingArticle.heading.slice(0, 80) + "..."
                    : trendingArticle.heading}
                </h3>
                </Link>

                <p className="text-xs text-gray-500">
                  {trendingArticle.date} • {trendingArticle.category.toUpperCase()}
                </p>
              </div>
            )}

               <hr className="border border-gray-200"></hr>

           <div className="space-y-5">

              {/* 🔹 ONLY FIRST 2 DYNAMIC ITEMS */}
              {smallTrending.slice(0, 2).map((item, i) => (
                <Link href={`/${item.category}/${item.slug}`} key={i}>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-50 h-20">
                      <Image
                        src={item.image}
                        alt={item.heading}
                        fill
                        className="object-cover rounded"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold">
                        {item.heading.length > 60
                          ? item.heading.slice(0, 60) + "..."
                          : item.heading}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              {/* 🔹 STATIC SPECIAL ARTICLE (3RD ITEM) */}
              <Link href={staticSpecialArticle.href}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="relative w-50 h-20">
                    <Image
                      src={staticSpecialArticle.image}
                      alt={staticSpecialArticle.title}
                      fill
                      className="object-cover rounded"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold">
                       {staticSpecialArticle.title.length > 60
                          ? staticSpecialArticle.title.slice(0, 60) + "..."
                          : staticSpecialArticle.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {staticSpecialArticle.date}
                    </p>
                  </div>
                </div>
              </Link>

            </div>



            <h2 className="text-lg font-medium border-b pb-2 mb-4">
              • TAG CLOUD
            </h2>
            <div className="flex flex-wrap gap-3">
              {Object.keys(categoryData).map((cat) => (
                <Link 
                  key={cat} 
                  href={`/${cat}`}
                  className="p-2 bg-blue-200 rounded cursor-pointer hover:bg-blue-300 transition"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              ))}
            </div>


      </div>
    </div>
  );
}
