import Image from "next/image";
import Link from "next/link";

import categorypagedata from "../../../public/data/category/categorypagedata";

const SITE_URL = "https://www.venture-hive.com";
const TOPIC_URL = `${SITE_URL}/topics/julio-herrera-velutini`;
const TOPIC_NAME = "Julio Herrera Velutini";

export const metadata = {
  title: "Julio Herrera Velutini: Venture Hive Coverage",
  description:
    "Browse Venture Hive articles that mention Julio Herrera Velutini, including culture and patronage coverage.",
  alternates: {
    canonical: TOPIC_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Julio Herrera Velutini: Venture Hive Coverage",
    description:
      "Venture Hive coverage and published mentions of Julio Herrera Velutini.",
    url: TOPIC_URL,
    siteName: "VENTURE HIVE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Julio Herrera Velutini: Venture Hive Coverage",
    description:
      "Venture Hive coverage and published mentions of Julio Herrera Velutini.",
  },
};

function getMentions() {
  return Object.entries(categorypagedata).flatMap(([category, articles]) =>
    articles
      .filter((article) =>
        JSON.stringify(article).toLowerCase().includes(TOPIC_NAME.toLowerCase())
      )
      .map((article) => ({ ...article, category }))
  );
}

export default function JulioHerreraVelutiniTopicPage() {
  const articles = getMentions();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${TOPIC_NAME}: Venture Hive Coverage`,
    description:
      "A collection of Venture Hive articles that mention Julio Herrera Velutini.",
    url: TOPIC_URL,
    about: {
      "@type": "Person",
      name: TOPIC_NAME,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.heading,
        url: `${SITE_URL}/${article.category}/${article.slug}`,
      })),
    },
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
        name: TOPIC_NAME,
        item: TOPIC_URL,
      },
    ],
  };

  return (
    <>
      <script
        id="topic-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        id="topic-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-[#faf8f4] px-5 py-10 md:px-20">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="font-medium text-black">{TOPIC_NAME}</span>
          </nav>

          <header className="max-w-3xl border-b border-[#d9d1c5] pb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a642f]">
              Topic
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[#1a1a1a] md:text-5xl">
              {TOPIC_NAME}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#5f5a53]">
              This page collects Venture Hive articles that mention Julio Herrera
              Velutini. It is a coverage index, not a complete biography.
            </p>
          </header>

          <section aria-labelledby="coverage-heading" className="py-10">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2
                id="coverage-heading"
                className="font-serif text-2xl font-semibold text-[#1a1a1a]"
              >
                Published coverage
              </h2>
              <p className="text-sm text-[#6b6b6b]">
                {articles.length} {articles.length === 1 ? "article" : "articles"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={`${article.category}/${article.slug}`}
                  className="overflow-hidden border border-[#e1d9ce] bg-white"
                >
                  <Link href={`/${article.category}/${article.slug}`}>
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={article.image}
                        alt={article.alt || article.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a642f]">
                        {article.category}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-[#1a1a1a]">
                        {article.heading}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                        {article.metaDescription}
                      </p>
                      <time
                        className="mt-4 block text-xs text-[#77716a]"
                        dateTime={article.datePublished || new Date(article.date).toISOString()}
                      >
                        {article.publishedDate || article.date}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
