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
  createIndiaProjection,
  collectCoordinates,
  type GeoJSONCollection,
  type GeoJSONFeature,
} from "../../../lib/v2/geoStatePositions";


/* =========================================================
   TYPES
========================================================= */

interface IndiaTerrainProps {
  progress?: number;

  activeState?: string | null;

  onHoverState?: (
    stateId: string | null
  ) => void;
}


interface IndiaStateShape {
  id: string;

  name: string;

  shapes: THREE.Shape[];

  center: THREE.Vector3;
}


/* =========================================================
   STATE NAME MAPPING
========================================================= */

const GEOJSON_NAME_MAP: Record<
  string,
  string
> = {
  Orissa: "Odisha",
};


/* =========================================================
   NORMALIZE STATE NAME
========================================================= */

function normalizeStateName(
  name: string
): string {

  const mapped =
    GEOJSON_NAME_MAP[name] ??
    name;


  return mapped
    .toLowerCase()
    .replace(
      /&/g,
      "and"
    )
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      "");
}


/* =========================================================
   GEOJSON RING EXTRACTION
========================================================= */

function extractRings(
  geometry: {
    type: string;

    coordinates: unknown;
  }
): number[][][] {

  if (
    geometry.type ===
    "Polygon"
  ) {

    return (
      geometry.coordinates as
        number[][][]
    );

  }


  if (
    geometry.type ===
    "MultiPolygon"
  ) {

    const polygons =
      geometry.coordinates as
        number[][][][];


    return polygons.flat();

  }


  return [];
}


/* =========================================================
   CREATE SHAPE
========================================================= */

function createShapeFromRing(
  ring: number[][],
  project: (
    longitude: number,
    latitude: number
  ) => [number, number]
): THREE.Shape | null {

  if (
    ring.length < 3
  ) {
    return null;
  }


  const shape =
    new THREE.Shape();


  let validPoints = 0;


  ring.forEach(
    (
      coordinate,
      index
    ) => {

      const longitude =
        coordinate[0];

      const latitude =
        coordinate[1];


      if (
        typeof longitude !==
          "number" ||
        typeof latitude !==
          "number"
      ) {
        return;
      }


      const [
        x,
        y,
      ] =
        project(
          longitude,
          latitude
        );


      if (
        index === 0
      ) {

        shape.moveTo(
          x,
          y
        );

      } else {

        shape.lineTo(
          x,
          y
        );

      }


      validPoints++;

    }
  );


  if (
    validPoints < 3
  ) {
    return null;
  }


  shape.closePath();


  return shape;
}


/* =========================================================
   FEATURE CENTER
========================================================= */

function getFeatureCenter(
  feature: GeoJSONFeature,
  project: (
    longitude: number,
    latitude: number
  ) => [number, number]
): THREE.Vector3 {

  if (
    !feature.geometry
  ) {

    return new THREE.Vector3();

  }


  const coordinates: number[][] =
    [];


  collectCoordinates(
    feature.geometry.coordinates,
    coordinates
  );


  if (
    coordinates.length === 0
  ) {

    return new THREE.Vector3();

  }


  let longitude = 0;

  let latitude = 0;


  for (
    const coordinate of
      coordinates
  ) {

    longitude +=
      coordinate[0];

    latitude +=
      coordinate[1];

  }


  longitude /=
    coordinates.length;

  latitude /=
    coordinates.length;


  const [
    x,
    y,
  ] =
    project(
      longitude,
      latitude
    );


  return new THREE.Vector3(
    x,
    y,
    0
  );
}


/* =========================================================
   BUILD STATE SHAPES
========================================================= */

function buildIndiaStates(
  geojson: GeoJSONCollection
): IndiaStateShape[] {

  const project =
    createIndiaProjection(
      geojson
    );


  const result:
    IndiaStateShape[] =
    [];


  for (
    const feature of
      geojson.features
  ) {

    if (
      !feature.geometry
    ) {
      continue;
    }


    const geoName =
      feature.properties
        ?.NAME_1;


    if (
      typeof geoName !==
      "string"
    ) {
      continue;
    }


    const stateName =
      GEOJSON_NAME_MAP[
        geoName
      ] ??
      geoName;


    const stateId =
      normalizeStateName(
        stateName
      );


    const rings =
      extractRings(
        feature.geometry
      );


    const shapes:
      THREE.Shape[] =
      [];


    /*
     * Polygon / MultiPolygon
     *
     * We create a Shape for
     * every outer ring.
     *
     * This is important for
     * island territories.
     */

    for (
      const ring of rings
    ) {

      const shape =
        createShapeFromRing(
          ring,
          project
        );


      if (
        shape
      ) {

        shapes.push(
          shape
        );

      }

    }


    if (
      shapes.length === 0
    ) {
      continue;
    }


    const center =
      getFeatureCenter(
        feature,
        project
      );


    result.push({

      id:
        stateId,

      name:
        stateName,

      shapes,

      center,

    });

  }


  return result;
}


/* =========================================================
   STATE MATERIALS
========================================================= */

function StateMesh({
  state,
  active,
  hovered,
  onHover,
  onSelect,
}: {
  state: IndiaStateShape;

  active: boolean;

  hovered: boolean;

  onHover?: (
    stateId: string | null
  ) => void;

  onSelect?: (
    stateId: string
  ) => void;
}) {

  const group =
    useRef<THREE.Group>(null);


  const targetZ =
    active
      ? 0.11
      : hovered
        ? 0.075
        : 0.04;


  useFrame(
    ({ clock }) => {

      if (
        !group.current
      ) {
        return;
      }


      const time =
        clock.getElapsedTime();


      const pulse =
        active
          ? Math.sin(
              time * 2.4
            ) *
              0.012
          : 0;


      const target =
        targetZ +
        pulse;


      group.current.position.z =
        THREE.MathUtils.lerp(
          group.current.position.z,
          target,
          0.08
        );


      const targetScale =
        active
          ? 1.008
          : hovered
            ? 1.004
            : 1;


      const current =
        group.current.scale.x;


      const next =
        THREE.MathUtils.lerp(
          current,
          targetScale,
          0.08
        );


      group.current.scale.set(
        next,
        next,
        1
      );

    }
  );


  const fillColor =
    active
      ? "#c98b43"
      : hovered
        ? "#6f9883"
        : "#557c6b";


  const emissiveColor =
    active
      ? "#a85c2e"
      : "#355c4a";


  const borderColor =
    active
      ? "#f1c978"
      : hovered
        ? "#c4d8cb"
        : "#a7b9ae";


  const opacity =
    active
      ? 0.96
      : hovered
        ? 0.9
        : 0.78;


  return (
    <group
      ref={group}
    >

      {state.shapes.map(
        (
          shape,
          index
        ) => {

          /*
           * Each state gets a
           * shallow 3D body.
           */

          const geometry =
            new THREE.ExtrudeGeometry(
              shape,
              {
                depth:
                  active
                    ? 0.085
                    : 0.055,

                bevelEnabled:
                  false,

                curveSegments:
                  2,

                steps: 1,

              }
            );


          geometry.computeVertexNormals();


          const edges =
            new THREE.EdgesGeometry(
              geometry
            );


          return (
            <group
              key={
                `${state.id}-${index}`
              }

              onPointerEnter={(
                event
              ) => {

                event.stopPropagation();

                onHover?.(
                  state.id
                );

                document.body.style.cursor =
                  "pointer";

              }}

              onPointerLeave={(
                event
              ) => {

                event.stopPropagation();

                onHover?.(
                  null
                );

                document.body.style.cursor =
                  "default";

              }}

              onClick={(
                event
              ) => {

                event.stopPropagation();

                onSelect?.(
                  state.id
                );

              }}
            >

              {/* =================================================
                  MAIN STATE BODY
              ================================================= */}

              <mesh
                geometry={
                  geometry
                }
              >

                <meshStandardMaterial
                  color={
                    fillColor
                  }

                  emissive={
                    emissiveColor
                  }

                  emissiveIntensity={
                    active
                      ? 0.7
                      : hovered
                        ? 0.22
                        : 0.08
                  }

                  roughness={
                    0.78
                  }

                  metalness={
                    0.04
                  }

                  transparent

                  opacity={
                    opacity
                  }

                  side={
                    THREE.DoubleSide
                  }
                />

              </mesh>


              {/* =================================================
                  STATE BORDER
              ================================================= */}

              <lineSegments
                geometry={
                  edges
                }
              >

                <lineBasicMaterial
                  color={
                    borderColor
                  }

                  transparent

                  opacity={
                    active
                      ? 1
                      : hovered
                        ? 0.8
                        : 0.48
                  }

                  linewidth={1}

                  depthWrite={
                    false
                  }
                />

              </lineSegments>


              {/* =================================================
                  ACTIVE STATE LIGHT
              ================================================= */}

              {active && (
                <mesh
                  position={[
                    0,
                    0,
                    0.012,
                  ]}
                  scale={[
                    1.008,
                    1.008,
                    1,
                  ]}
                  geometry={
                    new THREE.ShapeGeometry(
                      shape
                    )
                  }
                >

                  <meshBasicMaterial
                    color="#f1c978"

                    transparent

                    opacity={0.08}

                    depthWrite={
                      false
                    }

                    side={
                      THREE.DoubleSide
                    }
                  />

                </mesh>
              )}

            </group>
          );
        }
      )}

    </group>
  );
}


/* =========================================================
   ACTIVE STATE MARKER
========================================================= */

function ActiveMarker({
  position,
}: {
  position: THREE.Vector3;
}) {

  const ring =
    useRef<THREE.Mesh>(null);


  const glow =
    useRef<THREE.Mesh>(null);


  useFrame(
    ({ clock }) => {

      const time =
        clock.getElapsedTime();


      const pulse =
        (
          Math.sin(
            time * 2
          ) +
          1
        ) /
        2;


      if (
        ring.current
      ) {

        const scale =
          1 +
          pulse *
            0.55;


        ring.current.scale.set(
          scale,
          scale,
          1
        );


        const material =
          ring.current
            .material as
            THREE.MeshBasicMaterial;


        material.opacity =
          0.65 -
          pulse *
            0.3;

      }


      if (
        glow.current
      ) {

        const material =
          glow.current
            .material as
            THREE.MeshBasicMaterial;


        material.opacity =
          0.08 +
          pulse *
            0.07;

      }

    }
  );


  return (
    <group
      position={[
        position.x,
        position.y,
        0.23,
      ]}
    >

      {/* CORE */}

      <mesh>

        <sphereGeometry
          args={[
            0.035,
            16,
            16,
          ]}
        />

        <meshBasicMaterial
          color="#f1c978"
        />

      </mesh>


      {/* RING */}

      <mesh
        ref={ring}
      >

        <ringGeometry
          args={[
            0.055,
            0.068,
            40,
          ]}
        />

        <meshBasicMaterial
          color="#d6a84f"

          transparent

          opacity={0.6}

          depthWrite={
            false
          }

          side={
            THREE.DoubleSide
          }
        />

      </mesh>


      {/* GLOW */}

      <mesh
        ref={glow}
        scale={[
          2.8,
          2.8,
          1,
        ]}
      >

        <circleGeometry
          args={[
            0.05,
            32,
          ]}
        />

        <meshBasicMaterial
          color="#d6a84f"

          transparent

          opacity={0.08}

          depthWrite={
            false
          }

          side={
            THREE.DoubleSide
          }
        />

      </mesh>

    </group>
  );
}


/* =========================================================
   MAIN INDIA TERRAIN
========================================================= */

export default function IndiaTerrain({
  progress = 0,
  activeState = null,
  onHoverState,
}: IndiaTerrainProps) {

  const group =
    useRef<THREE.Group>(null);


  const [
    mapData,
    setMapData,
  ] =
    useState<
      IndiaStateShape[]
    >([]);


  const [
    hoveredState,
    setHoveredState,
  ] =
    useState<
      string | null
    >(null);


  /* =======================================================
     LOAD MAP
  ======================================================= */

  useEffect(() => {

    let cancelled =
      false;


    async function loadMap() {

      try {

        const response =
          await fetch(
            "/maps/india/india-states-simplified.geojson"
          );


        if (
          !response.ok
        ) {

          throw new Error(
            `India map request failed: ${response.status}`
          );

        }


        const geojson =
          (await response.json()) as
            GeoJSONCollection;


        if (
          geojson.type !==
          "FeatureCollection"
        ) {

          throw new Error(
            "Invalid India GeoJSON: expected FeatureCollection."
          );

        }


        const generated =
          buildIndiaStates(
            geojson
          );


        if (
          !cancelled
        ) {

          setMapData(
            generated
          );

        }

      } catch (
        error
      ) {

        console.error(
          "India map failed to load:",
          error
        );

      }

    }


    loadMap();


    return () => {

      cancelled = true;

    };

  }, []);


  /* =======================================================
     ACTIVE CENTER
  ======================================================= */

  const activeCenter =
    useMemo(() => {

      if (
        !activeState
      ) {
        return null;
      }


      const state =
        mapData.find(
          (item) =>
            item.id ===
            activeState
        );


      return (
        state?.center ??
        null
      );

    }, [
      mapData,
      activeState,
    ]);


  /* =======================================================
     SUBTLE TERRAIN MOTION
  ======================================================= */

  useFrame(
    ({ clock }) => {

      if (
        !group.current
      ) {
        return;
      }


      const time =
        clock.getElapsedTime();


      /*
       * IMPORTANT:
       *
       * No rotation around Y.
       *
       * This is a flat geographic
       * visualization, not a globe.
       */

      group.current.rotation.z =
        Math.sin(
          time * 0.1
        ) *
          0.004;


      /*
       * Keep progress extremely
       * subtle so the network
       * remains aligned.
       */

      const targetOpacity =
        THREE.MathUtils.clamp(
          0.92 +
            progress *
              0.08,
          0.92,
          1
        );


      group.current.userData
        .opacity =
        targetOpacity;

    }
  );


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <group
      ref={group}
    >

      {/* =================================================
          STATES
      ================================================= */}

      {mapData.map(
        (state) => (

          <StateMesh
            key={
              state.id
            }

            state={
              state
            }

            active={
              activeState ===
              state.id
            }

            hovered={
              hoveredState ===
              state.id
            }

            onHover={(
              stateId
            ) => {

              setHoveredState(
                stateId
              );

              onHoverState?.(
                stateId
              );

            }}

            onSelect={(
              stateId
            ) => {

              /*
               * The actual state
               * selection should be
               * controlled by the
               * parent.
               *
               * This component only
               * emits hover currently.
               */

              onHoverState?.(
                stateId
              );

            }}

          />

        )
      )}


      {/* =================================================
          ACTIVE STATE MARKER
      ================================================= */}

      {activeCenter && (
        <ActiveMarker
          position={
            activeCenter
          }
        />
      )}


      {/* =================================================
          LOADING INDICATOR
      ================================================= */}

      {mapData.length ===
        0 && (
        <mesh
          position={[
            0,
            0,
            0.15,
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
            color="#b44735"

            transparent

            opacity={0.45}

            depthWrite={
              false
            }

            side={
              THREE.DoubleSide
            }
          />

        </mesh>
      )}

    </group>
  );
}