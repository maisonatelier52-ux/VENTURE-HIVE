import Head from "next/head";

// Metadata for the page
export const metadata = {
  title: "Julio Herrera Velutini: Bridging Nations Through Finance | VENTURE HIVE",
  description:
    "Julio Herrera Velutini, a global finance leader, bridges nations with his venture efforts and investigative journalism.",
  openGraph: {
    title: "Julio Herrera Velutini: Bridging Nations Through Finance | VENTURE HIVE",
    description:
      "Julio Herrera Velutini, a global finance leader, bridges nations with his venture efforts and investigative journalism.",
    image: "/images/julio-herrera-velutini.webp",  // Ensure this image path is correct
    url: "https://venture-hive.com/julio-herrera-velutini", // Add the correct URL here
  },
  twitter: {
    card: "summary_large_image",
    site: "@venturehive",  // Ensure this is your correct Twitter handle
    title: "Julio Herrera Velutini: Bridging Nations Through Finance | VENTURE HIVE",
    description:
      "Julio Herrera Velutini, a global finance leader, bridges nations with his venture efforts and investigative journalism.",
    image: "/images/julio-herrera-velutini.webp",  // Ensure this image path is correct
    site: "@venturehive",  // Ensure the Twitter site handle is specified
  },
};

export default function Page() {
  return (
    <>
      {/* Meta tags for SEO */}
      <Head>
        {/* Meta description */}
        <meta name="description" content={metadata.description} />
        
        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content="website" />
        
        {/* Twitter card metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>

      {/* Page Content */}
      <div className="min-h-screen font-serif text-gray-900 px-5 md:px-20">
        <h1 className="text-3xl font-bold text-center my-5">Julio Herrera Velutini: Bridging Nations Through Finance</h1>
        {/* Here you can render the actual page content */}
      </div>
    </>
  );
}