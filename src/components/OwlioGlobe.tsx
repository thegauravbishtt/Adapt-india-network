import React from "react";
import Image from "next/image";

interface TeamAvatar {
  id: number;
  name: string;
  role: string;
  image: string;
  color: string; // border color
  // Positions relative to the 480x430 container
  avX: number;
  avY: number;
  pinX: number;
  pinY: number;
}

const avatarsData: TeamAvatar[] = [
  {
    id: 1,
    name: "Aisha",
    role: "SEO Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#38bdf8", // sky-400
    avX: 50,
    avY: 80,
    pinX: 130,
    pinY: 120,
  },
  {
    id: 2,
    name: "Elena",
    role: "Growth Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#a855f7", // purple-500
    avX: 20,
    avY: 200,
    pinX: 110,
    pinY: 210,
  },
  {
    id: 3,
    name: "Sofia",
    role: "Audit Specialist",
    image:
      "https://images.unsplash.com/photo-1534751516642-a131ffd107fd?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#eab308", // yellow-500
    avX: 60,
    avY: 320,
    pinX: 150,
    pinY: 310,
  },
  {
    id: 4,
    name: "Marcus",
    role: "Content Expert",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#10b981", // emerald-500
    avX: 390,
    avY: 90,
    pinX: 300,
    pinY: 140,
  },
  {
    id: 5,
    name: "Sarah",
    role: "Link Strategist",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#f43f5e", // rose-500
    avX: 410,
    avY: 210,
    pinX: 320,
    pinY: 220,
  },
  {
    id: 6,
    name: "David",
    role: "Analytics Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#38bdf8", // sky-400
    avX: 370,
    avY: 315,
    pinX: 285,
    pinY: 280,
  },
  {
    id: 7,
    name: "Alex",
    role: "SEO Writer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#a855f7", // purple-500
    avX: 150,
    avY: 35,
    pinX: 180,
    pinY: 110,
  },
  {
    id: 8,
    name: "Tariq",
    role: "Lead Dev",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#eab308", // yellow-500
    avX: 280,
    avY: 35,
    pinX: 240,
    pinY: 110,
  },
  {
    id: 9,
    name: "Jessica",
    role: "Growth Hacker",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#10b981", // emerald-500
    avX: 10,
    avY: 140,
    pinX: 100,
    pinY: 165,
  },
  {
    id: 10,
    name: "Chloe",
    role: "Copywriter",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#f43f5e", // rose-500
    avX: 420,
    avY: 140,
    pinX: 320,
    pinY: 175,
  },
];

export default function OwlioGlobe() {
  const continentsGroup = (
    <g fill="rgba(0,0,0,0.85)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
      <path d="M 85,15 L 102,12 L 106,20 L 98,28 L 88,24 Z" />
      <path d="M 25,30 L 40,25 L 55,22 L 80,24 L 92,35 L 94,52 L 82,65 L 75,78 L 68,90 L 60,105 L 52,95 L 45,80 L 35,75 L 18,60 Z" />
      <path d="M 60,105 L 70,117 L 72,130 L 68,155 L 58,190 L 52,205 L 48,185 L 52,145 L 48,125 Z" />
      <path d="M 125,95 L 142,93 L 155,107 L 158,130 L 148,160 L 138,185 L 132,165 L 128,130 L 122,115 Z" />
      <path d="M 125,95 L 122,85 L 130,60 L 140,50 L 160,47 L 185,50 L 215,57 L 230,70 L 225,90 L 208,105 L 190,110 L 175,100 L 160,107 L 145,107 Z" />
      <path d="M 205,150 L 220,155 L 222,165 L 208,170 L 200,160 Z" />
    </g>
  );

  return (
    <div className="w-full flex items-center justify-center py-6 select-none relative overflow-visible">
      {/* Outer 480x430 Positioning Frame */}
      <div className="relative w-[480px] h-[430px] flex items-center justify-center">
        {/* Glowing Backdrop Halo */}
        <div className="absolute w-[360px] h-[360px] rounded-full bg-brand-red/20 blur-[50px] pointer-events-none animate-pulse z-0"></div>

        {/* SVG Connecting Lines overlay (z-25) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-25"
          viewBox="0 0 480 430"
        >
          {avatarsData.map((av) => {
            // center offset of 32px avatar is +16px
            const avCenterX = av.avX + 16;
            const avCenterY = av.avY + 16;

            return (
              <g key={av.id}>
                {/* Thin connection line */}
                <line
                  x1={avCenterX}
                  y1={avCenterY}
                  x2={av.pinX}
                  y2={av.pinY}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                {/* Glowing pin point */}
                <circle cx={av.pinX} cy={av.pinY} r="3" fill="#ff0000" />
                <circle
                  cx={av.pinX}
                  cy={av.pinY}
                  r="6"
                  stroke="#ff0000"
                  strokeWidth="0.8"
                  fill="none"
                  className="animate-ping"
                  style={{ animationDuration: "2s" }}
                />
              </g>
            );
          })}
        </svg>

        {/* Globe Main Sphere (z-10) */}
        <div className="relative w-[300px] h-[300px] bg-neutral-900 rounded-full border-[3.5px] border-black shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden z-10 flex items-center justify-center">
          {/* Seamlessly Rotating Map Layer */}
          <div
            className="absolute inset-0 flex"
            style={{
              width: "600px",
              height: "300px",
              transform: "translateX(0)",
              animation: "owlio-globe-spin 22s linear infinite",
            }}
          >
            <svg
              viewBox="0 0 600 200"
              width="600"
              height="300"
              className="w-full h-full opacity-80"
            >
              <g transform="translate(0, 40)">{continentsGroup}</g>
              <g transform="translate(300, 40)">{continentsGroup}</g>
            </svg>
          </div>

          {/* High-Tech Vector Grid Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20 opacity-30"
            viewBox="0 0 300 300"
          >
            <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none">
              <line x1="0" y1="150" x2="300" y2="150" />
              <line x1="15" y1="90" x2="285" y2="90" />
              <line x1="15" y1="210" x2="285" y2="210" />
              <line x1="150" y1="0" x2="150" y2="300" />
              <ellipse cx="150" cy="150" rx="55" ry="150" />
              <ellipse cx="150" cy="150" rx="105" ry="150" />
              <circle cx="150" cy="150" r="148" strokeWidth="1.5" />
            </g>
          </svg>

          {/* Spherical Radial Shadow Mask */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_35%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-15"></div>
        </div>

        {/* Team Avatars positioned outside globe (z-30) */}
        {avatarsData.map((av) => (
          <div
            key={av.id}
            className="absolute group z-30 cursor-pointer"
            style={{
              left: `${av.avX}px`,
              top: `${av.avY}px`,
              width: "32px",
              height: "32px",
            }}
          >
            {/* Avatar image container */}
            <div
              className="w-full h-full rounded-full border-2 overflow-hidden bg-neutral-800 shadow-md group-hover:scale-115 transition-all duration-200"
              style={{ borderColor: av.color }}
            >
              <Image
                src={av.image}
                alt={av.name}
                width={32}
                height={32}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                unoptimized
              />
            </div>

            {/* Hover Tooltip card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-neutral-950 border border-neutral-700/80 rounded-lg p-2 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-left z-40">
              <p className="text-[10px] font-black text-white leading-none">
                {av.name}
              </p>
              <p className="text-[8px] font-semibold text-zinc-400 mt-1 leading-none">
                {av.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes owlio-globe-spin {
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
