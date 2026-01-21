// import { notFound } from "next/navigation";
// import pillarContents from "../../../public/data/special/pillarContents";
// import PillarClient from "./PillarClient";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const article = pillarContents?.find((item) => item.slug === slug);

//   if (!article) return {};

//    const title = article.metaTitle || 'Default Title'; // Fallback if no title exists
//   const description = article.metaDescription || 'Default Description'; // Fallback if no description exists
 
//   return {
//     title:title,
//     description: description,
//     alternates: {
//       canonical: `https://www.venture-hive.com/julio-herrera-velutini/${slug}`,
//     },
//     openGraph: {
//       title: title,
//       description: description,
//       url: `https://www.venture-hive.com/julio-herrera-velutini/${slug}`,
//       siteName: "Venture Hive",
//       images: [
//         {
//           url: `https://www.venture-hive.com${article.hero.imageSrc}`,
//           width: 1200,
//           height: 630,
//           alt: article.hero.imageAlt,
//         },
//       ],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: title,
//       description: description,
//       images: [`https://www.venture-hive.com${article.hero.imageSrc}`],
//     },
//   };
// }



// export default async function Page({ params }) {
//   const { slug } = await params;

//   const article = pillarContents?.find((item) => item.slug === slug);

//   if (!article) notFound();

//   return <PillarClient slug={slug} />;
// }


import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import RightSidebar from "../../../components/RightSidebar";
import categorypagedata from "../../../public/data/category/categorypagedata";
import authorsPageData from "../../../public/data/authors";
import pillarContents from "../../../public/data/special/pillarContents.json";

import { Facebook, Linkedin } from "lucide-react";
import { FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { FaQuora } from "react-icons/fa";

const SITE_URL = "https://www.venture-hive.com";

/* =========================
   METADATA
========================= */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = pillarContents.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/julio-herrera-velutini/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/julio-herrera-velutini/${slug}`,
      type: "article",
      siteName: "Venture Hive",
      images: [
        {
          url: `${SITE_URL}${article.hero.imageSrc}`,
          width: 1200,
          height: 630,
          alt: article.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}${article.hero.imageSrc}`],
    },
  };
}

/* =========================
   PAGE
========================= */
export default async function Page({ params }) {
  const { slug } = await params;

  const pageData = pillarContents.find((item) => item.slug === slug);
  if (!pageData) notFound();

  const { hero, subtitle, intro, sections, category } = pageData;

  const authorData =
    authorsPageData.categories.find(
      (item) => item.category === category
    )?.author;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: hero.title,
    description: subtitle.heading,
    image: [`${SITE_URL}${hero.imageSrc}`],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/julio-herrera-velutini/${slug}`,
    },
    author: {
      "@type": "Person",
      name: authorData?.name || "Venture Hive",
    },
    publisher: {
      "@type": "Organization",
      name: "Venture Hive",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/venture-hive-logo.webp`,
      },
    },
    datePublished: pageData.datePublished || "2025-01-01",
    dateModified: pageData.dateModified || "2025-01-01",
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
        name: "Julio Herrera Velutini",
        item: `${SITE_URL}/business/julio-herrera-velutini-bridging-nations-through-finance`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: hero.title,
        item: `${SITE_URL}/julio-herrera-velutini/${slug}`,
      },
    ],
  };

  const shareUrl = `${SITE_URL}/julio-herrera-velutini/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(hero.title);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* VISIBLE BREADCRUMB */}
      <div className="px-5 md:px-20 pt-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-black">Home</Link>
        <span className="mx-2">›</span>
        <Link
          href="/business/julio-herrera-velutini-bridging-nations-through-finance"
          className="hover:text-black"
          title="julio-herrera-velutini"
        >
          Julio Herrera Velutini
        </Link>
        <span className="mx-2">›</span>
        <span className="font-medium text-black">{hero.title}</span>
      </div>

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

              <div className="flex items-center justify-center gap-4 border border-gray-300 border-s-0 border-e-0 p-5 my-10">
                <span className="text-2xl">~</span>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  title="Share on Facebook"
                  className="w-6 h-6 rotate-45 bg-blue-900 flex items-center justify-center"
                >
                  <Facebook size={14} className="text-white -rotate-45" />
                </a>

                {/* X (Twitter) */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  title="Share on X"
                  className="w-6 h-6 rotate-45 bg-black flex items-center justify-center"
                >
                  <FaXTwitter size={14} className="text-white -rotate-45" />
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  title="Share on LinkedIn"
                  className="w-6 h-6 rotate-45 bg-blue-700 flex items-center justify-center"
                >
                  <Linkedin size={14} className="text-white -rotate-45" />
                </a>

                {/* Reddit */}
                <a
                  href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Reddit"
                  title="Share on Reddit"
                  className="w-6 h-6 rotate-45 bg-orange-600 flex items-center justify-center"
                >
                  <FaRedditAlien size={14} className="text-white -rotate-45" />
                </a>

                <span className="text-2xl">~</span>
              </div>


              {/* ================= AUTHOR BOX ================= */}
              {authorData && (
                <div className="bg-blue-100 p-4 mt-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">

                    {/* Image */}
                    <div className="w-full md:w-1/4 h-48 md:h-auto overflow-hidden">
                       <div className="relative w-full h-full">
                        <Image
                          src={authorData.profileImage}
                          alt={authorData.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-3/4 flex flex-col gap-4 p-2 md:p-6">
                    <Link href={`/authors`} title={authorData.name}>
                     <h2 className="text-xl md:text-2xl font-semibold text-gray-900 hover:underline">
                        {authorData.name}
                      </h2>
                    </Link>

                      <p className="text-gray-700 leading-relaxed">
                        {authorData.bio}
                      </p>

                      <div className="flex items-center gap-4 text-lg text-gray-800">
                       {authorData.social.quora && (
                          <Link
                            href={authorData.social.quora}
                            target="_blank"
                           title={`Visit ${authorData.name} on Quora`}
                            rel="noopener noreferrer"
                            aria-label="Quora"
                            className="hover:text-red-600 transition"
                          >
                            <FaQuora size={18} />
                          </Link>
                        )}

                        {authorData.social.twitter && (
                          <Link
                            href={authorData.social.twitter}
                            target="_blank"
                            title={`Visit ${authorData.name} on Twitter`}
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="hover:text-sky-500 transition"
                          >
                            <FaXTwitter size={18} />
                          </Link>
                        )}

                          {authorData.social.medium && (
                        <Link
                          href={authorData.social.medium}
                          target="_blank"
                           title={`Visit ${authorData.name} on Medium`}
                          rel="noopener noreferrer"
                          aria-label="Medium"
                          className="hover:text-black transition"
                        >
                          <SiMedium size={18} />
                        </Link>
                      )}

                      {authorData.social.reddit && (
                        <Link
                          href={authorData.social.reddit}
                          target="_blank"
                           title={`Visit ${authorData.name} on Reddit`}
                          rel="noopener noreferrer"
                          aria-label="Reddit"
                          className="hover:text-red-500 transition"
                        >
                          <FaRedditAlien size={18} />
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

       {/* Drop cap — SERVER SAFE */}
      <style>{`
        .drop-cap::first-letter {
          float: left;
          font-size: 3.2rem;
          line-height: 0.9;
          margin-right: 0.4rem;
          font-weight: bold;
        }
      `}</style>
       
      </div>
      
    </>
  );
}

