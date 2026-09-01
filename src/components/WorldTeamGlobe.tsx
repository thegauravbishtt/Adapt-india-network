import React from "react";
import Image from "next/image";

interface TeamPin {
  id: number;
  name: string;
  role: string;
  image: string;
  color: string; // border color
  // Positions relative to the 480x430 container
  avatarX: number;
  avatarY: number;
  pinX: number;
  pinY: number;
}

const teamPins: TeamPin[] = [
  // Far Left
  {
    id: 1,
    name: "Aisha",
    role: "SEO Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#38bdf8", // sky-400
    avatarX: 40,
    avatarY: 220,
    pinX: 110,
    pinY: 270,
  },
  // Left Middle
  {
    id: 2,
    name: "Elena",
    role: "Growth Marketer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#a855f7", // purple-500
    avatarX: 110,
    avatarY: 165,
    pinX: 160,
    pinY: 245,
  },
  // Left Top
  {
    id: 3,
    name: "Chloe",
    role: "SEO Auditor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#10b981", // emerald-500
    avatarX: 100,
    avatarY: 95,
    pinX: 185,
    pinY: 265,
  },
  // Top Right (Man)
  {
    id: 4,
    name: "Marcus",
    role: "Content Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#64748b", // slate-500
    avatarX: 295,
    avatarY: 105,
    pinX: 280,
    pinY: 232,
  },
  // Middle Right (Woman)
  {
    id: 5,
    name: "Sarah",
    role: "Link Builder",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#f43f5e", // rose-500
    avatarX: 285,
    avatarY: 172,
    pinX: 302,
    pinY: 242,
  },
  // Far Right (Man)
  {
    id: 6,
    name: "David",
    role: "Growth Analyst",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#38bdf8", // sky-400
    avatarX: 370,
    avatarY: 180,
    pinX: 312,
    pinY: 262,
  },
  // Bottom Center (Woman)
  {
    id: 7,
    name: " Sofia",
    role: "Local SEO Specialist",
    image:
      "https://images.unsplash.com/photo-1534751516642-a131ffd107fd?auto=format&fit=crop&w=100&h=100&q=80",
    color: "#eab308", // yellow-500
    avatarX: 220,
    avatarY: 345,
    pinX: 225,
    pinY: 310,
  },
];

export default function WorldTeamGlobe() {
  return (
    <div className="w-full flex items-center justify-center py-6 select-none relative overflow-visible">
      {/* Dark Neobrutalist Outer Card */}
      <div className="relative w-[480px] h-[430px] bg-neutral-950 text-white rounded-3xl border-[3.5px] border-black p-8 overflow-hidden shadow-brutal select-none flex flex-col justify-between">
        {/* Header Text */}
        <div className="z-20 text-left">
          <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
            All over the world
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1.5 max-w-[280px] leading-relaxed">
            Meet our distributed team of experts working across 6 continents.
          </p>
        </div>

        {/* Earth Dome (Realistic Earth Photograph) */}
        <div className="absolute bottom-[-170px] left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full overflow-hidden border-4 border-neutral-900/60 shadow-[inset_0px_10px_35px_rgba(0,149,255,0.15),_0px_0px_20px_rgba(0,149,255,0.1)] z-10 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=600&h=600&q=80"
            alt="Photographic Earth Dome"
            width={460}
            height={460}
            className="w-full h-full object-cover opacity-90 brightness-[0.8] contrast-[1.05]"
            unoptimized
          />
          {/* Shading overlay to make it look round/atmospheric */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]"></div>
          {/* Subtle rotation reflection overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_40%)]"></div>
        </div>

        {/* SVG Connecting Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          viewBox="0 0 480 430"
        >
          {teamPins.map((pin) => {
            // Draw connecting lines with slight offset from avatar center
            // Avatar size is 36px, so center is x + 18, y + 18
            const avCenterX = pin.avatarX + 18;
            const avCenterY = pin.avatarY + 18;

            return (
              <g key={pin.id}>
                {/* Connecting Line */}
                <line
                  x1={avCenterX}
                  y1={avCenterY}
                  x2={pin.pinX}
                  y2={pin.pinY}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.2"
                />
                {/* Red Target Pin Dot on Earth */}
                <circle
                  cx={pin.pinX}
                  cy={pin.pinY}
                  r="3.5"
                  fill="#ef4444"
                  className="animate-pulse"
                />
                {/* Red Target Pin Outer Ring */}
                <circle
                  cx={pin.pinX}
                  cy={pin.pinY}
                  r="6"
                  stroke="#ef4444"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                />
              </g>
            );
          })}
        </svg>

        {/* Team Avatars */}
        {teamPins.map((pin) => (
          <div
            key={pin.id}
            className="absolute group z-30 cursor-pointer"
            style={{
              left: `${pin.avatarX}px`,
              top: `${pin.avatarY}px`,
              width: "36px",
              height: "36px",
            }}
          >
            {/* Avatar Circle Container */}
            <div
              className="w-full h-full rounded-full border-2 overflow-hidden bg-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all duration-200"
              style={{ borderColor: pin.color }}
            >
              <Image
                src={pin.image}
                alt={pin.name}
                width={36}
                height={36}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                unoptimized
              />
            </div>

            {/* Hover Tooltip Card */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-neutral-900 border border-neutral-700 rounded-lg p-2 shadow-brutal pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-left z-40">
              <p className="text-[10px] font-black text-white leading-none">
                {pin.name}
              </p>
              <p className="text-[8px] font-semibold text-zinc-400 mt-1 leading-none">
                {pin.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
