export interface StatePosition {
  id: string;
  name: string;

  /*
   * Normalized visual coordinates.
   *
   * These coordinates are used by:
   * - DataNetwork
   * - WorldCamera
   * - state selection
   *
   * Later, these can be replaced with
   * coordinates extracted from the actual
   * India SVG without changing consumers.
   */

  x: number;
  y: number;

  intensity: number;
  challenges: number;
}


/* =========================================================
   INDIA STATE POSITIONS
========================================================= */

export const statePositions: StatePosition[] = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    x: -0.18,
    y: -0.72,
    intensity: 86,
    challenges: 4,
  },

  {
    id: "karnataka",
    name: "Karnataka",
    x: -0.48,
    y: -0.38,
    intensity: 89,
    challenges: 3,
  },

  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    x: 0.0,
    y: -0.32,
    intensity: 72,
    challenges: 3,
  },

  {
    id: "telangana",
    name: "Telangana",
    x: -0.05,
    y: 0.02,
    intensity: 78,
    challenges: 2,
  },

  {
    id: "maharashtra",
    name: "Maharashtra",
    x: -0.62,
    y: 0.28,
    intensity: 94,
    challenges: 5,
  },

  {
    id: "gujarat",
    name: "Gujarat",
    x: -1.0,
    y: 0.72,
    intensity: 82,
    challenges: 3,
  },

  {
    id: "rajasthan",
    name: "Rajasthan",
    x: -0.55,
    y: 1.25,
    intensity: 68,
    challenges: 2,
  },

  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    x: 0.32,
    y: 0.95,
    intensity: 91,
    challenges: 4,
  },

  {
    id: "odisha",
    name: "Odisha",
    x: 0.62,
    y: 0.12,
    intensity: 88,
    challenges: 3,
  },

  {
    id: "west-bengal",
    name: "West Bengal",
    x: 0.95,
    y: 0.55,
    intensity: 76,
    challenges: 3,
  },
];


/* =========================================================
   LOOKUP
========================================================= */

/**
 * Find a state by its unique ID.
 *
 * Returns undefined when the state doesn't exist.
 */
export function getStatePosition(
  stateId: string
): StatePosition | undefined {
  return statePositions.find(
    (state) =>
      state.id === stateId
  );
}


/* =========================================================
   THREE.JS POSITION
========================================================= */

/**
 * Convert the normalized state
 * coordinates into the position
 * format expected by Three.js.
 *
 * Keeping this conversion here means
 * components don't need to know how
 * state coordinates are represented.
 */
export function getStateWorldPosition(
  stateId: string
): [
  number,
  number,
  number
] | null {
  const state =
    getStatePosition(
      stateId
    );

  if (!state) {
    return null;
  }

  return [
    state.x,
    state.y,
    0.35,
  ];
}