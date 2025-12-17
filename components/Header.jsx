
"use client";

import Link from "next/link";
import { useState } from "react";
import categoryData from "../public/data/category/categorypagedata";

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);
  const getFormattedDate = () => {
  const today = new Date();

  return today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

  return (
    <header className="md:px-20 font-serif">

      {/* ================= TOP BAR ================= */}
      <div className="w-full border border-t-0 border-s-0 border-e-0 border-gray-500 p-4
                      flex flex-col md:flex-row justify-between items-center gap-2">
       
        <h6 className="flex items-center gap-2 text-black text-sm md:text-base">
          <i className="fa-regular fa-clock"></i>
          <span>{getFormattedDate()}</span>
        </h6>

        <div className="flex items-center gap-4 text-black text-lg">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </div>

      {/* ================= HEADING ================= */}
      <div className="text-center py-6 px-4">
        <h1 className="text-4xl md:text-6xl tracking-wide font-medium">
          VENTURE HIVE
        </h1>
        <p className="text-xs md:text-base mt-1">
          INSIGHT / ANALYSIS / IMPACT
        </p>
      </div>

      {/* ================= HR ABOVE MENU (MOBILE) ================= */}
      <hr className="border-t-2 border-black md:hidden" />

      {/* ================= MENU BAR (MOBILE) ================= */}
      <div className="flex justify-end items-center px-4 py-2 md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-medium"
        >
          MENU <span className="text-lg">≡</span>
        </button>
      </div>

      {/* ================= HR BELOW MENU (MOBILE) ================= */}
      <hr className="border-t-2 border-black md:hidden" />

      {/* ================= MOBILE DROPDOWN ================= */}
      {open && (
        <>
          <nav className="md:hidden flex flex-col divide-y bg-white">
            <Link
              href="/"
              className="px-4 py-3 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              HOME
            </Link>

            {Object.keys(categoryData).map((cat) => (
              <Link
                key={cat}
                href={`/${cat}`}
                className="px-4 py-3 hover:bg-gray-100 uppercase"
                onClick={() => setOpen(false)}
              >
                {cat}
              </Link>
            ))}
          </nav>

          <hr className="border-t-2 border-black md:hidden" />
        </>
      )}

      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:block">
        <hr className="border-t-2 border-black" />

        <nav className="flex flex-wrap justify-center gap-10 py-3 text-base">
          <Link href="/" className="hover:text-blue-600 transition">
            • HOME
          </Link>

          {Object.keys(categoryData).map((cat) => (
            <Link
              key={cat}
              href={`/${cat}`}
              className="hover:text-blue-600 transition"
            >
              • {cat.toUpperCase()}
            </Link>
          ))}
        </nav>

        <hr className="border-t-4 border-black" />
      </div>

    </header>
  );
}
