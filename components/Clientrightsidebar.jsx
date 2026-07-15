"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Landmark,
  MapPin,
  CalendarDays,
  Ticket,
  Link2,
  Mail,
} from "lucide-react";
import { Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function ClientRightSidebar({ article, tocItems, shareUrl }) {
  const [activeId, setActiveId] = useState(tocItems?.[0]?.id);

  useEffect(() => {
    if (!tocItems?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const encodedUrl = encodeURIComponent(shareUrl || "");
  const shareTitle = encodeURIComponent(article?.heading || "");

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl || "");
    }
  };

  return (
    <div className="space-y-8 lg:sticky lg:top-6">
      {/* Share This Article */}
      <div className="bg-white border border-[#e8e3da] rounded-md p-5">
        <p className="text-xs tracking-[0.15em] text-[#6b6b6b] font-medium mb-4">
          SHARE THIS ARTICLE
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            title="Share on Facebook"
            className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#b88a44] transition-colors"
          >
            <Facebook size={14} className="text-white" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            title="Share on X"
            className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#b88a44] transition-colors"
          >
            <FaXTwitter size={13} className="text-white" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            title="Share on LinkedIn"
            className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#b88a44] transition-colors"
          >
            <Linkedin size={14} className="text-white" />
          </a>
          <a
            href={`mailto:?subject=${shareTitle}&body=${encodedUrl}`}
            aria-label="Share by Email"
            title="Share by Email"
            className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#b88a44] transition-colors"
          >
            <Mail size={14} className="text-white" />
          </a>
          <button
            onClick={handleCopyLink}
            aria-label="Copy link"
            title="Copy link"
            className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#b88a44] transition-colors"
          >
            <Link2 size={14} className="text-white" />
          </button>
        </div>
      </div>

      {/* Reading Time */}
      <div className="bg-white border border-[#e8e3da] rounded-md p-5 flex items-center gap-3">
        <Clock size={18} className="text-[#b88a44]" />
        <div>
          <p className="text-xs tracking-[0.1em] text-[#6b6b6b] font-medium">
            READING TIME
          </p>
          <p className="text-sm text-[#1a1a1a] font-medium">
            {article?.readingTime || "10 min read"}
          </p>
        </div>
      </div>

      {/* In This Article */}
      {tocItems?.length > 0 && (
        <div className="bg-white border border-[#e8e3da] rounded-md p-5">
          <p className="text-xs tracking-[0.15em] text-[#6b6b6b] font-medium mb-4">
            IN THIS ARTICLE
          </p>
          <ol className="space-y-2.5 text-sm">
            {tocItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleJump(item.id)}
                  className={`text-left w-full transition-colors ${
                    activeId === item.id
                      ? "text-[#b88a44] font-semibold"
                      : "text-[#1a1a1a] hover:text-[#b88a44]"
                  }`}
                >
                  {index + 1}. {item.label}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Related Stories */}
      {article?.relatedStories?.length > 0 && (
        <div className="bg-white border border-[#e8e3da] rounded-md p-5">
          <p className="text-xs tracking-[0.15em] text-[#6b6b6b] font-medium mb-4">
            RELATED STORIES
          </p>
          <div className="space-y-4">
            {article.relatedStories.map((story, i) => (
              <Link
                href={`/${story.category}/${story.slug}`}
                key={i}
                title={story.heading}
                className="flex gap-3 group"
              >
                <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded">
                  <Image
                    src={story.image}
                    alt={story.heading}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium leading-snug group-hover:text-[#b88a44] transition-colors">
                    {story.heading}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b] mt-1">
                    {story.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Exhibition Information */}
      {article?.exhibitionInfo && (
        <div className="bg-[#faf5ea] border border-[#e8e3da] rounded-md p-5">
          <p className="text-xs tracking-[0.15em] text-[#6b6b6b] font-medium mb-4">
            EXHIBITION INFORMATION
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Landmark size={16} className="text-[#b88a44] mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Venue</p>
                <p className="text-[#1a1a1a]">{article.exhibitionInfo.venue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#b88a44] mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Location</p>
                <p className="text-[#1a1a1a]">{article.exhibitionInfo.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays size={16} className="text-[#b88a44] mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Dates</p>
                <p className="text-[#1a1a1a]">{article.exhibitionInfo.dates}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Ticket size={16} className="text-[#b88a44] mt-0.5" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-[#6b6b6b]">Admission</p>
                <p className="text-[#1a1a1a]">{article.exhibitionInfo.admission}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Author Card */}
      {article?.author && (
        <div className="bg-[#eef3fb] border border-[#e8e3da] rounded-md p-5">
          <p className="text-xs tracking-[0.15em] text-[#6b6b6b] font-medium mb-3">
            AUTHOR
          </p>
          <div className="flex items-start gap-3">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src={article.author.profileImage}
                alt={article.author.name}
                fill
                className="rounded-full object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <Link href="/authors" title={article.author.name}>
                <p className="font-semibold text-[#1a1a1a] hover:text-[#b88a44] transition-colors">
                  {article.author.name}
                </p>
              </Link>
              <p className="text-xs text-[#6b6b6b]">{article.author.position}</p>
            </div>
          </div>
          <p className="text-sm text-[#3d3d3d] mt-3 leading-relaxed">
            {article.author.bio}
          </p>
          <div className="flex items-center gap-3 mt-3 text-[#1a1a1a]">
            {article.author.social?.twitter && (
              <a
                href={article.author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#b88a44]"
              >
                <FaXTwitter size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}