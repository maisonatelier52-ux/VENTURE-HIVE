"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PAGE_SIZE = 10;

// ✅ SEO-critical: this component receives EVERY article for the category
// and renders EVERY one of them into the DOM as a real <Link href> on
// initial render (and on every render — nothing is conditionally excluded
// from the tree). `currentPage` only toggles a CSS `hidden` class on each
// group of ~10 articles, so Googlebot's HTML snapshot (View Page Source)
// always contains every article link, even the ones "on page 2+" that a
// human visitor would need to click Next to see.
export default function CategoryArticleList({ articles, category, authorData }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((item, index) => {
          const itemAuthor = item.author || authorData;
          const pageOfItem = Math.floor(index / PAGE_SIZE) + 1;
          const isVisiblePage = pageOfItem === currentPage;
          // First 2 images on the currently visible page get priority loading
          const isAboveFold = isVisiblePage && index % PAGE_SIZE < 2;

          const previewText =
            item.content ||
            item.metaDescription ||
            item.detailcontents?.intro?.text ||
            "";

          return (
            <Link
              key={item.slug}
              href={`/${category}/${item.slug}`}
              aria-label={`Read ${item.heading}`}
              title={item.heading}
              className={isVisiblePage ? "" : "hidden"}
            >
              <article className="h-full flex flex-col bg-white p-3 rounded shadow-sm">
                <div className="relative w-full h-40">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={isAboveFold}
                    loading={isAboveFold ? "eager" : "lazy"}
                    quality={75}
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
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span>{itemAuthor?.name}</span>
                  </div>
                  <time dateTime={new Date(item.date).toISOString()}>
                    {item.date}
                  </time>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mt-auto">
                  {previewText.slice(0, 180)}
                </p>
              </article>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Category pagination"
          className="flex items-center justify-center gap-2 mt-10 mb-4 text-sm"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded text-gray-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed"
          >
            « Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={
                page === currentPage
                  ? "w-8 h-8 flex items-center justify-center rounded-md bg-zinc-900 text-white font-medium"
                  : "w-8 h-8 flex items-center justify-center rounded-md text-gray-700 hover:bg-zinc-200"
              }
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded text-gray-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next »
          </button>
        </nav>
      )}
    </>
  );
}
