import React, { useEffect, useState } from "react";

interface Dot {
  x: number;
  y: number;
  r: number;
}

export default function GlobalImpactGlobe() {
  const [dots, setDots] = useState<Dot[]>([]);

  // Simple procedural continent checker
  const isLand = (lat: number, lon: number) => {
    let l = lon;
    while (l > 180) l -= 360;
    while (l < -180) l += 360;

    // North America
    if (lat > 12 && lat < 75 && l > -168 && l < -52) {
      // Exclude Caribbean / central america gap
      if (lat < 25 && l > -90) return false;
      return true;
    }
    // South America
    if (lat > -56 && lat <= 12 && l > -82 && l < -34) {
      // Taper South America
      const width = ((lat + 56) / 68) * 45;
      return l > -82 && l < -82 + width;
    }
    // Africa
    if (lat > -35 && lat < 36 && l > -18 && l < 51) {
      if (lat > 8) return l > -16 && l < 51;
      return l > 10 && l < 38; // Taper South
    }
    // Europe & Asia (Eurasia)
    if (lat > 10 && lat < 78 && l > -10 && l < 170) {
      // Indian/Indochina protrusion tapering
      if (lat < 24) {
        return (
          (l > 68 && l < 88) || (l > 94 && l < 118) || (l > 120 && l < 145)
        );
      }
      return true;
    }
    // Australia
    if (lat > -39 && lat < -11 && l > 113 && l < 154) {
      return true;
    }
    // Greenland
    if (lat > 60 && lat < 84 && l > -72 && l < -12) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const generatedDots: Dot[] = [];
    const globeWidth = 600; // full width for double loop
    const globeHeight = 300;

    // We generate points from lon -180 to 540 (two full loops for infinite rotation)
    for (let lat = -80; lat <= 80; lat += 5.5) {
      for (let lon = -180; lon < 540; lon += 4.5) {
        if (isLand(lat, lon)) {
          // Map to 2D plane
          const x = ((lon + 180) / 360) * 300; // 300px is single loop width
          const y = ((85 - lat) / 170) * globeHeight;

          // Add a subtle spherical distortion to coordinates on generation to make it look realistic
          generatedDots.push({ x, y, r: 1.2 });
        }
      }
    }
    setDots(generatedDots);
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-6 select-none relative overflow-visible">
      {/* Outer container with fixed dimensions */}
      <div className="relative w-[500px] h-[450px] flex items-center justify-center">
        {/* SVG Pointers & Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 500 450"
        >
          {/* Europe line (Top Center) */}
          <path
            d="M 250 55 L 250 115"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Americas line (Middle Left) */}
          <path
            d="M 125 210 L 160 210 L 195 228"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* APAC & China line (Top Right) */}
          <path
            d="M 375 130 L 340 130 L 310 168"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* MENA line (Bottom Right) */}
          <path
            d="M 375 330 L 340 330 L 315 272"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        {/* Region Labels */}
        {/* Europe Tag */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2 bg-neutral-900/90 text-white border border-neutral-700/60 rounded-xl px-4 py-2 text-[10px] font-extrabold tracking-wider uppercase z-30 shadow-md">
          Europe
        </div>

        {/* Americas Tag */}
        <div className="absolute left-[0px] top-[188px] bg-neutral-900/90 text-white border border-neutral-700/60 rounded-xl px-4 py-2 text-[10px] font-extrabold tracking-wider uppercase z-30 shadow-md max-w-[130px] text-center leading-tight">
          North and <br />
          South America
        </div>

        {/* APAC & China Tag */}
        <div className="absolute right-[0px] top-[108px] bg-neutral-900/90 text-white border border-neutral-700/60 rounded-xl px-4 py-2 text-[10px] font-extrabold tracking-wider uppercase z-30 shadow-md">
          Apac & China
        </div>

        {/* MENA Tag */}
        <div className="absolute right-[0px] top-[308px] bg-neutral-900/90 text-white border border-neutral-700/60 rounded-xl px-4 py-2 text-[10px] font-extrabold tracking-wider uppercase z-30 shadow-md">
          Mena
        </div>

        {/* Globe Main Sphere Mask */}
        <div className="relative w-[300px] h-[300px] bg-neutral-950 rounded-full border-4 border-black shadow-[0px_4px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-center justify-center z-10 group cursor-grab active:cursor-grabbing">
          {/* CSS Rotating Globe Dots Container */}
          <div
            className="absolute inset-0 flex items-center"
            style={{
              width: "600px",
              height: "300px",
              transform: "translateX(0)",
              animation: "globe-spin 25s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 600 300"
              width="600"
              height="300"
              className="w-full h-full"
            >
              <g fill="#FFFFFF" opacity="0.6">
                {dots.map((dot, idx) => (
                  <circle key={idx} cx={dot.x} cy={dot.y} r={dot.r} />
                ))}
              </g>
            </svg>
          </div>

          {/* Spherical Radial Gradient Shadow Mask for 3D depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_35%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-15"></div>

          {/* Overlaid Huge GLOBAL IMPACT Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-18 pointer-events-none select-none px-4 text-center leading-none gap-0.5">
            <span
              className="text-white font-black text-4xl sm:text-[42px] tracking-tighter uppercase block select-none leading-none"
              style={{
                textShadow:
                  "0px 4px 10px rgba(0,0,0,0.9), 0px 0px 4px rgba(0,0,0,0.8)",
              }}
            >
              Global
            </span>
            <span
              className="text-white font-black text-4xl sm:text-[42px] tracking-tighter uppercase block select-none leading-none"
              style={{
                textShadow:
                  "0px 4px 10px rgba(0,0,0,0.9), 0px 0px 4px rgba(0,0,0,0.8)",
              }}
            >
              Impact
            </span>
          </div>
        </div>
      </div>

      {/* Embedded CSS Keyframes for Seamless Loop Rotation */}
      <style jsx global>{`
        @keyframes globe-spin {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(-300px);
          }
        }
      `}</style>
    </div>
  );
}
