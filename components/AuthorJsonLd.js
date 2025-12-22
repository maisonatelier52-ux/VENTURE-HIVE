import authorsData from "../public/data/authors.json";

export default function AuthorJsonLd() {
  const authors = authorsData.categories.map(({ author }) => ({
    "@type": "Person",
    name: author.name,
    image: `https://venture-hive.com${author.profileImage}`,
    jobTitle: "Journalist",
    worksFor: {
      "@type": "NewsMediaOrganization",
      name: "VENTURE HIVE",
      url: "https://venture-hive.com",
    },
    sameAs: Object.values(author.social || {}),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsMediaOrganization",
        name: "VENTURE HIVE",
        url: "https://venture-hive.com",
        sameAs: ["https://twitter.com/venturehive"],
      },
      ...authors,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
