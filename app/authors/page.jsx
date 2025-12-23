
import AuthorJsonLd from "../../components/AuthorJsonLd";
import AuthorClient from "./AuthorClient";



export const metadata = {
  title: "Authors & Journalists | VENTURE HIVE",
  description:
    "Meet the journalists behind VENTURE HIVE, an independent news publication delivering investigative reporting across politics, business, sports, and opinion.",

  alternates: {
    canonical: "https://venture-hive.com/authors",
  },

  openGraph: {
    title: "VENTURE HIVE Authors – Independent Journalism",
    description:
      "Explore articles from VENTURE HIVE contributors producing trusted independent news and investigative journalism.",
    url: "https://venture-hive.com/authors",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://venture-hive.com/images/og-authors.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE Contributors",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VENTURE HIVE Authors & Journalists",
    description:
      "Meet the contributors behind VENTURE HIVE’s independent news and investigative journalism.",
    images: ["https://venture-hive.com/images/og-authors.webp"],
  },
};

export default function AuthorsPage() {
  return (
    <>
      {/* Structured Data */}
      <AuthorJsonLd />

      {/* Client UI */}
      <AuthorClient />
    </>
  );
}

