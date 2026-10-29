"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppChatButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const phoneNumber = "918287479961";

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim() || "Hi Adapt India Network, I would like to inquire about enterprise connectivity.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <aside
      ref={widgetRef}
      aria-label="Chat with Adapt India Network"
      className="fixed bottom-16 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none"
    >
      {/* 1. SIMPLE CLEAN WHITE CHAT POPUP */}
      {isOpen && (
        <div className="w-[88vw] sm:w-[320px] bg-white text-zinc-900 rounded-2xl border border-zinc-200/90 shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden mb-3 animate-in fade-in duration-150">
          
          {/* Header */}
          <div className="bg-[#E31E24] px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-tight text-white">
                Chat with Adapt India
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer text-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSend} className="p-4 flex flex-col gap-3">
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Type your message below and send to chat directly with our team on WhatsApp:
            </p>

            <textarea
              ref={inputRef}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi! I want to discuss a project..."
              className="w-full bg-zinc-50 text-zinc-900 text-xs sm:text-[13px] p-3 rounded-xl border border-zinc-200 focus:outline-hidden focus:border-[#E31E24] focus:bg-white placeholder:text-zinc-400 resize-none transition-all"
            />

            <button
              type="submit"
              className="w-full py-2.5 bg-[#E31E24] hover:bg-[#C4161C] text-white font-extrabold text-xs sm:text-[13px] rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Send Message</span>
              <span className="font-bold">→</span>
            </button>
          </form>

        </div>
      )}

      {/* 2. FLOATING RED CHAT BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat"
        className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#E31E24] hover:bg-[#C4161C] text-white shadow-lg shadow-[#E31E24]/35 hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        {isOpen ? (
          /* Simple Close Icon */
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Simple Clean Chat Bubble Icon */
          <svg
            className="w-5.5 h-5.5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </aside>
  );
}
