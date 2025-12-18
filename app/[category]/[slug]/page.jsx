"use client";
import RightSidebar from "@/components/RightSidebar";
import React from "react";
import { useParams } from "next/navigation";
import categorypagedata from "../../../public/data/category/categorypagedata";
import authorsPageData from "../../../public/data/authors"
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";

function page() { 
  const { category, slug } = useParams();  


   const categoryPosts = categorypagedata[category] || [];
   const article = categoryPosts.find((item) => item.slug === slug);
     const authorData =
       authorsPageData.categories.find(
         (item) => item.category.toLowerCase() === category.toLowerCase()
       )?.author;
       

  if (!article) {
    return (
      <div className="p-10 text-center text-xl">
        ❌ Article not found: {category}/{slug}
      </div>
    );
  }

  const currentIndex = categoryPosts.findIndex(p => p.slug === slug);

const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
const nextPost = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;

   
  
     const comments = [
    {
      name: "Steven Jobs",
      date: "July 4, 2017 7:25 am",
      text: "dived wound factual legitimately delightful goodness fit rat some lopsidedly far when.",
      image: "https://hewo-html.vercel.app/assets/images/post-author-avatar.jpg"
    },
    {
      name: "Jim Calist",
      date: "July 16, 2017 1:29 am",
      text: "Slung alongside jeepers hypnotic legitimately some iguana this agreeably triumphant pointedly far",
      image: "https://hewo-html.vercel.app/assets/images/post-author-avatar.jpg"
    },
    {
      name: "Steven Jobs",
      date: "July 4, 2017 7:25 am",
      text: "jeepers unscrupulous anteater attentive noiseless put less greyhound prior stiff ferret unbearably cracked oh.",
      image: "https://hewo-html.vercel.app/assets/images/post-author-avatar.jpg"
    },
     {
      name: "Steven Jobs",
      date: "July 4, 2017 7:25 am",
      text: "jeepers unscrupulous anteater attentive noiseless put less greyhound prior stiff ferret unbearably cracked oh.",
      image: "https://hewo-html.vercel.app/assets/images/post-author-avatar.jpg"
    }
  ];
  return (
    <div className="flex flex-col font-serif min-h-screen bg-zinc-50 font-sans px-5 md:px-20">

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 mt-4 mb-5">

        {/* LEFT CONTENT */}
        <div>

          {/* ======== CENTERED TOP SECTION ======== */}
          <div className="flex flex-col items-center text-center space-y-4">

            {/* IMAGE */}
            <img
              src={article.image}
              className="w-full max-w-3xl object-cover"
              alt="detail bg image"
            />

            {/* HEADING */}
            <h1 className="text-2xl md:text-3xl font-semibold max-w-3xl">
              {article.heading}
            </h1>

            {/* AUTHOR + CATEGORY + DATE */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-center">

              {/* Profile */}
              <div className="flex items-center gap-2">
                <img
                  src={authorData.profileImage}
                  className="w-7 h-7 rounded-full"
                  alt=""
                />
                <span className="font-medium text-xs text-gray-600">{authorData.name.toUpperCase()}</span>
              </div>

              <span className="text-gray-600 text-xs">{category.toUpperCase()}</span>
              <span className="text-gray-600 text-xs">{article.date.toUpperCase()}</span>
            </div>

            <hr className="w-full border border-gray-700 border-solid" />

            <p className="bg-blue-100 text-gray-500 p-2 max-w-3xl">
              {article.content}
            </p>
          </div>

          {/* ======== LEFT-ALIGNED ARTICLE BODY ======== */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">

            {/* COLUMN 1 */}
            <div className="space-y-6 text-sm leading-relaxed text-gray-800 text-left">
              <p className="text-justify">
                 {article.para2}
              </p>

              <p className="text-justify">
                {article.para3}
               </p>

              <img
                src={article.deatilImage}
                className="w-full object-cover rounded"
                alt="detailpage image"
              />

              <p className="text-justify">
                 {article.para4}
              </p>

              <p className="text-justify">
               {article.para5}
              </p>

              <p className="text-justify">
               {article.para6}
              </p>
              <p className="text-justify"> {article.para7}</p>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-6 text-sm leading-relaxed text-gray-800 text-left">
              <p className="text-justify">
                 {article.para8}
              </p>

              {/* ======== CENTERED QUOTE BOX ======== */}
              <div className="relative border border-gray-800 border-dotted p-5 bg-white text-gray-600 text-center mx-auto max-w-xl text-xl leading-relaxed italic">
                
                <div className="text-3xl text-gray-400 mb-2">❝</div>

                {article.quotes}
                </div>


              <p className="text-justify">
               {article.para9}
              </p>

              <p className="text-justify">
                {article.para10}
              </p>

              <p className="text-justify">{article.para11}</p>

              <h2 className="text-xl font-semibold">{article.samplehead.title}</h2>

              <p className="text-justify">
                {article.samplehead.samplepara1}
              </p>

              <p className="text-justify">{article.samplehead.samplePara2}</p>
            </div>

          </div>

       <div className="flex justify-center items-center p-5">
        <div className="bg-blue-100 flex flex-row items-center justify-between p-2 gap-4">
          {article.hashTags.map((tag, index) => (
            <h6 key={index}>#{tag}</h6>
          ))}
           
        </div>
        </div>

        <div className="flex items-center justify-center gap-4 border border-gray-300 border-s-0 border-e-0 p-5 mb-10">
          <span className="text-2xl">~</span>
         <span className="w-6 h-6 border border-blue-900 rotate-45 flex items-center justify-center bg-blue-900"><i className="fa-brands fa-facebook text-white text-lg -rotate-45"></i></span>
          <span className="w-6 h-6 border border-blue-300 rotate-45 flex items-center justify-center bg-blue-300"><i className="fa-brands fa-twitter text-md text-white"></i></span>
           <span className="w-6 h-6 border border-orange-500 rotate-45 flex items-center justify-center bg-orange-500"><i className="fa-brands fa-google text-md text-white"></i></span>
            <span className="w-6 h-6 border border-red-700 rotate-45 flex items-center justify-center bg-red-700"><i className="fa-brands fa-instagram text-md text-white"></i></span>
          <span className="text-2xl">~</span>
        </div>

    <div className="bg-blue-100 p-4">
  <div className="
      flex flex-col md:flex-row 
      gap-6 md:gap-8 
      items-stretch
    "
  >

    {/* Left Column (Image) */}
    <div className="
        w-full md:w-1/4 
        h-48 md:h-auto 
        overflow-hidden
      "
    >
      <img
        src={authorData.profileImage}
        alt="Profile photo"
        className="w-full h-full object-fit"
      />
    </div>

    {/* Right Column (Text + Icons) */}
    <div className="
        w-full md:w-3/4 flex flex-col gap-4 p-2 md:p-6"
    >

      {/* Name */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        {authorData.name}
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
       {authorData.bio}
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-lg text-gray-800">
       <Link href={authorData.social.facebook} target="_blank" rel="noopener noreferrer">
          <button className="hover:text-blue-600 cursor-pointer transition"><i className="fa-brands fa-facebook"></i></button>
          </Link>
          <Link href={authorData.social.twitter} target="_blank" rel="noopener noreferrer">
          <button className="hover:text-blue-600 cursor-pointer transition"><i className="fa-brands fa-twitter"></i></button>
          </Link>
        <button><i className="fa-brands fa-google"></i></button>
      </div>

    </div>

  </div>
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">

    {/* ========== LEFT COLUMN ========== */}
    {/* ========== RELATED POSTS ========== */}
    <div>
      <h2 className="text-lg font-medium border-b pb-2 mb-4">
        • Related Posts
      </h2>

      <div className="space-y-4">

        {categoryPosts
          .filter((item) => item.slug !== slug) // exclude current post
          .slice(0, 4)                          // limit to 4 posts
          .map((item, index) => (
            <Link
              href={`/${category}/${item.slug}`}
              key={item.id}
              className="flex items-start gap-4 border-b border-gray-300 pb-3"
            >
              <span className="text-xl font-semibold">{index + 1}.</span>

              <p className="text-sm text-gray-700">
                {item.heading}
              </p>
            </Link>
          ))}

      </div>
    </div>



    {/* ========== RIGHT COLUMN ========== */}
    <div className="space-y-10">

    {/* ----- Preview Post ----- */}
    <div>
      <h2 className="text-lg font-medium border-b pb-2 mb-4">
        • Preview Post
      </h2>

      {prevPost ? (
        <Link href={`/${category}/${prevPost.slug}`} className="flex gap-4 items-start">

          <div className="w-1/4">
            <img
              src={prevPost.image}
              className="w-full h-24 object-cover rounded"
              alt="Preview"
            />
          </div>

          <div className="w-3/4">
            <h3 className="text-sm font-semibold">
              {prevPost.heading}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {prevPost.date}
            </p>
          </div>

        </Link>
      ) : (
        <p className="text-sm text-gray-500">No previous post</p>
      )}
    </div>

    {/* ----- Next Post ----- */}
    <div>
      <h2 className="text-lg font-medium border-b pb-2 mb-4">
        • Next Post
      </h2>

      {nextPost ? (
        <Link href={`/${category}/${nextPost.slug}`} className="flex gap-4 items-start">

          {/* IMAGE */}
          <div className="w-1/4">
            <img
              src={nextPost.image}
              className="w-full h-24 object-cover rounded"
              alt="Next Post"
            />
          </div>

          {/* TEXT */}
          <div className="w-3/4">
            <h3 className="text-sm font-semibold">
              {nextPost.heading}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {nextPost.date}
            </p>
          </div>

        </Link>
      ) : (
        <p className="text-sm text-gray-500">No next post</p>
      )}
    </div>

  </div>


    </div>

    {/* <div className="flex flex-col justify-center items-center gap-2">
        <h1 className=" mt-5 font-medium text-2xl"><span className="text-2xl me-2">~</span>COMMENTS<span className="text-2xl ms-2">~</span></h1>
    <p className="bg-black text-white p-2 w-75">Their are 3 commands for this article</p>
    </div> */}

{/* <div className="space-y-8">
      {comments.map((item, index) => (
       
        <div
  key={index}
  className={`flex items-start gap-4 p-3 ${index % 2 !== 0 ? "ms-4" : ""}`}
>
        
          <div className="w-1/5">
            <img
              src={item.image}
              alt="user"
              className="w-20 h-20 object-cover border border-black p-1"
            />
          </div>

        
          <div className="w-4/5 flex flex-col">
            <div>
              <span className="font-semibold bg-gray-100 px-1 py-0.5">
                {item.name}
              </span>
              <span className="text-gray-600 ms-2">{item.date}</span>
            </div>

            <p className="text-gray-800 mt-2">
              {item.text}
            </p>
          </div>

          
          <div className="w-auto">
            <button className="border border-gray-700 px-3 py-1 text-xs font-semibold hover:bg-gray-100">
              REPLY
            </button>
          </div>

        </div>
      ))}
    </div> */}

    {/* <div className="w-full max-w-4xl mx-auto py-12 px-4">
     
      <div className="text-center mb-10">
        <h2 className="text-2xl font-medium tracking-wide">
          ~~ LEAVE A REPLY ~~
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Your email address will not be published.
        </p>
      </div>

     
      <div className="space-y-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
         
          <div>
            <label className="block mb-2 font-medium text-sm">
              Name (optional)
            </label>
            <input
              type="text"
              placeholder="Your name *"
              className="w-full border border-black px-3 py-2 outline-none text-sm"
            />
          </div>

         
          <div>
            <label className="block mb-2 font-medium text-sm">
              Email (optional)
            </label>
            <input
              type="email"
              placeholder="Email *"
              className="w-full border border-black px-3 py-2 outline-none text-sm"
            />
          </div>

        </div>

       
        <div>
          <label className="block mb-2 font-medium text-sm">
            Comment
          </label>
          <textarea
            rows={6}
            placeholder="Your Comment"
            className="w-full border border-black px-3 py-2 outline-none text-sm"
          ></textarea>
        </div>

      
        <button className="bg-black text-white px-6 py-3">
          POST COMMENT
        </button>

      </div>
    </div> */}

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-5 h-max self-start">
    <RightSidebar categoryData={categorypagedata} authors={authorsPageData}/>
  </div>
      </div>
       <ArticleJsonLd article={article} />
        
    </div>
  );
}

export default page;
