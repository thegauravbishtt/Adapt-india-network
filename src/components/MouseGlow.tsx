"use client";

import React, { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -400, y: -400 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1); // Keep bubble fully visible on move
    };

    const handleMouseLeave = () => {
      setOpacity(0); // Fade out when cursor leaves the window
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-30 border border-brand-red/60 bg-brand-red/10 shadow-[0_0_30px_rgba(255,0,0,0.25)] transition-opacity duration-300 hidden lg:block animate-morph-cursor"
      style={{
        width: "160px",
        height: "160px",
        left: 0,
        top: 0,
        opacity: opacity,
        transform: `translate3d(${position.x - 80}px, ${position.y - 80}px, 0)`,
        willChange: "transform",
      }}
    />
  );
}
