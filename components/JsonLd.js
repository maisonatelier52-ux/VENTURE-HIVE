export default function JsonLd() {
  return (
    <script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          name: "VENTURE HIVE",
          url: "https://www.venture-hive.com",
          logo: "https://www.venture-hive.com/images/venture-hive-logo.webp",
          sameAs: [
            "https://x.com/venturehive26",
            "https://www.instagram.com/venturehive26/",
            "https://www.linkedin.com/in/venture-hive-bb2014418",
            "https://www.reddit.com/user/Venture-hive/",
            "https://substack.com/@venturehive",
          ],
        }),
      }}
    />
  );
}
