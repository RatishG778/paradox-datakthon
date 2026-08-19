"use client";

import {
  useEffect,
  useRef,
} from "react";

import {
  Canvas,
} from "@react-three/fiber";

import DataNetwork, {
  NetworkNode,
} from "./DataNetwork";

import DataParticles from "./DataParticles";

import IndiaTerrain from "./IndiaTerrain";

import WorldCamera from "./WorldCamera";

import WorldLighting from "./WorldLighting";

import {
  getStateWorldPosition,
} from "../../../lib/v2/statePositions";


/* =========================================================
   TYPES
========================================================= */

interface ParadoxWorldProps {
  activeState: string | null;

  onHoverState: (
    node: NetworkNode | null
  ) => void;

  onSelectState: (
    node: NetworkNode
  ) => void;
}


/* =========================================================
   COMPONENT
========================================================= */

export default function ParadoxWorld({
  activeState,
  onHoverState,
  onSelectState,
}: ParadoxWorldProps) {

  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  const progressRef =
    useRef(0);


  /* =======================================================
     SELECTED STATE WORLD POSITION
  ======================================================= */

  const selectedPositionRef =
    useRef<
      [
        number,
        number,
        number
      ] | null
    >(null);


  /* =======================================================
     SCROLL TRACKING
  ======================================================= */

  useEffect(() => {

    const handleScroll = () => {

      const documentHeight =
        document.documentElement
          .scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const maximumScroll =
        documentHeight -
        viewportHeight;


      if (
        maximumScroll <= 0
      ) {
        progressRef.current = 0;

        return;
      }


      const progress =
        window.scrollY /
        maximumScroll;


      progressRef.current =
        Math.min(
          1,
          Math.max(
            0,
            progress
          )
        );
    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =======================================================
     SELECTED STATE
     
     IMPORTANT:
     The state position comes directly from
     statePositions.ts.
     
     There is NO duplicate coordinate map here.
  ======================================================= */

  useEffect(() => {

    if (!activeState) {

      selectedPositionRef.current =
        null;

      return;

    }


    const position =
      getStateWorldPosition(
        activeState
      );


    selectedPositionRef.current =
      position;

  }, [
    activeState,
  ]);


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
      "
    >

      <Canvas
        camera={{
          position: [
            0,
            0,
            8,
          ],

          fov: 45,

          near: 0.1,

          far: 100,
        }}

        dpr={[
          1,
          1.5,
        ]}

        gl={{
          antialias: true,

          alpha: true,

          powerPreference:
            "high-performance",
        }}

        style={{
          width: "100%",
          height: "100%",
        }}
      >

        {/* =================================================
            LIGHTING
        ================================================= */}

        <WorldLighting />


        {/* =================================================
            CAMERA
        ================================================= */}

        <WorldCamera
          progressRef={
            progressRef
          }

          selectedPosition={
            selectedPositionRef.current
          }
        />


        {/* =================================================
            INDIA TERRAIN
        ================================================= */}

        <IndiaTerrain
          progress={
            progressRef.current
          }
        />


        {/* =================================================
            DATA NETWORK
        ================================================= */}

        <DataNetwork
          activeState={
            activeState
          }

          onHover={
            onHoverState
          }

          onSelect={
            onSelectState
          }
        />


        {/* =================================================
            ATMOSPHERIC PARTICLES
        ================================================= */}

        <DataParticles
          count={500}
        />

      </Canvas>

    </div>
  );
}