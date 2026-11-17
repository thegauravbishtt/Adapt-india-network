import React from "react";
import Link from "next/link";
import { subServices, isIndexedSubService } from "../data/subServices";

/**
 * Plain list of every individual service page, grouped by menu group.
 * The mega menu only renders in the browser, so without this list Google sees
 * almost no links to these pages. Server-rendered on /services/.
 */
export default function AllServicesList() {
  const groups = new Map<string, { slug: string; name: string }[]>();
  for (const s of subServices) {
    if (!isIndexedSubService(s.slug)) continue;
    const list = groups.get(s.group) ?? [];
    list.push({ slug: s.slug, name: s.name });
    groups.set(s.group, list);
  }
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-2">
          All business connectivity and communication services
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mb-8 max-w-3xl">
          Every service we deliver through Tata Tele Business Services, ACT Fibernet and our technology partners, grouped by what it does.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...groups.entries()].map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500 mb-3">{group}</h3>
              <ul className="space-y-2">
                {items.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/services/${i.slug}/`} className="text-sm text-zinc-800 hover:text-[#E31E24] hover:underline">
                      {i.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-zinc-700">
          Also:{" "}
          <Link href="/services/internet-exchange-peering/" className="font-semibold text-zinc-900 hover:text-[#E31E24] hover:underline">
            Internet Exchange & Peering
          </Link>{" "}
          ·{" "}
          <Link href="/industries/" className="font-semibold text-zinc-900 hover:text-[#E31E24] hover:underline">
            Solutions by industry
          </Link>
        </p>
      </div>
    </section>
  );
}
