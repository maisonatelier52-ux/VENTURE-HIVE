// app/right-of-reply/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Right of Reply | VENTURE HIVE",
  description:
    "Read the VENTURE HIVE Right of Reply policy. How individuals and organisations featured in our independent journalism can request a response opportunity before or after publication.",
  alternates: { canonical: "https://www.venture-hive.com/right-of-reply" },
  openGraph: {
    title: "Right of Reply | VENTURE HIVE",
    description:
      "How VENTURE HIVE gives individuals and organisations the opportunity to respond to coverage before and after publication.",
    url: "https://www.venture-hive.com/right-of-reply",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://www.venture-hive.com/images/venture-hive-logo.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE Right of Reply",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Right of Reply | VENTURE HIVE",
    description:
      "How VENTURE HIVE handles reply requests for individuals and organisations in our reporting.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

export default function RightOfReply() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/right-of-reply#webpage",
    name: "Right of Reply | VENTURE HIVE",
    url: "https://www.venture-hive.com/right-of-reply",
    description:
      "VENTURE HIVE's right of reply policy for individuals and organisations featured in its journalism.",
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
        name: "Right of Reply",
        item: "https://www.venture-hive.com/right-of-reply",
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

          <h1 className="text-4xl font-semibold text-center">
            Right of Reply
          </h1>

          <p className="text-sm text-gray-600 text-center">
            How VENTURE HIVE gives individuals and organisations a fair opportunity to respond to coverage
          </p>

          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE believes that people and organisations named in critical or
            adverse coverage deserve a reasonable opportunity to respond. This policy
            explains when we seek responses before publication, how we handle formal
            reply requests after a story is live, and what a right of reply does and
            does not guarantee.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Pre-Publication Outreach</h2>
          <p className="text-gray-700 leading-relaxed">
            Before publishing a story that contains criticism, serious allegations, or
            materially adverse claims about an identifiable person or organisation,
            VENTURE HIVE journalists aim to contact the subject directly. Our
            pre-publication process follows these steps:
          </p>

          <div className="space-y-3">
            {[
              {
                step: "01",
                title: "Direct contact",
                body: "We reach out through official channels, public representatives, or legal counsel as appropriate. All outreach attempts are documented with timestamps.",
              },
              {
                step: "02",
                title: "Clear questions",
                body: "We tell the subject precisely what we intend to report and put specific questions — not vague summaries. Subjects know exactly what they are being asked to respond to.",
              },
              {
                step: "03",
                title: "Reasonable response window",
                body: "The deadline for response is proportionate to the urgency of the story. Breaking news may allow a shorter window; investigations provide more time where the timeline allows.",
              },
              {
                step: "04",
                title: "Response included in the article",
                body: "Where a response is received, it appears in the article fairly and in full — or accurately summarised where length requires. Where no response is received, the article notes the outreach attempt and the absence of a reply.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-white border border-zinc-200 p-5 flex gap-5">
                <span className="text-3xl font-semibold text-zinc-200 leading-none shrink-0 mt-1">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-800 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">
            When Pre-Publication Outreach May Not Be Possible
          </h2>
          <p className="text-gray-700 leading-relaxed">
            There are circumstances where seeking a response before publication is not
            practical or appropriate:
          </p>

          <ul className="list-none space-y-2 text-gray-700 text-sm">
            {[
              "Breaking news where a publication delay would cause material public harm or enable destruction of evidence",
              "Situations where alerting the subject could compromise an ongoing investigation",
              "Reporting drawn entirely from official public records, court documents, or statements already in the public domain",
              "Cases where the subject has already publicly and unambiguously stated their position through official channels",
              "Subjects who have previously been given multiple response opportunities and declined without engagement",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 bg-white border border-zinc-200 px-4 py-3"
              >
                <span className="text-zinc-400 mt-0.5">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Where pre-publication outreach was not possible, the article records this
            fact, and the subject is notified after publication with a standing
            invitation to respond.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Post-Publication Responses</h2>
          <p className="text-gray-700 leading-relaxed">
            If a person or organisation contacts VENTURE HIVE after publication to
            dispute a factual claim or provide context that was not available at the
            time, we will:
          </p>

          <div className="space-y-2">
            {[
              "Review the material factual basis of the dispute promptly and without prejudice",
              "Assess whether the new information warrants an update, clarification, correction, or follow-up article",
              "Add a response to the original article where the subject's position was not previously represented and is materially relevant",
              "Issue a correction if the original article contained a factual error — see our Corrections Policy",
              "Decline to alter accurate, verified reporting based on pressure or legal threat alone",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-gray-700 text-sm"
              >
                <span className="text-zinc-500 mt-0.5">◎</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">
            What a Right of Reply Does Not Guarantee
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A right of reply at VENTURE HIVE is not a veto. Submitting a reply request
            does not automatically result in:
          </p>

          <div className="space-y-2">
            {[
              "Removal of accurate, verified reporting",
              "Prior sight or approval of the article before publication",
              "An indefinite hold on a story pending a response",
              "Publication of a full statement without editorial review for factual accuracy",
              "A guarantee that the reply request will result in any change to published content",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-red-50 border border-red-200 px-5 py-3 text-sm text-zinc-700"
              >
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            The purpose of this policy is editorial fairness — not editorial control
            for the subjects of our reporting.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">How to Submit a Reply Request</h2>
          <p className="text-gray-700 leading-relaxed">
            To submit a reply request, contact us at the address below. To help us
            process your request efficiently, please include:
          </p>

          <ul className="list-none space-y-2 text-gray-700 text-sm">
            {[
              "The URL or headline of the article",
              "The specific claim, statement, or passage you are responding to or disputing",
              "Your response — as clearly and factually as possible",
              "Any supporting documentation, records, or evidence",
              "Your contact details and the capacity in which you are writing (personal, representative, or legal)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 bg-white border border-zinc-200 px-4 py-3"
              >
                <span className="text-zinc-400 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-white border border-zinc-200 p-5 flex flex-col sm:flex-row gap-4">
            {[
              {
                label: "Editorial",
                email: "editorial@venture-hive.com",
                note: "For reply requests and response submissions",
              },
              {
                label: "Corrections",
                email: "corrections@venture-hive.com",
                note: "Where you believe a factual error has occurred",
              },
            ].map(({ label, email, note }) => (
              <div key={label}>
                <p className="text-xs text-zinc-400 uppercase tracking-wide mb-0.5">
                  {label}
                </p>
                <a
                  href={`mailto:${email}`}
                  title={`VENTURE HIVE ${label} contact`}
                  className="text-sm underline text-zinc-700 hover:text-zinc-900 block"
                >
                  {email}
                </a>
                <p className="text-xs text-zinc-400 mt-0.5">{note}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Corrections Policy", href: "/corrections-policy" },
              { label: "Source Methodology", href: "/source-methodology" },
              { label: "Legal", href: "/legal" },
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