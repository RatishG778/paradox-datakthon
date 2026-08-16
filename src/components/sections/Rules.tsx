"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const rules = [
  {
    id: "01",
    code: "ELIGIBILITY",
    title: "WHO CAN ENTER?",
    description:
      "Participation eligibility should follow the official DataKthon guidelines issued by the college and organizing committee.",
    points: [
      "Participants must satisfy the official eligibility criteria.",
      "All required registration details must be submitted.",
      "Participants should follow the competition instructions.",
    ],
  },
  {
    id: "02",
    code: "TEAM",
    title: "BUILD YOUR TEAM",
    description:
      "Teams should be formed according to the official team-size and participation requirements.",
    points: [
      "Follow the permitted team size.",
      "Each participant should be registered correctly.",
      "Team members should clearly define their responsibilities.",
    ],
  },
  {
    id: "03",
    code: "DATA",
    title: "USE DATA RESPONSIBLY",
    description:
      "Data is the foundation of the competition. Teams must respect dataset licenses, privacy requirements and competition restrictions.",
    points: [
      "Use only permitted datasets and resources.",
      "Respect data licenses and attribution requirements.",
      "Do not expose sensitive or private information.",
    ],
  },
  {
    id: "04",
    code: "SUBMISSION",
    title: "DELIVER YOUR SOLUTION",
    description:
      "Every team must submit the required solution artifacts before the official deadline.",
    points: [
      "Follow the prescribed submission format.",
      "Submit before the official deadline.",
      "Ensure the project can be evaluated by the jury.",
    ],
  },
  {
    id: "05",
    code: "EVALUATION",
    title: "HOW YOU WILL BE JUDGED",
    description:
      "Solutions will be evaluated using the criteria announced by the organizing committee.",
    points: [
      "Problem understanding",
      "Data and analytical methodology",
      "Innovation and technical implementation",
      "Practical impact and presentation",
    ],
  },
  {
    id: "06",
    code: "CONDUCT",
    title: "PLAY WITH INTEGRITY",
    description:
      "A strong competition depends on responsible collaboration, originality and professional conduct.",
    points: [
      "Submit original work.",
      "Respect other participants and organizers.",
      "Follow all competition and institutional policies.",
    ],
  },
];

export default function Rules() {
  const [active, setActive] = useState(0);

  const current = rules[active];

  return (
    <section
      id="rules"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 md:py-52"
    >
      {/* BACKGROUND GRID */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* GLOW */}

      <div className="pointer-events-none absolute right-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-300/[0.025] blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
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
              Mission Protocol
            </p>

          </div>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">

            KNOW
            <br />

            <span className="text-white/25">
              THE RULES.
            </span>

          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Great solutions need great execution. Understand the
            protocol before you enter the challenge.
          </p>

        </motion.div>

        {/* RULE SYSTEM */}

        <div className="mt-20 grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">

          {/* LEFT NAVIGATION */}

          <div className="rounded-[2rem] border border-white/10 bg-[#05090d]">

            <div className="border-b border-white/10 px-6 py-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/25">
                    Protocol
                  </p>

                  <p className="mt-2 text-sm font-bold text-white/60">
                    Six principles
                  </p>

                </div>

                <span className="font-mono text-[9px] text-cyan-300/60">
                  06 RULES
                </span>

              </div>

            </div>

            <div>

              {rules.map((rule, index) => {

                const isActive =
                  active === index;

                return (
                  <button
                    key={rule.id}
                    onClick={() =>
                      setActive(index)
                    }
                    className={`group relative flex w-full items-center gap-4 border-b border-white/[0.06] px-6 py-6 text-left transition ${
                      isActive
                        ? "bg-cyan-300/[0.04]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >

                    {/* ACTIVE LINE */}

                    <motion.span
                      initial={false}
                      animate={{
                        scaleY: isActive
                          ? 1
                          : 0,
                      }}
                      className="absolute left-0 top-0 h-full w-[2px] origin-top bg-cyan-300"
                    />

                    {/* NUMBER */}

                    <span
                      className={`font-mono text-[10px] ${
                        isActive
                          ? "text-cyan-300"
                          : "text-white/20"
                      }`}
                    >
                      {rule.id}
                    </span>

                    {/* TITLE */}

                    <span
                      className={`flex-1 text-xs font-bold uppercase tracking-[0.2em] ${
                        isActive
                          ? "text-white"
                          : "text-white/35 group-hover:text-white/60"
                      }`}
                    >
                      {rule.code}
                    </span>

                    <span
                      className={`transition ${
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

          </div>

          {/* DETAIL PANEL */}

          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#05090d] p-8 md:p-12">

            {/* GRID */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* LARGE NUMBER */}

            <div className="pointer-events-none absolute right-8 top-5 font-mono text-[120px] font-black leading-none text-white/[0.025] md:text-[180px]">
              {current.id}
            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={current.id}
                initial={{
                  opacity: 0,
                  y: 25,
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
                className="relative flex min-h-[480px] flex-col"
              >

                {/* TOP */}

                <div className="flex items-center justify-between">

                  <div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cyan-300">
                      Protocol {current.id}
                    </p>

                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
                      {current.code}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="font-mono text-[8px] text-white/20">
                      {String(active + 1).padStart(2, "0")}
                      {" / "}
                      {String(rules.length).padStart(2, "0")}
                    </p>

                  </div>

                </div>

                {/* TITLE */}

                <div className="mt-20">

                  <h3 className="max-w-3xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.06em] text-white">
                    {current.title}
                  </h3>

                  <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
                    {current.description}
                  </p>

                </div>

                {/* POINTS */}

                <div className="mt-12">

                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20">
                    Requirements
                  </p>

                  <div className="mt-5 space-y-3">

                    {current.points.map(
                      (point, index) => (
                        <motion.div
                          key={point}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              index * 0.08,
                            duration: 0.4,
                          }}
                          className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-4"
                        >

                          <span className="mt-1 font-mono text-[8px] text-cyan-300">
                            0{index + 1}
                          </span>

                          <p className="text-xs leading-5 text-white/45">
                            {point}
                          </p>

                        </motion.div>
                      )
                    )}

                  </div>

                </div>

                {/* FOOTER */}

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-7">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_#5ee7ff]" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
                      Protocol Active
                    </span>

                  </div>

                  <span className="font-mono text-[9px] text-white/15">
                    PARADOX / RULES
                  </span>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

        {/* IMPORTANT NOTE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mt-10 flex gap-3"
        >

          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="max-w-4xl text-xs leading-6 text-white/20">
            The final eligibility, team-size, submission,
            evaluation and conduct rules must be updated with
            the official guidelines released by your college.
          </p>

        </motion.div>

      </div>
    </section>
  );
}