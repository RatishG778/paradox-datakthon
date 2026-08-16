"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IndiaStateMapProps {
  problemType?: string;
}

type IndiaLocation = {
  id: string;
  name: string;
  path: string;
};

type StateInsight = {
  state: string;
  code: string;
  category: string;
  problemCount: number;
  intensity: number;
  description: string;
  focus: string;
};

/*
 * ---------------------------------------------------------
 * INDIA MAP DATA
 * ---------------------------------------------------------
 *
 * IMPORTANT:
 * Keep your existing India object/import if you already
 * have it in this file.
 *
 * Expected structure:
 *
 * India = {
 *   viewBox: "...",
 *   locations: [
 *     {
 *       id: "...",
 *       name: "...",
 *       path: "..."
 *     }
 *   ]
 * }
 *
 * Replace this import path only if your existing project
 * stores the India map data somewhere else.
 */

import India from "@svg-maps/india";

const stateInsights: Record<string, StateInsight> = {
  "Tamil Nadu": {
    state: "Tamil Nadu",
    code: "TN",
    category: "Urban & Industrial Analytics",
    problemCount: 4,
    intensity: 86,
    description:
      "Urban growth, transport, industrial demand and environmental data create opportunities for predictive analytics.",
    focus:
      "Urban planning · Power demand · Road safety · Industrial analytics",
  },

  Maharashtra: {
    state: "Maharashtra",
    code: "MH",
    category: "Financial & Urban Intelligence",
    problemCount: 5,
    intensity: 94,
    description:
      "Large urban and financial ecosystems create complex challenges involving mobility, finance and infrastructure.",
    focus:
      "Financial intelligence · Urban planning · Railways · Disaster risk",
  },

  Karnataka: {
    state: "Karnataka",
    code: "KA",
    category: "Technology & Urban Intelligence",
    problemCount: 4,
    intensity: 89,
    description:
      "Rapid technology-driven growth creates opportunities for intelligent infrastructure and urban analytics.",
    focus:
      "Urban growth · Mobility · Infrastructure · AI systems",
  },

  "Andhra Pradesh": {
    state: "Andhra Pradesh",
    code: "AP",
    category: "Agriculture & Infrastructure",
    problemCount: 3,
    intensity: 72,
    description:
      "Agricultural systems, climate patterns and infrastructure development provide important data challenges.",
    focus:
      "Agriculture · Disaster prediction · Infrastructure",
  },

  Telangana: {
    state: "Telangana",
    code: "TG",
    category: "Urban & Digital Intelligence",
    problemCount: 3,
    intensity: 78,
    description:
      "Rapid urban development and digital infrastructure generate opportunities for predictive systems.",
    focus:
      "Urban planning · Digital intelligence · Transport",
  },

  "West Bengal": {
    state: "West Bengal",
    code: "WB",
    category: "Disaster & Urban Intelligence",
    problemCount: 3,
    intensity: 76,
    description:
      "Climate exposure, dense urban areas and transport networks create complex decision-making challenges.",
    focus:
      "Cyclone risk · Urban planning · Railways",
  },

  Gujarat: {
    state: "Gujarat",
    code: "GJ",
    category: "Industrial & Energy Analytics",
    problemCount: 3,
    intensity: 82,
    description:
      "Industrial activity and energy consumption provide large-scale opportunities for predictive analytics.",
    focus:
      "Energy · Industry · Logistics · Disaster intelligence",
  },

  Rajasthan: {
    state: "Rajasthan",
    code: "RJ",
    category: "Water & Climate Intelligence",
    problemCount: 2,
    intensity: 68,
    description:
      "Climate variability and water availability create important regional prediction challenges.",
    focus:
      "Water · Climate · Agriculture",
  },

  "Uttar Pradesh": {
    state: "Uttar Pradesh",
    code: "UP",
    category: "Population & Infrastructure",
    problemCount: 4,
    intensity: 91,
    description:
      "Large population density and infrastructure networks make intelligent resource planning highly valuable.",
    focus:
      "Transport · Agriculture · Urban planning · Welfare",
  },

  Bihar: {
    state: "Bihar",
    code: "BR",
    category: "Agriculture & Welfare",
    problemCount: 2,
    intensity: 73,
    description:
      "Agricultural dependency and welfare delivery create opportunities for data-driven intervention.",
    focus:
      "Farmer welfare · Agriculture · Disaster response",
  },

  Kerala: {
    state: "Kerala",
    code: "KL",
    category: "Climate & Disaster Intelligence",
    problemCount: 3,
    intensity: 75,
    description:
      "High exposure to extreme rainfall and landslide events creates demand for early warning systems.",
    focus:
      "Floods · Landslides · Urban resilience",
  },

  Odisha: {
    state: "Odisha",
    code: "OD",
    category: "Cyclone & Disaster Intelligence",
    problemCount: 3,
    intensity: 88,
    description:
      "Coastal exposure makes disaster forecasting and evacuation intelligence especially important.",
    focus:
      "Cyclones · Floods · Evacuation planning",
  },

  Punjab: {
    state: "Punjab",
    code: "PB",
    category: "Agriculture Intelligence",
    problemCount: 2,
    intensity: 67,
    description:
      "Agricultural productivity, water use and market behaviour provide important analytics opportunities.",
    focus:
      "Agriculture · Water · Market intelligence",
  },

  Haryana: {
    state: "Haryana",
    code: "HR",
    category: "Agriculture & Urban Systems",
    problemCount: 2,
    intensity: 69,
    description:
      "Agricultural systems and rapidly developing urban corridors create diverse analytical challenges.",
    focus:
      "Agriculture · Urbanization · Transport",
  },

  "Madhya Pradesh": {
    state: "Madhya Pradesh",
    code: "MP",
    category: "Agriculture & Infrastructure",
    problemCount: 2,
    intensity: 64,
    description:
      "Agriculture, transport connectivity and climate patterns offer opportunities for predictive systems.",
    focus:
      "Agriculture · Roads · Climate",
  },

  "Chhattisgarh": {
    state: "Chhattisgarh",
    code: "CG",
    category: "Industrial & Resource Intelligence",
    problemCount: 2,
    intensity: 65,
    description:
      "Industrial and resource-intensive regions require better predictive infrastructure intelligence.",
    focus:
      "Industry · Energy · Infrastructure",
  },
};

const defaultInsight: StateInsight = {
  state: "India",
  code: "IN",
  category: "National Intelligence",
  problemCount: 13,
  intensity: 100,
  description:
    "PARADOX connects data-driven challenges across India to encourage solutions for complex public problems.",
  focus:
    "Justice · Agriculture · Railways · Disaster · Finance · Energy",
};

const getIntensityLabel = (value: number) => {
  if (value >= 85) return "HIGH";
  if (value >= 70) return "MEDIUM";
  return "EMERGING";
};

export default function IndiaStateMap(
    { problemType }: IndiaStateMapProps
) {
  const [hoveredState, setHoveredState] =
    useState<string | null>(null);

  const [selectedState, setSelectedState] =
    useState<string | null>(null);

  /*
   * States that should initially have stronger visual
   * treatment.
   */
  const highlighted = useMemo(
    () => [
      "Tamil Nadu",
      "Maharashtra",
      "Karnataka",
      "Uttar Pradesh",
      "Odisha",
      "Gujarat",
    ],
    []
  );

  const activeState =
    selectedState ??
    hoveredState ??
    null;

  const activeInsight =
    activeState
      ? stateInsights[activeState] ?? {
          ...defaultInsight,
          state: activeState,
          code: activeState
            .slice(0, 2)
            .toUpperCase(),
          category: "Regional Intelligence",
          problemCount: 1,
          intensity: 55,
        }
      : defaultInsight;

  return (
    <div className="relative w-full">

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-cyan-300" />

            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-cyan-300">
              India Intelligence Grid
            </p>

          </div>

          <h3 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            PROBLEMS
            <span className="text-white/20">
              {" "}
              ACROSS INDIA.
            </span>
          </h3>

        </div>

        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
          {India.locations.length} STATES / UT REGIONS
        </div>

      </div>

      {/* =================================================
          MAIN MAP AREA
          ================================================= */}

      <div className="grid items-center gap-8 rounded-[2rem] border border-white/[0.07] bg-[#05090d]/80 p-5 backdrop-blur-xl md:p-8 lg:grid-cols-[1.25fr_0.75fr]">

        {/* MAP */}

        <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.04] bg-[#020609] md:min-h-[600px]">

          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* RADIAL GLOW */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[100px]" />

          <svg
            viewBox={India.viewBox}
            className="relative z-10 h-full w-full max-w-[650px] px-6 py-8 md:px-10"
            role="img"
            aria-label="Interactive map of India"
          >

            {India.locations.map(
              (location: IndiaLocation) => {

                const isHighlighted =
                  highlighted.includes(
                    location.name
                  );

                const isHovered =
                  hoveredState ===
                  location.name;

                const isSelected =
                  selectedState ===
                  location.name;

                const insight =
                  stateInsights[
                    location.name
                  ];

                const intensity =
                  insight?.intensity ?? 40;

                return (
                  <motion.path
                    key={location.id}
                    d={location.path}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity:
                        isSelected ||
                        isHovered
                          ? 1
                          : isHighlighted
                            ? 0.82
                            : 0.55,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    fill={
                      isSelected
                        ? "#63e6ff"
                        : isHovered
                          ? "#9ff5ff"
                          : isHighlighted
                            ? `rgba(99,230,255,${Math.max(
                                0.1,
                                intensity / 1000
                              )})`
                            : "rgba(255,255,255,0.025)"
                    }
                    stroke={
                      isSelected ||
                      isHovered
                        ? "#9ff5ff"
                        : isHighlighted
                          ? "rgba(99,230,255,0.55)"
                          : "rgba(255,255,255,0.12)"
                    }
                    strokeWidth={
                      isSelected
                        ? 1.8
                        : isHovered
                          ? 1.5
                          : 0.8
                    }
                    className="cursor-pointer outline-none transition-colors"
                    onMouseEnter={() =>
                      setHoveredState(
                        location.name
                      )
                    }
                    onMouseLeave={() =>
                      setHoveredState(null)
                    }
                    onClick={() =>
                      setSelectedState(
                        location.name
                      )
                    }
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (
                        event.key ===
                          "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();

                        setSelectedState(
                          location.name
                        );
                      }
                    }}
                  />
                );
              }
            )}

          </svg>

          {/* MAP LABEL */}

          <div className="pointer-events-none absolute bottom-5 left-5 font-mono text-[7px] uppercase tracking-[0.3em] text-white/15">
            SELECT A STATE
          </div>

          <div className="pointer-events-none absolute right-5 top-5 font-mono text-[7px] uppercase tracking-[0.3em] text-cyan-300/30">
            LIVE DATA GRID
          </div>

        </div>

        {/* =================================================
            STATE INFORMATION PANEL
            ================================================= */}

        <div className="relative min-h-[450px] rounded-[1.5rem] border border-white/[0.06] bg-white/[0.015] p-6 md:p-8">

          {/* TOP */}

          <div className="flex items-center justify-between">

            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
              State Intelligence
            </p>

            <span className="paradox-status font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300/60">
              {activeState
                ? "SELECTED"
                : "NATIONAL"}
            </span>

          </div>

          {/* STATE */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeInsight.state}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-12"
            >

              <p className="font-mono text-4xl font-black tracking-[-0.06em] text-cyan-300">
                {activeInsight.code}
              </p>

              <h4 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white">
                {activeInsight.state}
              </h4>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                {activeInsight.category}
              </p>

              <p className="mt-7 text-sm leading-7 text-white/35">
                {activeInsight.description}
              </p>

            </motion.div>

          </AnimatePresence>

          {/* METRICS */}

          <div className="mt-10 grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">

              <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                Problem Nodes
              </p>

              <p className="mt-3 text-2xl font-black text-white">
                {activeInsight.problemCount}
              </p>

            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">

              <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                Intensity
              </p>

              <p className="mt-3 text-2xl font-black text-cyan-300">
                {activeInsight.intensity}%
              </p>

            </div>

          </div>

          {/* INTENSITY BAR */}

          <div className="mt-8">

            <div className="flex items-center justify-between">

              <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                Challenge Intensity
              </p>

              <p className="font-mono text-[8px] text-cyan-300">
                {getIntensityLabel(
                  activeInsight.intensity
                )}
              </p>

            </div>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${activeInsight.intensity}%`,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="h-full rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(99,230,255,0.6)]"
              />

            </div>

          </div>

          {/* FOCUS */}

          <div className="mt-8 border-t border-white/[0.06] pt-6">

            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
              Intelligence Focus
            </p>

            <p className="mt-3 text-xs leading-6 text-white/35">
              {activeInsight.focus}
            </p>

          </div>

          {/* RESET */}

          {selectedState && (
            <button
              onClick={() =>
                setSelectedState(null)
              }
              className="mt-7 rounded-full border border-white/10 px-4 py-2 font-mono text-[7px] uppercase tracking-[0.25em] text-white/30 transition hover:border-cyan-300/30 hover:text-cyan-300"
            >
              Reset National View
            </button>
          )}

        </div>

      </div>

      {/* =================================================
          LEGEND
          ================================================= */}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.05] bg-[#05090d]/60 px-5 py-4">

        <div className="flex items-center gap-5">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-cyan-300" />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              High Priority
            </span>

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-cyan-300/50" />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              Emerging
            </span>

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-white/20" />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
              Regional
            </span>

          </div>

        </div>

        <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/15">
          DATA → INSIGHT → ACTION
        </p>

      </div>

    </div>
  );
}