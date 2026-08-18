"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { problems } from "../../lib/problems";
import IndiaMapExperience from "../maps/IndiaMapExperience";

export default function Problems() {
  const [active, setActive] = useState(0);

  const current = problems[active];

  return (
    <section
      id="problems"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        border-t
        border-white/[0.06]
        px-4
        pb-16
        pt-28
        sm:px-6
        sm:pt-32
        md:px-8
        md:pb-20
        md:pt-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/[0.025] blur-[140px]" />
      </div>

      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px]">

        {/* ===================================================
            HEADER
        ==================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-300 sm:w-10" />

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.5em] text-cyan-300 sm:text-[9px]">
              India Intelligence Grid
            </p>
          </div>

          <div className="mt-5 flex items-end justify-between gap-6">
            <h2
              className="
                max-w-[950px]
                text-[clamp(3rem,7vw,7rem)]
                font-black
                leading-[0.82]
                tracking-[-0.07em]
                text-white
              "
            >
              PROBLEMS{" "}
              <span className="text-white/25">
                ACROSS INDIA.
              </span>
            </h2>

            <div className="hidden shrink-0 text-right md:block">
              <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30">
                {String(problems.length).padStart(2, "0")}
              </p>

              <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                Challenges
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
            Real-world challenges across India. Select a problem,
            investigate its regional context and identify the
            data that can transform the problem into measurable
            impact.
          </p>
        </motion.div>

        {/* ===================================================
            SINGLE CONTROLLED EXPERIENCE BOX
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/[0.09]
            bg-[#03080c]
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            md:mt-12
            md:rounded-[2rem]
          "
        >

          {/* =================================================
              TOP EXPERIENCE BAR
          ================================================== */}

          <div
            className="
              relative
              z-20
              flex
              min-h-[58px]
              items-center
              justify-between
              gap-4
              border-b
              border-white/[0.07]
              bg-[#05090d]/95
              px-4
              sm:px-6
              md:min-h-[64px]
              md:px-7
            "
          >
            <div className="min-w-0">
              <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30">
                India / Impact Network
              </p>

              <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-300 sm:text-xs">
                {current.category}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">

              <div className="hidden text-right sm:block">
                <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                  Challenge
                </p>

                <p className="mt-0.5 font-mono text-sm font-bold text-white/70">
                  {current.id}
                </p>
              </div>

              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />

            </div>
          </div>

          {/* =================================================
              MAIN EXPERIENCE
          ================================================== */}

          <div
            className="
              grid
              min-w-0
              lg:grid-cols-[260px_minmax(0,1fr)]
              xl:grid-cols-[300px_minmax(0,1fr)]
            "
          >

            {/* =================================================
                PROBLEM SELECTOR
            ================================================== */}

            <aside
              className="
                hidden
                border-r
                border-white/[0.07]
                bg-[#05090d]
                lg:block
              "
            >
              <div className="border-b border-white/[0.07] px-5 py-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30">
                  Problem Statements
                </p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="text-xs font-bold text-white/60">
                    Select challenge
                  </p>

                  <span className="font-mono text-[7px] text-cyan-300/60">
                    {String(problems.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="max-h-[560px] overflow-y-auto">
                {problems.map((problem, index) => {
                  const isActive = active === index;

                  return (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`
                        group
                        relative
                        flex
                        w-full
                        items-start
                        gap-3
                        border-b
                        border-white/[0.05]
                        px-5
                        py-4
                        text-left
                        transition
                        duration-300
                        ${
                          isActive
                            ? "bg-cyan-300/[0.045]"
                            : "hover:bg-white/[0.025]"
                        }
                      `}
                    >
                      <span
                        className={`
                          absolute
                          left-0
                          top-0
                          h-full
                          w-[2px]
                          transition
                          ${
                            isActive
                              ? "bg-cyan-300"
                              : "bg-transparent"
                          }
                        `}
                      />

                      <span
                        className={`
                          mt-0.5
                          shrink-0
                          font-mono
                          text-[8px]
                          ${
                            isActive
                              ? "text-cyan-300"
                              : "text-white/20"
                          }
                        `}
                      >
                        {problem.id}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`
                            truncate
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            ${
                              isActive
                                ? "text-cyan-300/70"
                                : "text-white/20"
                            }
                          `}
                        >
                          {problem.ministry}
                        </p>

                        <p
                          className={`
                            mt-1
                            text-[11px]
                            font-bold
                            leading-4
                            ${
                              isActive
                                ? "text-white"
                                : "text-white/40"
                            }
                          `}
                        >
                          {problem.title}
                        </p>
                      </div>

                      <span
                        className={`
                          mt-0.5
                          text-xs
                          transition
                          ${
                            isActive
                              ? "translate-x-1 text-cyan-300"
                              : "text-white/10"
                          }
                        `}
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />

                  <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/25">
                    Select to investigate
                  </p>
                </div>
              </div>
            </aside>

            {/* =================================================
                VISUAL AREA
            ================================================== */}

            <div className="min-w-0">

              {/* MOBILE PROBLEM SELECTOR */}

              <div className="border-b border-white/[0.07] bg-[#05090d] p-3 lg:hidden">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {problems.map((problem, index) => {
                    const isActive = active === index;

                    return (
                      <button
                        key={problem.id}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`
                          shrink-0
                          rounded-full
                          border
                          px-3
                          py-2
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.18em]
                          transition
                          ${
                            isActive
                              ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-300"
                              : "border-white/10 text-white/35"
                          }
                        `}
                      >
                        {problem.id}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="min-w-0"
                >

                  {/* INDIA EXPERIENCE */}

                  <div className="min-w-0">
                    <IndiaMapExperience
                      problemType={current.visualType}
                    />
                  </div>

                  {/* =================================================
                      ACTIVE DOMAIN
                  ================================================== */}

                  <div className="border-t border-white/[0.07] bg-[#05090d] px-4 py-4 sm:px-6 md:px-7">

                    <div className="flex items-center justify-between gap-4">

                      <div className="min-w-0">
                        <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/30">
                          Active Domain
                        </p>

                        <p className="mt-1 truncate text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm">
                          {current.visualType}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />

                        <span className="hidden font-mono text-[7px] uppercase tracking-[0.25em] text-white/30 sm:block">
                          Analysis Ready
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      PROBLEM DETAILS
                  ================================================== */}

                  <div className="border-t border-white/[0.07] bg-[#03080c] px-5 py-7 sm:px-7 md:px-9">

                    <p className="font-mono text-[7px] font-bold uppercase tracking-[0.35em] text-cyan-300">
                      {current.ministry}
                    </p>

                    <h3 className="mt-3 max-w-4xl text-2xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
                      {current.title}
                    </h3>

                    <p className="mt-5 max-w-4xl text-xs leading-6 text-white/45 sm:text-sm sm:leading-7">
                      {current.description}
                    </p>

                    {/* DATASETS */}

                    <div className="mt-7">
                      <p className="font-mono text-[7px] font-bold uppercase tracking-[0.3em] text-white/25">
                        Suggested Data Domains
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {current.datasets.map(
                          (dataset, index) => (
                            <motion.span
                              key={dataset}
                              initial={{
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay:
                                  index * 0.04,
                                duration: 0.25,
                              }}
                              className="
                                rounded-full
                                border
                                border-white/10
                                bg-white/[0.025]
                                px-3
                                py-1.5
                                font-mono
                                text-[7px]
                                uppercase
                                tracking-[0.15em]
                                text-white/40
                              "
                            >
                              {dataset}
                            </motion.span>
                          )
                        )}
                      </div>
                    </div>

                    {/* FLOW */}

                    <div className="mt-7 border-t border-white/[0.07] pt-5">

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                          DATA
                        </span>

                        <span className="text-white/15">
                          →
                        </span>

                        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-white/35">
                          AI / ANALYTICS
                        </span>

                        <span className="text-white/15">
                          →
                        </span>

                        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-white/35">
                          INSIGHT
                        </span>

                        <span className="text-white/15">
                          →
                        </span>

                        <span className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-white/35">
                          IMPACT
                        </span>

                      </div>

                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="border-t border-white/[0.07] px-5 py-4 sm:px-6 md:px-7">

            <div className="flex items-center justify-between gap-4">

              <p className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/20 sm:text-[7px]">
                Problem statements according to event brief
              </p>

              <p className="hidden font-mono text-[6px] uppercase tracking-[0.25em] text-white/15 sm:block">
                DATA → INSIGHT → IMPACT
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}