// app/terms-and-conditions/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | VENTURE HIVE",
  description:
    "Read the VENTURE HIVE Terms and Conditions. The rules governing your use of our independent journalism platform, including content rights, user conduct, and liability.",
  alternates: { canonical: "https://www.venture-hive.com/terms-and-conditions" },
  openGraph: {
    title: "Terms & Conditions | VENTURE HIVE",
    description:
      "The terms and conditions governing use of the VENTURE HIVE independent journalism platform.",
    url: "https://www.venture-hive.com/terms-and-conditions",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://www.venture-hive.com/images/venture-hive-logo.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE Terms & Conditions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | VENTURE HIVE",
    description:
      "The terms governing your use of the VENTURE HIVE independent journalism platform.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

const LAST_UPDATED = "January 1, 2025";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the VENTURE HIVE website at venture-hive.com, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our platform. VENTURE HIVE reserves the right to update or modify these Terms at any time. Your continued use of the platform after any changes constitutes your acceptance of the revised Terms.",
  },
  {
    id: "permitted-use",
    title: "2. Permitted Use",
    content:
      "You may use VENTURE HIVE for lawful, personal, non-commercial purposes only. You agree not to: transmit unsolicited commercial messages; post defamatory, offensive, or fraudulent content; attempt to gain unauthorised access to our systems or content; scrape, harvest, or collect content in an automated manner without our prior written consent; impersonate VENTURE HIVE, its contributors, or any other person or entity.",
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    content:
      "All content on VENTURE HIVE — including articles, headlines, photographs, graphics, video, and data — is the intellectual property of VENTURE HIVE or its contributing authors and licensors, protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, modify, transmit, reuse, or republish VENTURE HIVE content for public or commercial purposes without prior written permission. Brief quotation for journalistic commentary, academic citation, or educational use — with clear attribution — is permitted under standard fair use principles.",
  },
  {
    id: "user-submissions",
    title: "4. Reader Submissions and Tips",
    content:
      "VENTURE HIVE welcomes reader tips, documents, and information. By submitting any content or information to VENTURE HIVE, you grant us a non-exclusive, royalty-free, perpetual licence to use, publish, and distribute that content in connection with our journalism. You represent that you have the right to submit such information and that doing so does not violate any third-party rights or applicable law. VENTURE HIVE handles all submissions with appropriate journalistic care and source protection practices.",
  },
  {
    id: "editorial-disclaimer",
    title: "5. Editorial and Accuracy Disclaimer",
    content:
      "VENTURE HIVE strives for accuracy in all reporting. However, we make no warranties or representations regarding the completeness, accuracy, or reliability of any published content. News events change rapidly; articles reflect verified information at the time of publication. VENTURE HIVE is not responsible for errors or omissions, or for any actions taken in reliance on information contained on this platform. Opinion and analysis pieces express the views of named contributors and do not necessarily represent the editorial position of VENTURE HIVE.",
  },
  {
    id: "third-party-links",
    title: "6. Third-Party Links",
    content:
      "VENTURE HIVE articles may contain links to external websites or resources. These are provided for reader convenience and sourcing transparency. VENTURE HIVE has no control over the content or availability of those external sites and accepts no responsibility for any loss or damage that may arise from their use. The inclusion of a link does not imply endorsement of the linked site or its content.",
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, VENTURE HIVE and its editors, authors, and contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your access to or use of the platform or its content. In no event shall VENTURE HIVE's total liability to you exceed the amount you have paid, if any, for accessing the platform in the preceding twelve months.",
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content:
      "You agree to defend, indemnify, and hold harmless VENTURE HIVE, its officers, directors, contributors, and agents from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in any way connected with your use of the platform, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.",
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with applicable law without regard to conflict of law provisions. Any dispute arising from these Terms or your use of the platform shall first be submitted to good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration.",
  },
  {
    id: "termination",
    title: "10. Termination",
    content:
      "VENTURE HIVE reserves the right to terminate or suspend access to the platform at our sole discretion, without notice and without liability, for any reason — including where we believe you have violated these Terms. All provisions of these Terms that by their nature should survive termination shall do so, including intellectual property provisions, disclaimers, indemnity, and limitations of liability.",
  },
  {
    id: "changes",
    title: "11. Changes to These Terms",
    content: `VENTURE HIVE may revise these Terms at any time. The updated version will be posted on this page with a revised effective date. Your continued use of the platform after changes are posted constitutes your acceptance of the revised Terms. These Terms were last updated on ${LAST_UPDATED}.`,
  },
  {
    id: "contact",
    title: "12. Contact",
    content: null,
    contactBlock: true,
  },
];

export default function TermsAndConditions() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/terms-and-conditions#webpage",
    name: "Terms & Conditions | VENTURE HIVE",
    url: "https://www.venture-hive.com/terms-and-conditions",
    description:
      "Terms and Conditions governing use of the VENTURE HIVE independent journalism platform.",
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
        name: "Terms & Conditions",
        item: "https://www.venture-hive.com/terms-and-conditions",
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
            Terms &amp; Conditions
          </h1>

          <p className="text-sm text-gray-600 text-center">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="text-gray-700 leading-relaxed">
            Please read these Terms and Conditions carefully before using the VENTURE
            HIVE website. By accessing our platform, you agree to be bound by these
            terms. If you do not agree with any part of these terms, you must not use
            our site.
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
            <div key={section.id} id={section.id} className="space-y-3">
              <h2 className="text-xl font-semibold">{section.title}</h2>

              {section.content && (
                <p className="text-gray-700 leading-relaxed text-sm">
                  {section.content}
                </p>
              )}

              {section.contactBlock && (
                <>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    If you have any questions about these Terms and Conditions, please
                    contact us:
                  </p>
                  <div className="bg-white border border-zinc-200 p-5 flex flex-col sm:flex-row gap-4">
                    {[
                      {
                        label: "Legal",
                        email: "legal@venture-hive.com",
                        note: "Terms, formal notices, legal enquiries",
                      },
                      {
                        label: "Editorial",
                        email: "editorial@venture-hive.com",
                        note: "Content and editorial questions",
                      },
                    ].map(({ label, email, note }) => (
                      <div key={label}>
                        <p className="text-xs text-zinc-400 uppercase tracking-wide mb-0.5 font-sans">
                          {label}
                        </p>
                        <a
                          href={`mailto:${email}`}
                          title={`VENTURE HIVE ${label}`}
                          className="text-sm underline text-zinc-700 hover:text-zinc-900 block"
                        >
                          {email}
                        </a>
                        <p className="text-xs text-zinc-400 mt-0.5">{note}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {si < SECTIONS.length - 1 && <hr aria-hidden="true" />}
            </div>
          ))}

          <hr aria-hidden="true" />

          {/* Acknowledgement */}
          <div className="bg-zinc-800 text-white p-6">
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2 font-sans">
              Acknowledgement
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              By using the VENTURE HIVE website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions and our{" "}
              <Link
                href="/privacy-policy"
                title="VENTURE HIVE Privacy Policy"
                className="underline text-zinc-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Legal", href: "/legal" },
              { label: "Editorial Policy", href: "/editorial-policy" },
              { label: "Corrections Policy", href: "/corrections-policy" },
              { label: "Advertising Policy", href: "/advertising-policy" },
              { label: "Ownership & Funding", href: "/ownership-funding" },
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