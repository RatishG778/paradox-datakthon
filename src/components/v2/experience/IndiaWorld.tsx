"use client";

import {
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";

export default function IndiaWorld() {
  const group =
    useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const time =
      state.clock.getElapsedTime();

    /*
     * Slow organic rotation.
     */
    group.current.rotation.y =
      time * 0.08;

    group.current.rotation.x =
      Math.sin(time * 0.2) * 0.035;

    /*
     * Mouse influence.
     */
    group.current.position.x =
      THREE.MathUtils.lerp(
        group.current.position.x,
        state.pointer.x * 0.18,
        0.025
      );

    group.current.position.y =
      THREE.MathUtils.lerp(
        group.current.position.y,
        state.pointer.y * 0.12,
        0.025
      );
  });

  return (
    <group ref={group}>

      <Float
        speed={0.8}
        rotationIntensity={0.12}
        floatIntensity={0.2}
      >

        {/* OUTER FORM */}

        <mesh>

          <icosahedronGeometry
            args={[2.15, 5]}
          />

          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.75}
            chromaticAberration={0.025}
            anisotropy={0.15}
            distortion={0.12}
            distortionScale={0.12}
            temporalDistortion={0.04}
            transmission={0.7}
            roughness={0.3}
            color="#355c4a"
            transparent
            opacity={0.78}
          />

        </mesh>

        {/* INNER DATA CORE */}

        <mesh scale={0.72}>

          <icosahedronGeometry
            args={[2.15, 4]}
          />

          <meshStandardMaterial
            color="#f2efe7"
            roughness={0.5}
            metalness={0.05}
            transparent
            opacity={0.6}
          />

        </mesh>

        {/* CENTRAL SIGNAL */}

        <mesh scale={0.18}>

          <sphereGeometry
            args={[1, 32, 32]}
          />

          <meshStandardMaterial
            color="#b44735"
            emissive="#b44735"
            emissiveIntensity={1.5}
            roughness={0.25}
          />

        </mesh>

      </Float>

    </group>
  );
}