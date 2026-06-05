// app/contact/ContactClient.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

const CONTACT_TYPES = [
  {
    id: "tip",
    title: "Story Tip",
    email: "tips@venture-hive.com",
    desc: "Have information about a story we should investigate? We take every tip seriously and protect confidential sources.",
  },
  {
    id: "correction",
    title: "Correction Request",
    email: "corrections@venture-hive.com",
    desc: "Believe we published an error? Let us know and we will review it promptly.",
  },
  {
    id: "press",
    title: "Press & Media",
    email: "press@venture-hive.com",
    desc: "Interview requests, media partnerships, and official press enquiries.",
  },
  {
    id: "general",
    title: "General Enquiry",
    email: "hello@venture-hive.com",
    desc: "Feedback, partnerships, reader questions, and everything else.",
  },
];

export default function ContactClient() {
  const [selected, setSelected] = useState(null);

  const activeEmail = selected
    ? CONTACT_TYPES.find((c) => c.id === selected)?.email
    : "hello@venture-hive.com";

  return (
    <div className="min-h-screen bg-zinc-50 px-5 md:px-20 py-12 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* H1 */}
        <h1 className="text-4xl font-semibold text-center">
          Contact VENTURE HIVE
        </h1>

        <p className="text-sm text-gray-600 text-center">
          Independent journalism built on reader trust — we read every message we receive
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether you have a story tip, a correction, a press enquiry, or general
          feedback for our independent journalism team — reach us through the
          appropriate channel below. Every submission is read by a member of our
          editorial team.
        </p>

        <hr aria-hidden="true" />

        {/* Contact type selector */}
        <h2 className="text-2xl font-semibold">Choose a Contact Type</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACT_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelected(selected === type.id ? null : type.id)}
              className={`text-left border p-5 transition-all ${
                selected === type.id
                  ? "border-zinc-800 bg-zinc-800 text-white"
                  : "border-zinc-300 bg-white hover:border-zinc-500 text-zinc-800"
              }`}
            >
              <p className="font-semibold text-base mb-1">{type.title}</p>
              <p className={`text-sm leading-relaxed mb-2 ${selected === type.id ? "text-zinc-300" : "text-zinc-500"}`}>
                {type.desc}
              </p>
              <p className={`text-xs font-mono ${selected === type.id ? "text-zinc-300" : "text-zinc-400"}`}>
                {type.email}
              </p>
            </button>
          ))}
        </div>

        <hr aria-hidden="true" />

        {/* Email directory */}
        <h2 className="text-2xl font-semibold">Direct Email Contacts</h2>

        <div className="bg-white border border-zinc-200 divide-y divide-zinc-100">
          {[
            { label: "Editorial & General", email: "editorial@venture-hive.com", note: "Coverage questions, editorial feedback" },
            { label: "Story Tips", email: "tips@venture-hive.com", note: "Confidential tips and source protection" },
            { label: "Corrections", email: "corrections@venture-hive.com", note: "Factual errors and correction requests" },
            { label: "Press & Media", email: "press@venture-hive.com", note: "Interviews, partnerships, official enquiries" },
            { label: "Legal & Permissions", email: "legal@venture-hive.com", note: "Rights, reuse, and formal legal notices" },
          ].map(({ label, email, note }) => (
            <div key={label} className="flex items-center justify-between px-5 py-4 flex-wrap gap-2">
              <div>
                <p className="font-semibold text-sm text-zinc-800">{label}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{note}</p>
              </div>
              <a
                href={`mailto:${email}`}
                title={`Email VENTURE HIVE — ${label}`}
                className="text-sm text-zinc-700 underline hover:text-zinc-900 transition-colors font-mono"
              >
                {email}
              </a>
            </div>
          ))}
        </div>

        <hr aria-hidden="true" />

        {/* Response times */}
        <h2 className="text-2xl font-semibold">Response Times</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { type: "Story Tips", time: "Within 24 hrs" },
            { type: "Corrections", time: "1–2 business days" },
            { type: "Press", time: "1 business day" },
            { type: "General", time: "3–5 business days" },
          ].map(({ type, time }) => (
            <div key={type} className="bg-white border border-zinc-200 p-4 text-center">
              <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wide">{type}</p>
              <p className="font-semibold text-sm text-zinc-800">{time}</p>
            </div>
          ))}
        </div>

        <hr aria-hidden="true" />

        {/* Source protection note */}
        <div className="bg-zinc-800 text-white p-6">
          <h2 className="text-lg font-semibold mb-2">Confidential Tips</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            VENTURE HIVE protects the identity of confidential sources. If you have
            sensitive information to share, indicate this when you contact us and we
            will arrange secure communication. We support encrypted messaging for
            whistleblowers and sensitive submissions.
          </p>
        </div>

        <hr aria-hidden="true" />

        {/* Related links */}
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Editorial Policy", href: "/editorial-policy" },
            { label: "Corrections Policy", href: "/corrections-policy" },
            { label: "Right of Reply", href: "/right-of-reply" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              title={label}
              className="border border-zinc-300 px-4 py-2 text-sm text-zinc-600 hover:border-zinc-800 hover:text-zinc-800 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          © 2025 VENTURE HIVE · Independent Journalism
        </p>

      </div>
    </div>
  );
}