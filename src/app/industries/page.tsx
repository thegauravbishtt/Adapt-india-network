import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import UpgradeCTA from "../../components/UpgradeCTA";
import { LanguageProvider } from "../../context/LanguageContext";
import { industryPages } from "../../data/solutionPages";
import { pageMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Business Internet & Network Solutions by Industry | Adapt India",
  description:
    "Leased lines, Wi-Fi, SD-WAN and security planned for hospitals, schools, hotels, factories and warehouses across India.",
  path: "/industries/",
});

export default function IndustriesHub() {
  return (
    <LanguageProvider>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries/" },
          ]),
        ]}
      />
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full">
        <Navbar />
        <main className="flex-1 w-full pt-28 sm:pt-32 lg:pt-36">
          <section className="w-full px-4 sm:px-8 lg:px-14 xl:px-20 pb-12 sm:pb-16">
            <div className="max-w-6xl mx-auto">
              <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-2 block">
                {"// "}Industries
              </span>
              <h1 className="text-2xl sm:text-4xl font-black font-display text-zinc-950 tracking-tight mb-3">
                Network solutions by industry
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 max-w-3xl mb-10">
                Every kind of business needs something different from its network. A hospital can't lose its billing
                system, a warehouse needs scanners to work between the racks, and a hotel's guests expect Wi-Fi in every
                room. Pick your industry to see how we plan it.
              </p>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {industryPages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/industries/${p.slug}/`}
                      className="block h-full border border-zinc-200 rounded-lg p-5 hover:border-[#E31E24] transition-colors group"
                    >
                      <h2 className="font-bold text-lg text-zinc-950 mb-1.5 group-hover:text-[#E31E24]">{p.name}</h2>
                      <p className="text-sm text-zinc-600 leading-relaxed">{p.lead}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <UpgradeCTA
          title="Not sure what your site needs?"
          text="Tell us what your business does and where you are. We'll suggest the right connection, backup and Wi-Fi."
        />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
