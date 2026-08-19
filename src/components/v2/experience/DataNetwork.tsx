"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import {
  statePositions,
  type StatePosition,
} from "../../../lib/v2/statePositions";

import {
  buildGeoStatePositions,
  type GeoJSONCollection,
} from "../../../lib/v2/geoStatePositions";


/* =========================================================
   TYPES
========================================================= */

export interface NetworkNode {
  id: string;

  name: string;

  position: [
    number,
    number,
    number
  ];

  intensity: number;

  challenges: number;
}


interface DataNetworkProps {
  activeState: string | null;

  onHover: (
    node: NetworkNode | null
  ) => void;

  onSelect: (
    node: NetworkNode
  ) => void;
}



/* =========================================================
   GEOJSON HOOK
========================================================= */

function useGeoStatePositions() {

  const [
    positions,
    setPositions,
  ] = useState<
    StatePosition[]
  >(statePositions);


  useEffect(() => {

    let cancelled =
      false;


    async function loadPositions() {

      try {

        const response =
          await fetch(
            "/maps/india/india-states-simplified.geojson"
          );


        if (!response.ok) {
          throw new Error(
            `GeoJSON request failed: ${response.status}`
          );
        }


        const geojson =
          (await response.json()) as GeoJSONCollection;


        if (
          geojson.type !==
          "FeatureCollection"
        ) {
          throw new Error(
            "Invalid GeoJSON FeatureCollection"
          );
        }


        const generated =
          buildGeoStatePositions(
            geojson,
            statePositions
          );


        if (
          !cancelled &&
          generated.length > 0
        ) {

          setPositions(
            generated
          );

        }

      } catch (error) {

        /*
         * Keep the application
         * functional even if the
         * map asset fails.
         *
         * The original positions
         * are a safe fallback.
         */

        console.error(
          "Network GeoJSON failed:",
          error
        );

      }

    }


    loadPositions();


    return () => {
      cancelled = true;
    };

  }, []);


  return positions;
}


/* =========================================================
   NETWORK PULSE
========================================================= */

function NetworkPulse({
  delay = 0,

  intensity = 70,

  active = false,
}: {
  delay?: number;

  intensity?: number;

  active?: boolean;
}) {

  const ref =
    useRef<THREE.Mesh>(null);


  useFrame(({ clock }) => {

    if (!ref.current) {
      return;
    }


    const elapsed =
      clock.getElapsedTime();


    const cycle =
      (
        (
          elapsed +
          delay
        ) %
        3.2
      ) /
      3.2;


    const scale =
      1 +
      cycle *
        (
          active
            ? 4.5
            : 2.5
        );


    ref.current.scale.set(
      scale,
      scale,
      scale
    );


    const material =
      ref.current.material as
        THREE.MeshBasicMaterial;


    material.opacity =
      Math.max(
        0.015,
        intensity /
          100 *
          (
            active
              ? 0.25
              : 0.07
          ) *
          (
            1 -
            cycle
          )
      );

  });


  return (
    <mesh
      ref={ref}
      position={[
        0,
        0,
        0.02,
      ]}
    >

      <ringGeometry
        args={[
          0.045,
          0.06,
          32,
        ]}
      />

      <meshBasicMaterial
        color={
          active
            ? "#d6a84f"
            : "#b44735"
        }

        transparent

        opacity={0.05}

        depthWrite={false}

        side={
          THREE.DoubleSide
        }
      />

    </mesh>
  );
}


/* =========================================================
   STATE NODE
========================================================= */

function StateNode({
  node,

  index,

  activeState,

  onHover,

  onSelect,
}: {
  node: NetworkNode;

  index: number;

  activeState: string | null;

  onHover: (
    node: NetworkNode | null
  ) => void;

  onSelect: (
    node: NetworkNode
  ) => void;
}) {

  const group =
    useRef<THREE.Group>(null);


  const active =
    activeState ===
    node.id;


  const hasSelection =
    activeState !== null;


  const dimmed =
    hasSelection &&
    !active;


  useFrame(({ clock }) => {

    if (!group.current) {
      return;
    }


    const time =
      clock.getElapsedTime();


    /*
     * Extremely subtle
     * floating movement.
     */

    group.current.position.z =
      node.position[2] +
      Math.sin(
        time * 0.65 +
        index * 0.35
      ) *
        0.012;


    const targetScale =
      active
        ? 1.85
        : dimmed
          ? 0.72
          : 1;


    const current =
      group.current.scale.x;


    const next =
      THREE.MathUtils.lerp(
        current,
        targetScale,
        0.1
      );


    group.current.scale.set(
      next,
      next,
      next
    );

  });


  const nodeSize =
    0.028 +
    (
      node.intensity /
      100
    ) *
      0.035;


  const opacity =
    dimmed
      ? 0.18
      : 1;


  return (
    <group
      ref={group}
      position={node.position}
    >

      {/* =================================================
          CORE
      ================================================= */}

      <mesh
        onPointerEnter={(
          event
        ) => {

          event.stopPropagation();

          onHover(node);

          document.body.style.cursor =
            "pointer";

        }}

        onPointerLeave={(
          event
        ) => {

          event.stopPropagation();

          onHover(null);

          document.body.style.cursor =
            "default";

        }}

        onClick={(
          event
        ) => {

          event.stopPropagation();

          onSelect(node);

        }}
      >

        <sphereGeometry
          args={[
            nodeSize,
            18,
            18,
          ]}
        />

        <meshStandardMaterial
          color={
            active
              ? "#d6a84f"
              : "#b44735"
          }

          emissive={
            active
              ? "#d6a84f"
              : "#b44735"
          }

          emissiveIntensity={
            active
              ? 3
              : 0.8
          }

          transparent

          opacity={opacity}

          roughness={0.35}

          metalness={0.05}
        />

      </mesh>


      {/* =================================================
          NODE RING
      ================================================= */}

      <mesh>

        <ringGeometry
          args={[
            0.05,
            0.06,
            32,
          ]}
        />

        <meshBasicMaterial
          color={
            active
              ? "#d6a84f"
              : "#b44735"
          }

          transparent

          opacity={
            active
              ? 0.95
              : 0.25 *
                opacity
          }

          depthWrite={false}

          side={
            THREE.DoubleSide
          }
        />

      </mesh>


      {/* =================================================
          ACTIVE RING
      ================================================= */}

      {active && (
        <mesh>

          <ringGeometry
            args={[
              0.105,
              0.12,
              48,
            ]}
          />

          <meshBasicMaterial
            color="#d6a84f"

            transparent

            opacity={0.75}

            depthWrite={false}

            side={
              THREE.DoubleSide
            }
          />

        </mesh>
      )}


      {/* =================================================
          PULSE
      ================================================= */}

      <NetworkPulse
        delay={
          index * 0.18
        }

        intensity={
          node.intensity
        }

        active={
          active
        }
      />

    </group>
  );
}


/* =========================================================
   CONNECTION
========================================================= */

function NetworkConnection({
  from,

  to,

  active,
}: {
  from: NetworkNode;

  to: NetworkNode;

  active: boolean;
}) {

  const line =
    useMemo(() => {

      const start =
        new THREE.Vector3(
          ...from.position
        );


      const end =
        new THREE.Vector3(
          ...to.position
        );


      const midpoint =
        start
          .clone()
          .add(end)
          .multiplyScalar(
            0.5
          );


      midpoint.z +=
        active
          ? 0.16
          : 0.06;


      const curve =
        new THREE.QuadraticBezierCurve3(
          start,
          midpoint,
          end
        );


      const geometry =
        new THREE.BufferGeometry()
          .setFromPoints(
            curve.getPoints(
              active
                ? 32
                : 20
            )
          );


      const material =
        new THREE.LineBasicMaterial({
          color:
            active
              ? "#d6a84f"
              : "#355c4a",

          transparent: true,

          opacity:
            active
              ? 0.55
              : 0.04,

          depthWrite: false,
        });


      return new THREE.Line(
        geometry,
        material
      );

    }, [
      from,
      to,
      active,
    ]);


  useEffect(() => {

    return () => {

      line.geometry.dispose();

      (
        line.material as
          THREE.Material
      ).dispose();

    };

  }, [line]);


  return (
    <primitive
      object={line}
    />
  );
}


/* =========================================================
   CONNECTION BUILDER
========================================================= */

function buildConnections(
  nodes: NetworkNode[]
) {

  const connections: {
    from: NetworkNode;

    to: NetworkNode;
  }[] = [];


  for (
    let i = 0;
    i < nodes.length;
    i++
  ) {

    for (
      let j = i + 1;
      j < nodes.length;
      j++
    ) {

      const first =
        nodes[i];

      const second =
        nodes[j];


      const dx =
        first.position[0] -
        second.position[0];


      const dy =
        first.position[1] -
        second.position[1];


      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );


      /*
       * Sparse network.
       *
       * This is deliberate.
       * Too many lines hide
       * the map.
       */

      if (
        distance <
        0.62
      ) {

        connections.push({
          from: first,
          to: second,
        });

      }

    }

  }


  return connections;
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DataNetwork({
  activeState,

  onHover,

  onSelect,
}: DataNetworkProps) {

  const positions =
    useGeoStatePositions();


  const nodes =
    useMemo<
      NetworkNode[]
    >(() => {

      return positions.map(
        (state) => ({
          id:
            state.id,

          name:
            state.name,

          position: [
            state.x,
            state.y,
            0.38,
          ],

          intensity:
            state.intensity,

          challenges:
            state.challenges,
        })
      );

    }, [
      positions,
    ]);


  const connections =
    useMemo(
      () =>
        buildConnections(
          nodes
        ),
      [nodes]
    );


  return (
    <group>

      {/* =================================================
          NETWORK CONNECTIONS
      ================================================= */}

      {connections.map(
        (
          connection,
          index
        ) => {

          const active =
            activeState ===
              connection
                .from
                .id ||
            activeState ===
              connection
                .to
                .id;


          return (
            <NetworkConnection
              key={
                `connection-${index}`
              }

              from={
                connection.from
              }

              to={
                connection.to
              }

              active={
                active
              }
            />
          );

        }
      )}


      {/* =================================================
          STATE NODES
      ================================================= */}

      {nodes.map(
        (
          node,
          index
        ) => (

          <StateNode
            key={
              node.id
            }

            node={
              node
            }

            index={
              index
            }

            activeState={
              activeState
            }

            onHover={
              onHover
            }

            onSelect={
              onSelect
            }
          />

        )
      )}

    </group>
  );
}