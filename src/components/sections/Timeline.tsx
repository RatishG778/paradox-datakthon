"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    id: "01",
    phase: "REGISTRATION",
    date: "DATE / TIME",
    title: "Register Your Team",
    description:
      "Complete your registration and secure your place in PARADOX DataKthon.",
    status: "OPEN",
  },
  {
    id: "02",
    phase: "TEAM FORMATION",
    date: "DATE / TIME",
    title: "Build Your Team",
    description:
      "Bring together the right combination of analytical, technical and creative skills.",
    status: "UPCOMING",
  },
  {
    id: "03",
    phase: "DATAKTHON",
    date: "DATE / TIME",
    title: "The Challenge Begins",
    description:
      "Choose a problem statement, explore the data and begin building your solution.",
    status: "UPCOMING",
  },
  {
    id: "04",
    phase: "SUBMISSION",
    date: "DATE / TIME",
    title: "Submit Your Solution",
    description:
      "Complete your analysis, solution and presentation before the official deadline.",
    status: "UPCOMING",
  },
  {
    id: "05",
    phase: "JUDGING",
    date: "DATE / TIME",
    title: "Ideas Under Evaluation",
    description:
      "The jury evaluates solutions based on the official judging criteria.",
    status: "UPCOMING",
  },
  {
    id: "06",
    phase: "RESULTS",
    date: "DATE / TIME",
    title: "The Winners Emerge",
    description:
      "The strongest solutions are recognized and the PARADOX winners are announced.",
    status: "UPCOMING",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
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

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.025] blur-[140px]" />

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
              Mission Timeline
            </p>

          </div>

          <h2 className="mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.82] tracking-[-0.08em]">

            THE ROAD
            <br />

            <span className="text-white/25">
              TO IMPACT.
            </span>

          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            From your first registration to the final result,
            every stage moves you closer to solving a real-world
            challenge.
          </p>

        </motion.div>

        {/* DESKTOP TIMELINE */}

        <div className="relative mt-28 hidden md:block">

          {/* MAIN LINE */}

          <div className="absolute left-0 right-0 top-[26px] h-px bg-white/10" />

          {/* ACTIVE PROGRESS */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[26px] h-px bg-cyan-300/50"
          />

          {/* EVENTS */}

          <div className="grid grid-cols-6 gap-4">

            {timeline.map((item, index) => (

              <motion.div
                key={item.id}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative"
              >

                {/* NODE */}

                <div className="relative z-10 flex h-[52px] items-center">

                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-cyan-300/40 bg-[#05090d] transition duration-500 group-hover:scale-125 group-hover:border-cyan-300">

                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#5ee7ff]" />

                  </div>

                </div>

                {/* CARD */}

                <div className="mt-7 rounded-2xl border border-white/[0.07] bg-[#05090d] p-5 transition duration-500 group-hover:-translate-y-2 group-hover:border-cyan-300/20">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[9px] text-cyan-300">
                      {item.id}
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                      {item.status}
                    </span>

                  </div>

                  <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
                    {item.phase}
                  </p>

                  <h3 className="mt-3 text-sm font-black leading-5 text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[10px] leading-5 text-white/30">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.06] pt-4">

                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      {item.date}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* MOBILE TIMELINE */}

        <div className="relative mt-20 md:hidden">

          {/* VERTICAL LINE */}

          <div className="absolute bottom-0 left-[8px] top-0 w-px bg-white/10" />

          <motion.div
            initial={{
              height: 0,
            }}
            whileInView={{
              height: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute left-[8px] top-0 w-px bg-cyan-300/50"
          />

          <div className="space-y-8">

            {timeline.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative pl-10"
              >

                {/* NODE */}

                <div className="absolute left-0 top-5 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-cyan-300/40 bg-[#05090d]">

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                </div>

                {/* CARD */}

                <div className="rounded-2xl border border-white/[0.07] bg-[#05090d] p-6">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[9px] text-cyan-300">
                      {item.id}
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                      {item.status}
                    </span>

                  </div>

                  <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.25em] text-white/25">
                    {item.phase}
                  </p>

                  <h3 className="mt-3 text-lg font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-white/30">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-white/[0.06] pt-4">

                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      {item.date}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* FINAL MESSAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 rounded-[2rem] border border-cyan-300/10 bg-cyan-300/[0.025] p-8 text-center md:p-12"
        >

          <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-cyan-300/60">
            Final Destination
          </p>

          <h3 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
            DATA → INSIGHT → IMPACT
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/30">
            Your journey ends with more than a presentation.
            It ends with an idea capable of creating measurable
            change.
          </p>

        </motion.div>

        {/* OFFICIAL NOTE */}

        <div className="mt-8 flex gap-3">

          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="text-xs leading-6 text-white/20">
            Timeline dates and event stages shown here are
            placeholders. Replace them with the official
            schedule provided by your college.
          </p>

        </div>

      </div>
    </section>
  );
}