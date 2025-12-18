"use client";

import { useState } from "react";
import Link from "next/link";
import RightSidebar from "../../components/RightSidebar";

import authorsData from "../../public/data/authors.json";
import categoryData from "../../public/data/category/categorypagedata";
import Image from "next/image";

export default function AuthorsPage() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // Build author → articles mapping
  const authorArticles = authorsData.categories.map(({ category, author }) => {
    const posts = categoryData[category.toLowerCase()] || [];
    return {
      ...author,
      category: category.toLowerCase(),
      posts,
    };
  });

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 px-5 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-6 mb-10">
        {/* LEFT CONTENT */}
        <div>
          {/* PAGE TITLE */}
          <h1 className="text-3xl font-semibold mb-6 text-center">
            {selectedAuthor ? "Author Articles" : "Our Contributors"}
          </h1>

          {/* ================= ALL AUTHORS ================= */}
          {!selectedAuthor && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authorArticles.map((author) => (
                <div
                  key={author.id}
                  onClick={() => setSelectedAuthor(author)}
                  className="cursor-pointer border rounded p-5 bg-white hover:shadow transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={author.profileImage}
                        alt={author.name}
                        fill
                        className="rounded-full object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{author.name}</h2>
                      <p className="text-xs text-gray-500 uppercase">
                        {author.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                    {author.bio}
                  </p>

                  <p className="text-xs text-blue-600 mt-3">
                    View Articles →
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* ================= AUTHOR ARTICLES ================= */}
          {selectedAuthor && (
            <>
              <button
                onClick={() => setSelectedAuthor(null)}
                className="text-sm mb-6 text-blue-600 hover:underline"
              >
                ← Back to all authors
              </button>

              {/* AUTHOR HEADER */}
              <div className="flex gap-6 items-center mb-8">
                <div className="relative w-24 h-24">
                  <Image
                    src={selectedAuthor.profileImage}
                    alt={selectedAuthor.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">
                    {selectedAuthor.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {selectedAuthor.bio}
                  </p>
                </div>
              </div>

              {/* ARTICLES LIST */}
              <div className="space-y-6">
                {selectedAuthor.posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/${selectedAuthor.category}/${post.slug}`}
                    className="block border-b pb-4 hover:bg-gray-50 p-2 rounded"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-28 h-20">
                        <Image
                          src={post.image}
                          alt={post.heading}
                          fill
                          className="object-cover rounded"
                          sizes="112px"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {post.heading}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-5 h-max">
          <RightSidebar
            categoryData={categoryData}
            authors={authorsData}
          />
        </div>
      </div>
    </div>
  );
}
