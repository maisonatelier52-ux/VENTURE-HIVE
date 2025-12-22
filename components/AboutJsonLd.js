export default function AboutJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": "https://venture-hive.com/#organization",
    name: "VENTURE HIVE",
    url: "https://venture-hive.com",
    description:
      "VENTURE HIVE is an independent digital newspaper delivering trusted journalism across politics, business, investigations, sports, and opinion.",
    foundingDate: "2025",
    sameAs: [
      "https://twitter.com/venturehive"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
