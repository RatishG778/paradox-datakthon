"use client";

import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import Stagger, {
  StaggerItem,
} from "../ui/Stagger";

const dataPoints = [
  {
    value: 8.4,
    suffix: "M",
    label: "DATA POINTS",
    decimals: 1,
  },
  {
    value: 62,
    suffix: "",
    label: "DISTRICTS",
    decimals: 0,
  },
  {
    value: 37.4,
    suffix: "%",
    label: "PATTERN SHIFT",
    decimals: 1,
  },
  {
    value: 84.2,
    prefix: "₹",
    suffix: "M",
    label: "VALUE ANALYZED",
    decimals: 1,
  },
];

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="relative overflow-hidden px-6 py-40 md:py-56"
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-300/[0.025] blur-[120px]" />

      {/* =====================================================
          READABILITY VIGNETTE
          Keeps the cinematic background but improves text
          separation.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.28)_100%)]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ===================================================
            SECTION LABEL
        ==================================================== */}

        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-cyan-300" />

            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-cyan-300">
              The Beginning
            </p>
          </div>
        </Reveal>

        {/* ===================================================
            MAIN STATEMENT
        ==================================================== */}

        <div className="mt-12">

          <Reveal>
            <h2
              className="
                max-w-6xl
                text-[clamp(4rem,10vw,9rem)]
                font-black
                leading-[0.85]
                tracking-[-0.07em]
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]
              "
            >
              DATA IS
              <br />

              <span className="text-white">
                EVERYWHERE.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} y={30}>
            <div className="mt-10 flex max-w-3xl flex-col gap-6 md:flex-row md:items-start">

              <span className="mt-2 hidden h-16 w-px bg-cyan-300 md:block" />

              <p
                className="
                  text-lg
                  leading-8
                  text-white/70
                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]
                  md:text-xl
                "
              >
                Every click, transaction, decision and interaction
                creates data. But millions of records mean nothing
                until someone asks the right question.
              </p>

            </div>
          </Reveal>

        </div>

        {/* ===================================================
            DATA STATISTICS
        ==================================================== */}

        <Stagger
          className="
            mt-24
            grid
            grid-cols-2
            gap-px
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/10
            md:grid-cols-4
          "
        >

          {dataPoints.map((item) => (
            <StaggerItem key={item.label}>

              <div
                className="
                  group
                  relative
                  h-full
                  bg-[#05090d]/95
                  p-6
                  transition
                  duration-500
                  hover:bg-cyan-300/[0.04]
                  md:p-10
                "
              >

                {/* NUMBER */}

                <p
                  className="
                    text-3xl
                    font-black
                    tracking-tight
                    text-white
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]
                    md:text-5xl
                  "
                >
                  <Counter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals}
                  />
                </p>

                {/* LABEL */}

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-300/80">
                  {item.label}
                </p>

                {/* PROGRESS */}

                <div className="mt-8 h-px w-full bg-white/10">
                  <div className="h-px w-1/3 bg-cyan-300 transition-all duration-700 group-hover:w-full" />
                </div>

                {/* CORNER */}

                <span className="absolute right-5 top-5 font-mono text-[8px] text-white/20">
                  DATA
                </span>

              </div>

            </StaggerItem>
          ))}

        </Stagger>

        {/* ===================================================
            LOWER STATEMENT
        ==================================================== */}

        <Reveal delay={0.1} y={50}>
          <div className="mt-32 md:mt-44">

            <p
              className="
                text-[clamp(3rem,7vw,7rem)]
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]
              "
            >
              INSIGHT
              <br />

              <span className="text-white/40">
                IS HIDDEN.
              </span>
            </p>

          </div>
        </Reveal>

        {/* ===================================================
            FINAL MESSAGE
        ==================================================== */}

        <Reveal delay={0.2} y={30}>
          <div className="mt-10 flex items-center gap-4">

            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#5ee7ff]" />

            <p
              className="
                text-sm
                uppercase
                tracking-[0.35em]
                text-white/60
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
              "
            >
              The investigation begins here
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}