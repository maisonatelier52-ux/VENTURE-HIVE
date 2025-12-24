import PrivacyClient from "./PrivacyClient";
import PrivacyJsonLd from "../../components/PrivacyJsonLd";

export const metadata = {
  title: "Privacy Policy | VENTURE HIVE",
  description:
    "Read the Privacy Policy of VENTURE HIVE, an independent digital news organization committed to responsible journalism and user privacy.",
  alternates: {
    canonical: "https://venture-hive.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | VENTURE HIVE",
    description:
      "Learn how VENTURE HIVE, an independent journalism and news platform, protects user privacy.",
    url: "https://venture-hive.com/privacy-policy",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://venture-hive.com/images/venture-hive-logo.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | VENTURE HIVE",
    description:
      "Privacy Policy of VENTURE HIVE, an independent digital journalism platform.",
    images: ["https://venture-hive.com/images/venture-hive-logo.webp"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyJsonLd />
      <PrivacyClient />
    </>
  );
}
