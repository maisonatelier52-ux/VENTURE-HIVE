// app/editorial-policy/page.jsx

export const metadata = {
  title: "Editorial Policy | VENTURE HIVE",
  description:
    "Read VENTURE HIVE's editorial policy covering accuracy, independence, fairness, source standards, and how our independent journalism team makes coverage decisions.",
  alternates: { canonical: "https://www.venture-hive.com/editorial-policy" },
  openGraph: {
    title: "Editorial Policy | VENTURE HIVE",
    description:
      "VENTURE HIVE's editorial standards: accuracy, independence, fairness, and transparency in independent journalism.",
    url: "https://www.venture-hive.com/editorial-policy",
    siteName: "VENTURE HIVE",
    images: [{ url: "https://www.venture-hive.com/images/venture-hive-logo.webp", width: 1200, height: 630, alt: "VENTURE HIVE Editorial Policy" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | VENTURE HIVE",
    description: "How VENTURE HIVE makes editorial decisions and maintains journalistic standards.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

import Link from "next/link";

export default function EditorialPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/editorial-policy#webpage",
    name: "Editorial Policy | VENTURE HIVE",
    url: "https://www.venture-hive.com/editorial-policy",
    description: "VENTURE HIVE editorial policy covering accuracy, independence, and journalistic standards.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "VENTURE HIVE",
      url: "https://www.venture-hive.com",
      logo: { "@type": "ImageObject", url: "https://www.venture-hive.com/images/venture-hive-logo.webp" },
      ethicsPolicy: "https://www.venture-hive.com/editorial-policy",
      publishingPrinciples: "https://www.venture-hive.com/editorial-policy",
    },
    dateModified: "2025-01-01",
    inLanguage: "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.venture-hive.com" },
      { "@type": "ListItem", position: 2, name: "Editorial Policy", item: "https://www.venture-hive.com/editorial-policy" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl font-semibold text-center">
            Editorial Policy
          </h1>

          <p className="text-sm text-gray-600 text-center">
            How VENTURE HIVE makes editorial decisions and upholds independent journalistic standards
          </p>

          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE is an independent digital newspaper. Every editorial
            decision we make is guided by one principle: serving the reader
            with accurate, fair, and clearly sourced journalism. This policy
            sets out the standards we apply to every article we publish.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Editorial Independence</h2>
          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE operates with full editorial independence. No advertiser,
            investor, sponsor, or external organisation has any influence over
            what we cover, how we frame it, or whether we publish it.
            Commercial relationships are managed entirely outside our newsroom.
            If a journalist has a personal or financial connection to a story,
            they are removed from covering it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We do not accept gifts, paid travel, or any form of consideration
            from sources or subjects of our reporting. Editorial decisions are
            made based on newsworthiness and the public interest — not
            commercial relationships.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Accuracy and Verification</h2>
          <p className="text-gray-700 leading-relaxed">
            Before any factual claim is published, our contributors are expected
            to verify it through at least one of the following: primary
            documentation, direct on-the-record sourcing, or independent
            corroboration from a second unconnected source.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We do not publish claims based solely on social media posts,
            anonymous online accounts, or press releases without additional
            verification. Where information could not be independently
            confirmed, we say so clearly in the article.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Fairness and Proportionality</h2>
          <p className="text-gray-700 leading-relaxed">
            Stories that contain criticism or adverse allegations about an
            identifiable individual or organisation are put to that subject
            before publication where possible. We document outreach attempts
            and include responses — or note their absence — in the article.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Fairness does not mean false equivalence. We do not give equal
            weight to claims that are not supported by evidence simply to
            appear balanced. Our editorial judgement is guided by what the
            facts support. For how we handle formal responses, see our{" "}
            <Link href="/right-of-reply" title="Right of Reply" className="underline text-zinc-700 hover:text-zinc-900">
              Right of Reply Policy
            </Link>.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Content Labelling</h2>
          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE clearly distinguishes between the following types of content:
          </p>
          <ul className="list-none space-y-2 text-gray-700">
            {[
              "News — independently verified, factual reporting",
              "Analysis — contextual reporting with editorial interpretation, clearly labelled",
              "Opinion — viewpoints by named contributors, labelled as opinion and not the position of VENTURE HIVE",
              "Sponsored content — commercial or partner-funded material, always labelled and kept visually separate from editorial content",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-zinc-400">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Corrections and Accountability</h2>
          <p className="text-gray-700 leading-relaxed">
            When VENTURE HIVE makes an error, we correct it openly and promptly.
            Corrections appear in the original article with a note stating what
            was wrong and what the correct information is. We do not silently
            rewrite published content. For full details, see our{" "}
            <Link href="/corrections-policy" title="Corrections Policy" className="underline text-zinc-700 hover:text-zinc-900">
              Corrections Policy
            </Link>.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Privacy and Ethical Conduct</h2>
          <p className="text-gray-700 leading-relaxed">
            Private information about individuals is published only when it is
            directly relevant to a matter of clear public interest. Particular
            care is taken in coverage involving minors, victims of crime, and
            individuals experiencing mental health difficulties. Source identities
            are protected and confidentiality is strictly maintained.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Reader Feedback</h2>
          <p className="text-gray-700 leading-relaxed">
            We welcome feedback on our coverage. If you believe an article
            has contained an error, left out a relevant perspective, or fallen
            short of our stated standards — contact us.
          </p>

          <div className="bg-white border border-zinc-200 p-5">
            <p className="text-sm font-semibold text-zinc-700 mb-1">Editorial Contact</p>
            <a href="mailto:editorial@venture-hive.com" title="Contact the VENTURE HIVE editorial team"
              className="text-sm underline text-zinc-600 hover:text-zinc-900">
              editorial@venture-hive.com
            </a>
          </div>

          {/* Related */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              { label: "Corrections Policy", href: "/corrections-policy" },
              { label: "Source Methodology", href: "/source-methodology" },
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