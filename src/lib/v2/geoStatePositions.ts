import type {
  StatePosition,
} from "./statePositions";


/* =========================================================
   TYPES
========================================================= */

export interface GeoJSONFeature {
  type: string;

  properties?: {
    NAME_1?: string;
    [key: string]: unknown;
  };

  geometry?: {
    type: string;
    coordinates: unknown;
  };
}


export interface GeoJSONCollection {
  type: "FeatureCollection";

  features: GeoJSONFeature[];
}


/* =========================================================
   CONFIG
========================================================= */

/*
 * IMPORTANT:
 *
 * These values MUST match IndiaTerrain.tsx.
 *
 * This makes the map and network use exactly
 * the same coordinate system.
 */

export const INDIA_VISUAL_WIDTH = 3.15;


/* =========================================================
   NAME MAPPING
========================================================= */

const GEOJSON_NAME_MAP: Record<
  string,
  string
> = {
  Orissa: "Odisha",
};


/* =========================================================
   NORMALIZE
========================================================= */

function normalizeName(
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
   COLLECT COORDINATES
========================================================= */

export function collectCoordinates(
  coordinates: unknown,
  output: number[][]
): void {

  if (
    !Array.isArray(
      coordinates
    )
  ) {
    return;
  }


  /*
   * Coordinate pair:
   *
   * [longitude, latitude]
   */

  if (
    coordinates.length >= 2 &&
    typeof coordinates[0] ===
      "number" &&
    typeof coordinates[1] ===
      "number"
  ) {

    output.push([
      coordinates[0],
      coordinates[1],
    ]);

    return;
  }


  for (
    const child of coordinates
  ) {

    collectCoordinates(
      child,
      output
    );

  }
}


/* =========================================================
   BOUNDS
========================================================= */

export function getIndiaBounds(
  geojson: GeoJSONCollection
) {

  const coordinates: number[][] =
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


    collectCoordinates(
      feature.geometry.coordinates,
      coordinates
    );

  }


  if (
    coordinates.length === 0
  ) {

    throw new Error(
      "India GeoJSON contains no coordinates."
    );

  }


  let minLongitude =
    Infinity;

  let maxLongitude =
    -Infinity;

  let minLatitude =
    Infinity;

  let maxLatitude =
    -Infinity;


  for (
    const [
      longitude,
      latitude,
    ] of coordinates
  ) {

    minLongitude =
      Math.min(
        minLongitude,
        longitude
      );


    maxLongitude =
      Math.max(
        maxLongitude,
        longitude
      );


    minLatitude =
      Math.min(
        minLatitude,
        latitude
      );


    maxLatitude =
      Math.max(
        maxLatitude,
        latitude
      );

  }


  return {
    minLongitude,
    maxLongitude,
    minLatitude,
    maxLatitude,
  };
}


/* =========================================================
   SHARED PROJECTION
========================================================= */

export function createIndiaProjection(
  geojson: GeoJSONCollection
) {

  const bounds =
    getIndiaBounds(
      geojson
    );


  const centerLongitude =
    (
      bounds.minLongitude +
      bounds.maxLongitude
    ) / 2;


  const centerLatitude =
    (
      bounds.minLatitude +
      bounds.maxLatitude
    ) / 2;


  /*
   * SAME SCALE AS TERRAIN.
   *
   * Do NOT use max(latitudeSpan, longitudeSpan).
   */

  const longitudeSpan =
    bounds.maxLongitude -
    bounds.minLongitude;


  const scale =
    INDIA_VISUAL_WIDTH /
    longitudeSpan;


  return (
    longitude: number,
    latitude: number
  ): [number, number] => {

    return [

      (
        longitude -
        centerLongitude
      ) * scale,

      (
        latitude -
        centerLatitude
      ) * scale,

    ];

  };
}


/* =========================================================
   FEATURE CENTER
========================================================= */

function getFeatureCenter(
  feature: GeoJSONFeature
): [number, number] | null {

  if (
    !feature.geometry
  ) {
    return null;
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
    return null;
  }


  /*
   * Average vertex center.
   *
   * Good enough for network anchors.
   */

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


  return [

    longitude /
      coordinates.length,

    latitude /
      coordinates.length,

  ];
}


/* =========================================================
   BUILD STATE POSITIONS
========================================================= */

export function buildGeoStatePositions(
  geojson: GeoJSONCollection,
  sourceStates: StatePosition[]
): StatePosition[] {

  const project =
    createIndiaProjection(
      geojson
    );


  return sourceStates.map(
    (state) => {

      const feature =
        geojson.features.find(
          (item) => {

            const name =
              item.properties
                ?.NAME_1;


            if (
              typeof name !==
              "string"
            ) {
              return false;
            }


            return (
              normalizeName(
                name
              ) ===
              normalizeName(
                state.name
              )
            );

          }
        );


      if (
        !feature
      ) {

        console.warn(
          `No GeoJSON feature found for ${state.name}`
        );


        return state;

      }


      const center =
        getFeatureCenter(
          feature
        );


      if (
        !center
      ) {

        return state;

      }


      const [
        longitude,
        latitude,
      ] = center;


      const [
        x,
        y,
      ] =
        project(
          longitude,
          latitude
        );


      return {

        ...state,

        x,

        y,

      };

    }
  );
}