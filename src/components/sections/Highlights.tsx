"use client";

import { useState } from "react";

const highlights = [
  {
    number: "01",
    title: "REAL DATA",
    description:
      "Work with meaningful datasets and learn to separate useful signals from noise.",
    metric: "DATA",
    detail: "Explore",
  },
  {
    number: "02",
    title: "REAL PROBLEMS",
    description:
      "Investigate challenges connected to real-world situations instead of artificial exercises.",
    metric: "PROBLEM",
    detail: "Question",
  },
  {
    number: "03",
    title: "REAL SKILLS",
    description:
      "Strengthen analytical thinking, visualization, storytelling and problem-solving.",
    metric: "SKILL",
    detail: "Build",
  },
  {
    number: "04",
    title: "REAL RECOGNITION",
    description:
      "Present your thinking, compete with other teams and earn recognition for your work.",
    metric: "IMPACT",
    detail: "Present",
  },
];

export default function Highlights() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden px-6 py-40 md:py-52">
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300" />

              <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
                Why Participate?
              </p>
            </div>

            <h2 className="mt-8 max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.85] tracking-[-0.07em]">
              MORE THAN
              <br />
              <span className="text-white/25">A COMPETITION.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35 md:pb-2">
            PARADOX is designed to turn data analysis into a practical
            experience — from discovering a problem to communicating an
            insight.
          </p>

        </div>

        {/* FEATURE GRID */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">

          {highlights.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.number}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border p-8 text-left transition-all duration-500 md:p-10 ${
                  isActive
                    ? "border-cyan-300/30 bg-cyan-300/[0.035]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >

                {/* Background grid */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${
                    isActive ? "opacity-[0.06]" : ""
                  }`}
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/[0.06] blur-3xl transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Number */}
                <div className="relative flex items-start justify-between">

                  <span
                    className={`font-mono text-xs transition ${
                      isActive
                        ? "text-cyan-300"
                        : "text-white/25"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-500 ${
                      isActive
                        ? "rotate-45 border-cyan-300/50 text-cyan-300"
                        : "border-white/10 text-white/25"
                    }`}
                  >
                    ↗
                  </span>

                </div>

                {/* Main content */}
                <div className="relative mt-24">

                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.4em] transition ${
                      isActive
                        ? "text-cyan-300/80"
                        : "text-white/25"
                    }`}
                  >
                    {item.metric}
                  </p>

                  <h3
                    className={`mt-4 text-3xl font-black tracking-tight transition md:text-4xl ${
                      isActive
                        ? "text-white"
                        : "text-white/65"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-md text-sm leading-7 transition ${
                      isActive
                        ? "text-white/55"
                        : "text-white/30"
                    }`}
                  >
                    {item.description}
                  </p>

                </div>

                {/* Bottom progress */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-white/5">

                  <div
                    className={`h-full bg-cyan-300 transition-all duration-700 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />

                </div>

              </button>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">

          <p className="max-w-xl text-lg text-white/40">
            Learn to think beyond the dashboard.
            <span className="text-white/70">
              {" "}Find the story behind the numbers.
            </span>
          </p>

          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/20">
            PARADOX / EXPERIENCE / 2026
          </div>

        </div>

      </div>
    </section>
  );
}