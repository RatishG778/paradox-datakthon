"use client";

import { motion } from "framer-motion";

const registrationSteps = [
  {
    id: "01",
    title: "FORM YOUR TEAM",
    description:
      "Bring together the right combination of technical, analytical and creative skills.",
  },
  {
    id: "02",
    title: "CHOOSE YOUR CHALLENGE",
    description:
      "Explore the problem statements and identify the challenge your team wants to solve.",
  },
  {
    id: "03",
    title: "REGISTER",
    description:
      "Submit the required participant and team details through the official registration form.",
  },
];

export default function Registration() {
  return (
    <section
      id="registration"
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

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[150px]" />

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
          className="max-w-5xl"
        >

          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-cyan-300" />

            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
              Registration
            </p>

          </div>

          <h2 className="mt-8 text-[clamp(4rem,10vw,10rem)] font-black leading-[0.78] tracking-[-0.09em]">

            READY
            <br />

            <span className="text-white/25">
              TO ENTER?
            </span>

          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Assemble your team. Choose the problem. Bring your
            solution to life.
          </p>

        </motion.div>

        {/* MAIN CTA */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative mt-20 overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-[#05090d]"
        >

          {/* GLOW */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-300/[0.055] blur-[120px]" />

          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">

            {/* LEFT */}

            <div>

              <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-cyan-300">
                PARADOX / REGISTRATION
              </p>

              <h3 className="mt-8 max-w-3xl text-4xl font-black leading-[0.9] tracking-[-0.05em] text-white md:text-6xl">
                YOUR IDEA
                <br />
                STARTS HERE.
              </h3>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/35 md:text-base">
                Registration is your first step into the challenge.
                Make sure your team details and participant
                information are ready before submitting the official
                registration form.
              </p>

              {/* CTA */}

              <a
                href="#"
                className="group mt-10 inline-flex items-center gap-4 rounded-full border border-cyan-300/40 bg-cyan-300 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-[1.03] hover:bg-white"
              >

                <span>
                  REGISTER YOUR TEAM
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

              <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.25em] text-white/15">
                Official registration link will be added here
              </p>

            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">

              {/* STATUS */}

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6">

                <div className="flex items-center justify-between">

                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/25">
                    Registration Status
                  </p>

                  <span className="flex items-center gap-2">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#5ee7ff]" />

                    <span className="font-mono text-[8px] text-cyan-300">
                      OPEN
                    </span>

                  </span>

                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">

                  <div>

                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                      Deadline
                    </p>

                    <p className="mt-2 text-sm font-bold text-white/60">
                      DD / MM / YYYY
                    </p>

                  </div>

                  <div>

                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                      Team Size
                    </p>

                    <p className="mt-2 text-sm font-bold text-white/60">
                      TBD
                    </p>

                  </div>

                </div>

              </div>

              {/* QUICK INFO */}

              <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">

                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/15">
                    Eligibility
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/40">
                    As per official event guidelines.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">

                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/15">
                    Format
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/40">
                    Team-based DataKthon.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* REGISTRATION FLOW */}

        <div className="mt-20">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20">
                Entry Protocol
              </p>

              <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                THREE STEPS TO ENTER
              </h3>

            </div>

            <span className="font-mono text-[9px] text-cyan-300/50">
              03 STEPS
            </span>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            {registrationSteps.map(
              (step, index) => (

                <motion.div
                  key={step.id}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#05090d] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20"
                >

                  {/* NUMBER */}

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[10px] text-cyan-300">
                      {step.id}
                    </span>

                    <span className="text-white/10 transition duration-300 group-hover:text-cyan-300/50">
                      →
                    </span>

                  </div>

                  <h4 className="mt-10 text-lg font-black text-white">
                    {step.title}
                  </h4>

                  <p className="mt-4 text-xs leading-6 text-white/30">
                    {step.description}
                  </p>

                </motion.div>

              )
            )}

          </div>

        </div>

        {/* FINAL CTA */}

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
            duration: 0.7,
          }}
          className="mt-16 text-center"
        >

          <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/15">
            THE CHALLENGE IS WAITING
          </p>

          <a
            href="#"
            className="mt-5 inline-block text-2xl font-black tracking-tight text-white transition hover:text-cyan-300 md:text-4xl"
          >
            ENTER PARADOX →
          </a>

        </motion.div>

        {/* NOTE */}

        <div className="mt-10 flex gap-3">

          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />

          <p className="text-xs leading-6 text-white/20">
            Replace the registration URL, deadline, team size and
            eligibility details with the official event information.
          </p>

        </div>

      </div>
    </section>
  );
}