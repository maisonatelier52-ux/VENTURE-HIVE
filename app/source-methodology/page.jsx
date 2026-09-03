// app/source-methodology/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Source Methodology | VENTURE HIVE",
  description:
    "Read VENTURE HIVE's Source Methodology. How our independent journalism team gathers, verifies, and attributes information in news reporting and investigations.",
  alternates: { canonical: "https://www.venture-hive.com/source-methodology" },
  openGraph: {
    title: "Source Methodology | VENTURE HIVE",
    description: "How VENTURE HIVE sources, verifies, and attributes information in news reporting.",
    url: "https://www.venture-hive.com/source-methodology",
    siteName: "VENTURE HIVE",
    images: [{ url: "https://www.venture-hive.com/images/venture-hive-logo.webp", width: 1200, height: 630, alt: "VENTURE HIVE Source Methodology" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Source Methodology | VENTURE HIVE",
    description: "How VENTURE HIVE gathers and verifies sources for independent journalism.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

export default function SourceMethodology() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/source-methodology#webpage",
    name: "Source Methodology | VENTURE HIVE",
    url: "https://www.venture-hive.com/source-methodology",
    description: "VENTURE HIVE's sourcing standards and verification methodology for independent journalism.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "VENTURE HIVE",
      url: "https://www.venture-hive.com",
      logo: { "@type": "ImageObject", url: "https://www.venture-hive.com/images/venture-hive-logo.webp" },
    },
    dateModified: "2025-01-01",
    inLanguage: "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.venture-hive.com" },
      { "@type": "ListItem", position: 2, name: "Source Methodology", item: "https://www.venture-hive.com/source-methodology" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl font-semibold text-center">
            Source Methodology
          </h1>

          <p className="text-sm text-gray-600 text-center">
            How VENTURE HIVE gathers, verifies, and attributes information in independent journalism
          </p>

          <p className="text-gray-700 leading-relaxed">
            Readers deserve to know not just what VENTURE HIVE reported — but how we know
            it. This page explains the sourcing standards and verification practices that
            apply to every article we publish, from breaking news to long-form investigation.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">How Reporting Begins</h2>
          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE journalists start with verifiable material rather than
            aggregated summaries. Where possible this means original documents,
            firsthand accounts, official records, institutional data, or on-the-record
            interviews. We do not republish press releases, social media posts, or wire
            copy without independent verification of the core claims.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Source Hierarchy</h2>
          <p className="text-gray-700 leading-relaxed">
            Not all sources carry equal weight. VENTURE HIVE applies the following
            tiered approach to source reliability:
          </p>

          <div className="space-y-3">
            {[
              {
                tier: "Primary — Highest Weight",
                items: ["Official documents, filings, and government records", "Court transcripts and legal filings", "First-hand on-the-record witness accounts", "Institutional data from verified organisations"],
                style: "border-l-4 border-zinc-800",
              },
              {
                tier: "Secondary — Standard Weight",
                items: ["Reporting from established outlets with identified primary sources", "Expert analysis with documented methodology", "Official statements cross-referenced against other sources"],
                style: "border-l-4 border-zinc-400",
              },
              {
                tier: "Tertiary — Context Only",
                items: ["Social media posts (leads only, never standalone evidence)", "Unverified tips awaiting corroboration", "Aggregated reporting without primary source identification"],
                style: "border-l-4 border-zinc-200",
              },
            ].map(({ tier, items, style }) => (
              <div key={tier} className={`bg-white ${style} pl-5 pr-5 py-4`}>
                <h3 className="font-semibold text-sm text-zinc-700 mb-2 uppercase tracking-wide">{tier}</h3>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-zinc-400 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Verification Standards</h2>
          <p className="text-gray-700 leading-relaxed">
            Before a factual claim is published, contributors are expected to verify
            it through at least one of the following methods:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Review of a primary document or official record",
              "On-the-record confirmation from a direct participant",
              "Independent corroboration from a second unconnected source",
              "Cross-referencing with verified institutional data",
            ].map((item) => (
              <div key={item} className="bg-white border border-zinc-200 px-4 py-3 flex items-start gap-2 text-sm text-gray-700">
                <span className="text-zinc-500 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Where verification is incomplete, that limitation is stated explicitly in
            the article. We use language like &quot;could not be independently verified&quot; or
            &quot;according to a single source&quot; rather than presenting uncertain information
            as confirmed fact.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Anonymous Sources</h2>
          <p className="text-gray-700 leading-relaxed">
            Anonymity is a last resort at VENTURE HIVE — not a default. We grant source
            anonymity only when the information is in the public interest and cannot be
            obtained on the record without exposing the source to genuine risk. Before
            anonymity is granted, an editor assesses the source&apos;s firsthand knowledge,
            their potential bias, and whether documentary corroboration exists.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Articles with anonymous sources describe the source in terms that give
            readers meaningful context — their role, their access to the information,
            and why their identity is being protected — without identifying them.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Uncertainty and Change</h2>
          <div className="space-y-3">
            {[
              "We do not convert uncertainty into certainty for the sake of a stronger headline.",
              "We distinguish clearly between what we know, what we believe, and what we cannot confirm.",
              "When better information becomes available, articles are updated with timestamped notes.",
              "Developing stories are monitored and updated as new verified facts emerge.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="text-zinc-400 mt-0.5">◎</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Contact on Sourcing</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have a question about how a specific story was sourced, or want
            to submit documents or information to our newsroom, contact us below.
          </p>
          <div className="bg-white border border-zinc-200 p-5 flex flex-col sm:flex-row gap-4">
            {[
              { label: "Editorial", email: "editorial@venture-hive.com" },
              { label: "Tips", email: "tips@venture-hive.com" },
            ].map(({ label, email }) => (
              <div key={label}>
                <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{label}</p>
                <a href={`mailto:${email}`} title={`${label} contact`}
                  className="text-sm underline text-zinc-700 hover:text-zinc-900">{email}</a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Corrections Policy", href: "/corrections-policy" },
              { label: "Advertising Policy", href: "/advertising-policy" },
              { label: "Right of Reply", href: "/right-of-reply" },
              { label: "Ownership & Funding", href: "/ownership-funding" },
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
