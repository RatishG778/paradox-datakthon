"use client";

export default function WorldLighting() {
  return (
    <>
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[5, 8, 6]}
        intensity={3}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={1.5}
      />

      <pointLight
        position={[4, -2, 2]}
        intensity={0.8}
      />
    </>
  );
}