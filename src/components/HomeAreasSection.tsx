import React from "react";
import Link from "next/link";
import { areaPages } from "../data/areaPages";

/**
 * Homepage links to city and business-area pages.
 * The homepage is the strongest page on the site; linking from it helps Google find
 * and rank the location pages, and gives visitors a quick way to their own area.
 */
const CITY_LINKS = [
  { name: "Delhi", href: "/locations/delhi/" },
  { name: "Gurgaon", href: "/locations/gurgaon/" },
  { name: "Noida", href: "/locations/noida/" },
  { name: "Ghaziabad", href: "/locations/ghaziabad/" },
  { name: "Faridabad", href: "/locations/faridabad/" },
  { name: "Mumbai", href: "/locations/mumbai/" },
  { name: "Bengaluru", href: "/locations/bengaluru/" },
  { name: "Hyderabad", href: "/locations/hyderabad/" },
  { name: "Chennai", href: "/locations/chennai/" },
  { name: "Pune", href: "/locations/pune/" },
  { name: "Kolkata", href: "/locations/kolkata/" },
  { name: "Ahmedabad", href: "/locations/ahmedabad/" },
];

export default function HomeAreasSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-2">
          Leased line and business internet near you
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mb-6 max-w-3xl">
          Head office in Paschim Vihar, New Delhi, with leased lines, SD-WAN and MPLS delivered across India.
          Pick your city or business area to see what we offer there.
        </p>

        <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500 mb-3">Cities</h3>
        <ul className="flex flex-wrap gap-2.5 mb-7">
          {CITY_LINKS.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="inline-block px-3.5 py-1.5 rounded-full border border-zinc-300 text-sm text-zinc-800 hover:border-[#E31E24] hover:text-[#E31E24] transition-colors"
              >
                Leased line in {c.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/locations/"
              className="inline-block px-3.5 py-1.5 rounded-full text-sm font-semibold text-[#E31E24] hover:underline"
            >
              All locations →
            </Link>
          </li>
        </ul>

        <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500 mb-3">Business areas</h3>
        <ul className="flex flex-wrap gap-2.5">
          {areaPages.map((a) => (
            <li key={`${a.citySlug}-${a.slug}`}>
              <Link
                href={`/locations/${a.citySlug}/${a.slug}/`}
                className="inline-block px-3.5 py-1.5 rounded-full bg-zinc-100 text-sm text-zinc-800 hover:bg-[#E31E24] hover:text-white transition-colors"
              >
                {a.area}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
