"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  stateInsights,
} from "../../../lib/v2/states";

import ProblemDataVisual from "./ProblemDataVisual";


interface ProblemRevealProps {
  stateId: string | null;
}


export default function ProblemReveal({
  stateId,
}: ProblemRevealProps) {
  const [activeProblem, setActiveProblem] =
    useState(0);

  const state =
    stateInsights.find(
      (item) =>
        item.id === stateId
    ) ?? null;


  /*
   * Reset selected problem
   * whenever the state changes.
   */

  useEffect(() => {
    setActiveProblem(0);
  }, [stateId]);


  /*
   * No state selected.
   */

  if (!state) {
    return (
      <div className="relative overflow-hidden border border-[#cfc8ba] bg-[#f2efe7] p-8 md:p-16">

        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#b44735]/5 blur-3xl" />

        <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#b44735]">
          Waiting for investigation
        </p>

        <h3 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-[#17211b] md:text-5xl">
          Select a region from the
          network to reveal the
          problem hidden inside
          the data.
        </h3>

        <div className="mt-12 flex items-center gap-4">

          <span className="h-2 w-2 animate-pulse rounded-full bg-[#b44735]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#7b8179]">
            Network awaiting input
          </span>

        </div>

      </div>
    );
  }


  const problem =
    state.problems[
      activeProblem
    ];


  return (
    <div>

      {/* =================================================
          STATE HEADER
      ================================================= */}

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">

        <div>

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#b44735]" />

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#b44735]">
              {state.region}
            </p>

          </div>


          <h3 className="mt-8 max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[0.82] tracking-[-0.07em] text-[#17211b]">
            {state.name}
          </h3>


          <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-[#355c4a] md:text-2xl">
            {state.headline}
          </p>


          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#596158] md:text-base">
            {state.description}
          </p>

        </div>


        {/* =================================================
            SIGNAL PANEL
        ================================================= */}

        <div className="relative overflow-hidden border border-[#cfc8ba] bg-[#f2efe7]">

          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#cfc8ba 1px, transparent 1px), linear-gradient(90deg, #cfc8ba 1px, transparent 1px)",
              backgroundSize:
                "28px 28px",
            }}
          />


          <div className="relative p-6 md:p-8">

            <div className="flex items-center justify-between">

              <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#7b8179]">
                Data signals
              </p>

              <span className="font-mono text-[8px] text-[#b44735]">
                LIVE
              </span>

            </div>


            <div className="mt-8 space-y-5">

              {state.signals.map(
                (
                  signal,
                  index
                ) => {

                  const widths = [
                    88,
                    72,
                    94,
                    61,
                  ];

                  const width =
                    widths[
                      index %
                        widths.length
                    ];

                  return (
                    <div
                      key={
                        signal.label
                      }
                    >

                      <div className="flex items-center justify-between">

                        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#596158]">
                          {signal.label}
                        </span>

                        <span className="font-mono text-[8px] font-bold text-[#355c4a]">
                          {signal.value}
                        </span>

                      </div>


                      <div className="mt-2 h-1 overflow-hidden bg-[#d8d2c6]">

                        <div
                          className="h-full origin-left animate-[signalGrow_1.2s_ease-out]"
                          style={{
                            width: `${width}%`,
                            backgroundColor:
                              index === 3
                                ? "#b44735"
                                : "#355c4a",
                          }}
                        />

                      </div>

                    </div>
                  );
                }
              )}

            </div>


            <div className="mt-8 border-t border-[#cfc8ba] pt-5">

              <div className="flex items-end justify-between">

                <div>

                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7b8179]">
                    Challenge intensity
                  </p>

                  <p className="mt-2 text-4xl font-black tracking-[-0.06em] text-[#b44735]">
                    {state.intensity}
                    <span className="text-lg">
                      %
                    </span>
                  </p>

                </div>


                <div className="text-right">

                  <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7b8179]">
                    Problems
                  </p>

                  <p className="mt-2 text-4xl font-black tracking-[-0.06em] text-[#355c4a]">
                    {String(
                      state.problems.length
                    ).padStart(2, "0")}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          PROBLEM EXPLORER
      ================================================= */}

      <div className="mt-24">

        <div className="flex flex-col justify-between gap-5 border-b border-[#cfc8ba] pb-6 md:flex-row md:items-end">

          <div>

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#b44735]">
              Problem explorer
            </p>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#7b8179]">
              Select a challenge
            </p>

          </div>


          <div className="font-mono text-[8px] text-[#7b8179]">
            {String(
              activeProblem + 1
            ).padStart(2, "0")}
            {" / "}
            {String(
              state.problems.length
            ).padStart(2, "0")}
          </div>

        </div>


        {/* =================================================
            PROBLEM CARDS
        ================================================= */}

        <div className="mt-6 grid gap-3 md:grid-cols-3">

          {state.problems.map(
            (
              item,
              index
            ) => {

              const active =
                activeProblem ===
                index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setActiveProblem(
                      index
                    )
                  }
                  className={`group relative min-h-[190px] overflow-hidden border p-6 text-left transition-all duration-500 md:p-7 ${
                    active
                      ? "border-[#b44735] bg-[#b44735] text-[#faf8f2]"
                      : "border-[#cfc8ba] bg-[#f2efe7] text-[#17211b] hover:-translate-y-1 hover:border-[#355c4a]"
                  }`}
                >

                  <div className="flex items-start justify-between">

                    <span
                      className={`font-mono text-[9px] font-bold ${
                        active
                          ? "text-[#f5d8d1]"
                          : "text-[#b44735]"
                      }`}
                    >
                      0{index + 1}
                    </span>


                    <span
                      className={`font-mono text-[7px] uppercase tracking-[0.18em] ${
                        active
                          ? "text-white/60"
                          : "text-[#7b8179]"
                      }`}
                    >
                      {item.category}
                    </span>

                  </div>


                  <h4 className="mt-12 font-serif text-2xl leading-none md:text-3xl">
                    {item.title}
                  </h4>


                  <div
                    className={`absolute bottom-6 right-6 text-xl transition-transform duration-300 ${
                      active
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    →
                  </div>

                </button>
              );
            }
          )}

        </div>


        {/* =================================================
            ACTIVE PROBLEM
        ================================================= */}

        <div className="mt-5 grid overflow-hidden border border-[#cfc8ba] bg-[#f2efe7] lg:grid-cols-[0.7fr_1.3fr]">

          {/* =================================================
              LEFT VISUAL
          ================================================= */}

          <div className="relative min-h-[360px] overflow-hidden border-b border-[#cfc8ba] p-7 md:p-10 lg:border-b-0 lg:border-r">

            <div className="absolute inset-0 flex items-center justify-center opacity-30">

              <div className="relative h-56 w-56">

                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b44735] shadow-[0_0_35px_rgba(180,71,53,0.45)]" />

                <div className="absolute left-[20%] top-[20%] h-2 w-2 rounded-full bg-[#355c4a]" />

                <div className="absolute right-[15%] top-[35%] h-2 w-2 rounded-full bg-[#355c4a]" />

                <div className="absolute bottom-[18%] left-[30%] h-2 w-2 rounded-full bg-[#355c4a]" />

                <div className="absolute bottom-[25%] right-[20%] h-2 w-2 rounded-full bg-[#355c4a]" />

                <div className="absolute left-[25%] top-[22%] h-px w-[55%] rotate-[15deg] bg-[#355c4a]" />

                <div className="absolute left-[25%] top-[48%] h-px w-[45%] -rotate-[20deg] bg-[#355c4a]" />

                <div className="absolute left-[45%] top-[48%] h-px w-[35%] rotate-[35deg] bg-[#b44735]" />

              </div>

            </div>


            <div className="relative flex h-full min-h-[300px] flex-col justify-between">

              <div>

                <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#b44735]">
                  Challenge
                </p>

                <p className="mt-4 font-mono text-[clamp(4rem,8vw,7rem)] font-black leading-none tracking-[-0.08em] text-[#355c4a]">
                  0{activeProblem + 1}
                </p>

              </div>


              <div>

                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#7b8179]">
                  Domain
                </p>

                <p className="mt-2 font-serif text-2xl text-[#17211b]">
                  {problem.category}
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="p-7 md:p-12">

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#b44735]">
              {problem.category}
            </p>


            <h4 className="mt-6 max-w-3xl font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.88] tracking-[-0.05em] text-[#17211b]">
              {problem.title}
            </h4>


            <p className="mt-8 max-w-2xl text-base leading-8 text-[#596158]">
              {problem.description}
            </p>


            {/* =================================================
                DATA VISUALIZATION
            ================================================= */}

            <div className="mt-12">

              <ProblemDataVisual
                category={
                  problem.category
                }
                intensity={
                  state.intensity
                }
              />

            </div>


            {/* =================================================
                QUESTION
            ================================================= */}

            <div className="mt-12 border-l-2 border-[#b44735] pl-6 md:pl-8">

              <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#b44735]">
                The question
              </p>

              <p className="mt-5 max-w-2xl font-serif text-2xl leading-tight text-[#355c4a] md:text-3xl">
                {problem.question}
              </p>

            </div>


            {/* =================================================
                SOLUTION PIPELINE
            ================================================= */}

            <div className="mt-14">

              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#7b8179]">
                Challenge pathway
              </p>


              <div className="mt-5 grid grid-cols-4 border-y border-[#cfc8ba]">

                {[
                  "UNDERSTAND",
                  "ANALYZE",
                  "BUILD",
                  "IMPACT",
                ].map(
                  (
                    step,
                    index
                  ) => (
                    <div
                      key={step}
                      className="border-r border-[#cfc8ba] p-4 last:border-r-0 md:p-5"
                    >

                      <p className="font-mono text-[7px] font-bold text-[#b44735]">
                        0{index + 1}
                      </p>

                      <p className="mt-3 font-mono text-[7px] font-bold leading-4 tracking-[0.1em] text-[#17211b]">
                        {step}
                      </p>

                    </div>
                  )
                )}

              </div>

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <button
              type="button"
              className="mt-10 inline-flex items-center gap-8 border border-[#355c4a] px-6 py-4 font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#355c4a] transition-all duration-300 hover:bg-[#355c4a] hover:text-[#faf8f2]"
            >
              Take this challenge

              <span className="text-base">
                →
              </span>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}