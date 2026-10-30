import type { ServiceGuide } from "../data/serviceGuides";

/** Plain-language service explainer, drawn in one of four layouts. */
export default function ServiceGuideSection({ guide, serviceName }: { guide: ServiceGuide; serviceName: string }) {
  const Eyebrow = ({ dark = false }: { dark?: boolean }) => (
    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${dark ? "text-red-400" : "text-[#E31E24]"}`}>
      {"// "}
      {guide.eyebrow}
    </span>
  );

  const PriceBox = ({ dark = false }: { dark?: boolean }) => (
    <div className={`rounded-2xl p-5 sm:p-6 ${dark ? "bg-white/5 border border-white/10" : "bg-zinc-50 border border-zinc-200"}`}>
      <h3 className={`text-sm font-bold uppercase tracking-wide mb-3 ${dark ? "text-white" : "text-zinc-900"}`}>
        What decides the price
      </h3>
      <ul className="flex flex-col gap-2">
        {guide.priceFactors.map((f) => (
          <li key={f} className={`text-sm leading-relaxed flex gap-2 ${dark ? "text-zinc-300" : "text-zinc-700"}`}>
            <span className="text-[#E31E24] font-bold">₹</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const GoodFor = ({ dark = false }: { dark?: boolean }) => (
    <div>
      <h3 className={`text-sm font-bold uppercase tracking-wide mb-3 ${dark ? "text-white" : "text-zinc-900"}`}>
        A good fit if you are
      </h3>
      <ul className="flex flex-col gap-2">
        {guide.goodFor.map((g) => (
          <li key={g} className={`text-sm leading-relaxed flex gap-2 ${dark ? "text-zinc-300" : "text-zinc-700"}`}>
            <span className="text-[#E31E24]">✓</span>
            <span>{g}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const wrap = "w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-14 text-left";

  /* Layout 1: article text on the left, sticky checklist panel on the right */
  if (guide.layout === "split") {
    return (
      <section className={`${wrap} bg-white border-b border-zinc-100`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <Eyebrow />
            <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight leading-tight">
              {guide.heading}
            </h2>
            {guide.plain.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
            ))}
            <h3 className="text-lg font-bold text-zinc-950 mt-4">What you get with {serviceName}</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {guide.included.map((it) => (
                <div key={it.title}>
                  <dt className="font-bold text-sm text-zinc-900">{it.title}</dt>
                  <dd className="text-sm text-zinc-600 leading-relaxed mt-0.5">{it.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl p-5 sm:p-6 border-l-4 border-[#E31E24] bg-red-50/60">
              <GoodFor />
            </div>
            <PriceBox />
          </aside>
        </div>
      </section>
    );
  }

  /* Layout 2: centred intro, grid of feature cards, two boxes underneath */
  if (guide.layout === "cards") {
    return (
      <section className={`${wrap} bg-[#f7f7f8] border-b border-zinc-200`}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 mb-10">
            <Eyebrow />
            <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight leading-tight">
              {guide.heading}
            </h2>
            {guide.plain.map((p, i) => (
              <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {guide.included.map((it, i) => (
              <div key={it.title} className="bg-white rounded-xl border border-zinc-200 p-5">
                <span className="text-xs font-mono font-bold text-[#E31E24]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-zinc-950 mt-1 mb-1.5">{it.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{it.text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-zinc-200 p-5 sm:p-6">
              <GoodFor />
            </div>
            <PriceBox />
          </div>
        </div>
      </section>
    );
  }

  /* Layout 3: alternating rows, like a list of what's in the box */
  if (guide.layout === "rows") {
    return (
      <section className={`${wrap} bg-white border-b border-zinc-100`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-end">
            <div className="flex flex-col gap-3">
              <Eyebrow />
              <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight leading-tight">
                {guide.heading}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {guide.plain.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-zinc-900 mb-2">What&apos;s included</h3>
          <ul className="border-t border-zinc-200 mb-10">
            {guide.included.map((it, i) => (
              <li
                key={it.title}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-4 px-3 border-b border-zinc-200 ${i % 2 ? "bg-zinc-50" : ""}`}
              >
                <span className="sm:col-span-4 font-bold text-zinc-950">{it.title}</span>
                <span className="sm:col-span-8 text-sm text-zinc-600 leading-relaxed">{it.text}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GoodFor />
            <PriceBox />
          </div>
        </div>
      </section>
    );
  }

  /* Layout 4: dark band with numbered points */
  return (
    <section className={`${wrap} bg-zinc-950 text-white`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <Eyebrow dark />
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-tight">{guide.heading}</h2>
          {guide.plain.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-zinc-300 leading-relaxed">{p}</p>
          ))}
          <div className="mt-4">
            <GoodFor dark />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <ol className="flex flex-col gap-4">
            {guide.included.map((it, i) => (
              <li key={it.title} className="flex gap-4">
                <span className="w-9 h-9 shrink-0 rounded-full bg-[#E31E24] text-white font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold">{it.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-0.5">{it.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <PriceBox dark />
        </div>
      </div>
    </section>
  );
}
