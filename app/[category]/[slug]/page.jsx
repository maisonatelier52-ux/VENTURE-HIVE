
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import RightSidebar from "../../../components/RightSidebar";
import ClientNewsArticle from "../../../components/Clientnewsarticle";
import categorypagedata from "../../../public/data/category/categorypagedata";
import authorsPageData from "../../../public/data/authors";

import { Facebook, Linkedin } from "lucide-react";
import { FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { FaQuora } from "react-icons/fa";

const SITE_URL = "https://www.venture-hive.com";

// ✅ Pre-builds every article page at build time so Googlebot always gets
// a fast, fully-rendered HTML response (no server-side execution delay).
export async function generateStaticParams() {
  const params = [];

  Object.entries(categorypagedata).forEach(([category, posts]) => {
    posts.forEach((post) => {
      params.push({
        category,
        slug: post.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const article = categorypagedata[category]?.find((item) => item.slug === slug);

  if (!article) return {};

  const author = authorsPageData.categories.find(
    (item) =>
      item.category.toLowerCase() ===
      (article.authorCategory || category).toLowerCase()
  )?.author;
  const publishedTime = article.datePublished || new Date(article.date).toISOString();
  const modifiedTime = article.dateModified || publishedTime;
  const articleUrl = `${SITE_URL}/${category}/${slug}`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: articleUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: articleUrl,
      siteName: "Venture Hive",
      type: "article",
      publishedTime,
      modifiedTime,
      section: article.authorCategory || category,
      authors: author ? [`${SITE_URL}/authors`] : undefined,
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}${article.image}`],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  const categoryPosts = categorypagedata[category] || [];
  const article = categoryPosts.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  const authorData = authorsPageData.categories.find(
    (item) =>
      item.category.toLowerCase() ===
      (article.authorCategory || category).toLowerCase()
  )?.author;

  // ── Client News (e.g. culture sponsored / editorial features) ────────────
  // Any article flagged type: "client-news" (currently: category === "culture")
  // renders through the dedicated ClientNewsArticle component + its own
  // ClientRightSidebar, instead of the standard article layout below.
  if (article.type === "client-news") {
    // ✅ "More Arts Coverage" is built live from whatever else exists in this
    // same category array — not hard-coded in the json. If this is the only
    // post in the category, moreCoverage stays undefined and the section
    // in ClientNewsArticle simply doesn't render (it already guards on
    // `article.moreCoverage?.length > 0`).
    const otherCategoryPosts = categoryPosts
      .filter((item) => item.slug !== slug)
      .map((item) => ({
        heading: item.heading,
        category: item.authorCategory || article.authorCategory || category,
        image: item.image,
        slug: item.slug,
      }));

    const moreCoverage =
      otherCategoryPosts.length > 0 ? otherCategoryPosts : undefined;

    // ✅ RELATED STORIES = the site's own popular/latest posts (same idea as
    // the home-page RightSidebar's "Popular Articles"), not dummy json.
    // Pull the most recent posts across every category, skip the one
    // currently being read, keep it to 3.
    const relatedStories = Object.keys(categorypagedata)
      .flatMap((cat) =>
        categorypagedata[cat].map((post) => ({ ...post, category: cat }))
      )
      .filter((post) => post.slug !== slug)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3)
      .map((post) => ({
        heading: post.heading,
        category: post.category,
        image: post.image,
        slug: post.slug,
      }));

    const clientArticleJsonLd = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      url: `${SITE_URL}/${category}/${slug}`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${category}/${slug}`,
      },
      headline: article.heading,
      description: article.metaDescription,
      articleSection: category,
      image: [`${SITE_URL}${article.image}`],
      datePublished: article.datePublished || new Date(article.date).toISOString(),
      dateModified: article.dateModified || new Date(article.date).toISOString(),
      author: {
        "@type": "Person",
        name: authorData?.name || "Venture Hive Staff",
        url: `${SITE_URL}/authors`,
      },
      publisher: {
        "@type": "NewsMediaOrganization",
        name: "Venture Hive",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/venture-hive-logo.webp`,
        },
      },
      about: {
        "@type": "Person",
        name: "Jesús Rafael Soto",
      },
      mentions: article.patronage?.people?.map((person) => ({
        "@type": "Person",
        name: person.name,
        ...(person.topicSlug
          ? { url: `${SITE_URL}/topics/${person.topicSlug}` }
          : {}),
      })),
      inLanguage: "en",
      isAccessibleForFree: true,
      keywords: article.hashTags?.join(", "),
    };

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: article.authorCategory || category,
          item: `${SITE_URL}/${category}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.heading,
          item: `${SITE_URL}/${category}/${slug}`,
        },
      ],
    };

    const faqJsonLd = article.faq
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

    return (
      <>
        <script
          id="client-article-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clientArticleJsonLd) }}
        />
        <script
          id="client-breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {faqJsonLd && (
          <script
            id="client-faq-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}

        {/* Visible breadcrumb */}
        <div className="px-5 md:px-20 pt-4 text-sm text-gray-500 bg-[#faf8f4]">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href={`/${category}`} className="hover:text-black capitalize">
            {article.authorCategory || category}
          </Link>
          <span className="mx-2">›</span>
          <span className="font-medium text-black">{article.heading}</span>
        </div>

        <ClientNewsArticle
          article={{ ...article, author: authorData, moreCoverage, relatedStories }}
          category={category}
        />
      </>
    );
  }

  // ── Regular news article ──────────────────────────────────────────────────

  // Related posts — exclude current article
  const filteredCategoryPosts = categoryPosts.filter(
    (item) => item.slug !== slug
  );
  const relatedPosts = filteredCategoryPosts.slice(0, 4);

  const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < categoryPosts.length - 1
      ? categoryPosts[currentIndex + 1]
      : null;

  const shareUrl = `${SITE_URL}/${category}/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.heading);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    url: `${SITE_URL}/${category}/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${category}/${slug}`,
    },
    headline: article.heading,
    description: article.metaDescription,
    articleSection: category,
    image: [`${SITE_URL}${article.image}`],
    datePublished: article.datePublished || new Date(article.date).toISOString(),
    dateModified:
      article.dateModified ||
      article.datePublished ||
      new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: authorData?.name || "Venture Hive Staff",
      url: `${SITE_URL}/authors`,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Venture Hive",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/venture-hive-logo.webp`,
      },
    },
    inLanguage: "en",
    isAccessibleForFree: true,
    keywords: article.hashTags?.join(", "),
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
        name: category,
        item: `${SITE_URL}/${category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.heading,
        item: `${SITE_URL}/${category}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="flex flex-col font-serif min-h-screen bg-zinc-50 font-sans px-5 md:px-20">
        <div className="text-sm text-gray-500 mt-4 mb-2">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link
            href={`/${category}`}
            className="hover:text-black capitalize"
          >
            {category}
          </Link>
          <span className="mx-2">›</span>
          <span className="font-medium text-black">{article.heading}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-4 mb-5">
          <div>
            <div className="flex flex-col items-center text-center space-y-4">
              {/* HERO IMAGE */}
              <div className="relative w-full max-w-3xl aspect-[16/9]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={true}
                  quality={85}
                  fetchPriority="high"
                />
              </div>

              <h1 className="text-2xl md:text-3xl font-semibold max-w-3xl">
                {article.heading}
              </h1>

              <p className="text-sm text-gray-600 max-w-3xl mt-2">
                This report by <strong>Venture Hive</strong>, an independent
                news organization, provides investigative journalism and
                in-depth analysis on major political developments shaping the
                United States.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7">
                    <Image
                      src={authorData.profileImage}
                      alt={authorData.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="28px"
                      loading="lazy"
                    />
                  </div>
                  <Link href="/authors" title={authorData.name}>
                    <span className="font-medium text-xs text-gray-600 hover:text-blue-600 hover:underline transition cursor-pointer">
                      {authorData.name.toUpperCase()}
                    </span>
                  </Link>
                </div>

                <span className="text-gray-600 text-xs">
                  {category.toUpperCase()}
                </span>
                <span className="text-gray-600 text-xs">
                  {article.date.toUpperCase()}
                </span>
              </div>

              <hr className="w-full border border-gray-700 border-solid" />

              <p className="bg-blue-100 text-gray-500 p-2 max-w-3xl">
                {article.content}
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
              <div className="space-y-6 text-sm leading-relaxed text-gray-800 text-left">
                <p className="text-justify">{article.para2}</p>
                <p className="text-justify">{article.para3}</p>

                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={article.deatilImage}
                    alt={article.detailAlt || article.heading}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 400px"
                    loading="lazy"
                  />
                </div>

                <p className="text-justify">{article.para4}</p>
                <p className="text-justify">{article.para5}</p>
                <p className="text-justify">{article.para6}</p>
                <p className="text-justify">{article.para7}</p>
              </div>

              <div className="space-y-6 text-sm leading-relaxed text-gray-800 text-left">
                <p className="text-justify">{article.para8}</p>

                {article.quotes && (
                  <div className="relative border border-gray-800 border-dotted p-5 bg-white text-gray-600 text-center mx-auto max-w-xl text-xl leading-relaxed italic">
                    <div className="text-3xl text-gray-400 mb-2">❝</div>
                    {article.quotes}
                  </div>
                )}

                <p className="text-justify">{article.para9}</p>
                <p className="text-justify">{article.para10}</p>
                <p className="text-justify">{article.para11}</p>

                <h2 className="text-xl font-semibold">
                  {article.samplehead.title}
                </h2>
                <p className="text-justify">{article.samplehead.samplepara1}</p>
                <p className="text-justify">{article.samplehead.samplePara2}</p>
              </div>
            </div>

            <div className="flex justify-center items-center p-5">
              <div className="bg-blue-100 flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-4 p-3 max-w-3xl w-full">
                {article.hashTags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm px-3 py-1 rounded-full text-gray-700 whitespace-nowrap"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 border border-gray-300 border-s-0 border-e-0 p-5 mb-10">
              <span className="text-2xl">~</span>

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

              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                title="Share on Twitter"
                className="w-6 h-6 rotate-45 bg-black flex items-center justify-center"
              >
                <FaXTwitter size={14} className="text-white -rotate-45" />
              </a>

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

            <div className="bg-blue-100 p-4">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                <div className="w-full md:w-1/4 h-48 md:h-auto overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={authorData.profileImage}
                      alt={authorData.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="w-full md:w-3/4 flex flex-col gap-4 p-2 md:p-6">
                  <Link href="/authors" title={authorData.name}>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 cursor-pointer hover:underline">
                      {authorData.name}
                    </h2>
                  </Link>

                  <p className="text-gray-700 leading-relaxed">
                    {authorData.bio}
                  </p>

                  <div className="flex items-center gap-4 text-lg text-gray-800">
                    <a
                      href={authorData.social.quora}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${authorData.name} on Quora`}
                      aria-label={`Visit ${authorData.name} on Quora`}
                      className="hover:text-red-600"
                    >
                      <FaQuora size={18} />
                    </a>

                    <a
                      href={authorData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${authorData.name} on Twitter`}
                      aria-label={`Visit ${authorData.name} on Twitter`}
                      className="hover:text-sky-500"
                    >
                      <FaXTwitter size={18} />
                    </a>

                    <a
                      href={authorData.social.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${authorData.name} on Medium`}
                      aria-label={`Visit ${authorData.name} on Medium`}
                      className="hover:text-black"
                    >
                      <SiMedium size={18} />
                    </a>

                    <a
                      href={authorData.social.reddit}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${authorData.name} on Reddit`}
                      aria-label={`Visit ${authorData.name} on Reddit`}
                      className="hover:text-red-500"
                    >
                      <FaRedditAlien size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
              <div>
                <h2 className="text-lg font-medium border-b pb-2 mb-4">
                  • Related Posts
                </h2>

                <div className="space-y-4">
                  {relatedPosts.map((item, index) => {
                    const itemCategory = item.category || category;
                    return (
                      <Link
                        href={`/${itemCategory}/${item.slug}`}
                        title={item.heading}
                        key={`${item.slug}-${index}`}
                        className="flex items-start gap-4 border-b border-gray-300 pb-3"
                      >
                        <span className="text-xl font-semibold">
                          {index + 1}.
                        </span>
                        <p className="text-sm text-gray-700">{item.heading}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h2 className="text-lg font-medium border-b pb-2 mb-4">
                    • Preview Post
                  </h2>

                  {prevPost ? (
                    <Link
                      href={`/${category}/${prevPost.slug}`}
                      title={prevPost.heading}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-1/4">
                        <div className="relative w-full h-24">
                          <Image
                            src={prevPost.image}
                            alt="Preview"
                            fill
                            className="object-cover rounded"
                            sizes="25vw"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="w-3/4">
                        <h3 className="text-sm font-semibold">
                          {prevPost.heading}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {prevPost.date}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <p className="text-sm text-gray-500">No previous post</p>
                  )}
                </div>

                <div>
                  <h2 className="text-lg font-medium border-b pb-2 mb-4">
                    • Next Post
                  </h2>

                  {nextPost ? (
                    <Link
                      href={`/${category}/${nextPost.slug}`}
                      title={nextPost.heading}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-1/4">
                        <div className="relative w-full h-24">
                          <Image
                            src={nextPost.image}
                            alt="Next Post"
                            fill
                            className="object-cover rounded"
                            sizes="25vw"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="w-3/4">
                        <h3 className="text-sm font-semibold">
                          {nextPost.heading}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {nextPost.date}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <p className="text-sm text-gray-500">No next post</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-5 h-max self-start">
            <RightSidebar
              categoryData={categorypagedata}
              authors={authorsPageData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
