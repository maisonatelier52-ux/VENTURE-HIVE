// app/ownership-funding/page.jsx

import Link from "next/link";

export const metadata = {
  title: "Ownership & Funding | VENTURE HIVE",
  description:
    "Transparency about who operates VENTURE HIVE, how the independent journalism platform is funded, and how commercial relationships are kept separate from editorial decisions.",
  alternates: { canonical: "https://www.venture-hive.com/ownership-funding" },
  openGraph: {
    title: "Ownership & Funding | VENTURE HIVE",
    description: "Who operates VENTURE HIVE and how commercial relationships are separated from editorial decisions.",
    url: "https://www.venture-hive.com/ownership-funding",
    siteName: "VENTURE HIVE",
    images: [{ url: "https://www.venture-hive.com/images/venture-hive-logo.webp", width: 1200, height: 630, alt: "VENTURE HIVE Ownership & Funding" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ownership & Funding | VENTURE HIVE",
    description: "Transparency about who owns and funds VENTURE HIVE.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

export default function OwnershipFunding() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.venture-hive.com/ownership-funding#webpage",
    name: "Ownership & Funding | VENTURE HIVE",
    url: "https://www.venture-hive.com/ownership-funding",
    description: "Disclosure of VENTURE HIVE's ownership structure, funding sources, and commercial relationships.",
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
      { "@type": "ListItem", position: 2, name: "Ownership & Funding", item: "https://www.venture-hive.com/ownership-funding" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-4xl font-semibold text-center">
            Ownership &amp; Funding
          </h1>

          <p className="text-sm text-gray-600 text-center">
            Transparency about who operates VENTURE HIVE and how it is funded
          </p>

          <p className="text-gray-700 leading-relaxed">
            Readers have a right to know who owns the publications they read, how those
            publications generate revenue, and whether commercial interests shape editorial
            decisions. This page answers those questions for VENTURE HIVE.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Who Operates VENTURE HIVE</h2>
          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE is an independent digital newspaper founded in 2025. It is not
            owned by a media conglomerate, government entity, political organisation, or
            corporate holding group. Editorial control rests with the VENTURE HIVE
            newsroom and is exercised independently of any commercial partner.
          </p>
          <div className="bg-white border border-zinc-200 p-5">
            <p className="text-sm text-zinc-700 leading-relaxed">
              <strong>Material changes:</strong> If VENTURE HIVE undergoes a material change
              in ownership or strategic direction that a reasonable reader would consider
              relevant to editorial independence, this page will be updated within 30 days
              of that change taking effect.
            </p>
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">How VENTURE HIVE Is Funded</h2>
          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE may generate revenue through the following channels. None of
            these give commercial partners any authority over editorial content:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Display Advertising",
                body: "Standard ads served programmatically or through direct placement. Advertisers have no access to editorial content before publication and no ability to influence coverage.",
              },
              {
                title: "Sponsored Content",
                body: "Clearly labelled commercial content produced with brand partners. Always visually and editorially distinct from independent journalism. See our Advertising Policy.",
              },
              {
                title: "Affiliate Links",
                body: "Where content includes links to products generating referral fees, this is disclosed in or near the relevant content. Affiliate relationships do not influence editorial decisions.",
              },
              {
                title: "Newsletter & Subscriptions",
                body: "Where applicable, revenue from reader subscriptions or newsletters. Subscriber status has no effect on what VENTURE HIVE chooses to cover.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-zinc-200 p-5">
                <h3 className="font-semibold text-zinc-800 mb-2 text-sm">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">The Editorial Firewall</h2>
          <p className="text-gray-700 leading-relaxed">
            The separation between VENTURE HIVE&apos;s commercial operations and its newsroom
            is non-negotiable. Here is what that means in practice:
          </p>

          <div className="space-y-2">
            {[
              { ok: true, text: "Advertisers may purchase ad space on the platform." },
              { ok: false, text: "Advertisers may not purchase editorial coverage, positive reviews, or story placement." },
              { ok: true, text: "Partners may sponsor clearly labelled content sections." },
              { ok: false, text: "Partners may not alter, delay, or suppress independent editorial content." },
              { ok: true, text: "Revenue data is available to senior editorial leadership." },
              { ok: false, text: "Revenue considerations may not factor into coverage decisions." },
            ].map(({ ok, text }) => (
              <div key={text}
                className={`flex items-start gap-3 px-5 py-3 border text-sm ${ok ? "bg-white border-zinc-200 text-zinc-700" : "bg-red-50 border-red-200 text-zinc-700"}`}>
                <span className={`font-bold mt-0.5 ${ok ? "text-zinc-500" : "text-red-500"}`}>{ok ? "✓" : "✕"}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Conflicts of Interest</h2>
          <p className="text-gray-700 leading-relaxed">
            All VENTURE HIVE contributors and editors must disclose any personal, financial,
            or professional relationships that could reasonably affect their impartiality
            on an assignment. Editors decide on recusal case by case. Contributors may not
            accept gifts, event access, or any consideration of value from organisations
            or individuals they cover.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Where an undisclosed conflict is identified after publication and materially
            affected content, a public disclosure is made alongside any necessary correction.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Political Independence</h2>
          <p className="text-gray-700 leading-relaxed">
            VENTURE HIVE is not affiliated with any political party, candidate, government
            body, or advocacy group. No political entity has funded, invested in, or made
            any donation to VENTURE HIVE. Contributors do not publicly endorse political
            candidates in their capacity as VENTURE HIVE journalists.
          </p>

          <hr aria-hidden="true" />

          <h2 className="text-2xl font-semibold">Reporting a Missing Disclosure</h2>
          <p className="text-gray-700 leading-relaxed">
            If you believe VENTURE HIVE has an undisclosed commercial or financial
            relationship relevant to a piece of coverage, contact us. We will investigate
            and respond.
          </p>
          <div className="bg-white border border-zinc-200 p-5 flex flex-col sm:flex-row gap-4">
            {[
              { label: "Editorial", email: "editorial@venture-hive.com" },
              { label: "Corrections", email: "corrections@venture-hive.com" },
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
              { label: "Advertising Policy", href: "/advertising-policy" },
              { label: "Corrections Policy", href: "/corrections-policy" },
              { label: "Source Methodology", href: "/source-methodology" },
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
