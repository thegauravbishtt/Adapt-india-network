"use client";

import React from "react";

const checklistItems = [
  "Make sure all images are compressed",
  "Setup Google Analytics",
  "Add 301 redirects",
  "Wireframe the pages",
  "Test the site across all devices",
  "Favicon & Web Clip are uploaded",
  "Setup CMS collections",
  "Make sure all videos are compressed",
  "Setup Google Marketing Platform"
];

export default function ChecklistSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-14 px-6 sm:px-12 lg:px-20 flex items-center justify-center border-t border-zinc-900 relative overflow-hidden -mx-4 w-[calc(100%+2rem)] self-center mt-6">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Checklist Stack (Auto-Scrolling Ticker) */}
        <div className="lg:col-span-6 relative h-[320px] overflow-hidden w-full">
          {/* Top & Bottom Fade Gradients - blending to body background (#0a0a0a) */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20"></div>

          {/* Vertical Scrolling Marquee Container */}
          <div className="flex flex-col gap-3 animate-marquee-vertical min-h-full">
            {checklistItems.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 bg-[#141414] border border-zinc-900 rounded-xl hover:bg-[#1a1a1a] hover:border-zinc-800 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox Box Outline */}
                  <div className="w-5 h-5 border-2 border-zinc-700 rounded-md flex items-center justify-center cursor-pointer group-hover:border-zinc-500 hover:bg-zinc-900/50 transition-all select-none">
                    {/* Empty checkbox */}
                  </div>
                  <span className="text-zinc-400 text-sm font-medium tracking-tight group-hover:text-zinc-200 transition-colors">
                    {item}
                  </span>
                </div>
                
                {/* Three dots menu */}
                <button className="text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer p-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6 0a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6 0a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  </svg>
                </button>
              </div>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {checklistItems.map((item, idx) => (
              <div 
                key={`dup-${idx}`} 
                className="flex items-center justify-between p-4 bg-[#141414] border border-zinc-900 rounded-xl hover:bg-[#1a1a1a] hover:border-zinc-800 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-4">
                  {/* Checkbox Box Outline */}
                  <div className="w-5 h-5 border-2 border-zinc-700 rounded-md flex items-center justify-center cursor-pointer group-hover:border-zinc-500 hover:bg-zinc-900/50 transition-all select-none">
                    {/* Empty checkbox */}
                  </div>
                  <span className="text-zinc-400 text-sm font-medium tracking-tight group-hover:text-zinc-200 transition-colors">
                    {item}
                  </span>
                </div>
                
                {/* Three dots menu */}
                <button className="text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer p-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6 0a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6 0a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Copy & Animated Speech Bubbles */}
        <div className="lg:col-span-6 flex flex-col justify-center relative min-h-[340px] lg:pl-10">
          
          {/* Top-Right Speech Bubble (Vibrant Brand Red) */}
          <div className="absolute top-0 right-4 sm:right-10 lg:-right-2 bg-brand-red text-white px-5 py-2.5 rounded-2xl rounded-bl-none text-xs sm:text-[13px] font-bold tracking-tight shadow-[0_10px_40px_rgba(225,29,72,0.3)] rotate-[-4deg] animate-float-1 select-none border border-red-500/20">
            Why can't I edit content myself?
            <div className="absolute -bottom-1.5 left-4 w-3.5 h-3.5 bg-brand-red rotate-45 border-r border-b border-black/5"></div>
          </div>

          {/* Text Block */}
          <div className="my-auto py-10">
            <span className="text-zinc-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold block mb-4">
              Sound Familiar?
            </span>
            <h2 className="text-white text-3xl sm:text-5xl lg:text-[46px] font-extrabold font-display leading-[1.1] tracking-tight max-w-xl">
              Your Website Shouldn't Feel Like a Never-Ending Check List
            </h2>
          </div>

          {/* Bottom Speech Bubble (Vibrant Brand Red) */}
          <div className="absolute bottom-2 left-6 sm:left-14 lg:left-4 bg-brand-red text-white px-5 py-2.5 rounded-2xl rounded-bl-none text-xs sm:text-[13px] font-bold tracking-tight shadow-[0_10px_40px_rgba(225,29,72,0.3)] rotate-[3deg] animate-float-2 select-none border border-red-500/20">
            Is this actually helping me get customers?
            <div className="absolute -bottom-1.5 left-5 w-3.5 h-3.5 bg-brand-red rotate-45 border-r border-b border-black/5"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
