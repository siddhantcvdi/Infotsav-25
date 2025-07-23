import React, { useEffect, useRef, useState } from "react";
import HangingSponsor from "./HangingSponsor";

const MainSponsors: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  const SPONSOR_COUNT = 7;
  const VIEWBOX_WIDTH = 1000;
  const VIEWBOX_HEIGHT = 500;

  const updatePositions = () => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    const rect = svg.getBoundingClientRect(); // Actual rendered size
    const pathLength = path.getTotalLength();

    const hangingOffset = rect.height; // 7% of SVG height for rope drop

    const newPositions = Array.from({ length: SPONSOR_COUNT }, (_, i) => {
      const pct = (i + 1) / (SPONSOR_COUNT + 1);
      const point = path.getPointAtLength(pathLength * pct);

      const x = (point.x / VIEWBOX_WIDTH) * rect.width;
      const y = (point.y / VIEWBOX_HEIGHT) * rect.height + hangingOffset;

      return { x, y };
    });

    setPositions(newPositions);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <section className="relative w-full h-screen max-h-[800px] bg-gradient-to-b from-black to-[#090928] text-white overflow-hidden">
      <h2 className="text-7xl font-black font-cattedrale text-center pt-12">
        SPONSORS
      </h2>

      {/* Floating circles (Eyes) */}
      <div className="flex justify-center gap-12 mt-10">
        <div className="w-36 h-36 bg-white rounded-full" />
        <div className="w-36 h-36 bg-white rounded-full" />
      </div>

      {/* Rope SVG */}
      <svg
        ref={svgRef}
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        className="absolute top-[35%] left-0 w-full h-[35%] z-0"
      >
        <path
          ref={pathRef}
          d="M 0 150 Q 500 700 1000 150"
          stroke="white"
          strokeWidth={2}
          fill="transparent"
        />
      </svg>

      {/* Hanging sponsor logos */}
      {positions.map((pos, idx) => (
        <div
          key={idx}
          className="absolute flex flex-col items-center z-10"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-0.5 h-8 bg-white" />
          <HangingSponsor/>
        </div>
      ))}
    </section>
  );
};

export default MainSponsors;
