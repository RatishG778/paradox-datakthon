"use client";

import dynamic from "next/dynamic";

const DataUniverse = dynamic(
  () => import("../3d/DataUniverse"),
  {
    ssr: false,
  }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#03070b]"
    >
      {/* 3D DATA UNIVERSE */}
      <div className="absolute inset-0 z-0">
        <DataUniverse />
      </div>

      {/* DARK CINEMATIC VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,11,0.15)_35%,rgba(3,7,11,0.85)_100%)]" />

      {/* TOP FADE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#03070b] to-transparent" />

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-60 bg-gradient-to-t from-[#03070b] to-transparent" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] items-center justify-center px-6 pt-16">

        <div className="text-center">

          {/* EVENT LABEL */}
          <div className="mb-8 flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-cyan-300/50" />

            <span className="text-[9px] font-bold uppercase tracking-[0.7em] text-cyan-300 md:text-xs">
              DATAKTHON 2026
            </span>

            <span className="h-px w-10 bg-cyan-300/50" />

          </div>

          {/* MAIN TITLE */}
          <div className="relative">

            <h1 className="relative text-[clamp(5rem,15vw,14rem)] font-black leading-[0.72] tracking-[-0.1em] text-white">

              PARADOX

            </h1>

            {/* Glow behind title */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.08] blur-[90px]"
            />

          </div>

          {/* TAGLINE */}
          <div className="mt-12">

            <p className="text-lg font-medium tracking-wide text-white/70 md:text-2xl">
              Every Data Has a Story.
            </p>

            <p className="mt-2 text-lg font-semibold tracking-wide text-cyan-300 md:text-2xl">
              Find the Paradox.
            </p>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="#registration"
              className="group flex h-13 min-w-[180px] items-center justify-center gap-3 rounded-full bg-cyan-300 px-8 text-xs font-black uppercase tracking-wider text-black transition duration-300 hover:scale-105 hover:bg-cyan-200"
            >
              <span>Register Now</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#problems"
              className="flex h-13 min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-black/20 px-8 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              Explore Challenges
            </a>

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">

        <div className="flex flex-col items-center gap-3">

          <span className="text-[8px] uppercase tracking-[0.5em] text-white/25">
            Scroll to explore
          </span>

          <div className="relative h-10 w-px overflow-hidden bg-white/10">

            <div className="absolute left-0 top-0 h-4 w-full animate-[scrollLine_2s_ease-in-out_infinite] bg-cyan-300" />

          </div>

        </div>

      </div>

    </section>
  );
}