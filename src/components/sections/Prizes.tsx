"use client";

import { motion } from "framer-motion";

const prizes = [
  {
    rank: "01",
    position: "WINNER",
    title: "GRAND PRIZE",
    amount: "₹ XX,XXX",
    description:
      "For the team that delivers the strongest combination of insight, innovation, technical execution and real-world impact.",
    height: "h-[360px]",
    order: "md:order-2",
  },
  {
    rank: "02",
    position: "RUNNER UP",
    title: "SECOND PLACE",
    amount: "₹ XX,XXX",
    description:
      "For an outstanding solution demonstrating strong analytical thinking and meaningful problem solving.",
    height: "h-[300px]",
    order: "md:order-1",
  },
  {
    rank: "03",
    position: "THIRD PLACE",
    title: "THIRD PLACE",
    amount: "₹ XX,XXX",
    description:
      "For a compelling solution with strong creativity, execution and potential impact.",
    height: "h-[260px]",
    order: "md:order-3",
  },
];

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 md:py-52"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-[140px]" />

      </div>

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
              Rewards
            </p>

          </div>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">

            WHAT WILL
            <br />

            <span className="text-white/25">
              YOU WIN?
            </span>

          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Recognition for teams that turn complex data into
            meaningful insight and measurable impact.
          </p>

        </motion.div>

        {/* PODIUM */}

        <div className="relative mx-auto mt-28 max-w-6xl">

          {/* FLOOR GLOW */}

          <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-cyan-300/[0.05] blur-[90px]" />

          <div className="relative flex flex-col items-end justify-end gap-4 md:flex-row md:items-end md:gap-3">

            {prizes.map((prize, index) => (

              <motion.div
                key={prize.rank}
                initial={{
                  opacity: 0,
                  y: 100,
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
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative w-full md:w-1/3 ${prize.order}`}
              >

                {/* CARD */}

                <div
                  className={`relative overflow-hidden rounded-t-[2rem] border border-white/10 bg-[#05090d] ${prize.height}`}
                >

                  {/* TOP GLOW */}

                  <div className="pointer-events-none absolute left-1/2 top-[-80px] h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-[70px] transition duration-700 group-hover:bg-cyan-300/[0.14]" />

                  {/* LARGE RANK */}

                  <div className="pointer-events-none absolute right-5 top-4 font-mono text-[100px] font-black leading-none text-white/[0.025]">
                    {prize.rank}
                  </div>

                  <div className="relative flex h-full flex-col p-7 md:p-8">

                    {/* POSITION */}

                    <div className="flex items-center justify-between">

                      <span
                        className={`font-mono text-[9px] font-bold uppercase tracking-[0.35em] ${
                          prize.rank === "01"
                            ? "text-cyan-300"
                            : "text-white/25"
                        }`}
                      >
                        {prize.position}
                      </span>

                      <span className="font-mono text-[9px] text-white/15">
                        {prize.rank}
                      </span>

                    </div>

                    {/* MEDAL */}

                    <div className="mt-12 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">

                      <span
                        className={`text-2xl font-black ${
                          prize.rank === "01"
                            ? "text-cyan-300"
                            : "text-white/50"
                        }`}
                      >
                        {prize.rank === "01"
                          ? "★"
                          : prize.rank === "02"
                            ? "◆"
                            : "◇"}
                      </span>

                    </div>

                    {/* TITLE */}

                    <h3 className="mt-8 text-2xl font-black tracking-tight text-white md:text-3xl">
                      {prize.title}
                    </h3>

                    {/* AMOUNT */}

                    <p
                      className={`mt-5 font-black tracking-tight ${
                        prize.rank === "01"
                          ? "text-4xl text-cyan-300 md:text-5xl"
                          : "text-3xl text-white/70 md:text-4xl"
                      }`}
                    >
                      {prize.amount}
                    </p>

                    {/* DESCRIPTION */}

                    <p className="mt-5 text-xs leading-6 text-white/30">
                      {prize.description}
                    </p>

                    {/* BOTTOM */}

                    <div className="mt-auto border-t border-white/10 pt-5">

                      <div className="flex items-center justify-between">

                        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
                          PARADOX AWARD
                        </span>

                        <span
                          className={`h-2 w-2 rounded-full ${
                            prize.rank === "01"
                              ? "bg-cyan-300 shadow-[0_0_15px_#5ee7ff]"
                              : "bg-white/20"
                          }`}
                        />

                      </div>

                    </div>

                  </div>

                </div>

                {/* PODIUM BASE */}

                <div
                  className={`h-3 rounded-b-xl ${
                    prize.rank === "01"
                      ? "bg-cyan-300/40"
                      : "bg-white/[0.08]"
                  }`}
                />

              </motion.div>

            ))}

          </div>

        </div>

        {/* ADDITIONAL RECOGNITION */}

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
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 grid gap-3 md:grid-cols-3"
        >

          {[
            "Best Innovation",
            "Best Data Story",
            "Special Recognition",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.015] px-5 py-5"
            >

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </motion.div>

        {/* OFFICIAL NOTE */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-10 flex gap-3"
        >

          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="max-w-4xl text-xs leading-6 text-white/20">
            Prize amounts, awards and additional recognitions shown
            here are placeholders. Replace them with the official
            prize structure announced by the DataKthon organizing
            committee.
          </p>

        </motion.div>

      </div>
    </section>
  );
}