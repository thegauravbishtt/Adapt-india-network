import React from "react";
import Image from "next/image";

interface NetworkNode {
  id: number;
  name: string;
  image: string;
  ring: 1 | 2 | 3;
  angle: number; // in degrees
  size: number; // in pixels
}

const networkData: NetworkNode[] = [
  // Ring 1 (Innermost - largest avatars)
  {
    id: 1,
    name: "Alex",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 1,
    angle: -45,
    size: 52,
  },
  {
    id: 2,
    name: "Sarah",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 1,
    angle: 75,
    size: 52,
  },
  {
    id: 3,
    name: "Elena",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 1,
    angle: 195,
    size: 52,
  },

  // Ring 2 (Middle - medium avatars)
  {
    id: 4,
    name: "David",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 2,
    angle: 15,
    size: 42,
  },
  {
    id: 5,
    name: "Chloe",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 2,
    angle: 85,
    size: 42,
  },
  {
    id: 6,
    name: "Marcus",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 2,
    angle: 135,
    size: 42,
  },
  {
    id: 7,
    name: "Jessica",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 2,
    angle: 210,
    size: 42,
  },
  {
    id: 8,
    name: "Tariq",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 2,
    angle: 275,
    size: 42,
  },
  {
    id: 9,
    name: "Sofia",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 2,
    angle: 320,
    size: 42,
  },

  // Ring 3 (Outermost - smallest avatars)
  {
    id: 10,
    name: "Ryan",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: -10,
    size: 32,
  },
  {
    id: 11,
    name: "Molly",
    image:
      "https://images.unsplash.com/photo-1534751516642-a131ffd107fd?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 35,
    size: 32,
  },
  {
    id: 12,
    name: "Ben",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 90,
    size: 32,
  },
  {
    id: 13,
    name: "Ami",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 120,
    size: 32,
  },
  {
    id: 14,
    name: "Lucas",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 165,
    size: 32,
  },
  {
    id: 15,
    name: "Emma",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 235,
    size: 32,
  },
  {
    id: 16,
    name: "Jin",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 290,
    size: 32,
  },
  {
    id: 17,
    name: "Tina",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150&q=80",
    ring: 3,
    angle: 330,
    size: 32,
  },
];

export default function PartnersNetwork() {
  const centerCoord = 230; // center offset of our 460px box
  const ringRadii = {
    1: 72,
    2: 132,
    3: 196,
  };

  const getCoordinates = (ring: 1 | 2 | 3, angle: number) => {
    const r = ringRadii[ring];
    const angleRad = (angle * Math.PI) / 180;
    const x = centerCoord + r * Math.cos(angleRad);
    const y = centerCoord + r * Math.sin(angleRad);
    return { x, y };
  };

  return (
    <div className="w-full flex items-center justify-center py-6 select-none">
      <div
        className="relative flex items-center justify-center"
        style={{ width: "460px", height: "460px" }}
      >
        {/* Concentric Dashed Ring Lines */}
        <div
          className="absolute border border-dashed border-zinc-200 rounded-full"
          style={{
            width: `${ringRadii[1] * 2}px`,
            height: `${ringRadii[1] * 2}px`,
          }}
        ></div>
        <div
          className="absolute border border-dashed border-zinc-200 rounded-full"
          style={{
            width: `${ringRadii[2] * 2}px`,
            height: `${ringRadii[2] * 2}px`,
          }}
        ></div>
        <div
          className="absolute border border-dashed border-zinc-200 rounded-full"
          style={{
            width: `${ringRadii[3] * 2}px`,
            height: `${ringRadii[3] * 2}px`,
          }}
        ></div>

        {/* Decorative Micro-dots on the rings */}
        <div
          className="absolute w-2.5 h-2.5 bg-rose-400 rounded-full border border-black"
          style={{
            left: `${centerCoord + ringRadii[2] * Math.cos((45 * Math.PI) / 180) - 5}px`,
            top: `${centerCoord + ringRadii[2] * Math.sin((45 * Math.PI) / 180) - 5}px`,
          }}
        ></div>
        <div
          className="absolute w-2.5 h-2.5 bg-violet-400 rounded-full border border-black"
          style={{
            left: `${centerCoord + ringRadii[1] * Math.cos((230 * Math.PI) / 180) - 5}px`,
            top: `${centerCoord + ringRadii[1] * Math.sin((230 * Math.PI) / 180) - 5}px`,
          }}
        ></div>

        {/* Central Black Badge */}
        <div className="relative w-[114px] h-[114px] bg-black text-white rounded-full flex flex-col items-center justify-center border-4 border-white shadow-[0px_4px_25px_rgba(0,0,0,0.15)] z-20 text-center select-none hover:scale-105 transition-all duration-300">
          <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase">
            Global
          </span>
          <span className="text-xl font-black tracking-tighter leading-none mt-0.5">
            240+
          </span>
          <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mt-0.5">
            Partners
          </span>
        </div>

        {/* Outer Ring Avatar Nodes */}
        {networkData.map((node) => {
          const { x, y } = getCoordinates(node.ring, node.angle);
          const offset = node.size / 2;

          return (
            <div
              key={node.id}
              className="absolute group z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
              style={{
                left: `${x - offset}px`,
                top: `${y - offset}px`,
                width: `${node.size}px`,
                height: `${node.size}px`,
              }}
            >
              <div className="relative w-full h-full rounded-full border-2 border-black bg-white overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
                <Image
                  src={node.image}
                  alt={node.name}
                  width={node.size}
                  height={node.size}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  unoptimized // avoid image optimization failures on absolute URLs during demo
                />
              </div>
              {/* Tooltip on Hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-black text-white text-[8px] font-extrabold rounded-md shadow-brutal-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap z-30 uppercase tracking-wider">
                {node.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
