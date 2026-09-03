// app/advertising-policy/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Advertising Policy | VENTURE HIVE",
  description:
    "Read the VENTURE HIVE Advertising Policy. How we label sponsored content, separate advertising from independent journalism, and handle commercial relationships.",
  alternates: { canonical: "https://www.venture-hive.com/advertising-policy" },
  openGraph: {
    title: "Advertising Policy | VENTURE HIVE",
    description: "How VENTURE HIVE labels advertising and separates commercial content from independent journalism.",
    url: "https://www.venture-hive.com/advertising-policy",
    siteName: "VENTURE HIVE",
    images: [{ url: "https://www.venture-hive.com/images/venture-hive-logo.webp", width: 1200, height: 630, alt: "VENTURE HIVE Advertising Policy" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising Policy | VENTURE HIVE",
    description: "How VENTURE HIVE labels ads and separates commercial content from journalism.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

export default function AdvertisingPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/advertising-policy#webpage",
    name: "Advertising Policy | VENTURE HIVE",
    url: "https://www.venture-hive.com/advertising-policy",
    description: "VENTURE HIVE advertising and sponsored content policy.",
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
      { "@type": "ListItem", position: 2, name: "Advertising Policy", item: "https://www.venture-hive.com/advertising-policy" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl font-semibold text-center">
            Advertising Policy
          </h1>

          <p className="text-sm text-gray-600 text-center">
            How VENTURE HIVE separates commercial content from independent journalism
          </p>

          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE carries advertising to sustain its operations as an independent
            journalism platform. The guiding principle of this policy is simple: a reader
            should never have to guess whether what they are reading is independent
            journalism or commercial content.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">The Core Rule</h2>
          <p className="text-gray-700 leading-relaxed">
            Purchasing advertising space on VENTURE HIVE does not give any brand, company,
            or individual the right to influence our editorial content. Advertisers have no
            authority over what we cover, how we frame stories, whether we publish
            critical coverage of them, or the timing of any publication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If an advertiser attempts to use a commercial relationship to gain editorial
            influence, the relationship is terminated.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">How Commercial Content Is Labelled</h2>

          <div className="space-y-4">
            {[
              {
                title: "Display Advertising",
                label: "Label: Advertisement",
                body: "Standard display ads served across the platform. Clearly marked 'Advertisement' and visually distinct from editorial articles at all times. Advertisers have no knowledge of surrounding editorial content before publication.",
              },
              {
                title: "Sponsored Content",
                label: "Label: Sponsored / Paid Partnership",
                body: "Articles or features produced in collaboration with a commercial partner. Always identified with a clear 'Sponsored by' or 'Paid Partnership' label at the top of the content. Uses a different visual template from VENTURE HIVE editorial content.",
              },
              {
                title: "Affiliate Links",
                label: "Label: We may earn a commission",
                body: "Where VENTURE HIVE links to products or services and may receive a referral fee, this is disclosed clearly in or near the content. Affiliate relationships do not influence the editorial assessment of any linked product.",
              },
              {
                title: "Newsletter Sponsorships",
                label: "Label: Presented by / Sponsored",
                body: "Sponsor mentions in VENTURE HIVE newsletters are labelled at the point of placement and are visually separate from editorial content. Newsletter sponsors have no influence over editorial content.",
              },
            ].map(({ title, label, body }) => (
              <div key={title} className="bg-white border border-zinc-200">
                <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100 flex-wrap gap-2">
                  <h3 className="font-semibold text-zinc-800 text-sm">{title}</h3>
                  <span className="text-xs bg-zinc-800 text-white px-3 py-1">{label}</span>
                </div>
                <p className="px-5 py-4 text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">What Advertisers Cannot Do</h2>

          <div className="space-y-2">
            {[
              "Purchase editorial coverage, positive reviews, or story placement in exchange for spend",
              "Request the removal or softening of negative or critical editorial coverage",
              "Receive advance sight of articles before publication",
              "Use VENTURE HIVE editorial bylines or article templates for commercial content without clear labelling",
              "Exert any direct influence over VENTURE HIVE's independent reporting",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-red-50 border border-red-200 px-5 py-3 text-sm text-zinc-700">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Political Advertising</h2>
          <p className="text-gray-700 leading-relaxed">
            Where VENTURE HIVE accepts political or advocacy advertising, it is clearly
            labelled as commercial content and does not use editorial formatting that
            could cause it to be mistaken for independent journalism. Acceptance of
            political advertising does not constitute VENTURE HIVE&apos;s endorsement of any
            candidate, party, or campaign claim.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Complaints About Commercial Content</h2>
          <p className="text-gray-700 leading-relaxed">
            If you believe VENTURE HIVE commercial content is mislabelled, or that an
            advertising relationship has influenced editorial content, contact us. We
            investigate every substantive complaint.
          </p>

          <div className="bg-white border border-zinc-200 p-5 flex flex-col sm:flex-row gap-4">
            {[
              { label: "Reader Complaints", email: "corrections@venture-hive.com" },
              { label: "Advertising Enquiries", email: "editorial@venture-hive.com" },
            ].map(({ label, email }) => (
              <div key={label}>
                <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{label}</p>
                <a href={`mailto:${email}`} title={label} className="text-sm underline text-zinc-700 hover:text-zinc-900">{email}</a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Ownership & Funding", href: "/ownership-funding" },
              { label: "Corrections Policy", href: "/corrections-policy" },
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
