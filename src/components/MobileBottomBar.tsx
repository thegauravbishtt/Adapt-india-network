"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomBar() {
  const pathname = usePathname();

  // Do not render on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <aside aria-label="Quick mobile contact actions" className="fixed bottom-0 left-0 right-0 z-50 md:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.18)]">
      <div className="grid grid-cols-2 w-full select-none">
        {/* Email Button */}
        <a
          href="mailto:info@adapt-india.net"
          className="flex items-center justify-center gap-2 bg-[#121212] hover:bg-black text-white font-bold text-[14px] sm:text-[15px] tracking-tight h-12 active:bg-zinc-900 transition-colors"
          aria-label="Send email to Adapt India Network"
        >
          <svg
            className="w-4 h-4 text-white shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>Email</span>
        </a>

        {/* Let's Talk Button */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 bg-[#E31E24] hover:bg-[#C4161C] text-white font-extrabold text-[14px] sm:text-[15px] tracking-tight h-12 active:brightness-95 transition-all"
          aria-label="Go to contact page to talk with us"
        >
          <span>Let&apos;s Talk</span>
          <span className="text-base leading-none font-bold">→</span>
        </Link>
      </div>
      {/* iOS Safe Area Bottom Spacer */}
      <div className="bg-[#121212] h-[env(safe-area-inset-bottom,0px)]" />
    </aside>
  );
}
