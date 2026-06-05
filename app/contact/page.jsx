// app/contact/page.jsx

import ContactClient from "./Contactclient";


export const metadata = {
  title: "Contact Us | VENTURE HIVE",
  description:
    "Get in touch with the VENTURE HIVE newsroom. Submit story tips, corrections, press enquiries, or general feedback to our independent journalism team.",
  alternates: { canonical: "https://www.venture-hive.com/contact" },
  openGraph: {
    title: "Contact Us | VENTURE HIVE",
    description:
      "Reach the VENTURE HIVE newsroom for story tips, corrections, and editorial enquiries.",
    url: "https://www.venture-hive.com/contact",
    siteName: "VENTURE HIVE",
    images: [{ url: "https://www.venture-hive.com/images/venture-hive-logo.webp", width: 1200, height: 630, alt: "Contact VENTURE HIVE" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | VENTURE HIVE",
    description: "Contact the VENTURE HIVE newsroom for tips, corrections, and press enquiries.",
    images: ["https://www.venture-hive.com/images/venture-hive-logo.webp"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.venture-hive.com/contact#webpage",
    name: "Contact VENTURE HIVE",
    url: "https://www.venture-hive.com/contact",
    description: "Contact the VENTURE HIVE newsroom for story tips, corrections, press enquiries, and editorial feedback.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "VENTURE HIVE",
      url: "https://www.venture-hive.com",
      logo: { "@type": "ImageObject", url: "https://www.venture-hive.com/images/venture-hive-logo.webp" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.venture-hive.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.venture-hive.com/contact" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <ContactClient />
    </>
  );
}