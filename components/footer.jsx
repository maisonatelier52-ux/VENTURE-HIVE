import Link from "next/link";
import categoryData from "../public/data/category/categorypagedata";
import { Facebook, Twitter, Globe, Instagram } from "lucide-react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FaReddit } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {

  // Get latest posts
  const latestFromEachCategory = Object.keys(categoryData)
    .map((catName) => {
      const posts = categoryData[catName];
      if (!posts?.length) return null;

      const sorted = [...posts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return { ...sorted[0], category: catName };
    })
    .filter(Boolean);

  const latestNews = [...latestFromEachCategory]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <footer className="w-full border-t border-black/20 pt-10 pb-5 font-serif px-5 md:px-20">

      {/* ==== TOP GRID SECTION ==== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ================= ABOUT US ================= */}
        <div>
          <h3 className="uppercase tracking-wide font-bold flex items-center gap-2">
            <span className="text-black text-lg leading-none">•</span>
            ABOUT US
          </h3>

          <p className="mt-6 text-sm leading-relaxed text-gray-700">
            VENTURE HIVE is an independent digital newspaper delivering
            thoughtful journalism across politics, business, sports,
            investigations, and opinion with integrity and clarity.
          </p>

       <Link href="/about-venture-hive"  title="Read more about Venture Hive">
        <span className="text-xs underline">
          Read more <span className="sr-only">about Venture Hive</span>
        </span>
      </Link>
        </div>

        {/* ================= LATEST ================= */}
        <div>
          <h3 className="uppercase tracking-wide font-bold flex items-center gap-2">
            <span className="text-black text-lg leading-none">•</span>
            LATEST
          </h3>

          <div className="mt-6 space-y-8">
            {latestNews.slice(0, 2).map((item) => (
              <Link
                key={item.slug}
                href={`/${item.category}/${item.slug}`}
                title={item.heading}
                className="flex gap-4"
              >
                <div className="relative w-50 h-20">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <p className="text-sm">
                  {item.heading.slice(0, 60)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div>
          <h3 className="uppercase tracking-wide font-bold flex items-center gap-2">
            <span className="text-black text-lg leading-none">•</span>
            CATEGORIES
          </h3>

          <div className="grid grid-cols-2 gap-y-4 mt-6 text-sm">
            {Object.keys(categoryData).map((cat) => (
              <Link key={cat} 
              href={`/${cat}`} 
              title={`${cat} news and analysis on Venture Hive`}>
                <p>› {cat}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= PRIVACY POLICY ================= */}
        <div>
          <h3 className="uppercase tracking-wide font-bold flex items-center gap-2">
            <span className="text-black text-lg leading-none">•</span>
            PRIVACY POLICY
          </h3>

          <p className="mt-6 text-sm leading-relaxed text-gray-700">
            Your privacy matters to us. Learn how VENTURE HIVE collects,
            uses, and protects your information while you browse our site.
          </p>

       <Link href="/privacy-policy" title="Read more about Venture Hive privacy policy">
        <span className="text-xs underline">
          Read more <span className="sr-only">about our privacy policy</span>
        </span>
      </Link>
        </div>

      </div>

      {/* ===== DIVIDER ===== */}
      <div className="w-full border-t-2 border-gray-700 mt-12"></div>

              {/* ===== IMPORTANT PAGES ===== */}
        <div className="py-6">
          <h3 className="uppercase tracking-wide font-bold flex items-center gap-2 mb-5">
            <span className="text-black text-lg leading-none">•</span>
            IMPORTANT PAGES
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8 text-sm">

            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <Link href="/about-venture-hive" title="About Venture Hive">
                › About Us
              </Link>

              <Link href="/authors" title="Meet the Venture Hive team">
                › Our Team
              </Link>

              <Link href="/contact" title="Contact Venture Hive">
                › Contact Us
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <Link href="/editorial-policy" title="Editorial Policy">
                › Editorial Policy
              </Link>

              <Link href="/corrections-policy" title="Corrections Policy">
                › Corrections Policy
              </Link>

              <Link href="/source-methodology" title="Source Methodology">
                › Source Methodology
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <Link href="/ownership-funding" title="Ownership and Funding">
                › Ownership & Funding
              </Link>

              <Link href="/advertising-policy" title="Advertising Policy">
                › Advertising Policy
              </Link>

              <Link href="/right-of-reply" title="Right of Reply">
                › Right of Reply
              </Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3">
              <Link href="/legal" title="Legal Information">
                › Legal
              </Link>

              <Link href="/privacy-policy" title="Privacy Policy">
                › Privacy Policy
              </Link>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-3">
              <Link
                href="/terms-and-conditions"
                title="Terms and Conditions"
              >
                › Terms & Conditions
              </Link>
            </div>

          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="w-full border-t border-gray-500"></div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="text-center mt-10">

       <Link href="/" title="Venture Hive home page">
       <p className="text-4xl font-medium">
          VENTURE HIVE
        </p></Link>

        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="text-2xl">~</span>
         <a
            href="https://www.reddit.com/user/Venture-hive/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reddit"
            title="Visit Venture Hive on Reddit"
            className="hover:text-orange-600 transition"
          >
            <FaReddit  size={18} />
          </a>

          <a
            href="https://x.com/venturehive26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Visit Venture Hive on Twitter"
            className="hover:text-sky-500 transition"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="https://substack.com/@venturehive"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            title="Visit Venture Hive on Substack"
            className="hover:text-red-500 transition"
          >
            <SiSubstack  size={18} />
          </a>

          <a
            href="https://www.instagram.com/venturehive26/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Visit Venture Hive on Instagram"
            className="hover:text-pink-600 transition"
          >
            <LuInstagram size={18} />
          </a>

           <a
            href="https://www.linkedin.com/in/venture-hive-bb2014418"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            title="Visit Venture Hive on Linkedin"
            className="hover:text-blue-900 transition"
          >
            <FaLinkedin size={18} />
          </a>
          <span className="text-2xl">~</span>
        </div>

        <p className="text-sm pt-3">
          © 2025 VENTURE HIVE. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

