// app/legal/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Legal | VENTURE HIVE",
  description:
    "Legal information for VENTURE HIVE covering copyright, content reuse, reader complaints, permissions, formal notices, and how to contact us for legal matters.",
  alternates: { canonical: "https://www.venture-hive.com/legal" },
  openGraph: {
    title: "Legal | VENTURE HIVE",
    description:
      "Copyright, content reuse, permissions, complaints, and formal legal contact information for VENTURE HIVE.",
    url: "https://www.venture-hive.com/legal",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://www.venture-hive.com/images/venture-hive-logo.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE Legal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | VENTURE HIVE",
    description:
      "Copyright, reuse, permissions, and legal contact information for VENTURE HIVE.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

const SECTIONS = [
  {
    id: "informational-use",
    title: "Informational Use of VENTURE HIVE Content",
    paras: [
      "VENTURE HIVE publishes journalism, analysis, and explanatory reporting for informational purposes. Articles reflect verified information at the time of publication and are edited to newsroom standards.",
      "Content on VENTURE HIVE should not be treated as professional legal, financial, medical, or investment advice. For stories that touch on those areas, we use precise language and indicate clearly when professional advice should be sought.",
      "In fast-moving situations — legal proceedings, regulatory changes, developing investigations — articles may be updated as new verified information becomes available. Readers relying on time-sensitive information for decisions should verify against primary sources.",
    ],
  },
  {
    id: "copyright",
    title: "Copyright and Intellectual Property",
    paras: [
      "All original content published on VENTURE HIVE — including articles, headlines, analysis, photographs, graphics, and data — is protected by copyright law and is owned by VENTURE HIVE or its contributing authors and licensors.",
      "Readers may link to VENTURE HIVE articles and quote brief excerpts with clear attribution and a direct link to the original article, where applicable law permits. Brief quotation for journalistic commentary, academic citation, or educational use with attribution is permitted under standard fair use principles.",
    ],
    box: {
      heading: "The following require prior written permission:",
      items: [
        "Republishing full articles or substantial portions in any medium",
        "Commercial licensing, syndication, or redistribution of VENTURE HIVE content",
        "Systematic scraping, copying, or automated archiving of platform content",
        "Derivative works based on VENTURE HIVE original reporting or data",
        "Use of VENTURE HIVE branding, logos, or visual identity assets",
      ],
    },
    postBox:
      "To request reuse permissions or syndication licences, contact legal@venture-hive.com with a description of the intended use.",
  },
  {
    id: "complaints",
    title: "Complaints About Accuracy, Rights, or Fairness",
    paras: [
      "If you believe a VENTURE HIVE article contains a material factual error, misrepresents your position, infringes your rights, or raises a serious legal concern, contact the newsroom directly.",
    ],
    subtitled: [
      {
        subtitle: "Factual errors",
        text: "Reviewed under our Corrections Policy. Include the article URL, the specific claim you believe is incorrect, the correct information, and any supporting documentation.",
      },
      {
        subtitle: "Fairness and response requests",
        text: "Handled under our Right of Reply Policy. If you were the subject of coverage and believe your position was not fairly represented, contact editorial@venture-hive.com.",
      },
      {
        subtitle: "Copyright, defamation, or privacy complaints",
        text: "Directed to legal@venture-hive.com. Include the article URL, the specific content at issue, the legal basis for your complaint, and your contact details.",
      },
    ],
  },
  {
    id: "removal-requests",
    title: "Removal, Restriction, and Formal Requests",
    paras: [
      "VENTURE HIVE reviews substantive requests for correction, clarification, update, or removal of published content. Submission of a formal request does not guarantee removal or immediate depublication.",
      "Our standard is to evaluate requests against the public record, our editorial standards, applicable law, and the public interest value of the content. In many cases the appropriate response is a correction, clarification, or follow-up article rather than removal.",
      "VENTURE HIVE does not remove verified, accurate reporting in response to legal threats alone. If you have a legitimate legal basis for a formal request, describe it clearly and specifically. Our team will assess it on its merits.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Sources and External Links",
    paras: [
      "VENTURE HIVE links to third-party sources — official records, government databases, research institutions, and other news organisations — for sourcing transparency and reader context. Those properties are governed by their own terms and policies.",
      "A link to a third-party source does not mean VENTURE HIVE endorses all content or policies on that site. We link to primary sources to give readers access to the underlying record.",
      "VENTURE HIVE is not responsible for the accuracy, availability, or content of external websites linked in our reporting.",
    ],
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    paras: [
      "VENTURE HIVE content is provided for informational purposes only. To the fullest extent permitted by applicable law, VENTURE HIVE and its editors, contributors, and authors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or reliance on content published on this platform.",
      "VENTURE HIVE makes no warranties, express or implied, regarding the completeness, accuracy, or reliability of any content. Articles reflect verified information at the time of publication. No content on VENTURE HIVE should be treated as a guarantee of ongoing accuracy in rapidly changing situations.",
    ],
  },
];

export default function LegalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/legal#webpage",
    name: "Legal | VENTURE HIVE",
    url: "https://www.venture-hive.com/legal",
    description:
      "Legal information for VENTURE HIVE covering copyright, content reuse, formal notices, permissions, and complaints.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "VENTURE HIVE",
      url: "https://www.venture-hive.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.venture-hive.com/images/venture-hive-logo.webp",
      },
    },
    dateModified: "2025-01-01",
    inLanguage: "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.venture-hive.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal",
        item: "https://www.venture-hive.com/legal",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl font-semibold text-center">Legal</h1>

          <p className="text-sm text-gray-600 text-center">
            Copyright, reuse, complaints, formal notices, and legal contact for VENTURE HIVE
          </p>

          <p className="text-gray-700 leading-relaxed">
            This page provides a plain-language overview of the legal frameworks that
            apply to VENTURE HIVE and its readers — covering copyright, content reuse,
            complaints about accuracy or rights, how to submit formal removal requests,
            and how to contact us for legal matters.
          </p>

          {/* Table of contents */}
          <div className="bg-white border border-zinc-200 p-5">
            <p className="text-xs text-zinc-400 uppercase tracking-wide font-sans mb-3">
              Contents
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    title={`Jump to: ${s.title}`}
                    className="text-sm text-zinc-700 underline hover:text-zinc-900 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <hr aria-hidden="true" />

          {/* Sections */}
          {SECTIONS.map((section, si) => (
            <div key={section.id} id={section.id} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>

              {section.paras.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.box && (
                <div className="bg-zinc-800 text-white p-5">
                  <p className="text-xs uppercase tracking-wide text-zinc-400 mb-3 font-sans">
                    {section.box.heading}
                  </p>
                  <ul className="space-y-2">
                    {section.box.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-zinc-300"
                      >
                        <span className="text-zinc-500 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.postBox && (
                <p className="text-gray-700 leading-relaxed text-sm">
                  {section.postBox}
                </p>
              )}

              {section.subtitled && (
                <div className="space-y-3">
                  {section.subtitled.map(({ subtitle, text }) => (
                    <div
                      key={subtitle}
                      className="bg-white border border-zinc-200 p-5"
                    >
                      <h3 className="font-semibold text-zinc-800 text-sm mb-1 uppercase tracking-wide">
                        {subtitle}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {si < SECTIONS.length - 1 && <hr aria-hidden="true" />}
            </div>
          ))}

          <hr aria-hidden="true" />

          {/* Contact directory */}
          <h2 className="text-2xl font-semibold">Legal Contact Directory</h2>
          <p className="text-gray-700 leading-relaxed">
            Route your enquiry to the right team:
          </p>

          <div className="bg-white border border-zinc-200 divide-y divide-zinc-100">
            {[
              {
                label: "General Legal & Formal Notices",
                email: "legal@venture-hive.com",
                note: "DMCA notices, rights complaints, formal permissions, legal correspondence",
              },
              {
                label: "Editorial & Corrections",
                email: "editorial@venture-hive.com",
                note: "Factual disputes, correction requests, reply submissions, editorial questions",
              },
              {
                label: "Corrections",
                email: "corrections@venture-hive.com",
                note: "Dedicated inbox for factual error reports",
              },
              {
                label: "Permissions & Syndication",
                email: "legal@venture-hive.com",
                note: "Reuse requests, syndication licences, content partnerships",
              },
              {
                label: "Privacy",
                email: "privacy@venture-hive.com",
                note: "Data subject requests and privacy-related correspondence",
              },
              {
                label: "Confidential Tips",
                email: "tips@venture-hive.com",
                note: "Source protection and sensitive document submissions",
              },
            ].map(({ label, email, note }) => (
              <div
                key={label}
                className="flex items-start justify-between px-5 py-4 gap-4 flex-wrap"
              >
                <div>
                  <p className="font-semibold text-sm text-zinc-800">{label}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{note}</p>
                </div>
                <a
                  href={`mailto:${email}`}
                  title={`VENTURE HIVE — ${label}`}
                  className="text-sm underline text-zinc-600 hover:text-zinc-900 font-mono shrink-0"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="bg-zinc-800 text-white p-5">
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2 font-sans">
              Note
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              VENTURE HIVE does not remove verified, accurate reporting in response to
              legal pressure alone. All formal requests are assessed on their legal
              merits. Correspondence that does not identify a specific legal basis will
              not result in editorial changes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Corrections Policy", href: "/corrections-policy" },
              { label: "Source Methodology", href: "/source-methodology" },
              { label: "Ownership & Funding", href: "/ownership-funding" },
              { label: "Advertising Policy", href: "/advertising-policy" },
              { label: "Right of Reply", href: "/right-of-reply" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-and-conditions" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                title={label}
                className="border border-zinc-300 px-4 py-2 text-sm text-zinc-600 hover:border-zinc-800 hover:text-zinc-800 transition-colors"
              >
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