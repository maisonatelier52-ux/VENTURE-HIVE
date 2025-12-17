"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import RightSidebar from "@/components/RightSidebar";

import categorypagedata from "../../../public/data/category/categorypagedata";
import authorsPageData from "../../../public/data/authors";
import pillarContents from "../../../public/data/special/pillarContents.json";

export default function SpecialSlugPage() {
  const { slug } = useParams();

  // 🔹 Find the correct pillar by slug
  const pageData = pillarContents.find(
    (item) => item.slug === slug
  );

  // 🔹 Safety check (invalid slug)
  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Content not found.</p>
      </div>
    );
  }

  const { hero, subtitle, intro, sections, category } = pageData;

  // 🔹 Author lookup (same logic you already use)
  const authorData =
    authorsPageData.categories.find(
      (item) => item.category === category
    )?.author;

  return (
    <div className="min-h-screen font-serif text-gray-900 px-5 md:px-20">

      {/* Newspaper texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" />
      </div>

      <div className="relative max-w-7xl mx-auto py-10">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10">

          {/* ================= LEFT COLUMN ================= */}
          <div>

            {/* ===== HERO ===== */}
            <div className="relative w-full h-72 md:h-96 mb-8 overflow-hidden rounded shadow-xl">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-2xl md:text-3xl font-semibold leading-snug max-w-3xl">
                  {hero.title}
                </h1>
              </div>
            </div>

            {/* ===== SUBTITLE ===== */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl font-medium mb-2">
                {subtitle.heading}
              </h2>
              <p className="text-xs uppercase tracking-wider text-gray-600">
                {subtitle.meta}
              </p>
              <hr className="border border-gray-400 mt-4 max-w-sm mx-auto" />
            </div>

            {/* ================= ARTICLE ================= */}
            <article className="text-sm leading-relaxed text-gray-800">

              {/* INTRO */}
              <p className="text-base leading-relaxed text-justify drop-cap mb-6">
                {intro}
              </p>

              {/* CONTENT SECTIONS */}
              <div className="flex flex-col space-y-10 text-justify">
                {sections.map((section, index) => (
                  <section key={index}>
                    <h2 className="text-xl font-semibold mb-3 border-b border-black inline-block">
                      {section.heading}
                    </h2>

                    {section.content?.map((para, i) => (
                      <p key={i} className={i > 0 ? "mt-2" : ""}>
                        {para}
                      </p>
                    ))}

                    {section.blockquote && (
                      <blockquote className="my-6 pl-4 border-l-4 border-gray-700 italic text-gray-600">
                        {section.blockquote}
                      </blockquote>
                    )}

                    {section.subheading && (
                      <h3 className="text-base font-semibold mt-4 mb-2">
                        {section.subheading}
                      </h3>
                    )}

                    {section.list && (
                      <ul className="list-disc pl-5 space-y-1">
                        {section.list.map((item, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>
                    )}

                    {section.paragraphAfterList && (
                      <p className="mt-2">
                        {section.paragraphAfterList}
                      </p>
                    )}

                    {section.bigQuote && (
                      <div className="my-8 py-6 px-6 bg-gray-900 text-white text-lg text-center italic rounded">
                        {section.bigQuote}
                      </div>
                    )}

                    {section.closing && (
                      <p>{section.closing}</p>
                    )}
                  </section>
                ))}
              </div>
            </article>

            {/* ================= AUTHOR BOX ================= */}
            {authorData && (
              <div className="bg-blue-100 p-4 mt-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">

                  {/* Image */}
                  <div className="w-full md:w-1/4 h-48 md:h-auto overflow-hidden">
                    <img
                      src={authorData.profileImage}
                      alt={authorData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-3/4 flex flex-col gap-4 p-2 md:p-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {authorData.name}
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                      {authorData.bio}
                    </p>

                    <div className="flex items-center gap-4 text-lg text-gray-800">
                      {authorData.social.facebook && (
                        <Link
                          href={authorData.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </Link>
                      )}

                      {authorData.social.twitter && (
                        <Link
                          href={authorData.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="lg:sticky lg:top-20 h-fit">
            <RightSidebar
              categoryData={categorypagedata}
              authors={authorsPageData}
            />
          </aside>

        </div>
      </div>

      {/* Drop cap styling */}
      <style jsx>{`
        .drop-cap::first-letter {
          float: left;
          font-size: 3.2rem;
          line-height: 0.9;
          margin-right: 0.4rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
