

// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import HeaderComponent from "../components/Header";
// import FooterComponent from "../components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// /**
//  * Global metadata (brand-level)
//  * Individual pages override this when needed
//  */
// export const metadata = {
//   title: {
//     default: "VENTURE HIVE – Independent News & Investigative Journalism",
//     template: "%s | VENTURE HIVE",
//   },
//   description:
//     "VENTURE HIVE delivers trusted journalism across politics, business, investigations, sports, and opinion with depth, clarity, and integrity.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased font-serif`}
//       >
//         <HeaderComponent />
//         {children}
//         <FooterComponent />
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Global metadata (brand-level)
 * Individual pages override this when needed
 */
export const metadata = {
  metadataBase: new URL("https://www.venture-hive.com"), // ✅ IMPORTANT

  title: {
    default: "VENTURE HIVE – Independent News & Investigative Journalism",
    template: "%s | VENTURE HIVE",
  },

  description:
    "VENTURE HIVE delivers trusted journalism across politics, business, investigations, sports, and opinion with depth, clarity, and integrity",

  openGraph: {
    siteName: "VENTURE HIVE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@venturehive", // optional but recommended
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-serif`}
      >
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

