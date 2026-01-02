export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VENTURE HIVE",
          url: "https://www.venture-hive.com",
          logo: "https://www.venture-hive.com/images/logo.png",
          sameAs: [
            "https://facebook.com",
            "https://twitter.com"
          ]
        }),
      }}
    />
  );
}
