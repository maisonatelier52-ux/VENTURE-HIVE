"use client";
import RightSidebar from "@/components/RightSidebar";
import SimpleCarousel from "@/components/SimpleCarousel";
import Image from "next/image";
import categorypagedata from '../public/data/category/categorypagedata';
import authors from '../public/data/authors.json';
import Link from "next/link";
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}

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
      <img
        src={item.image}
        alt={item.heading}
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex flex-col">
        <h4 className="text-base md:text-md font-medium leading-snug">
          {item.heading.length > 50
            ? item.heading.slice(0, 40) + "..."
            : item.heading}
        </h4>

        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
          <span>{item.date}</span>
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
                  key={i} 
                  className="block"
                >
                  <div className="grid grid-cols-[25%_75%] gap-6 items-start">

                    {/* Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-36 object-cover rounded"
                    />

                    {/* Content */}
                    <div className="flex flex-col">

                      {/* Heading */}
                      <h2 className="text-xl font-semibold mb-2">
                        {item.heading.length > 60 
                          ? item.heading.slice(0, 60) + "..." 
                          : item.heading}
                      </h2>

                      {/* Bottom Info */}
                      <div className="grid grid-cols-3 items-center text-sm text-gray-600">

                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <img
                            src={item.author?.profileImage}
                            alt={item.author?.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span>{item.author?.name}</span>
                        </div>

                        {/* Category */}
                        <div className="text-center text-xs uppercase tracking-wide">
                          {item.category}
                        </div>

                        {/* Date */}
                        <div className="text-right text-xs pe-5">
                          {item.date}
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

    </div>
  );
}
