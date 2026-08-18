"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import India from "@svg-maps/india";

interface IndiaStateMapProps {
  problemType?: string;
}

interface IndiaLocation {
  id: string;
  name: string;
  path: string;
}

interface StateInsight {
  state: string;
  code: string;
  category: string;
  problemCount: number;
  intensity: number;
  description: string;
  focus: string;
}

/* =========================================================
   STATE INTELLIGENCE
========================================================= */

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

  Chhattisgarh: {
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

/* =========================================================
   HELPERS
========================================================= */

function getIntensityLabel(value: number) {
  if (value >= 85) return "HIGH";
  if (value >= 70) return "MEDIUM";
  return "EMERGING";
}

function getFill(
  location: string,
  highlighted: boolean,
  hovered: boolean,
  selected: boolean
) {
  if (selected) return "#67e8f9";
  if (hovered) return "#a5f3fc";

  if (highlighted) {
    const intensity =
      stateInsights[location]?.intensity ?? 50;

    const opacity =
      0.26 + (intensity / 100) * 0.28;

    return `rgba(38,190,214,${opacity})`;
  }

  return "rgba(255,255,255,0.11)";
}

/* =========================================================
   COMPONENT
========================================================= */

export default function IndiaStateMap({
  problemType,
}: IndiaStateMapProps) {
  const [hoveredState, setHoveredState] =
    useState<string | null>(null);

  const [selectedState, setSelectedState] =
    useState<string | null>(null);

  const highlighted = useMemo(
    () =>
      new Set([
        "Tamil Nadu",
        "Maharashtra",
        "Karnataka",
        "Uttar Pradesh",
        "Odisha",
        "Gujarat",
      ]),
    []
  );

  const activeState =
    selectedState ?? hoveredState;

  const activeInsight =
    activeState && stateInsights[activeState]
      ? stateInsights[activeState]
      : defaultInsight;

  return (
    <div className="relative w-full">

      {/* =====================================================
          COMPACT HEADER
      ====================================================== */}

      <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-4 py-4 sm:px-6 md:px-7">

        <div className="flex min-w-0 items-center gap-3">
          <span className="h-px w-6 shrink-0 bg-cyan-300" />

          <p className="truncate font-mono text-[7px] uppercase tracking-[0.35em] text-cyan-300">
            India Intelligence Grid
          </p>
        </div>

        <p className="hidden shrink-0 font-mono text-[7px] uppercase tracking-[0.25em] text-white/25 sm:block">
          36 STATES / UT
        </p>

      </div>

      {/* =====================================================
          MAP + INTELLIGENCE
      ====================================================== */}

      <div
        className="
          grid
          min-w-0
          lg:grid-cols-[minmax(0,1.2fr)_minmax(270px,0.65fr)]
        "
      >

        {/* ===================================================
            MAP
        ==================================================== */}

        <div
          className="
            relative
            flex
            min-w-0
            items-center
            justify-center
            overflow-hidden
            border-b
            border-white/[0.07]
            bg-[#020608]
            px-3
            py-6
            sm:px-6
            sm:py-7
            lg:border-b-0
            lg:border-r
            lg:px-7
            lg:py-8
          "
        >

          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* GLOW */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.04] blur-[90px] sm:h-[340px] sm:w-[270px]" />

          {/* SVG */}

          <div className="relative z-10 w-full max-w-[390px] sm:max-w-[440px] md:max-w-[470px] lg:max-w-[500px]">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={India.viewBox}
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Interactive map of India"
              className="block h-auto w-full"
            >
              {India.locations.map(
                (location: IndiaLocation) => {
                  const isSelected =
                    selectedState ===
                    location.name;

                  const isHovered =
                    hoveredState ===
                    location.name;

                  const isHighlighted =
                    highlighted.has(
                      location.name
                    );

                  return (
                    <path
                      key={location.id}
                      d={location.path}
                      fill={getFill(
                        location.name,
                        isHighlighted,
                        isHovered,
                        isSelected
                      )}
                      stroke={
                        isSelected
                          ? "#ffffff"
                          : isHovered
                            ? "#67e8f9"
                            : isHighlighted
                              ? "rgba(103,232,249,0.9)"
                              : "rgba(180,210,218,0.6)"
                      }
                      strokeWidth={
                        isSelected
                          ? 1.8
                          : isHovered
                            ? 1.4
                            : 0.75
                      }
                      vectorEffect="non-scaling-stroke"
                      className="cursor-pointer outline-none"
                      style={{
                        transition:
                          "fill 180ms ease, stroke 180ms ease",
                      }}
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
                      tabIndex={0}
                      aria-label={`Select ${location.name}`}
                    />
                  );
                }
              )}
            </svg>

          </div>

          {/* LIVE INDICATOR */}

          <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-lg border border-white/[0.08] bg-black/60 px-3 py-2 backdrop-blur-md">

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />

              <span className="font-mono text-[6px] uppercase tracking-[0.28em] text-cyan-300/75">
                Live Data Grid
              </span>

            </div>

          </div>

          {/* STATE LABEL */}

          <div className="pointer-events-none absolute bottom-4 left-4 z-20 rounded-md border border-white/[0.07] bg-black/60 px-3 py-2 backdrop-blur-md">

            <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/40">
              {activeState ??
                "Select a state"}
            </p>

          </div>

        </div>

        {/* ===================================================
            INTELLIGENCE
        ==================================================== */}

        <div className="min-w-0 bg-[#05090d] p-5 sm:p-6 md:p-7">

          <div className="flex items-center justify-between gap-4">

            <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/35">
              State Intelligence
            </p>

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-cyan-300/75">
              {activeState
                ? "Selected"
                : "National"}
            </span>

          </div>

          <div className="mt-6">

            <p className="font-mono text-3xl font-black tracking-[-0.05em] text-cyan-300 sm:text-4xl">
              {activeInsight.code}
            </p>

            <h4 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
              {activeInsight.state}
            </h4>

            <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.25em] text-white/45">
              {activeInsight.category}
            </p>

            <p className="mt-5 text-xs leading-6 text-white/55">
              {activeInsight.description}
            </p>

          </div>

          {/* METRICS */}

          <div className="mt-6 grid grid-cols-2 gap-2">

            <div className="rounded-xl border border-white/[0.08] bg-black/25 p-3">

              <p className="font-mono text-[6px] uppercase tracking-[0.2em] text-white/35">
                Problem Nodes
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                {activeInsight.problemCount}
              </p>

            </div>

            <div className="rounded-xl border border-cyan-300/[0.10] bg-cyan-300/[0.025] p-3">

              <p className="font-mono text-[6px] uppercase tracking-[0.2em] text-white/35">
                Intensity
              </p>

              <p className="mt-2 text-2xl font-black text-cyan-300">
                {activeInsight.intensity}%
              </p>

            </div>

          </div>

          {/* INTENSITY */}

          <div className="mt-6">

            <div className="flex items-center justify-between">

              <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/35">
                Challenge Intensity
              </p>

              <p className="font-mono text-[6px] font-bold text-cyan-300">
                {getIntensityLabel(
                  activeInsight.intensity
                )}
              </p>

            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${activeInsight.intensity}%`,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="h-full rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.65)]"
              />

            </div>

          </div>

          {/* FOCUS */}

          <div className="mt-6 border-t border-white/[0.07] pt-5">

            <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/35">
              Intelligence Focus
            </p>

            <p className="mt-2 text-[11px] leading-5 text-white/50">
              {activeInsight.focus}
            </p>

          </div>

          {/* PROBLEM TYPE */}

          {problemType && (
            <div className="mt-5 rounded-lg border border-cyan-300/[0.08] bg-cyan-300/[0.02] p-3">

              <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-cyan-300/55">
                Active Domain
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
                {problemType}
              </p>

            </div>
          )}

          {/* RESET */}

          {selectedState && (
            <button
              type="button"
              onClick={() =>
                setSelectedState(null)
              }
              className="
                mt-5
                rounded-full
                border
                border-white/10
                px-3
                py-1.5
                font-mono
                text-[6px]
                uppercase
                tracking-[0.25em]
                text-white/40
                transition
                hover:border-cyan-300/30
                hover:text-cyan-300
              "
            >
              Reset National View
            </button>
          )}

        </div>

      </div>

      {/* =====================================================
          MOBILE / BOTTOM LEGEND
      ====================================================== */}

      <div className="flex items-center justify-between gap-4 border-t border-white/[0.07] bg-[#05090d] px-4 py-3 sm:px-6 md:px-7">

        <div className="flex items-center gap-4">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

            <span className="font-mono text-[6px] uppercase tracking-[0.2em] text-white/30">
              Priority
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

            <span className="font-mono text-[6px] uppercase tracking-[0.2em] text-white/30">
              Regional
            </span>
          </div>

        </div>

        <p className="font-mono text-[6px] uppercase tracking-[0.2em] text-white/20">
          Data → Insight → Action
        </p>

      </div>

    </div>
  );
}