import RightSidebar from "../components/RightSidebar";
import SimpleCarousel from "../components/SimpleCarousel";
import Image from "next/image";
import categorypagedata from '../public/data/category/categorypagedata';
import authors from '../public/data/authors.json';
import Link from "next/link";
import JsonLd from "../components/JsonLd";


export const metadata = {
  title: "VENTURE HIVE – Independent News, Analysis & Investigative Journalism",
  description:
    "VENTURE HIVE delivers trusted journalism across politics, business, investigations, sports, and opinion with depth, clarity, and integrity.",
  alternates: {
    canonical: "https://venture-hive.com/",
  },
  openGraph: {
    title: "VENTURE HIVE – Independent News & Investigative Journalism",
    description:
      "Breaking news, investigations, and expert analysis across politics, business, and global affairs.",
    url: "https://venture-hive.com/",
    siteName: "VENTURE HIVE",
    images: [
      {
        url: "https://venture-hive.com/images/og-home.webp",
        width: 1200,
        height: 630,
        alt: "VENTURE HIVE News",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VENTURE HIVE – Independent Journalism",
    description:
      "Trusted reporting and deep analysis across politics, business, investigations, and opinion.",
    images: ["https://venture-hive.com/images/og-home.webp"],
  },
};


export default function Home() {
 const categoryData = categorypagedata;
 const authorsPageData = authors;


//  this is for the top items 4 items
// 1. Get latest post from each category
const latestFromEachCategory = Object.keys(categoryData)
  .map((catName) => {
    const posts = categoryData[catName];

    if (!posts || posts.length === 0) return null;

    // Sort category posts by date (newest first)
    const sorted = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    return {
      ...sorted[0],
      category: catName,
    };
  })
  .filter(Boolean);

  

// 2. Sort these category-latest posts by date
const sortedLatest = latestFromEachCategory.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// 3. Select only the latest 4
const recentFour = sortedLatest.slice(0, 4);




// this is for the carousel items
// 1️⃣ Pick ANY one post per category
const onePostPerCategory = Object.keys(categoryData)
  .map((cat) => {
    const posts = categoryData[cat];
    if (!posts?.length) return null;

    // Get second last item if available, otherwise use last
    const index = posts.length >= 2 ? posts.length - 2 : posts.length - 1;

    const post = posts[index];

    return { ...post, category: cat };
  })
  .filter(Boolean);

// 2️⃣ Remove posts already shown in recentFour
const filteredPosts = onePostPerCategory.filter(
  (post) => !recentFour.some((r) => r.slug === post.slug)
);

// 3️⃣ Pick ANY 3 categories
let threeCategoryPosts = filteredPosts.slice(0, 3);

// 4️⃣ Attach author information
function getAuthor(category) {
  return authors.categories.find(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  )?.author;
}

threeCategoryPosts = threeCategoryPosts.map((post) => ({
  ...post,
  author: getAuthor(post.category),
}));

// console.log("Carousel Posts:", threeCategoryPosts);



// this is for the recent post
// 1️⃣ Pick ANY one post per category (third last)
const lastThridItem = Object.keys(categoryData)
  .map((cat) => {
    const posts = categoryData[cat];
    if (!posts?.length) return null;

    // Get 3rd last or fallback to 2nd last or last
    const index = posts.length >= 3 ? posts.length - 3 :
                  posts.length >= 2 ? posts.length - 2 : posts.length - 1;

    const post = posts[index];

    return { ...post, category: cat };
  })
  .filter(Boolean);

// 2️⃣ Remove posts already shown in recentFour OR threeCategoryPosts
const filteredLatestThridItem = lastThridItem.filter(
  (post) =>
    !recentFour.some((r) => r.slug === post.slug) &&
    !threeCategoryPosts.some((t) => t.slug === post.slug)
);

// 3️⃣ Pick ANY 4 categories
let fourCategoryPosts = filteredLatestThridItem.slice(0, 4);

// 4️⃣ Attach author information
fourCategoryPosts = fourCategoryPosts.map((post) => ({
  ...post,
  author: getAuthor(post.category),
}));

// console.log("fourCategory", fourCategoryPosts);


function isUsed(slug) {
  return (
    recentFour.some((p) => p.slug === slug) ||
    threeCategoryPosts.some((p) => p.slug === slug) ||
    fourCategoryPosts.some((p) => p.slug === slug)
  );
}

let popularArticles = [];

Object.keys(categoryData).forEach((cat) => {
  if (popularArticles.length >= 5) return;

  const posts = categoryData[cat];
  if (!posts?.length) return;

  // Sort by date (latest first)
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Find the first unused post
  const found = sorted.find((post) => !isUsed(post.slug));

  if (found) {
    popularArticles.push({
      ...found,
      category: cat,
      author: getAuthor(cat),
    });
  }
});

  
  return (
    
    <div className="flex flex-col min-h-screen font-serif bg-zinc-50 font-sans px-5 md:px-20">

      <h1 className="sr-only">
  VENTURE HIVE – Independent News, Analysis & Investigative Journalism
</h1>


    <h2 className="sr-only">Latest Articles</h2>
      {/* Recent Articles List */}
      <div  className="
       flex gap-6 py-5
    overflow-x-auto lg:overflow-visible
    snap-x snap-mandatory
    scrollbar-hide
  ">

{recentFour.map((item, i) => (
  <Link
    href={`/${item.category}/${item.slug}`}
    title={item.heading}
    key={i}
    className="
      snap-start
      w-full
      flex-shrink-0
      lg:w-auto
      lg:flex-1
      lg:flex-shrink
    "
  >
    <div className="flex items-start gap-4 px-2">
      <Image
        src={item.image}
        alt={item.heading}
        width={80}
        height={80}
        className="w-20 h-20 object-cover rounded"
        sizes="80px"
      />

      <div className="flex flex-col">
        <h3 className="text-base text-sm md:text-md font-medium leading-snug">
          {item.heading.length > 50
            ? item.heading.slice(0, 40) + "..."
            : item.heading}
        </h3>

        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
          <time dateTime={new Date(item.date).toISOString()}>
            {item.date}
          </time>
          {/* <span>{item.date}</span> */}
          <span>{item.category.toUpperCase().slice(0, 10)}</span>
        </div>
      </div>
    </div>
  </Link>
))}

      </div>

      {/* Main Section (Large image + Popular Articles) */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-4 mb-5">

        
        <div>
          <SimpleCarousel items={threeCategoryPosts}/>
           <hr className="border border-gray-300" />
           {/* recent posts */}
            <h2 className="font-medium text-4xl text-center p-3 py-8">RECENT POSTS</h2>
            <div className="space-y-8">
              {fourCategoryPosts.map((item, i) => (
                <Link
                  href={`/${item.category}/${item.slug}`}
                  title={item.heading}
                  key={i}
                  className="block"
                >
                  {/* MOBILE: horizontal | DESKTOP: existing grid */}
                  <div className="flex sm:grid sm:grid-cols-[25%_75%] gap-4 sm:gap-6 items-start">

                    {/* IMAGE */}
                    <div className="relative w-32 h-24 sm:w-full sm:h-36 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.heading}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 640px) 128px, 25vw"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between">

                      {/* TITLE */}
                      <h3 className="text-sm sm:text-xl font-semibold leading-snug mb-2">
                        {item.heading.length > 60
                          ? item.heading.slice(0, 60) + "..."
                          : item.heading}
                      </h3>
                  
                     {/* MOBILE META (author left, date right) */}
                    <div className="sm:hidden flex items-center text-xs text-gray-600 mt-2">

                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <Image
                          src={item.author?.profileImage}
                          alt={item.author?.name}
                          width={22}
                          height={22}
                          className="rounded-full"
                        />
                        <span className="font-medium whitespace-nowrap">
                          {item.author?.name}
                        </span>
                      </div>

                      {/* Dot */}
                      <span className="mx-2 text-gray-400">•</span>

                      {/* Date */}
                      <time
                        className="whitespace-nowrap tracking-wide"
                        dateTime={new Date(item.date).toISOString()}
                      >
                        {item.date}
                      </time>

                    </div>



                      {/* DESKTOP META (UNCHANGED) */}
                      <div className="hidden sm:grid grid-cols-3 items-center text-sm text-gray-600">

                        <div className="flex items-center gap-2">
                          <Image
                            src={item.author?.profileImage}
                            alt={item.author?.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span>{item.author?.name}</span>
                        </div>

                        <div className="text-center text-xs tracking-wide">
                          <time dateTime={new Date(item.date).toISOString()}>
                            {item.date}
                          </time>
                        </div>

                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>




        
        </div>
      <RightSidebar  categoryData={categorypagedata} authors={authorsPageData}/>

      </div>
      <JsonLd />

    </div>
  );
}
