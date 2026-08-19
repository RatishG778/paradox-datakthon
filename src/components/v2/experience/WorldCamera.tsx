"use client";

import {
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";

interface WorldCameraProps {
  progressRef: React.MutableRefObject<number>;

  selectedPosition?: [
    number,
    number,
    number
  ] | null;
}

export default function WorldCamera({
  progressRef,
  selectedPosition = null,
}: WorldCameraProps) {
  const { camera, pointer } =
    useThree();

  const targetPosition =
    useRef(
      new THREE.Vector3()
    );

  const targetLookAt =
    useRef(
      new THREE.Vector3()
    );

  useFrame(() => {
    const progress =
      progressRef.current;

    /*
     * --------------------------------------------------
     * DEFAULT CAMERA
     * --------------------------------------------------
     */

    let targetX =
      pointer.x * 0.3;

    let targetY =
      pointer.y * 0.18;

    let targetZ =
      THREE.MathUtils.lerp(
        8,
        5.2,
        progress
      );

    let lookX = 0;
    let lookY = 0;
    let lookZ = 0;


    /*
     * --------------------------------------------------
     * SELECTED STATE CAMERA
     * --------------------------------------------------
     */

    if (selectedPosition) {
      /*
       * Move camera toward selected
       * state.
       */

      targetX =
        selectedPosition[0] * 0.35;

      targetY =
        selectedPosition[1] * 0.35;

      targetZ = 4.2;

      /*
       * Look slightly toward the
       * selected state.
       */

      lookX =
        selectedPosition[0];

      lookY =
        selectedPosition[1];

      lookZ =
        selectedPosition[2];
    }


    /*
     * --------------------------------------------------
     * SMOOTH CAMERA MOVEMENT
     * --------------------------------------------------
     */

    targetPosition.current.set(
      targetX,
      targetY,
      targetZ
    );

    camera.position.lerp(
      targetPosition.current,
      selectedPosition
        ? 0.055
        : 0.035
    );


    /*
     * --------------------------------------------------
     * LOOK TARGET
     * --------------------------------------------------
     */

    targetLookAt.current.set(
      lookX,
      lookY,
      lookZ
    );

    const currentLook =
      new THREE.Vector3();

    camera.getWorldDirection(
      currentLook
    );

    const desiredDirection =
      targetLookAt.current
        .clone()
        .sub(camera.position)
        .normalize();

    const currentTarget =
      camera.position
        .clone()
        .add(currentLook);

    const desiredTarget =
      camera.position
        .clone()
        .add(desiredDirection);

    currentTarget.lerp(
      desiredTarget,
      selectedPosition
        ? 0.06
        : 0.035
    );

    camera.lookAt(
      currentTarget
    );
  });

  return null;
}