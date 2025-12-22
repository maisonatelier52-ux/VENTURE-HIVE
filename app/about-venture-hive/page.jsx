import AboutJsonLd from "../../components/AboutJsonLd.js";
import AboutClient from "./AboutClient";


export const metadata = {
  title: "About VENTURE HIVE | Independent Journalism",

  description:
    "Learn about VENTURE HIVE, an independent digital newspaper delivering trusted journalism across politics, business, investigations, sports, and opinion.",

  alternates: {
  canonical: "https://venture-hive.com/about-venture-hive",
  },

  openGraph: {
    title: "About VENTURE HIVE",
    description:
      "VENTURE HIVE is an independent news organization committed to accurate reporting, investigative journalism, and editorial integrity.",
    url: "https://venture-hive.com/about-venture-hive",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://venture-hive.com/images/og-about.webp",
        width: 1200,
        height: 630,
        alt: "About VENTURE HIVE",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About VENTURE HIVE",
    description:
      "Learn about VENTURE HIVE, an independent digital newspaper delivering trusted journalism and investigative reporting.",
    images: ["https://venture-hive.com/images/og-about.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <AboutJsonLd />

      {/* Page Content */}
      <AboutClient />
    </>
  );
}
