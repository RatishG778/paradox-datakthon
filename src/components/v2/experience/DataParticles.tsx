"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface DataParticlesProps {
  count?: number;
}

export default function DataParticles({
  count = 700,
}: DataParticlesProps) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 3;

      const theta =
        Math.random() * Math.PI * 2;

      const phi =
        Math.acos(
          2 * Math.random() - 1
        );

      values[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      values[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      values[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return values;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#355c4a"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}