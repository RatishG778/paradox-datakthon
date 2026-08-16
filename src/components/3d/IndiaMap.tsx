"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface IndiaMapProps {
  problemType?: string;
}

const regionPoints: [number, number, number][] = [
  [-1.8, 2.6, 0],
  [-1.1, 2.9, 0],
  [-0.3, 2.7, 0],
  [0.5, 2.3, 0],
  [1.0, 1.7, 0],
  [0.7, 1.0, 0],
  [0.9, 0.3, 0],
  [0.5, -0.4, 0],
  [0.1, -1.1, 0],
  [-0.2, -1.8, 0],
  [-0.6, -2.4, 0],
  [-1.0, -1.7, 0],
  [-1.4, -1.0, 0],
  [-1.7, -0.2, 0],
  [-2.0, 0.7, 0],
  [-2.1, 1.6, 0],
];

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [13, 14],
  [14, 15],
  [15, 0],

  [1, 5],
  [2, 6],
  [3, 7],
  [5, 8],
  [7, 11],
  [8, 12],
];

function DataNode({
  position,
  active,
  index,
}: {
  position: [number, number, number];
  active: boolean;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const pulse =
      1 +
      Math.sin(
        state.clock.elapsedTime * 2 + index
      ) *
        (active ? 0.2 : 0.08);

    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry
        args={[active ? 0.07 : 0.045, 16, 16]}
      />

      <meshBasicMaterial
        color={active ? "#63e6ff" : "#ffffff"}
        transparent
        opacity={active ? 0.95 : 0.45}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Connection({
  start,
  end,
  active,
}: {
  start: [number, number, number];
  end: [number, number, number];
  active: boolean;
}) {
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ];

    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial
        color={active ? "#63e6ff" : "#ffffff"}
        transparent
        opacity={active ? 0.45 : 0.12}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

function IndiaNetwork({ problemType }: IndiaMapProps) {
  const groupRef = useRef<THREE.Group>(null);

  const activeNodes = useMemo(() => {
    switch (problemType) {
      case "agriculture":
        return [0, 1, 2, 3, 11, 12];

      case "railways":
        return [2, 4, 5, 7, 9, 12, 14];

      case "disaster":
        return [3, 4, 6, 8, 9, 10];

      case "power":
        return [1, 3, 5, 7, 9, 12, 14];

      case "roads":
        return [2, 5, 7, 9, 11, 14];

      case "justice":
        return [1, 4, 7, 10, 13];

      case "finance":
        return [2, 4, 6, 8, 12];

      case "urban":
        return [2, 4, 6, 8, 10];

      case "welfare":
        return [1, 4, 7, 10, 13];

      case "misinformation":
        return [0, 3, 6, 9, 12];

      case "policy":
        return [1, 3, 5, 7, 9, 11, 14];

      default:
        return [2, 6, 9, 12];
    }
  }, [problemType]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.z += delta * 0.015;
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* DATA NODES */}
      {regionPoints.map((position, index) => (
        <DataNode
          key={`node-${index}`}
          position={position}
          active={activeNodes.includes(index)}
          index={index}
        />
      ))}

      {/* CONNECTIONS */}
      {connections.map(([startIndex, endIndex]) => (
        <Connection
          key={`${startIndex}-${endIndex}`}
          start={regionPoints[startIndex]}
          end={regionPoints[endIndex]}
          active={
            activeNodes.includes(startIndex) ||
            activeNodes.includes(endIndex)
          }
        />
      ))}

      {/* CENTRAL CORE */}
      <mesh position={[0, 0, 0.05]}>
        <sphereGeometry args={[0.11, 24, 24]} />

        <meshBasicMaterial
          color="#9ff5ff"
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* CORE GLOW */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 24, 24]} />

        <meshBasicMaterial
          color="#27d9ff"
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function IndiaMap({
  problemType = "default",
}: IndiaMapProps) {
  return (
    <div className="absolute inset-0">
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
        <IndiaNetwork problemType={problemType} />
      </Canvas>
    </div>
  );
}