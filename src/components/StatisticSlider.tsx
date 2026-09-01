"use client";

import React from "react";

const stats = [
  { label: "infrastructuur", value: "35", unit: "servers" },
  { label: "actief in beheer", value: "50+", unit: "applicaties" },
  { label: "actief in beheer", value: "200+", unit: "websites" },
  { label: "sinds 2008", value: "18", unit: "jaar actief" },
  { label: "expertise", value: "6", unit: "teamleden" },
  { label: "vandaag in wink apps", value: "8.500+", unit: "gebruikers" }
];

export default function StatisticSlider() {
  return (
    <div className="w-full py-8 border-t border-b border-zinc-200/60 bg-[#fafafa]/50 overflow-hidden select-none flex flex-col gap-2 relative z-20">
      {/* Horizontal Scrolling Track */}
      <div className="w-full overflow-hidden relative flex">
        <div className="flex gap-20 items-center shrink-0 animate-marquee min-w-full pr-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-start justify-center gap-1.5 shrink-0 border-r border-zinc-200/80 pr-16">
              <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none">
                {stat.label}
              </span>
              <span className="text-xl font-bold font-display tracking-tight text-zinc-800 flex items-baseline gap-1 select-none">
                <span className="font-pixel text-brand-red text-2xl font-normal lowercase select-none mr-1">
                  {stat.value}
                </span>
                {stat.unit}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless infinite loop */}
          {stats.map((stat, idx) => (
            <div key={`dup-${idx}`} className="flex flex-col items-start justify-center gap-1.5 shrink-0 border-r border-zinc-200/80 pr-16">
              <span className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase select-none">
                {stat.label}
              </span>
              <span className="text-xl font-bold font-display tracking-tight text-zinc-800 flex items-baseline gap-1 select-none">
                <span className="font-pixel text-brand-red text-2xl font-normal lowercase select-none mr-1">
                  {stat.value}
                </span>
                {stat.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
