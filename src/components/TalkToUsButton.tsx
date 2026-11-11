/**
 * Small "Talk to us" button fixed to the bottom-right of every page.
 * Opens a WhatsApp chat with the sales number, with a short greeting pre-filled.
 * Plain link (no JavaScript needed), so it works everywhere, including in-app browsers.
 */
const WHATSAPP_NUMBER = "918287479961";
const GREETING = "Hi Adapt India Networks, I'd like to talk about connectivity for my business.";

export default function TalkToUsButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to us on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] inline-flex items-center gap-2 h-10 px-3.5 rounded-md bg-zinc-900 hover:bg-black border border-white/10 text-white text-[13px] font-semibold shadow-md transition-colors"
    >
      <svg aria-hidden viewBox="0 0 32 32" className="w-[18px] h-[18px] shrink-0 text-[#25D366]" fill="currentColor">
        <path d="M16.04 3C9 3 3.27 8.7 3.27 15.73c0 2.25.6 4.45 1.72 6.38L3.1 29l7.08-1.85a12.8 12.8 0 0 0 5.86 1.42h.01c7.03 0 12.76-5.7 12.76-12.73C28.81 8.7 23.07 3 16.04 3Zm0 23.4h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.2 1.1 1.12-4.08-.25-.42a10.56 10.56 0 0 1-1.63-5.56c0-5.85 4.78-10.6 10.66-10.6 2.85 0 5.52 1.1 7.53 3.11a10.5 10.5 0 0 1 3.12 7.5c0 5.85-4.78 10.66-10.55 10.66Zm5.84-7.94c-.32-.16-1.9-.93-2.19-1.04-.3-.1-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.44 5.47 4.83.76.33 1.36.53 1.83.67.77.24 1.47.21 2.02.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      Talk to us
    </a>
  );
}
