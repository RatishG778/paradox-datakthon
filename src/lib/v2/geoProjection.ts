export interface GeoPoint {
  x: number;
  y: number;
}

/**
 * Converts SVG coordinates into our 3D world coordinates.
 *
 * SVG:
 *   x → horizontal
 *   y → vertical
 *
 * Three.js:
 *   x → horizontal
 *   y → vertical
 *   z → depth
 */
export function svgToWorld(
  x: number,
  y: number,
  bounds: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  },
  scale = 3.8
): GeoPoint {
  const normalizedX =
    (x - bounds.minX) /
    (bounds.maxX - bounds.minX);

  const normalizedY =
    (y - bounds.minY) /
    (bounds.maxY - bounds.minY);

  return {
    x: (normalizedX - 0.5) * scale,
    y: (0.5 - normalizedY) * scale,
  };
}