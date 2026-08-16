"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    label: "SALES",
    value: "+42.8%",
    numericValue: 42.8,
    direction: "UP",
    width: "86%",
  },
  {
    label: "CUSTOMERS",
    value: "+31.6%",
    numericValue: 31.6,
    direction: "UP",
    width: "72%",
  },
  {
    label: "REVENUE",
    value: "+38.2%",
    numericValue: 38.2,
    direction: "UP",
    width: "80%",
  },
  {
    label: "PROFIT",
    value: "-17.4%",
    numericValue: -17.4,
    direction: "DOWN",
    width: "38%",
  },
];

export default function Paradox() {
  const [revealed, setRevealed] = useState(false);
  const [showContradiction, setShowContradiction] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!revealed) return;

    const timer = setTimeout(() => {
      setShowContradiction(true);
    }, 1700);

    return () => clearTimeout(timer);
  }, [revealed]);

  return (
    <section
      id="paradox"
      className="relative overflow-hidden border-y border-white/[0.06] px-6 py-40 md:py-56"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-cyan-300/60" />

            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
              The Investigation
            </p>

            <span className="h-px w-10 bg-cyan-300/60" />

          </div>

          <h2 className="mt-8 text-[clamp(3rem,7vw,7rem)] font-black leading-[0.85] tracking-[-0.07em]">
            THE
            <br />
            <span className="text-white/25">
              PARADOX.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            Data can tell you what happened.
            Analysis begins when you ask why.
          </p>
        </motion.div>

        {/* DATA PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-24 max-w-5xl rounded-[2rem] border border-white/10 bg-[#05090d]/90 p-6 backdrop-blur-xl md:p-12"
        >

          {/* PANEL HEADER */}
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5">

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/25">
                DATASET / 2026-01
              </p>

              <p className="mt-2 text-sm font-bold text-white/70">
                Business Performance
              </p>
            </div>

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_#5ee7ff]" />

              <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                LIVE ANALYSIS
              </span>

            </div>

          </div>

          {/* METRICS */}
          <div className="space-y-9">

            {metrics.map((metric, index) => (
              <div key={metric.label}>

                {/* LABEL */}
                <div className="mb-3 flex items-end justify-between">

                  <div className="flex items-center gap-4">

                    <span className="font-mono text-[9px] text-white/20">
                      0{index + 1}
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/55">
                      {metric.label}
                    </span>

                  </div>

                  <motion.span
                    initial={{ opacity: 0, x: 15 }}
                    animate={
                      revealed
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      delay: index * 0.25,
                      duration: 0.5,
                    }}
                    className={`font-mono text-sm font-bold ${
                      metric.direction === "DOWN"
                        ? "text-red-300"
                        : "text-cyan-300"
                    }`}
                  >
                    {metric.value}
                  </motion.span>

                </div>

                {/* BAR */}
                <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.04]">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={
                      revealed
                        ? {
                            width: metric.width,
                          }
                        : {
                            width: 0,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      delay: index * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`h-full rounded-full ${
                      metric.direction === "DOWN"
                        ? "bg-red-300/70"
                        : "bg-cyan-300/70"
                    }`}
                  />

                </div>

              </div>
            ))}

          </div>

          {/* CONTRADICTION */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              showContradiction
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2"
          >

            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                Surface-Level Reading
              </p>

              <p className="mt-3 text-lg font-bold text-white/70">
                Business appears to be growing.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">

              <p className="text-[9px] uppercase tracking-[0.35em] text-red-300/70">
                What We Notice
              </p>

              <p className="mt-3 text-lg font-bold text-red-200">
                Profit is moving in the opposite direction.
              </p>

            </div>

          </motion.div>

        </motion.div>

        {/* INVESTIGATION REVEAL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
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
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-36 text-center"
        >

          <p className="text-xs uppercase tracking-[0.45em] text-white/25">
            Wait.
          </p>

          <h3 className="mt-8 text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.8] tracking-[-0.08em]">

            SOMETHING
            <br />

            <span className="text-white/25">
              DOESN&apos;T
            </span>

            <br />

            ADD UP.

          </h3>

          <p className="mx-auto mt-12 max-w-xl text-lg leading-8 text-white/40">
            The obvious answer isn't always the right answer.
            The real challenge is discovering the hidden relationship
            between the numbers.
          </p>

          {/* FIND THE PARADOX */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mt-16 inline-flex items-center gap-4"
          >

            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_25px_#5ee7ff]" />

            <span className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-300">
              FIND THE PARADOX
            </span>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}