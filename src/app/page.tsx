"use client";

import { useEffect, useState } from "react";

import ParadoxWorld from "../components/v2/experience/ParadoxWorld";

import StateNodeOverlay from "../components/v2/experience/StateNodeOverlay";

import type {
  NetworkNode,
} from "../components/v2/experience/DataNetwork";

import ProblemReveal from "../components/v2/storytelling/ProblemReveal";

export default function Home() {
  /* =====================================================
     STATE
  ===================================================== */

  const [hoveredState, setHoveredState] =
    useState<NetworkNode | null>(null);

  const [selectedState, setSelectedState] =
    useState<NetworkNode | null>(null);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [overlayPosition, setOverlayPosition] =
    useState({
      x: 0,
      y: 0,
    });


  /* =====================================================
     SCROLL PROGRESS
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const maximumScroll =
        documentHeight - viewportHeight;

      if (maximumScroll <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress =
        window.scrollY / maximumScroll;

      setScrollProgress(
        Math.min(
          1,
          Math.max(0, progress)
        )
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  /* =====================================================
     STATE HOVER
  ===================================================== */

  const handleHoverState = (
    node: NetworkNode | null
  ) => {
    setHoveredState(node);

    if (!node) {
      return;
    }

    const isMobile =
      window.innerWidth < 768;

    if (isMobile) {
      setOverlayPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight - 170,
      });
    } else {
      setOverlayPosition({
        x: window.innerWidth * 0.76,
        y: window.innerHeight * 0.48,
      });
    }
  };


  /* =====================================================
     STATE SELECT
  ===================================================== */

  const handleSelectState = (
    node: NetworkNode
  ) => {
    setSelectedState(node);

    window.setTimeout(() => {
      document
        .getElementById(
          "problem-intelligence"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };


  /* =====================================================
     EXPLORE STATE
  ===================================================== */

  const handleExploreState = () => {
    if (!hoveredState) {
      return;
    }

    setSelectedState(
      hoveredState
    );

    window.setTimeout(() => {
      document
        .getElementById(
          "problem-intelligence"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };


  /* =====================================================
     PAGE
  ===================================================== */

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f2efe7] text-[#17211b]">

      {/* =================================================
          3D EXPERIENCE
      ================================================= */}

      <ParadoxWorld
        activeState={
          selectedState?.id ?? null
        }
        onHoverState={
          handleHoverState
        }
        onSelectState={
          handleSelectState
        }
      />


      {/* =================================================
          STATE INFORMATION OVERLAY
      ================================================= */}

      <StateNodeOverlay
        state={
          hoveredState
            ? {
                id: hoveredState.id,
                name: hoveredState.name,
                intensity:
                  hoveredState.intensity,
                challenges:
                  hoveredState.challenges,
              }
            : null
        }
        position={
          overlayPosition
        }
        visible={
          hoveredState !== null
        }
        onExplore={
          handleExploreState
        }
      />


      {/* =================================================
          TOP NAVIGATION
      ================================================= */}

      <header className="pointer-events-none fixed left-0 right-0 top-0 z-40">

        <div className="flex items-center justify-between px-6 py-6 md:px-10 md:py-8">

          {/* LOGO */}

          <div className="pointer-events-auto">

            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-[#17211b]">
              PARADOX
            </p>

            <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.25em] text-[#7b8179]">
              National Datathon
            </p>

          </div>


          {/* NAV */}

          <nav className="pointer-events-auto hidden items-center gap-8 md:flex">

            <a
              href="#scale"
              className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#596158] transition-colors hover:text-[#b44735]"
            >
              The Scale
            </a>

            <a
              href="#problems"
              className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#596158] transition-colors hover:text-[#b44735]"
            >
              Problems
            </a>

            <a
              href="#how-it-works"
              className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#596158] transition-colors hover:text-[#b44735]"
            >
              How It Works
            </a>

            <a
              href="#register"
              className="border border-[#17211b] px-4 py-2 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[#17211b] transition-colors hover:bg-[#17211b] hover:text-[#faf8f2]"
            >
              Enter
            </a>

          </nav>

        </div>

      </header>


      {/* =================================================
          EXPERIENCE PROGRESS
      ================================================= */}

      <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 hidden w-[220px] -translate-x-1/2 md:block">

        <div className="flex items-center gap-3">

          <span className="font-mono text-[8px] font-bold tracking-[0.25em] text-[#596158]">
            EXPLORE
          </span>

          <div className="h-px flex-1 bg-[#cfc8ba]">

            <div
              className="h-full bg-[#b44735] transition-[width] duration-150"
              style={{
                width: `${scrollProgress * 100}%`,
              }}
            />

          </div>

          <span className="font-mono text-[8px] font-bold text-[#596158]">
            {String(
              Math.round(
                scrollProgress * 100
              )
            ).padStart(2, "0")}
          </span>

        </div>

      </div>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-32 md:px-16">

        <div className="mx-auto w-full max-w-[1500px]">

          <div className="max-w-5xl">

            {/* LABEL */}

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#b44735]" />

              <p className="font-mono text-[8px] font-bold uppercase tracking-[0.4em] text-[#b44735]">
                A national data challenge
              </p>

            </div>


            {/* HERO TITLE */}

            <h1 className="mt-8 text-[clamp(4.2rem,11vw,10rem)] font-black leading-[0.76] tracking-[-0.085em]">

              INDIA
              <br />

              <span className="font-serif font-normal italic text-[#355c4a]">
                has data.
              </span>

            </h1>


            {/* HERO QUESTION */}

            <h2 className="mt-10 max-w-3xl font-serif text-[clamp(2.2rem,5vw,5rem)] leading-[0.95] tracking-[-0.045em]">

              But does it have{" "}

              <span className="text-[#b44735]">
                answers?
              </span>

            </h2>


            {/* DESCRIPTION */}

            <p className="mt-8 max-w-xl text-base leading-8 text-[#596158] md:text-lg">

              India generates enormous
              amounts of information every
              day. PARADOX brings people,
              data and real-world problems
              together to turn that information
              into meaningful solutions.

            </p>


            {/* SCROLL */}

            <div className="mt-12 flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfc8ba]">

                <span className="text-sm text-[#b44735]">
                  ↓
                </span>

              </div>

              <div>

                <p className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#17211b]">
                  Enter the data
                </p>

                <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-[#7b8179]">
                  Scroll to explore
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          SCALE
      ================================================= */}

      <section
        id="scale"
        className="relative z-10 min-h-screen px-6 py-32 md:px-16 md:py-48"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">

            <div>

              <p className="font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-[#b44735]">
                01 / The Scale
              </p>

              <div className="mt-8 h-px w-20 bg-[#cfc8ba]" />

            </div>


            <div>

              <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.8] tracking-[-0.075em]">

                13
                <br />

                <span className="font-serif font-normal italic text-[#355c4a]">
                  real-world
                </span>

                <br />

                challenges.

              </h2>

            </div>

          </div>


          {/* SCALE METRICS */}

          <div className="mt-24 grid gap-px border border-[#cfc8ba] bg-[#cfc8ba] md:grid-cols-3">

            <div className="bg-[#faf8f2] p-8 md:p-10">

              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#7b8179]">
                Across
              </p>

              <p className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#17211b]">
                INDIA
              </p>

            </div>


            <div className="bg-[#faf8f2] p-8 md:p-10">

              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#7b8179]">
                Focus
              </p>

              <p className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#355c4a]">
                DATA
              </p>

            </div>


            <div className="bg-[#faf8f2] p-8 md:p-10">

              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#7b8179]">
                Goal
              </p>

              <p className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#b44735]">
                IMPACT
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PROBLEMS
      ================================================= */}

      <section
        id="problems"
        className="relative z-10 min-h-screen bg-[#e7e1d5] px-6 py-32 md:px-16 md:py-48"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-4xl">

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-[#b44735]">
              02 / Discover
            </p>

            <h2 className="mt-8 text-[clamp(3rem,7vw,7rem)] font-black leading-[0.82] tracking-[-0.075em]">

              THE PROBLEMS
              <br />

              ARE
              <br />

              <span className="font-serif font-normal italic text-[#355c4a]">
                everywhere.
              </span>

            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#596158] md:text-lg">

              Explore the network. Hover over
              a region. Discover where the
              challenges are concentrated and
              uncover the questions hidden
              inside the data.

            </p>

          </div>


          {/* INTERACTION GUIDE */}

          <div className="mt-24 grid gap-px border border-[#cfc8ba] bg-[#cfc8ba] md:grid-cols-3">

            <div className="bg-[#faf8f2] p-8 md:p-10">

              <span className="font-mono text-xs font-bold text-[#b44735]">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl text-[#17211b]">
                Explore
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#596158]">
                Move across the data network
                and discover regions with
                active challenges.
              </p>

            </div>


            <div className="bg-[#faf8f2] p-8 md:p-10">

              <span className="font-mono text-xs font-bold text-[#b44735]">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl text-[#17211b]">
                Investigate
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#596158]">
                Select a region to uncover
                the problems represented
                by its data.
              </p>

            </div>


            <div className="bg-[#faf8f2] p-8 md:p-10">

              <span className="font-mono text-xs font-bold text-[#b44735]">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl text-[#17211b]">
                Solve
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#596158]">
                Turn the question into a
                data-driven solution.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PROBLEM INTELLIGENCE
      ================================================= */}

      <section
        id="problem-intelligence"
        className="relative z-10 min-h-screen bg-[#faf8f2] px-6 py-32 md:px-16 md:py-48"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-20">

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-[#b44735]">
              03 / Problem Intelligence
            </p>

            <h2 className="mt-8 max-w-5xl text-[clamp(3rem,7vw,8rem)] font-black leading-[0.8] tracking-[-0.075em]">

              FIND THE
              <br />

              <span className="font-serif font-normal italic text-[#355c4a]">
                question.
              </span>

            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#596158] md:text-lg">
              Every challenge begins with
              understanding the problem behind
              the data.
            </p>

          </div>


          {/* DYNAMIC PROBLEM CONTENT */}

          <ProblemReveal
            stateId={
              selectedState?.id ??
              null
            }
          />

        </div>

      </section>


      {/* =================================================
          HOW IT WORKS
      ================================================= */}

      <section
        id="how-it-works"
        className="relative z-10 bg-[#355c4a] px-6 py-32 text-[#faf8f2] md:px-16 md:py-48"
      >

        <div className="mx-auto max-w-[1400px]">

          <p className="font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-[#d6a84f]">
            04 / How it works
          </p>

          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.85] tracking-[-0.055em]">

            From

            <span className="text-[#d6a84f]">
              {" "}
              problem
            </span>

            <br />

            to

            <span className="text-[#d6a84f]">
              {" "}
              possibility.
            </span>

          </h2>


          {/* PROCESS */}

          <div className="mt-24 grid gap-px border border-white/15 bg-white/10 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Choose",
                text:
                  "Find a problem that matters to you.",
              },

              {
                number: "02",
                title: "Understand",
                text:
                  "Study the context, data and constraints.",
              },

              {
                number: "03",
                title: "Build",
                text:
                  "Create a solution using data and technology.",
              },

              {
                number: "04",
                title: "Impact",
                text:
                  "Show how your solution could make a difference.",
              },
            ].map(
              (item) => (
                <div
                  key={
                    item.number
                  }
                  className="bg-[#355c4a] p-8 md:p-10"
                >

                  <p className="font-mono text-xs text-[#d6a84f]">
                    {item.number}
                  </p>

                  <h3 className="mt-8 font-serif text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section
        id="register"
        className="relative z-10 flex min-h-screen items-center bg-[#b44735] px-6 py-32 text-[#faf8f2] md:px-16"
      >

        <div className="mx-auto w-full max-w-[1400px]">

          <p className="font-mono text-[8px] font-bold uppercase tracking-[0.35em] text-[#f5d8d1]">
            05 / The invitation
          </p>

          <h2 className="mt-10 max-w-6xl text-[clamp(4rem,10vw,10rem)] font-black leading-[0.78] tracking-[-0.085em]">

            YOU SAW
            <br />

            THE
            <br />

            <span className="font-serif font-normal italic">
              problem.
            </span>

          </h2>

          <p className="mt-10 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Now build the answer.
          </p>


          <button
            type="button"
            className="mt-12 inline-flex items-center gap-8 border border-white/50 bg-[#faf8f2] px-7 py-5 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#b44735] transition-all duration-300 hover:bg-[#17211b] hover:text-[#faf8f2]"
          >
            Enter PARADOX

            <span className="text-lg">
              →
            </span>

          </button>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="relative z-10 bg-[#17211b] px-6 py-12 text-[#faf8f2] md:px-16">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.35em]">
              PARADOX
            </p>

            <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.25em] text-white/45">
              National Datathon
            </p>

          </div>

          <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/35">
            Data → Questions → Impact
          </p>

        </div>

      </footer>

    </main>
  );
}