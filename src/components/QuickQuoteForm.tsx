"use client";

import React, { useState } from "react";

/**
 * Short enquiry form shown on service pages, so a visitor can ask for a quote
 * without leaving the page. Posts to the same /api/contact handler as the contact page.
 */
const DEFAULT_INTRO =
  "Tell us your address and what you need. We check which carriers already reach your building and come back with options.";
const DEFAULT_POINTS = [
  "Free feasibility check at your address",
  "Options from Tata Tele Business Services and ACT Fibernet",
  "One team for installation, support and billing",
];

export default function QuickQuoteForm({
  service,
  heading,
  intro = DEFAULT_INTRO,
  points = DEFAULT_POINTS,
}: {
  service: string;
  heading: string;
  intro?: string;
  points?: string[];
}) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", requirement: "", website: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          countryCode: "+91",
          email: form.email,
          location: form.location,
          service,
          companyName: "Website Visitor",
          requirement: form.requirement || `Quote request for ${service}`,
          source: `Service page form: ${service}`,
          website: form.website,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("done");
    } catch (err: any) {
      setError(
        (err?.message && err.message !== "Failed to fetch" ? err.message + " " : "") +
          "If it keeps failing, please call +91 82874 79961 or WhatsApp us."
      );
      setState("idle");
    }
  };

  const input =
    "w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-[#E31E24]";

  return (
    <section id="contact-quote" className="scroll-mt-24 w-full bg-[#0c0c0d] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight mb-3">{heading}</h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
            {intro}
          </p>
          <ul className="text-sm text-zinc-300 flex flex-col gap-1.5">
            {points.map((p) => (
              <li key={p}>✓ {p}</li>
            ))}
          </ul>
          <p className="text-sm text-zinc-400 mt-5">
            Prefer to talk?{" "}
            <a href="tel:+918287479961" className="text-white font-semibold underline">Call +91 82874 79961</a> or{" "}
            <a href="https://wa.me/918287479961" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline">
              WhatsApp us
            </a>
            .
          </p>
        </div>

        {state === "done" ? (
          <div className="rounded-lg bg-white text-zinc-900 p-6">
            <h3 className="font-bold text-lg mb-1">Thank you, we've got your request.</h3>
            <p className="text-sm text-zinc-600">Our team will call you shortly to confirm the details.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-lg bg-white text-zinc-900 p-5 sm:p-6 flex flex-col gap-3">
            <label className="text-xs font-medium text-zinc-700">
              Name *
              <input required className={input} value={form.name} onChange={set("name")} autoComplete="name" />
            </label>
            <label className="text-xs font-medium text-zinc-700">
              Phone *
              <input required type="tel" className={input} value={form.phone} onChange={set("phone")} autoComplete="tel" />
            </label>
            <label className="text-xs font-medium text-zinc-700">
              Email *
              <input required type="email" className={input} value={form.email} onChange={set("email")} autoComplete="email" />
            </label>
            <label className="text-xs font-medium text-zinc-700">
              Office address or area *
              <input required className={input} value={form.location} onChange={set("location")} placeholder="e.g. Udyog Vihar Phase 4, Gurgaon" />
            </label>
            <label className="text-xs font-medium text-zinc-700">
              What do you need?
              <textarea rows={3} className={input} value={form.requirement} onChange={set("requirement")} placeholder="Speed, number of users or sites, backup needed..." />
            </label>
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={form.website}
              onChange={set("website")}
            />
            {error && (
              <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={state === "sending"}
              className="mt-1 px-5 py-3 bg-[#E31E24] hover:bg-[#c9171d] disabled:opacity-60 text-white text-sm font-bold uppercase tracking-wider rounded-md"
            >
              {state === "sending" ? "Sending..." : "Get a free quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
