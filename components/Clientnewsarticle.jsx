import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Landmark,
  MapPin,
  CalendarDays,
  Ticket,
} from "lucide-react";
import { FaXTwitter, FaRedditAlien } from "react-icons/fa6";
import ClientRightSidebar from "./Clientrightsidebar";
import { slugify } from "./slugify";

const SITE_URL = "https://www.venture-hive.com";

export default function ClientNewsArticle({ article, category }) {
  const shareUrl = `${SITE_URL}/${category}/${article.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.heading);

  // Build "In This Article" TOC: one entry per body section, plus
  // Supporting Cultural Patronage / The Legacy / Exhibition Information.
  const tocItems = [
    ...(article.detailcontents?.sections || []).map((s) => ({
      id: slugify(s.title),
      label: s.title,
    })),
    article.patronage && {
      id: slugify(article.patronage.title),
      label: article.patronage.title,
    },
    article.legacy && {
      id: slugify(article.legacy.title),
      label: article.legacy.title,
    },
    article.exhibitionInfo && {
      id: "exhibition-information",
      label: "Exhibition Information",
    },
  ].filter(Boolean);

  return (
    <div className="bg-[#faf8f4]">
      {/* HERO */}
      <div className="relative w-full h-[420px] md:h-[550px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-2xl">
          <span className="inline-block bg-white text-[#1a1a1a] text-[11px] tracking-[0.15em] font-semibold px-3 py-1 mb-4">
            {(article.authorCategory || category).toUpperCase()}
          </span>
          <h1 className="text-white font-serif text-3xl md:text-5xl font-semibold leading-tight mb-4">
            {article.heading}
          </h1>
          <p className="text-white/90 text-sm md:text-base mb-4 max-w-xl">
            {article.subtitle}
          </p>
          <div className="flex items-center gap-3 text-white/90 text-xs">
            {article.author && (
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6">
                  <Image
                    src={article.author.profileImage}
                    alt={article.author.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="24px"
                  />
                </div>
                <span>By {article.author.name}</span>
              </div>
            )}
            <span>•</span>
            <span>{article.publishedDate}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>

      {/* BODY + SIDEBAR */}
      <div className="px-5 md:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-12">
          {/* ARTICLE */}
          <article className="max-w-[760px] mx-auto lg:mx-0 text-sm leading-relaxed text-[#3d3d3d]">
            {/* Intro pull-quote */}
            {article.detailcontents?.intro?.text && (
              <blockquote className="border-l-4 border-[#b88a44] pl-5 py-2 mb-8 text-lg md:text-xl font-serif italic text-[#1a1a1a]">
                {article.detailcontents.intro.text}
              </blockquote>
            )}

            {article.detailcontents?.sections?.map((section, sIndex) => (
              <section key={sIndex} id={slugify(section.title)} className="mb-12 scroll-mt-24">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-4">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-justify ${pIndex > 0 ? "mt-4" : ""} ${
                      sIndex === 0 && pIndex === 0 ? "first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:text-[#b88a44]" : ""
                    }`}
                  >
                    {p.text}
                  </p>
                ))}
                {section.quote && (
                  <p className="mt-6 text-lg font-serif italic text-[#1a1a1a] border-l-4 border-[#e8e3da] pl-5">
                    {section.quote}
                  </p>
                )}
              </section>
            ))}

            {/* Timeline */}
            {article.timeline?.length > 0 && (
              <div className="mb-12">
                <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-6">
                  A Life of Movement and Vision
                </h2>
                {/* Desktop: horizontal */}
                <div className="hidden md:flex items-start justify-between relative">
                  <div className="absolute top-3.5 left-0 right-0 h-px bg-[#e8e3da]" />
                  {article.timeline.map((t, i) => (
                    <div key={i} className="relative z-10 flex-1 text-center px-2">
                      <div className="w-7 h-7 mx-auto rounded-full bg-[#faf8f4] border-2 border-[#b88a44] flex items-center justify-center text-[10px] text-[#b88a44] font-semibold">
                        {i + 1}
                      </div>
                      <p className="mt-3 font-serif text-base font-semibold text-[#1a1a1a]">
                        {t.year}
                      </p>
                      <p className="text-xs text-[#6b6b6b] mt-1">{t.title}</p>
                    </div>
                  ))}
                </div>
                {/* Mobile: vertical */}
                <div className="md:hidden space-y-6 relative pl-6 border-l-2 border-[#e8e3da]">
                  {article.timeline.map((t, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] w-5 h-5 rounded-full bg-[#faf8f4] border-2 border-[#b88a44]" />
                      <p className="font-serif text-base font-semibold text-[#1a1a1a]">
                        {t.year}
                      </p>
                      <p className="text-xs text-[#6b6b6b] mt-1">{t.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quote block */}
            {article.quote && (
              <div className="my-12 text-center">
                <span className="text-5xl text-[#b88a44] leading-none">&#10077;</span>
                <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] max-w-xl mx-auto -mt-2">
                  {article.quote.text}
                </p>
                <p className="text-xs tracking-wide text-[#6b6b6b] mt-4">
                  — {article.quote.author}
                </p>
              </div>
            )}

            {/* Patronage */}
            {article.patronage && (
              <div
                id={slugify(article.patronage.title)}
                className="mb-12 bg-white border border-[#e8e3da] rounded-md p-6 scroll-mt-24"
              >
                <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-2">
                  {article.patronage.title}
                </h2>
                <p className="text-sm text-[#6b6b6b] mb-6">
                  {article.patronage.description}
                </p>
                <div className="space-y-6">
                  {article.patronage.people.map((person, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row gap-5 items-start sm:items-center bg-[#faf8f4] border border-[#e8e3da] rounded-md p-4"
                    >
                      <div className="relative w-full sm:w-40 h-48 sm:h-40 shrink-0 rounded overflow-hidden">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 160px"
                        />
                      </div>
                      <div>
                        <p className="font-serif text-lg font-semibold text-[#1a1a1a]">
                          {person.name}
                        </p>
                        <p className="text-xs text-[#b88a44] font-medium mt-1">
                          {person.position}
                        </p>
                        <p className="text-sm text-[#3d3d3d] mt-2">{person.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {article.patronage.supportNote && (
                  <p className="text-xs text-[#6b6b6b] mt-6 border-t border-[#e8e3da] pt-4">
                    {article.patronage.supportNote}
                  </p>
                )}
              </div>
            )}

            {/* Legacy */}
            {article.legacy && (
              <section id={slugify(article.legacy.title)} className="mb-12 scroll-mt-24">
                <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-4">
                  {article.legacy.title}
                </h2>
                {article.legacy.paragraphs.map((p, i) => (
                  <p key={i} className={`text-justify ${i > 0 ? "mt-4" : ""}`}>
                    {p}
                  </p>
                ))}
              </section>
            )}

            {/* Exhibition Information (inline, mirrors sidebar for anchor/TOC target) */}
            {article.exhibitionInfo && (
              <section id="exhibition-information" className="mb-12 scroll-mt-24">
                <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-4">
                  Exhibition Information
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#faf5ea] border border-[#e8e3da] rounded-md p-5">
                  <div className="flex items-start gap-2">
                    <Landmark size={16} className="text-[#b88a44] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Venue</p>
                      <p className="text-xs text-[#1a1a1a]">{article.exhibitionInfo.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#b88a44] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Location</p>
                      <p className="text-xs text-[#1a1a1a]">{article.exhibitionInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarDays size={16} className="text-[#b88a44] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Dates</p>
                      <p className="text-xs text-[#1a1a1a]">{article.exhibitionInfo.dates}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Ticket size={16} className="text-[#b88a44] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Admission</p>
                      <p className="text-xs text-[#1a1a1a]">{article.exhibitionInfo.admission}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Hashtags */}
            {article.hashTags?.length > 0 && (
              <div className="flex flex-wrap gap-3 bg-[#faf5ea] p-4 rounded-md mb-8">
                {article.hashTags.map((tag, i) => (
                  <span key={i} className="text-xs text-[#6b6b6b]">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share row */}
            <div className="flex items-center justify-center gap-4 border-y border-[#e8e3da] py-5 mb-12">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center"
              >
                <Facebook size={14} className="text-white" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center"
              >
                <FaXTwitter size={13} className="text-white" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center"
              >
                <Linkedin size={14} className="text-white" />
              </a>
              <a
                href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Reddit"
                className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center"
              >
                <FaRedditAlien size={14} className="text-white" />
              </a>
            </div>

            {/* More Coverage */}
            {article.moreCoverage?.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#1a1a1a] mb-6">
                  More Arts Coverage
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {article.moreCoverage.map((item, i) => (
                    <Link
                      href={`/${category}/${item.slug}`}
                      key={i}
                      title={item.heading}
                      className="group"
                    >
                      <div className="relative w-full h-32 overflow-hidden rounded mb-3">
                        <Image
                          src={item.image}
                          alt={item.heading}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <p className="text-[11px] uppercase tracking-wide text-[#b88a44] mb-1">
                        {item.category}
                      </p>
                      <p className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#b88a44] transition-colors">
                        {item.heading}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* SIDEBAR — outer div is the grid item (stretches to match the
              article's full height by default grid alignment); the sticky
              element lives one level in, at its own natural height, so it
              sticks on the way down and releases exactly when this outer
              box (== article height) runs out. */}
          <div>
            <ClientRightSidebar article={article} tocItems={tocItems} shareUrl={shareUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}