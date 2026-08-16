"use client";

import { Canvas } from "@react-three/fiber";

import IndiaStateMap from "./IndiaStateMap";
import MapAtmosphere from "../3d/MapAtmosphere";

interface IndiaMapExperienceProps {
  problemType: string;
}

export default function IndiaMapExperience({
  problemType,
}: IndiaMapExperienceProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* ATMOSPHERE */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Canvas
          camera={{
            position: [0, 0, 8],
            fov: 45,
          }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <MapAtmosphere />
        </Canvas>
      </div>

      {/* REAL INDIA MAP */}

      <div className="absolute inset-0 z-10">
        <IndiaStateMap
          problemType={problemType}
        />
      </div>

      {/* CENTER GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[100px]" />

      {/* SCANNING LINE */}

      <div className="pointer-events-none absolute inset-x-10 top-1/2 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

    </div>
  );
}