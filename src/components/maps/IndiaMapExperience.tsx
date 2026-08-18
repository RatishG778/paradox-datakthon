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
    <div
      className="
        relative
        w-full
        overflow-hidden
        rounded-[1.25rem]
        bg-[#020608]
        md:rounded-[1.5rem]
      "
    >

      {/* ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          opacity-40
          md:block
        "
      >
        <Canvas
          camera={{
            position: [0, 0, 8],
            fov: 45,
          }}
          dpr={[1, 1.15]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <MapAtmosphere />
        </Canvas>
      </div>

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.035),transparent_65%)]
        "
      />

      {/* =====================================================
          CONTROLLED MAP CONTENT
      ====================================================== */}

      <div className="relative z-10 w-full">

        <IndiaStateMap
          problemType={problemType}
        />

      </div>

    </div>
  );
}