"use client";

import React from "react";

interface ClientLogo {
  name: string;
  node: React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  // 1. Nestlé
  {
    name: "Nestlé",
    node: (
      <div className="flex items-center gap-3 shrink-0 select-none">
        <svg className="w-10 h-10 text-[#005CA9] shrink-0" viewBox="0 0 64 64" fill="currentColor">
          <path d="M19 14c-2.2 0-4 1.8-4 4 0 2.5 1.8 4.2 4 4.2s4-1.7 4-4.2c0-2.2-1.8-4-4-4zm-0.8 3.2a1 1 0 112 0 1 1 0 01-2 0z"/>
          <path d="M22 22c-3.8 1-6.5 4-7.5 7.5l6.5 3.8 8.5-6.5c-2-2.8-4.8-4.8-7.5-4.8z"/>
          <path d="M29.5 26.5l-6.5 4.8 8.5 9.5 11.5-13.5-13.5-0.8z"/>
          <path d="M38 18c-1.6 0-3 1.4-3 3 0 1.8 1.4 3 3 3s3-1.2 3-3c0-1.6-1.4-3-3-3z"/>
          <path d="M40 24.5c-2.8 1-4.8 2.8-5.8 5.8l4.8 2.8 6.8-4.8c-1.5-2.2-3.5-3.8-5.8-3.8z"/>
          <path d="M7 43c4 4 12 7 25 7s21-3 25-7c1-1 0-3-1-3-6 2-15 4-24 4s-18-2-24-4c-1 0-2 2-1 3z"/>
          <path d="M11 48c6 4 13.5 6 21 6s15-2 21-6c1-1 0-2-1-2-5 3-12.5 5-20 5s-15-2-20-5c-1 0-2 1-1 2z"/>
          <path d="M16 53c5 3 10.5 4 16 4s11-1 16-4c1-1 0-2-1-2-4 2-9.5 3-15 3s-11-1-15-3c-1 0-2 1-1 2z"/>
          <path d="M5 35c4-1 8.5 1 10.5 4-3 1-6.5 0-10.5-4z"/>
          <path d="M59 34c-4-1-8.5 1-10.5 4 3 1 6.5 0 10.5-4z"/>
        </svg>
        <div className="flex flex-col text-left">
          <div className="flex items-baseline">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#005CA9] font-serif leading-none">
              Nestle<span className="font-sans text-xl">́</span>
            </span>
            <span className="text-[10px] font-bold text-[#005CA9] ml-0.5">®</span>
          </div>
          <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#005CA9] tracking-tight mt-0.5 whitespace-nowrap">
            Good Food, Good Life™
          </span>
        </div>
      </div>
    ),
  },

  // 2. Lenskart
  {
    name: "Lenskart",
    node: (
      <div className="flex items-center gap-2.5 shrink-0 select-none">
        <svg className="w-10 h-7 text-[#000042]" viewBox="0 0 54 28" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="9.5" />
          <circle cx="40" cy="14" r="9.5" />
          <path d="M23.5 14c2.5-2.2 4.5-2.2 7 0" />
        </svg>
        <span className="text-2xl sm:text-3xl font-extrabold text-[#000042] tracking-tighter lowercase font-sans">
          lenskart
        </span>
      </div>
    ),
  },

  // 3. Blue Dart
  {
    name: "Blue Dart",
    node: (
      <div className="flex items-center shrink-0 select-none font-black text-2xl sm:text-3xl tracking-normal">
        <span className="text-[#0055A5] mr-2 font-sans">BLUE</span>
        <span className="text-[#009E49] font-sans">DART</span>
      </div>
    ),
  },

  // 4. Bella Vita
  {
    name: "Bella Vita",
    node: (
      <div className="flex items-center shrink-0 select-none">
        <span className="text-xl sm:text-2xl font-bold tracking-[0.18em] text-zinc-950 uppercase font-sans">
          BELLAVITA
        </span>
        <span className="text-xs font-bold text-zinc-900 ml-0.5 -mt-2">®</span>
      </div>
    ),
  },

  // 5. DTDC
  {
    name: "DTDC",
    node: (
      <div className="flex items-center gap-3 shrink-0 select-none">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-[#1F2B7B]">
              DTDC
            </span>
            <svg className="w-5 h-5 text-[#1F2B7B] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm1 7h-2l-2 4 1.5 1 1.5-2.5V17h2v-4.5l2-1.5 1 4h2l-1.5-5.5L13 9z"/>
              <path d="M7 10l-3 4 1.5 1 2.5-3.5V10H7z"/>
            </svg>
          </div>
          <span className="text-[7.5px] italic font-bold text-[#E31E24] tracking-tight -mt-0.5">
            Delivering Value
          </span>
        </div>
        <div className="relative w-10 sm:w-12 h-10 sm:h-12 shrink-0">
          <svg className="w-full h-full" viewBox="0 0 60 70" fill="none">
            <path d="M15 70C25 45 42 25 58 0H60V70H15Z" fill="#1F2B7B"/>
            <path d="M0 70C16 45 34 25 48 0C38 25 18 45 8 70H0Z" fill="#E31E24"/>
          </svg>
        </div>
      </div>
    ),
  },

  // 6. ESAF Small Finance Bank
  {
    name: "ESAF Small Finance Bank",
    node: (
      <div className="flex items-center gap-2.5 shrink-0 select-none">
        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#004A99] rounded-[3px] flex items-center justify-center shrink-0 shadow-xs">
          <div className="flex items-center gap-0.5 text-white font-black text-sm leading-none">
            <span className="border-t-2 border-white pt-0.5 px-0.5">T</span>
            <span className="border-t-2 border-white pt-0.5 px-0.5">T</span>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#E31E24] leading-none">
            ESAF
          </span>
          <span className="text-[7px] sm:text-[7.5px] font-bold text-[#004A99] tracking-wider uppercase whitespace-nowrap mt-0.5">
            ESAF SMALL FINANCE BANK
          </span>
        </div>
      </div>
    ),
  },

  // 7. Indraprastha Gas Limited (IGL)
  {
    name: "Indraprastha Gas Limited",
    node: (
      <div className="flex flex-col items-center shrink-0 select-none">
        <div className="relative flex items-center justify-center w-14 h-8 mb-0.5">
          <div className="w-7 h-7 rounded-full bg-[#FDB913] flex items-center justify-center relative shadow-[0_0_8px_#FDB913]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-[2px] bg-[#FDB913] rounded-full rotate-0"></div>
              <div className="w-9 h-[2px] bg-[#FDB913] rounded-full rotate-45"></div>
              <div className="w-9 h-[2px] bg-[#FDB913] rounded-full rotate-90"></div>
              <div className="w-9 h-[2px] bg-[#FDB913] rounded-full rotate-[135deg]"></div>
            </div>
            <span className="text-xs font-black italic text-[#007A3D] z-10 lowercase">
              igl
            </span>
          </div>
          <div className="absolute w-14 h-4 border border-zinc-400 rounded-[50%] -rotate-12 pointer-events-none"></div>
        </div>
        <span className="text-[7.5px] sm:text-[8px] font-extrabold text-[#007A3D] tracking-wide uppercase whitespace-nowrap">
          INDRAPRASTHA GAS LIMITED
        </span>
      </div>
    ),
  },

  // 8. Sagar Ratna
  {
    name: "Sagar Ratna",
    node: (
      <div className="flex flex-col items-center shrink-0 select-none text-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-4 bg-[#2E7D32] rounded-tl-full rounded-br-full flex items-center justify-center text-[5px] text-white font-bold italic rotate-12 shrink-0">
            Sagar
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-[#E31E24] tracking-tight font-serif italic">
            Sagar Ratna
          </span>
        </div>
        <span className="text-[7px] sm:text-[7.5px] font-medium text-zinc-500 tracking-tight whitespace-nowrap mt-0.5">
          South Indian, North Indian, Chinese Veg Restaurant
        </span>
      </div>
    ),
  },

  // 9. Zepto
  {
    name: "Zepto",
    node: (
      <div className="flex items-center shrink-0 select-none">
        <span className="text-3xl sm:text-4xl font-extrabold text-[#7B1FA2] tracking-tight lowercase font-sans">
          zepto
        </span>
      </div>
    ),
  },

  // 10. Zomato
  {
    name: "Zomato",
    node: (
      <div className="flex items-center shrink-0 select-none">
        <div className="bg-[#E23744] text-white px-5 py-2 rounded-lg shadow-xs">
          <span className="text-2xl sm:text-3xl font-black italic tracking-tighter lowercase font-sans">
            zomato
          </span>
        </div>
      </div>
    ),
  },

  // 11. Burger King
  {
    name: "Burger King",
    node: (
      <div className="flex items-center justify-center shrink-0 select-none">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 border-[4px] border-[#0033A0] rounded-full border-r-transparent -rotate-45"></div>
          <div className="flex flex-col items-center justify-center -rotate-6">
            <div className="w-9 h-3.5 bg-[#F49B00] rounded-t-full"></div>
            <div className="flex flex-col leading-none items-center py-0.5">
              <span className="text-[8.5px] font-black text-[#D62300] tracking-tighter uppercase leading-none">
                BURGER
              </span>
              <span className="text-[10px] font-black text-[#D62300] tracking-tighter uppercase leading-none">
                KING
              </span>
            </div>
            <div className="w-8 h-2 bg-[#F49B00] rounded-b-full"></div>
          </div>
        </div>
      </div>
    ),
  },

  // 12. Mojo Pizza
  {
    name: "Mojo Pizza",
    node: (
      <div className="flex items-center justify-center shrink-0 select-none">
        <div className="w-14 h-14 bg-[#F36C21] rounded-full flex flex-col items-center justify-center text-white px-1 shadow-xs">
          <div className="flex items-center text-sm font-black tracking-tight leading-none">
            <span>M</span>
            <span className="text-yellow-300 mx-[1px] text-[11px]">🍕</span>
            <span>JO</span>
          </div>
          <span className="text-[7.5px] font-extrabold tracking-widest uppercase leading-none mt-0.5">
            -PIZZA-
          </span>
        </div>
      </div>
    ),
  },
];

export default function PartnersMarquee() {
  return (
    <section id="clients" className="w-full bg-white border-0 py-10 sm:py-14 px-4 sm:px-8 select-none overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Centered Title - No 'retail' */}
        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-xs sm:text-[13px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            BRANDS WE EMPOWER PAN-INDIA
          </h3>
        </div>

        {/* Free-Floating Logo Ribbon Marquee (Exact layout from user reference image) */}
        <div className="w-full overflow-hidden relative">
          {/* Subtle gradient edge fade masks matching reference image */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track with free-floating logos: fast on mobile (10s), smooth 26s on desktop */}
          <div className="flex gap-10 sm:gap-20 items-center animate-marquee [animation-duration:10s] sm:[animation-duration:26s] min-w-full pr-10 sm:pr-20">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                title={client.name}
              >
                {client.node}
              </div>
            ))}

            {/* Duplicate for seamless infinite loop */}
            {clientLogos.map((client, idx) => (
              <div
                key={`dup-${idx}`}
                className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
                title={client.name}
              >
                {client.node}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


