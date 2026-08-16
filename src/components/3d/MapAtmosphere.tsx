"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MapAtmosphereProps {
  intensity?: number;
}

export default function MapAtmosphere({
  intensity = 1,
}: MapAtmosphereProps) {
  const particlesRef = useRef<THREE.Points>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 3.5;

      const theta =
        Math.random() * Math.PI * 2;

      const phi =
        Math.acos(2 * Math.random() - 1);

      positions[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      positions[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!particlesRef.current || !ringRef.current) {
      return;
    }

    const time = state.clock.elapsedTime;

    particlesRef.current.rotation.y +=
      delta * 0.018;

    particlesRef.current.rotation.x =
      Math.sin(time * 0.12) * 0.04;

    const pulse =
      1 +
      Math.sin(time * 1.5) * 0.025;

    ringRef.current.scale.setScalar(pulse);
  });

  return (
    <group>
      {/* PARTICLE FIELD */}

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
           attach="attributes-position"
           args={[particles, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#63e6ff"
          size={0.025}
          transparent
          opacity={0.28 * intensity}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* MAP ORBIT */}

      <mesh
        ref={ringRef}
        rotation={[1.2, 0.3, 0]}
      >
        <torusGeometry
          args={[3.2, 0.006, 12, 160]}
        />

        <meshBasicMaterial
          color="#63e6ff"
          transparent
          opacity={0.16 * intensity}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}