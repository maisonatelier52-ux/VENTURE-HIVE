
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SimpleCarousel({ items = [] }) {
  if (!items.length) return null;

  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ================= SLIDES ================= */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          console.log("items",item),
          
          <div key={i} className="min-w-full px-4 sm:px-8 lg:px-16">
            {/* Image */}
            <Link href={`/${item.category}/${item.slug}`}>
            <img
              src={item.image}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
              alt={item.alt || item.heading}
            />
            </Link>

            {/* Title */}
            <Link href={`/${item.category}/${item.slug}`}>
              <h1 className="mt-4 text-xl md:text-3xl font-semibold">
                {item.heading}
              </h1>
            </Link>
            

            {/* ================= MOBILE AUTHOR ROW ================= */}
            <div className="flex items-center gap-3 mt-4 mb-4 md:hidden">
              <img
                src={item.author?.profileImage}
                className="w-8 h-8 rounded-full object-cover"
                alt={item.author?.name}
              />

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="font-medium text-black">
                  {item.author?.name}
                </span>
                <span>•</span>
                <span>{item.date}</span>
              </div>
            </div>

            {/* ================= DESKTOP LAYOUT ================= */}
            <div className="hidden md:grid grid-cols-[25%_75%] gap-6 mt-6 pb-5">
              {/* Author Section */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={item.author?.profileImage}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={item.author?.name}
                />
                <h3 className="font-medium text-sm mt-3">
                  {item.author?.name}
                </h3>
                <p className="text-gray-500 text-xs">{item.date}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-500 leading-relaxed text-xs md:text-sm px-10">
                  {(item.content || "").slice(0, 150)}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-3 right-6 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full border border-black
              ${index === i ? "bg-black" : "bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
