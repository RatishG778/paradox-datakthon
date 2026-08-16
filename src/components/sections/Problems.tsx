"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import IndiaStateMap from "../maps/IndiaStateMap";
import { problems } from "../../lib/problems";
import IndiaMapExperience from "../maps/IndiaMapExperience";

export default function Problems() {
  const [active, setActive] = useState(0);

  const current = problems[active];

  return (
    <section
      id="problems"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 md:py-52"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-cyan-300" />

            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
              National Challenges
            </p>
          </div>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">
            THE PROBLEMS
            <br />

            <span className="text-white/25">
              ARE REAL.
            </span>
          </h2>

          <p className="mt-10 max-w-3xl text-base leading-8 text-white/40 md:text-lg">
            Thirteen real-world problem domains. One country.
            Your mission is to use data, AI and analytical thinking
            to uncover solutions that can create measurable impact.
          </p>
        </motion.div>

        {/* MAIN EXPLORER */}
        <div className="mt-20 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">

          {/* LEFT — PROBLEM LIST */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#05090d]">

            {/* LIST HEADER */}
            <div className="border-b border-white/10 px-6 py-5">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/25">
                    Problem Statements
                  </p>

                  <p className="mt-2 text-sm font-bold text-white/60">
                    Select your challenge
                  </p>
                </div>

                <span className="font-mono text-[9px] text-cyan-300/60">
                  {String(problems.length).padStart(2, "0")} CHALLENGES
                </span>

              </div>

            </div>

            {/* SCROLLABLE LIST */}
            <div className="max-h-[720px] overflow-y-auto">

              {problems.map((problem, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={problem.id}
                    onClick={() => setActive(index)}
                    className={`group relative flex w-full items-start gap-4 border-b border-white/[0.06] px-5 py-6 text-left transition duration-300 md:px-6 ${
                      isActive
                        ? "bg-cyan-300/[0.045]"
                        : "hover:bg-white/[0.025]"
                    }`}
                  >

                    {/* ACTIVE BAR */}
                    <motion.span
                      initial={false}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute left-0 top-0 h-full w-[2px] origin-top bg-cyan-300"
                    />

                    {/* NUMBER */}
                    <span
                      className={`mt-1 shrink-0 font-mono text-[10px] ${
                        isActive
                          ? "text-cyan-300"
                          : "text-white/20"
                      }`}
                    >
                      {problem.id}
                    </span>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">

                      <p
                        className={`text-[8px] font-bold uppercase tracking-[0.3em] ${
                          isActive
                            ? "text-cyan-300/70"
                            : "text-white/20"
                        }`}
                      >
                        {problem.ministry}
                      </p>

                      <h3
                        className={`mt-2 text-sm font-black leading-5 md:text-base ${
                          isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white/70"
                        }`}
                      >
                        {problem.title}
                      </h3>

                      <p
                        className={`mt-2 text-[10px] uppercase tracking-[0.2em] ${
                          isActive
                            ? "text-white/35"
                            : "text-white/15"
                        }`}
                      >
                        {problem.category}
                      </p>

                    </div>

                    {/* ARROW */}
                    <span
                      className={`mt-1 transition-all ${
                        isActive
                          ? "translate-x-1 text-cyan-300"
                          : "text-white/10"
                      }`}
                    >
                      →
                    </span>

                  </button>
                );
              })}

            </div>

            {/* LIST FOOTER */}
            <div className="border-t border-white/10 px-6 py-5">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_#5ee7ff]" />

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                  Select a problem to investigate
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT — VISUAL + DETAILS */}
          <div className="min-w-0">

            <AnimatePresence mode="wait">

              <motion.div
                key={current.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* INDIA VISUAL */}
                <div className="relative h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#02060a] md:h-[500px]">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,231,255,0.08),transparent_55%)]" />

                  <div className="absolute inset-0">

                    <IndiaMapExperience
                      problemType={current.visualType}
                    />

                  </div>

                  {/* TOP INFORMATION */}
                  <div className="absolute left-6 top-6 z-10">

                    <p className="font-mono text-[8px] uppercase tracking-[0.35em] text-white/25">
                      INDIA / IMPACT NETWORK
                    </p>

                    <p className="mt-2 text-xs font-bold text-cyan-300">
                      {current.category}
                    </p>

                  </div>

                  {/* PROBLEM NUMBER */}
                  <div className="absolute right-6 top-6 z-10 text-right">

                    <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
                      Challenge
                    </p>

                    <p className="mt-1 text-2xl font-black text-white/60">
                      {current.id}
                    </p>

                  </div>

                  {/* BOTTOM STATUS */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">

                    <div>

                      <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                        Active Domain
                      </p>

                      <p className="mt-2 text-sm font-bold text-white/60">
                        {current.visualType.toUpperCase()}
                      </p>

                    </div>

                    <div className="flex items-center gap-2">

                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_#5ee7ff]" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                        ANALYSIS READY
                      </span>

                    </div>

                  </div>

                </div>

                {/* DETAIL CARD */}
                <div className="mt-5 rounded-[2rem] border border-white/10 bg-[#05090d] p-7 md:p-10">

                  {/* MINISTRY */}
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-300">
                    {current.ministry}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-5 text-3xl font-black leading-[0.95] tracking-tight text-white md:text-5xl">
                    {current.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-7 max-w-4xl text-sm leading-7 text-white/45 md:text-base">
                    {current.description}
                  </p>

                  {/* DATASETS */}
                  <div className="mt-10">

                    <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20">
                      Suggested Data Domains
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {current.datasets.map(
                        (dataset, index) => (
                          <motion.span
                            key={dataset}
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: index * 0.06,
                              duration: 0.35,
                            }}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40"
                          >
                            {dataset}
                          </motion.span>
                        )
                      )}

                    </div>

                  </div>

                  {/* INVESTIGATION FLOW */}
                  <div className="mt-10 border-t border-white/10 pt-7">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                        DATA
                      </span>

                      <span className="text-white/15">
                        →
                      </span>

                      <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/40">
                        AI / ANALYTICS
                      </span>

                      <span className="text-white/15">
                        →
                      </span>

                      <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/40">
                        INSIGHT
                      </span>

                      <span className="text-white/15">
                        →
                      </span>

                      <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/40">
                        IMPACT
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-12 flex gap-3"
        >
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="max-w-4xl text-xs leading-6 text-white/20">
            Problem statements and associated data sources are presented
            according to the event brief. Participants should use only
            datasets and resources permitted by the official competition
            guidelines.
          </p>
        </motion.div>

      </div>
    </section>
  );
}