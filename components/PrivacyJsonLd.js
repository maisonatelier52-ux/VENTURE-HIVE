export default function PrivacyJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://venture-hive.com/privacy-policy#webpage",
    name: "Privacy Policy | VENTURE HIVE",
    url: "https://venture-hive.com/privacy-policy",
    description:
      "Privacy Policy of VENTURE HIVE, an independent digital news and investigative journalism platform.",
    isPartOf: {
      "@type": "NewsMediaOrganization",
      "@id": "https://venture-hive.com/#organization",
      name: "VENTURE HIVE",
      url: "https://venture-hive.com",
    },
    about: {
      "@type": "Thing",
      name: "Privacy Policy",
    },
    inLanguage: "en",
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
