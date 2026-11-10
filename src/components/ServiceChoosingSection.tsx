import React from "react";
import type { ServiceGuide } from "@/data/serviceGuides";

/** Buyer's checklist under a service guide, e.g. "How to choose an MPLS provider in India". */
export default function ServiceChoosingSection({ choosing }: { choosing: NonNullable<ServiceGuide["choosing"]> }) {
  return (
    <section className="w-full bg-zinc-50 border-y border-zinc-200 py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight leading-tight max-w-3xl">
          {choosing.heading}
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mt-3 max-w-3xl">{choosing.intro}</p>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {choosing.points.map((pt, i) => (
            <li key={pt.title} className="bg-white rounded-xl border border-zinc-200 p-5">
              <span className="font-mono text-xs font-bold text-[#E31E24]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-bold text-zinc-950 mt-1.5 mb-1.5">{pt.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{pt.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
