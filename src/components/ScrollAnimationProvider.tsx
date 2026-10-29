"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const setupObserver = () => {
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                // Reveal once and unobserve so performance remains optimal
                observer?.unobserve(entry.target);
              }
            });
          },
          {
            root: null,
            rootMargin: "0px 0px -40px 0px",
            threshold: 0.08,
          }
        );
      }

      const selectors = [
        "section h1",
        "section h2",
        "section h3",
        "section h4",
        "section > div > div > p",
        "section > div > p",
        ".grid > div",
        ".grid > a",
        "[class*='rounded-2xl']",
        "[class*='rounded-xl']",
        "[data-animate]",
        ".animate-on-scroll",
      ];

      const elements = document.querySelectorAll<HTMLElement>(selectors.join(", "));
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        // Skip elements inside navigation, fixed dialogs, loaders, or already processed
        if (
          el.closest("nav") ||
          el.closest("[role='dialog']") ||
          el.closest("#initial-loader") ||
          el.closest("header") ||
          el.classList.contains("scroll-reveal") ||
          el.classList.contains("is-revealed")
        ) {
          return;
        }

        // Add base animation class
        el.classList.add("scroll-reveal");

        // Stagger cards and elements inside grids
        const parentGrid = el.parentElement?.classList.contains("grid")
          ? el.parentElement
          : null;

        if (parentGrid) {
          const siblings = Array.from(parentGrid.children);
          const index = siblings.indexOf(el);
          if (index > 0) {
            const delayClass = `delay-${Math.min((index % 6) + 1, 6)}`;
            el.classList.add(delayClass);
          }
        }

        // If element is already in or near viewport on initial page load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.92 && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          observer?.observe(el);
        }
      });
    };

    // Initial scan after DOM paint
    const timer = setTimeout(setupObserver, 80);

    // Watch for dynamic DOM updates (tab switches, modals, loaded content)
    let debounceTimer: NodeJS.Timeout | null = null;
    mutationObserver = new MutationObserver(() => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(setupObserver, 120);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      if (debounceTimer) clearTimeout(debounceTimer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
