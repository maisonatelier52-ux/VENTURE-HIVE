import Link from "next/link";
import categoryData from "../public/data/category/categorypagedata";

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

          <Link
            href="/about"
            className="inline-block mt-3 text-xs underline underline-offset-4 hover:text-blue-600 transition"
          >
            Read more
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
                className="flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-20 h-20 object-cover"
                />
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
              <Link key={cat} href={`/${cat}`}>
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

          <Link
            href="/privacy-policy"
            className="inline-block mt-3 text-xs underline underline-offset-4 hover:text-blue-600 transition"
          >
            Read more
          </Link>
        </div>

      </div>

      {/* ===== DIVIDER ===== */}
      <div className="w-full border-t-2 border-gray-700 mt-12"></div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="text-center mt-10">

        <h1 className="text-4xl font-medium tracking-wide">
          VENTURE HIVE
        </h1>

        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="text-2xl">~</span>
          <i className="fa-brands fa-facebook text-md"></i>
          <i className="fa-brands fa-twitter text-md"></i>
          <i className="fa-brands fa-google text-md"></i>
          <i className="fa-brands fa-instagram text-md"></i>
          <span className="text-2xl">~</span>
        </div>

        <p className="text-sm pt-3">
          © 2025 VENTURE HIVE. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

