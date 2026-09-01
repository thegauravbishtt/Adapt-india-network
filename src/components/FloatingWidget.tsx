import React from "react";

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative group cursor-pointer">
        {/* Pulsing blur indicator */}
        <div className="absolute -inset-0.5 bg-rose-600 rounded-full blur-sm opacity-20 group-hover:opacity-50 transition duration-300"></div>
        {/* Neobrutalist core circle */}
        <div className="relative w-12 h-12 bg-[#E11D48] text-white flex items-center justify-center rounded-full font-black text-xl border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:translate-x-0 active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
          N
        </div>
      </div>
    </div>
  );
}
