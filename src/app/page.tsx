"use client";

import Navbar from "../components/navbar/Navbar";

import DataUniverse from "../components/3d/DataUniverse";

import Introduction from "../components/sections/Introduction";
import About from "../components/sections/About";
import Paradox from "../components/sections/Paradox";
import Problems from "../components/sections/Problems";
import Rules from "../components/sections/Rules";
import Prizes from "../components/sections/Prizes";
import Timeline from "../components/sections/Timeline";
import Team from "../components/sections/Team";
import Registration from "../components/sections/Registration";
import Contact from "../components/sections/Contact";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020609] text-white">

      {/* =====================================================
          GLOBAL 3D DATA UNIVERSE
          ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <DataUniverse />
      </div>

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <div className="relative z-[100]">
        <Navbar />
      </div>

      {/* =====================================================
          MAIN WEBSITE
          ===================================================== */}

      <div className="relative z-10">

        {/* ===================================================
            HERO
            =================================================== */}

        <section
          id="home"
          className="paradox-hero relative flex min-h-screen items-center overflow-hidden"
        >

          {/* HERO ATMOSPHERE */}

          <div className="pointer-events-none absolute inset-0">

            {/* Main glow */}

            <div className="absolute left-1/2 top-[42%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.035] blur-[130px]" />

            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />

            {/* Horizontal line */}

            <div className="absolute left-0 right-0 top-[48%] h-px bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />

            {/* Vertical line */}

            <div className="absolute bottom-0 left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-cyan-300/[0.08] to-transparent" />

          </div>

          {/* HERO CONTENT */}

          <div className="relative z-20 mx-auto w-full max-w-[1500px] px-6 pt-24">

            <div className="grid min-h-screen items-center lg:grid-cols-[1.05fr_0.95fr]">

              {/* ============================================
                  LEFT
                  ============================================ */}

              <div className="relative">

                {/* STATUS */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                  }}
                  className="flex items-center gap-4"
                >

                  <span className="paradox-status font-mono text-[8px] uppercase tracking-[0.4em] text-white/35">
                    Registration / Coming Soon
                  </span>

                </motion.div>

                {/* TITLE */}

                <div className="mt-10 overflow-hidden">

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: "100%",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[clamp(5rem,14vw,13rem)] font-black leading-[0.7] tracking-[-0.1em]"
                  >
                    PARA
                  </motion.h1>

                </div>

                <div className="overflow-hidden">

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: "100%",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="paradox-muted-title text-[clamp(5rem,14vw,13rem)] font-black leading-[0.7] tracking-[-0.1em]"
                  >
                    DOX.
                  </motion.h1>

                </div>

                {/* TAGLINE */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.7,
                  }}
                  className="mt-10"
                >

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300 md:text-sm">
                    DATA × INTELLIGENCE × IMPACT
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/35 md:text-base md:leading-8">
                    A student-driven DataKthon where real-world
                    problems meet data, technology and
                    unconventional thinking.
                  </p>

                </motion.div>

                {/* CTA */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.9,
                  }}
                  className="mt-9 flex flex-wrap gap-3"
                >

                  <a
                    href="#problems"
                    className="group inline-flex items-center gap-4 rounded-full bg-cyan-300 px-6 py-3.5 text-[9px] font-black uppercase tracking-[0.25em] text-black transition duration-300 hover:scale-[1.04] hover:bg-white"
                  >
                    Explore Challenges

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <a
                    href="#registration"
                    className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-[9px] font-black uppercase tracking-[0.25em] text-white/50 transition duration-300 hover:border-cyan-300/30 hover:text-cyan-300"
                  >
                    Register Your Team
                  </a>

                </motion.div>

              </div>

              {/* ============================================
                  RIGHT — DATA IDENTITY
                  ============================================ */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative hidden h-[650px] lg:block"
              >

                {/* ORBITS */}

                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.08]" />

                <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

                {/* CORE */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.035] shadow-[0_0_80px_rgba(99,230,255,0.08)]"
                >

                  <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_#63e6ff]" />

                </motion.div>

                {/* DATA NODE 1 */}

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[8%] top-[25%] rounded-xl border border-white/[0.08] bg-[#05090d]/80 px-4 py-3 backdrop-blur-md"
                >

                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    DATA
                  </p>

                  <p className="mt-1 text-xs font-bold text-cyan-300">
                    13 CHALLENGES
                  </p>

                </motion.div>

                {/* DATA NODE 2 */}

                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[5%] top-[38%] rounded-xl border border-white/[0.08] bg-[#05090d]/80 px-4 py-3 backdrop-blur-md"
                >

                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    INTELLIGENCE
                  </p>

                  <p className="mt-1 text-xs font-bold text-cyan-300">
                    AI × ANALYTICS
                  </p>

                </motion.div>

                {/* DATA NODE 3 */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[22%] left-[18%] rounded-xl border border-white/[0.08] bg-[#05090d]/80 px-4 py-3 backdrop-blur-md"
                >

                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    IMPACT
                  </p>

                  <p className="mt-1 text-xs font-bold text-cyan-300">
                    REAL WORLD
                  </p>

                </motion.div>

                {/* CONNECTION LINES */}

                <div className="absolute left-[23%] top-[34%] h-px w-[27%] rotate-[28deg] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

                <div className="absolute right-[20%] top-[45%] h-px w-[28%] -rotate-[15deg] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

                <div className="absolute bottom-[31%] left-[31%] h-px w-[24%] -rotate-[30deg] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

              </motion.div>

            </div>

          </div>

          {/* HERO FOOTER */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="absolute bottom-7 left-0 right-0 z-30"
          >

            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6">

              <div className="hidden items-center gap-4 md:flex">

                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
                  KPRCAS
                </span>

                <span className="h-px w-8 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
                  COIMBATORE / INDIA
                </span>

              </div>

              <button
                onClick={() => {
                  document
                    .getElementById("introduction")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="group ml-auto flex items-center gap-3"
              >

                <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-white/20 transition group-hover:text-cyan-300">
                  Scroll to explore
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/25 transition group-hover:border-cyan-300/30 group-hover:text-cyan-300">
                  ↓
                </span>

              </button>

            </div>

          </motion.div>

        </section>

        {/* ===================================================
            INTRODUCTION
            =================================================== */}

        <Introduction />

        {/* ===================================================
            ABOUT EVENT
            =================================================== */}

        <About />

        {/* ===================================================
            PARADOX
            =================================================== */}

        <Paradox />

        {/* ===================================================
            PROBLEM STATEMENTS
            =================================================== */}

        <Problems />

        {/* ===================================================
            RULES
            =================================================== */}

        <Rules />

        {/* ===================================================
            PRIZES
            =================================================== */}

        <Prizes />

        {/* ===================================================
            TIMELINE
            =================================================== */}

        <Timeline />

        {/* ===================================================
            TEAM
            =================================================== */}

        <Team />

        {/* ===================================================
            REGISTRATION
            =================================================== */}

        <Registration />

        {/* ===================================================
            CONTACT
            =================================================== */}

        <Contact />

        {/* ===================================================
            FOOTER
            =================================================== */}

        <footer className="border-t border-white/[0.06] px-6 py-10">

          <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* BRAND */}

            <div>

              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-xl font-black tracking-[-0.04em] text-white"
              >
                PARADOX
                <span className="text-cyan-300">
                  .
                </span>
              </button>

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
                DataKthon / KPRCAS
              </p>

            </div>

            {/* FOOTER NAV */}

            <div className="flex flex-wrap gap-5">

              <a
                href="#home"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Home
              </a>

              <a
                href="#problems"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Problems
              </a>

              <a
                href="#rules"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Rules
              </a>

              <a
                href="#prizes"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Prizes
              </a>

              <a
                href="#timeline"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Timeline
              </a>

              <a
                href="#registration"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Register
              </a>

              <a
                href="#contact"
                className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-cyan-300"
              >
                Contact
              </a>

            </div>

          </div>

          {/* FOOTER BOTTOM */}

          <div className="mx-auto mt-8 flex max-w-[1400px] flex-col justify-between gap-3 border-t border-white/[0.05] pt-6 md:flex-row">

            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/10">
              © 2026 PARADOX DATAKTHON
            </p>

            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/10">
              DATA → INSIGHT → IMPACT
            </p>

          </div>

        </footer>

      </div>

    </main>
  );
}