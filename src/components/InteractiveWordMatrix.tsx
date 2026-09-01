"use client";

import React, { useEffect, useRef } from "react";

interface CharPoint {
  char: string;
  originX: number;
  originY: number;
  x: number;
  y: number;
  baseOpacity: number;
  currentOpacity: number;
  scale: number;
}

const matrixLines = [
  "B R A N D   B U Z Z   R E A C H   G R O W T H   S E O   R O A",
  "C H   G R O W T H   S E O   R O A S   V I R A L   L E A D S",
  "R O A S   V I R A L   L E A D S   C T R   C R O   A E O",
  "E A D S   C T R   C R O   A E O   G E O   C P C   C P M   U",
  "A E O   G E O   C P C   C P M   U G C   K P I   C V R   S O",
  "P M   U G C   K P I   C V R   S O C I A L   M E D I A   C O",
  "R   S O C I A L   M E D I A   C O N T E N T   P E R F O R M",
  "A   C O N T E N T   P E R F O R M A N C E   B R A N D   B U",
  "F O R M A N C E   B R A N D   B U Z Z   R E A C H   G R O W",
  "D   B U Z Z   R E A C H   G R O W T H   S E O   R O A S   V",
  "G R O W T H   S E O   R O A S   V I R A L   L E A D S   C T",
  "I R A L   L E A D S   C T R   C R O   A E O   G E O",
  "R   C R O   A E O   G E O   C P C   C P M   U G C",
  "P C   C P M   U G C   K P I   C V R   S O C I A",
  "K P I   C V R   S O C I A L   M E D I A   C O N T E",
  "A L   M E D I A   C O N T E N T   P E R F O R M A N C",
  "O N T E N T   P E R F O R M A N C E   B R A N D   B U Z Z",
  "M A N C E   B R A N D   B U Z Z   R E A C H   G R O W T H",
  "U Z Z   R E A C H   G R O W T H   S E O   R O A S   V I R A",
  "W T H   S E O   R O A S   V I R A L   L E A D S   C T R   C",
];

export default function InteractiveWordMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; isHovered: boolean }>({
    x: -9999,
    y: -9999,
    isHovered: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: CharPoint[] = [];

    const initPoints = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const width = rect.width;
      const height = rect.height;

      points = [];
      const rowCount = matrixLines.length;
      const rowSpacing = height / (rowCount + 1);

      const baseOpacities = [
        0.06, 0.12, 0.18, 0.08, 0.15, 0.10, 0.20, 0.14, 0.08, 0.16, 0.11, 0.07, 0.15, 0.09, 0.18, 0.12, 0.07,
        0.15, 0.10, 0.06,
      ];

      matrixLines.forEach((line, rowIndex) => {
        const y = (rowIndex + 1) * rowSpacing;
        const chars = line.split("");
        const charSpacing = width / (chars.length + 3);
        const startX = width - chars.length * charSpacing - 20;

        chars.forEach((char, colIndex) => {
          if (char === " ") return; // Don't draw spaces
          const x = startX + colIndex * charSpacing;
          const baseOpacity = baseOpacities[rowIndex % baseOpacities.length];

          points.push({
            char,
            originX: x,
            originY: y,
            x,
            y,
            baseOpacity,
            currentOpacity: baseOpacity,
            scale: 1,
          });
        });
      });
    };

    initPoints();

    const handleResize = () => {
      initPoints();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isHovered: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Render loop with spring physics & bubble repel effect
    const render = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const { x: mouseX, y: mouseY, isHovered } = mouseRef.current;
      const repelRadius = 140; // Circular bubble diameter ~280px

      points.forEach((p) => {
        let targetX = p.originX;
        let targetY = p.originY;
        let targetOpacity = p.baseOpacity;
        let targetScale = 1;

        if (isHovered) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < repelRadius && dist > 0) {
            // Strong outward radial push (creating the circular hole/bubble)
            const force = Math.pow((repelRadius - dist) / repelRadius, 1.2);
            const pushDistance = force * 65;
            const angle = Math.atan2(dy, dx);

            targetX = p.originX + Math.cos(angle) * pushDistance;
            targetY = p.originY + Math.sin(angle) * pushDistance;

            // Subtle highlight on the edge of the bubble without being overly bright
            targetOpacity = Math.min(0.42, p.baseOpacity + force * 0.28);
            targetScale = 1 + force * 0.25;
          }
        }

        // Smooth physics interpolation (easing back)
        p.x += (targetX - p.x) * 0.16;
        p.y += (targetY - p.y) * 0.16;
        p.currentOpacity += (targetOpacity - p.currentOpacity) * 0.16;
        p.scale += (targetScale - p.scale) * 0.16;

        // Draw character
        const fontSize = Math.round(14 * p.scale);
        ctx.font = `900 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const isHighlighted = p.scale > 1.08;
        if (isHighlighted) {
          ctx.fillStyle = `rgba(251, 234, 61, ${p.currentOpacity})`;
        } else {
          ctx.fillStyle = `rgba(251, 234, 61, ${p.currentOpacity})`;
        }

        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] lg:w-[48%] xl:w-[46%] h-full z-0 overflow-hidden cursor-crosshair select-none hidden sm:block pointer-events-auto"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
