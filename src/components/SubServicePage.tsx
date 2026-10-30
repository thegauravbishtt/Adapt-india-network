import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UpgradeCTA from "./UpgradeCTA";
import { LanguageProvider } from "../context/LanguageContext";
import type { SubService } from "../data/subServices/types";

interface Props {
  item: SubService;
  banner: string;
  parentName: string;
  related: SubService[];
  /** 0-3: picks one of four body layouts so neighbouring pages look different. */
  variant: number;
}

const wrap = "w-full px-4 sm:px-8 lg:px-14 xl:px-20";

function FeatureNumber({ i }: { i: number }) {
  return (
    <span className="w-8 h-8 shrink-0 rounded-lg bg-red-50 text-[#E31E24] font-bold text-sm flex items-center justify-center">
      {String(i + 1).padStart(2, "0")}
    </span>
  );
}

function Body({ item, variant }: { item: SubService; variant: number }) {
  /* A: text left, fit-panel right, features in a 2x2 grid */
  if (variant === 0) {
    return (
      <section className={`${wrap} bg-white py-12 sm:py-16`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight">What is {item.name}?</h2>
            {item.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
              {item.features.map((f, i) => (
                <div key={f.title} className="flex gap-3">
                  <FeatureNumber i={i} />
                  <div>
                    <h3 className="font-bold text-zinc-950">{f.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mt-0.5">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5 self-start lg:sticky lg:top-28 rounded-2xl border-l-4 border-[#E31E24] bg-red-50/60 p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-3">Who it&apos;s for</h3>
            <ul className="flex flex-col gap-2">
              {item.goodFor.map((g) => (
                <li key={g} className="text-sm text-zinc-700 flex gap-2"><span className="text-[#E31E24]">✓</span>{g}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    );
  }

  /* B: centred intro, four feature cards, audience chips */
  if (variant === 1) {
    return (
      <section className={`${wrap} bg-[#f6f6f7] py-12 sm:py-16 border-b border-zinc-200`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight">How {item.name} works</h2>
            {item.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {item.features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-zinc-200 p-5 border-t-4 border-t-[#E31E24]">
                <h3 className="font-bold text-zinc-950 mb-1.5">{f.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-3">Popular with</h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {item.goodFor.map((g) => (
                <li key={g} className="px-3.5 py-1.5 rounded-full bg-white border border-zinc-300 text-sm text-zinc-700">{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  /* C: dark band with intro and numbered features */
  if (variant === 2) {
    return (
      <section className={`${wrap} bg-zinc-950 text-white py-12 sm:py-16`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight">{item.name}, in plain words</h2>
            {item.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-300 leading-relaxed">{p}</p>
            ))}
            <h3 className="text-sm font-bold uppercase tracking-wide mt-4 mb-1">A good fit for</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.goodFor.map((g) => (
                <li key={g} className="text-sm text-zinc-300 flex gap-2"><span className="text-red-400">✓</span>{g}</li>
              ))}
            </ul>
          </div>
          <ol className="flex flex-col gap-5">
            {item.features.map((f, i) => (
              <li key={f.title} className="flex gap-4">
                <span className="w-9 h-9 shrink-0 rounded-full bg-[#E31E24] font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-0.5">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  /* D: heading and intro side by side, features as a table-style list */
  return (
    <section className={`${wrap} bg-white py-12 sm:py-16 border-b border-zinc-100`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-start">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight leading-tight">
            Why businesses choose {item.name}
          </h2>
          <div className="flex flex-col gap-3">
            {item.intro.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-2">What&apos;s included</h3>
        <ul className="border-t border-zinc-200 mb-10">
          {item.features.map((f, i) => (
            <li key={f.title} className={`grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-4 px-3 border-b border-zinc-200 ${i % 2 ? "bg-zinc-50" : ""}`}>
              <span className="sm:col-span-4 font-bold text-zinc-950">{f.title}</span>
              <span className="sm:col-span-8 text-sm text-zinc-600 leading-relaxed">{f.text}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-3">Best suited to</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.goodFor.map((g) => (
            <li key={g} className="text-sm text-zinc-700 border border-zinc-200 rounded-lg px-4 py-3">{g}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


/** Quick facts strip under the banner. */
function Glance({ item, parentName }: { item: SubService; parentName: string }) {
  const facts = [
    { label: "Category", value: item.group },
    { label: "Part of", value: parentName },
    { label: "Coverage", value: "Pan-India, from our New Delhi office" },
    { label: "Support", value: "One team for setup and support" },
  ];
  return (
    <section className={`${wrap} bg-white border-b border-zinc-200`}>
      <dl className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-200">
        {facts.map((f) => (
          <div key={f.label} className="py-5 px-4 first:pl-0">
            <dt className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-500">{f.label}</dt>
            <dd className="text-sm font-semibold text-zinc-900 mt-1">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** "What changes for your business" band. */
function Outcome({ item }: { item: SubService }) {
  if (!item.outcome) return null;
  return (
    <section className={`${wrap} bg-gradient-to-br from-red-50 via-white to-white py-12 sm:py-14 border-y border-zinc-200`}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-4">
          <span className="font-mono text-xs font-bold text-[#E31E24] uppercase tracking-wider">{"// "}The difference</span>
          <h2 className="text-xl sm:text-2xl font-black font-display text-zinc-950 tracking-tight mt-1">
            What changes for your business
          </h2>
        </div>
        <blockquote className="md:col-span-8 border-l-4 border-[#E31E24] pl-5 text-base sm:text-lg text-zinc-800 leading-relaxed">
          {item.outcome}
        </blockquote>
      </div>
    </section>
  );
}

/** Delivery steps plus what we need from the customer. */
function Process({ item }: { item: SubService }) {
  const steps = [
    { title: "Requirement call", text: `We understand your sites, users and what you need from ${item.name}.` },
    { title: "Feasibility and design", text: "We check availability at each location and share a clear proposal." },
    { title: "Setup and testing", text: "We coordinate installation and configuration, then test before handover." },
    { title: "Go-live and support", text: "You go live with one support desk to call for anything afterwards." },
  ];
  return (
    <section className={`${wrap} bg-white py-12 sm:py-16`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <h2 className="text-xl sm:text-2xl font-black font-display text-zinc-950 tracking-tight mb-6">
            How we deliver {item.name}
          </h2>
          <ol className="relative border-l-2 border-zinc-200 ml-3 flex flex-col gap-6">
            {steps.map((st, i) => (
              <li key={st.title} className="pl-6 relative">
                <span className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-zinc-950 text-white text-xs font-bold flex items-center justify-center ring-4 ring-white">
                  {i + 1}
                </span>
                <h3 className="font-bold text-zinc-950">{st.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mt-0.5">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
        {item.prep && item.prep.length > 0 && (
          <aside className="lg:col-span-4 self-start rounded-2xl bg-zinc-950 text-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide mb-1">To get started</h3>
            <p className="text-xs text-zinc-400 mb-4">Have these ready for the first call:</p>
            <ul className="flex flex-col gap-3">
              {item.prep.map((p) => (
                <li key={p} className="text-sm text-zinc-200 flex gap-2.5">
                  <span className="mt-0.5 w-4 h-4 shrink-0 rounded border border-red-400 text-red-400 text-[10px] flex items-center justify-center">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/contact/"
              className="mt-5 inline-block w-full text-center bg-[#E31E24] hover:bg-[#c9171d] text-white text-sm font-bold rounded-md py-2.5"
            >
              Book a requirement call
            </Link>
          </aside>
        )}
      </div>
    </section>
  );
}

/** Page for one individual service from the Services menu. */
export default function SubServicePage({ item, banner, parentName, related, variant }: Props) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full">
        <Navbar />

        <main className="flex-1 w-full">
          {/* HERO: fixed height so every service banner is the same size */}
          <section className="relative w-full text-white min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800 flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={banner}
                alt={`${item.name} for businesses in India`}
                className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 pb-3 mb-4 border-b border-white/20 text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-zinc-300"
              >
                <Link href="/" className="hover:text-white">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/services/" className="hover:text-white">Services</Link>
                <span aria-hidden="true">/</span>
                <Link href={`/services/${item.parent}/`} className="hover:text-white">{parentName}</Link>
              </nav>
              <div className="max-w-3xl">
                <span className="font-mono text-[11px] sm:text-xs font-extrabold tracking-widest text-[#38bdf8] uppercase mb-1.5 block">
                  {"// "}{item.group}
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.08] mb-2.5 drop-shadow-md">
                  {item.name}
                </h1>
                <p className="text-zinc-200 text-sm sm:text-base max-w-2xl leading-relaxed mb-4">{item.headline}</p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    href="/contact/"
                    className="px-5 py-2 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                  >
                    Request a Quote →
                  </Link>
                  <a
                    href="tel:+918287479961"
                    className="px-4 py-2 bg-black/50 hover:bg-black/75 text-white text-xs font-semibold rounded-md border border-white/20 transition-colors"
                  >
                    Call: +91 82874 79961
                  </a>
                </div>
              </div>
            </div>
          </section>

          <Glance item={item} parentName={parentName} />

          <Body item={item} variant={variant} />

          <Outcome item={item} />

          <Process item={item} />

          {/* FAQ */}
          <section className={`${wrap} bg-white py-12 sm:py-14`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-black font-display text-zinc-950 tracking-tight mb-5">
                Questions about {item.name}
              </h2>
              <div className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
                {item.faqs.map((f) => (
                  <details key={f.question} className="group py-4">
                    <summary className="cursor-pointer list-none flex justify-between gap-4 font-bold text-zinc-950">
                      <h3 className="text-sm sm:text-base">{f.question}</h3>
                      <span className="text-[#E31E24] group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* RELATED */}
          {related.length > 0 && (
            <section className={`${wrap} bg-[#f8f9fa] py-10 sm:py-12 border-t border-zinc-200`}>
              <div className="max-w-6xl mx-auto">
                <h2 className="text-lg sm:text-xl font-black font-display text-zinc-950 mb-4">
                  Related services
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}/`}
                        className="block h-full bg-white border border-zinc-200 rounded-lg p-4 hover:border-[#E31E24] transition-colors group"
                      >
                        <span className="font-bold text-sm text-zinc-950 group-hover:text-[#E31E24]">{r.name}</span>
                        <span className="block text-xs text-zinc-500 mt-1 line-clamp-2">{r.headline}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href={`/services/${item.parent}/`}
                      className="block h-full bg-zinc-950 text-white rounded-lg p-4 hover:bg-zinc-800 transition-colors"
                    >
                      <span className="font-bold text-sm">All {parentName} →</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          )}
        </main>

        <UpgradeCTA
          title={`Get ${item.name} for your business`}
          text="Tell us your locations and requirements. We'll check feasibility and send a clear proposal."
        />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
