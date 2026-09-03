// app/corrections-policy/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Corrections Policy | VENTURE HIVE",
  description:
    "Read the VENTURE HIVE Corrections Policy. How we identify, review, and publicly correct factual errors in our independent news reporting.",
  alternates: { canonical: "https://www.venture-hive.com/corrections-policy" },
  openGraph: {
    title: "Corrections Policy | VENTURE HIVE",
    description: "How VENTURE HIVE identifies and corrects errors in published journalism.",
    url: "https://www.venture-hive.com/corrections-policy",
    siteName: "VENTURE HIVE",
    images: [{ url: "https://www.venture-hive.com/images/venture-hive-logo.webp", width: 1200, height: 630, alt: "VENTURE HIVE Corrections Policy" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | VENTURE HIVE",
    description: "How VENTURE HIVE corrects errors in published news reporting.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

const ERROR_TYPES = [
  {
    title: "Typographical and Minor Errors",
    body: "Spelling mistakes, grammatical errors, and formatting issues that do not affect the factual meaning of an article are corrected as routine maintenance. No formal correction note is required.",
  },
  {
    title: "Factual Errors",
    body: "Errors involving incorrect names, dates, figures, quotes, or descriptions of events are corrected directly in the article. A clearly labelled correction note is appended stating what was reported, what was incorrect, and what the correct information is.",
  },
  {
    title: "Contextual Errors",
    body: "Where missing context materially changed the meaning or fairness of a story, a clarification note is added. The original text is preserved alongside the clarification so readers can see what changed.",
  },
  {
    title: "Developing Story Updates",
    body: "Articles on fast-moving events are updated with timestamped update notes when significant new verified information becomes available. Readers can see when and how the article changed.",
  },
  {
    title: "Significant Errors",
    body: "Where an error fundamentally misrepresents a person, event, or the central claim of a story, a senior editor reviews the article. A full correction or editor's note is placed prominently at the top of the article.",
  },
];

export default function CorrectionsPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/corrections-policy#webpage",
    name: "Corrections Policy | VENTURE HIVE",
    url: "https://www.venture-hive.com/corrections-policy",
    description: "VENTURE HIVE corrections policy for handling factual errors in published journalism.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "VENTURE HIVE",
      url: "https://www.venture-hive.com",
      logo: { "@type": "ImageObject", url: "https://www.venture-hive.com/images/venture-hive-logo.webp" },
      correctionsPolicy: "https://www.venture-hive.com/corrections-policy",
    },
    dateModified: "2025-01-01",
    inLanguage: "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.venture-hive.com" },
      { "@type": "ListItem", position: 2, name: "Corrections Policy", item: "https://www.venture-hive.com/corrections-policy" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl font-semibold text-center">
            Corrections Policy
          </h1>

          <p className="text-sm text-gray-600 text-center">
            How VENTURE HIVE handles errors and maintains accuracy in independent journalism
          </p>

          <p className="text-gray-700 leading-relaxed">
            Accuracy is the foundation of VENTURE HIVE&apos;s journalism. We publish carefully,
            but no newsroom is perfect. When we get something wrong, we correct it openly —
            in the original article, with a clear note, where readers can find it.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">How We Classify Errors</h2>

          <p className="text-gray-600 text-sm">
            Different types of errors require different responses. Here is how VENTURE HIVE
            classifies and handles each:
          </p>

          <div className="space-y-4">
            {ERROR_TYPES.map(({ title, body }) => (
              <div key={title} className="bg-white border border-zinc-200 p-5">
                <h3 className="font-semibold text-zinc-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Where Corrections Appear</h2>
          <p className="text-gray-700 leading-relaxed">
            All corrections appear in the original article — not on a separate page that most
            readers will never visit. VENTURE HIVE does not silently delete inaccurate
            content and rewrite it as if the error never happened. Correction notes are
            clearly labelled and dated so readers know when a change was made.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Where an error affected the headline or the central claim of a story, a
            prominent correction note is placed at the top of the article. Update notes
            for developing stories also appear at the top with timestamps.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">How to Submit a Correction</h2>
          <p className="text-gray-700 leading-relaxed">
            If you believe VENTURE HIVE has published inaccurate information, contact
            our corrections team. To help us review your request quickly, please include:
          </p>

          <ul className="list-none space-y-2 text-gray-700 text-sm">
            {[
              "The URL or headline of the article",
              "The specific sentence, figure, or claim you believe is incorrect",
              "The correct information and how you know it",
              "Any supporting documents, official records, or verifiable sources",
              "Your contact details in case we need to follow up",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 bg-white border border-zinc-200 px-4 py-3">
                <span className="text-zinc-400 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white border border-zinc-200 p-5">
            <p className="text-sm font-semibold text-zinc-700 mb-1">Corrections Contact</p>
            <a href="mailto:corrections@venture-hive.com" title="Submit a correction to VENTURE HIVE"
              className="text-sm underline text-zinc-600 hover:text-zinc-900">
              corrections@venture-hive.com
            </a>
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Our Commitments</h2>

          <div className="space-y-3">
            {[
              "We do not remove errors without acknowledgment — every change to published content is documented.",
              "We correct inaccuracies regardless of who or what they implicate.",
              "We do not treat reader correction requests as complaints to be dismissed — they are reviewed seriously.",
              "Legal pressure alone is not a basis for altering accurate, verified reporting.",
              "Corrections are placed where they can be found — not buried in fine print.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="text-zinc-500 mt-0.5 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Source Methodology", href: "/source-methodology" },
              { label: "Right of Reply", href: "/right-of-reply" },
              { label: "Legal", href: "/legal" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} title={label}
                className="border border-zinc-300 px-4 py-2 text-sm text-zinc-600 hover:border-zinc-800 hover:text-zinc-800 transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            © 2025 VENTURE HIVE · Independent Journalism
          </p>

        </div>
      </div>
    </>
  );
}
