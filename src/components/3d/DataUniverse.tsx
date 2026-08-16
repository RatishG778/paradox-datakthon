"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DataParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const outerRef = useRef<THREE.Points>(null);

  const { mouse } = useThree();

  // Main particle sphere
  const innerParticles = useMemo(() => {
    const count = 3200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.6 + Math.random() * 1.7;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return positions;
  }, []);

  // Deep space particles
  const outerParticles = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 4.5 + Math.random() * 4;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current || !outerRef.current) return;

    const time = state.clock.elapsedTime;

    // Main universe rotation
    pointsRef.current.rotation.y += delta * 0.11;

    pointsRef.current.rotation.x =
      Math.sin(time * 0.25) * 0.08;

    pointsRef.current.rotation.z =
      Math.sin(time * 0.18) * 0.025;

    // Outer universe rotates opposite direction
    outerRef.current.rotation.y -= delta * 0.025;

    outerRef.current.rotation.x =
      Math.sin(time * 0.12) * 0.05;

    // Smooth mouse parallax
    const targetX = mouse.x * 0.35;
    const targetY = mouse.y * 0.25;

    pointsRef.current.position.x +=
      (targetX - pointsRef.current.position.x) * 0.025;

    pointsRef.current.position.y +=
      (targetY - pointsRef.current.position.y) * 0.025;

    outerRef.current.position.x +=
      (mouse.x * 0.12 - outerRef.current.position.x) * 0.01;

    outerRef.current.position.y +=
      (mouse.y * 0.08 - outerRef.current.position.y) * 0.01;
  });

  return (
    <>
      {/* MAIN DATA CLOUD */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[innerParticles, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#63e6ff"
          size={0.038}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* OUTER DATA FIELD */}
      <points ref={outerRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[outerParticles, 3]}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#ffffff"
          size={0.016}
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

function DataCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!coreRef.current || !innerGlowRef.current) return;

    const time = state.clock.elapsedTime;

    // Core breathing
    const pulse =
      1 + Math.sin(time * 2.2) * 0.08;

    coreRef.current.scale.setScalar(pulse);

    // Glow breathing at a different frequency
    const glowPulse =
      1.4 + Math.sin(time * 1.4) * 0.18;

    innerGlowRef.current.scale.setScalar(glowPulse);
  });

  return (
    <>
      {/* CORE */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshBasicMaterial
          color="#d8fbff"
          transparent
          opacity={0.98}
        />
      </mesh>

      {/* INNER GLOW */}
      <mesh ref={innerGlowRef} scale={1.5}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshBasicMaterial
          color="#27d9ff"
          transparent
          opacity={0.13}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* MEDIUM GLOW */}
      <mesh scale={2.2}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshBasicMaterial
          color="#27d9ff"
          transparent
          opacity={0.07}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* OUTER GLOW */}
      <mesh scale={3.5}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshBasicMaterial
          color="#27d9ff"
          transparent
          opacity={0.025}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

function OrbitRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ring1.current || !ring2.current || !ring3.current) {
      return;
    }

    // Primary ring
    ring1.current.rotation.z += delta * 0.14;
    ring1.current.rotation.x += delta * 0.035;

    // Secondary ring
    ring2.current.rotation.z -= delta * 0.09;
    ring2.current.rotation.y += delta * 0.045;

    // Third orbital layer
    ring3.current.rotation.x -= delta * 0.06;
    ring3.current.rotation.y += delta * 0.025;
  });

  return (
    <>
      {/* CYAN ORBIT */}
      <mesh
        ref={ring1}
        rotation={[1.2, 0.3, 0]}
      >
        <torusGeometry
          args={[3.1, 0.008, 16, 180]}
        />

        <meshBasicMaterial
          color="#5ee7ff"
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* WHITE ORBIT */}
      <mesh
        ref={ring2}
        rotation={[0.3, 1.1, 0]}
      >
        <torusGeometry
          args={[3.5, 0.006, 16, 180]}
        />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.13}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* LARGE FAINT ORBIT */}
      <mesh
        ref={ring3}
        rotation={[1.8, 0.5, 0.4]}
      >
        <torusGeometry
          args={[4.1, 0.004, 12, 180]}
        />

        <meshBasicMaterial
          color="#63e6ff"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

function DataNodes() {
  const nodesRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return [
      [2.7, 0.8, 1.2],
      [-2.8, 1.1, 0.4],
      [1.6, -2.1, 1.3],
      [-1.8, -1.7, -0.8],
      [0.9, 2.5, -1.1],
      [-0.8, 1.9, 1.8],
    ];
  }, []);

  useFrame((state) => {
    if (!nodesRef.current) return;

    const time = state.clock.elapsedTime;

    nodesRef.current.children.forEach(
      (node, index) => {
        const pulse =
          1 +
          Math.sin(time * 2 + index) * 0.25;

        node.scale.setScalar(pulse);
      }
    );
  });

  return (
    <group ref={nodesRef}>
      {nodes.map((position, index) => (
        <mesh
          key={index}
          position={
            position as [number, number, number]
          }
        >
          <sphereGeometry args={[0.045, 12, 12]} />

          <meshBasicMaterial
            color="#8ff3ff"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <group scale={1.45}>

      <ambientLight intensity={0.5} />

      <DataParticles />

      <DataCore />

      <OrbitRings />

      <DataNodes />

    </group>
  );
}

export default function DataUniverse() {
  return (
    <div className="absolute inset-0">

      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 50,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >

        <Scene />

      </Canvas>

    </div>
  );
}