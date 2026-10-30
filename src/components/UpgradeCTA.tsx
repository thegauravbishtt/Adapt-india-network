import Link from "next/link";

interface UpgradeCTAProps {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/** Compact red call-to-action band, shown above the footer on most pages. */
export default function UpgradeCTA({
  title = "Ready to upgrade your business network?",
  text = "Tell us your address and bandwidth needs. We'll check which carriers reach your building and send you options.",
  primaryLabel = "Request Feasibility Check →",
  primaryHref = "/contact/",
  secondaryLabel = "Explore Services →",
  secondaryHref = "/services/",
}: UpgradeCTAProps) {
  return (
    <section className="w-full bg-[#E31E24] text-white py-8 sm:py-10 px-4 sm:px-8 lg:px-14 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-10">
        <div className="text-left max-w-2xl">
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-black font-display tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-white/90 text-sm sm:text-[15px] mt-2 leading-relaxed">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href={primaryHref}
            className="bg-black text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-900 transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="bg-white text-zinc-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-100 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
