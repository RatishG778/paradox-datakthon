"use client";

import { useState } from "react";

const stages = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand the problem, the context and the data before making assumptions.",
    visual: "QUESTION",
  },
  {
    number: "02",
    title: "ANALYZE",
    description:
      "Clean, explore and investigate the data to uncover meaningful patterns.",
    visual: "PATTERN",
  },
  {
    number: "03",
    title: "QUESTION",
    description:
      "Challenge what the numbers appear to say. Look for what does not add up.",
    visual: "WHY?",
  },
  {
    number: "04",
    title: "SOLVE",
    description:
      "Transform insights into practical, measurable and meaningful solutions.",
    visual: "INSIGHT",
  },
  {
    number: "05",
    title: "PRESENT",
    description:
      "Tell the story behind your analysis and convince others with evidence.",
    visual: "IMPACT",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  const current = stages[active];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 md:py-52"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">

          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300" />

              <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
                About The Event
              </p>
            </div>

            <h2 className="mt-8 text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.85] tracking-[-0.07em]">
              WHAT IS
              <br />
              <span className="text-white/30">PARADOX?</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-lg leading-8 text-white/50 md:text-xl">
              PARADOX is a data-driven competition where students explore
              real-world problems, question patterns, uncover hidden insights
              and transform data into meaningful solutions.
            </p>

            <p className="mt-6 text-sm leading-7 text-white/30">
              The goal is not simply to produce charts. The goal is to
              understand what the data is trying to tell you.
            </p>
          </div>

        </div>

        {/* JOURNEY */}
        <div className="mt-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* STAGE LIST */}
          <div className="border-t border-white/10">

            {stages.map((stage, index) => {
              const isActive = index === active;

              return (
                <button
                  key={stage.number}
                  onClick={() => setActive(index)}
                  className={`group flex w-full items-center gap-6 border-b border-white/10 py-7 text-left transition ${
                    isActive ? "bg-white/[0.025]" : ""
                  }`}
                >
                  <span
                    className={`text-xs font-bold transition ${
                      isActive
                        ? "text-cyan-300"
                        : "text-white/25 group-hover:text-white/60"
                    }`}
                  >
                    {stage.number}
                  </span>

                  <span
                    className={`text-2xl font-black tracking-tight transition md:text-3xl ${
                      isActive
                        ? "translate-x-2 text-white"
                        : "text-white/35 group-hover:text-white/70"
                    }`}
                  >
                    {stage.title}
                  </span>

                  <span
                    className={`ml-auto text-lg transition ${
                      isActive
                        ? "text-cyan-300"
                        : "text-white/20"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}

          </div>

          {/* VISUAL PANEL */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#05090d]">

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.06] blur-3xl" />

            {/* Decorative circles */}
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">

              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-300">
                {current.number}
              </span>

              <span className="mt-5 text-5xl font-black tracking-[-0.05em] md:text-7xl">
                {current.visual}
              </span>

              <span className="mt-5 max-w-xs text-sm leading-6 text-white/40">
                {current.description}
              </span>

            </div>

            {/* Coordinates */}
            <span className="absolute left-6 top-6 font-mono text-[9px] text-white/20">
              DATA.NODE / {current.number}
            </span>

            <span className="absolute bottom-6 right-6 font-mono text-[9px] text-white/20">
              PARADOX_SYS
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}