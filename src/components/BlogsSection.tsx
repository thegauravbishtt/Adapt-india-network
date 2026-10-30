import React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { seedArticles } from "../data/articles";

/** Homepage article picks: first one is featured. Images chosen so none repeat elsewhere on the homepage. */
const picks: Array<{ slug: string; image?: string }> = [
  { slug: "why-dedicated-internet-leased-lines-matter", image: "/service-banners/sd-wan-ready-ill.jpg" },
  { slug: "sd-wan-vs-traditional-mpls-enterprise-guide" },
  { slug: "cloud-telephony-sip-trunking-modern-workforce" },
  { slug: "pan-india-carrier-redundancy-dual-homed-failover" },
];

const articles = picks
  .map((p) => {
    const a = seedArticles.find((x) => x.slug === p.slug);
    return a ? { ...a, image: p.image ?? a.image } : null;
  })
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export default function BlogsSection() {
  const [featured, ...rest] = articles;

  return (
    <section
      id="blogs"
      className="w-full bg-[#050811] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-16 relative overflow-hidden border-t border-zinc-800/60"
    >
      <div className="absolute -top-20 right-0 w-[500px] h-[300px] bg-red-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Header column */}
        <div className="lg:col-span-3 flex flex-col">
          <span className="text-[#E31E24] font-mono font-bold text-[11px] uppercase tracking-[0.2em]">
            {"// "}Guides &amp; insights
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight mt-3">
            Resources to help you <span className="text-[#E31E24]">choose better</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mt-4">
            Plain-English guides on leased lines, SD-WAN, business voice and keeping your offices online.
          </p>
          <Link
            href="/blog/"
            className="hidden lg:inline-flex mt-8 items-center gap-2 self-start border border-white/20 hover:border-[#E31E24] hover:bg-[#E31E24] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            All articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured article */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}/`}
            className="group lg:col-span-5 flex flex-col rounded-2xl overflow-hidden bg-[#0b121e] border border-zinc-800 hover:border-[#E31E24]/60 transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#E31E24] text-[10.5px] font-bold uppercase tracking-wider">
                Featured
              </span>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
                <span className="text-red-400">{featured.category}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight group-hover:text-red-400 transition-colors">
                {featured.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mt-2.5 line-clamp-3">{featured.excerpt}</p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#E31E24] group-hover:text-white transition-colors">
                Read article <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        )}

        {/* Numbered list */}
        <ol className="lg:col-span-4 flex flex-col divide-y divide-zinc-800 border-y border-zinc-800 lg:border-t-0 lg:border-b-0">
          {rest.map((a, i) => (
            <li key={a.slug} className="lg:flex-1">
              <Link href={`/blog/${a.slug}/`} className="group flex gap-4 py-5 lg:h-full lg:items-center">
                <span className="font-mono text-2xl font-bold text-zinc-700 group-hover:text-[#E31E24] transition-colors leading-none pt-0.5">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[11px] font-mono text-red-400 uppercase tracking-wider mb-1.5">
                    {a.category} · {a.readTime}
                  </span>
                  <h3 className="text-[15px] sm:text-base font-bold leading-snug group-hover:text-red-400 transition-colors">
                    {a.title}
                  </h3>
                </span>
                <span className="hidden sm:block w-20 h-16 shrink-0 rounded-lg overflow-hidden border border-zinc-800">
                  <img src={a.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Mobile button */}
        <Link
          href="/blog/"
          className="lg:hidden inline-flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#c9181d] text-white text-sm font-bold px-6 py-3 rounded-full transition-colors"
        >
          All articles <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
