"use client";

import { useEffect, useState } from "react";

interface ProblemDataVisualProps {
  category: string;
  intensity: number;
}

const chartData = [
  34, 48, 42, 57, 51, 68, 62, 76, 71, 84, 78, 92,
];

export default function ProblemDataVisual({
  category,
  intensity,
}: ProblemDataVisualProps) {
  const [visibleBars, setVisibleBars] = useState(0);

  useEffect(() => {
    setVisibleBars(0);

    const timer = window.setInterval(() => {
      setVisibleBars((current) => {
        if (current >= chartData.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 70);

    return () => {
      window.clearInterval(timer);
    };
  }, [category]);

  return (
    <div className="relative overflow-hidden border border-[#cfc8ba] bg-[#17211b] p-6 text-[#faf8f2] md:p-8">

      {/* HEADER */}

      <div className="flex items-start justify-between gap-6">

        <div>
          <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#d6a84f]">
            Data signal
          </p>

          <p className="mt-2 font-serif text-2xl">
            {category}
          </p>
        </div>

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 animate-pulse rounded-full bg-[#d6a84f]" />

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/50">
            LIVE SIGNAL
          </span>

        </div>

      </div>


      {/* MAIN VALUE */}

      <div className="mt-10 flex items-end justify-between">

        <div>

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
            Intensity
          </p>

          <p className="mt-2 text-6xl font-black leading-none tracking-[-0.07em] text-[#d6a84f]">
            {intensity}
            <span className="text-xl">
              %
            </span>
          </p>

        </div>

        <p className="max-w-[130px] text-right font-mono text-[7px] uppercase leading-4 tracking-[0.15em] text-white/35">
          Pattern detected across regional data
        </p>

      </div>


      {/* CHART */}

      <div className="mt-10">

        <div className="flex h-[180px] items-end gap-2 border-b border-white/15">

          {chartData.map(
            (value, index) => {
              const active =
                index <
                visibleBars;

              return (
                <div
                  key={index}
                  className="group relative flex h-full flex-1 items-end"
                >

                  <div
                    className={`w-full origin-bottom transition-all duration-500 ${
                      active
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                    } ${
                      index ===
                      chartData.length - 1
                        ? "bg-[#b44735]"
                        : "bg-[#d6a84f]/70"
                    }`}
                    style={{
                      height: `${value}%`,
                    }}
                  />

                  {/* VALUE */}

                  {active && (
                    <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[6px] text-white/40 opacity-0 transition-opacity group-hover:opacity-100">
                      {value}
                    </span>
                  )}

                </div>
              );
            }
          )}

        </div>


        {/* AXIS */}

        <div className="mt-3 flex justify-between">

          <span className="font-mono text-[6px] uppercase tracking-[0.15em] text-white/30">
            T-12
          </span>

          <span className="font-mono text-[6px] uppercase tracking-[0.15em] text-white/30">
            T-06
          </span>

          <span className="font-mono text-[6px] uppercase tracking-[0.15em] text-white/30">
            NOW
          </span>

        </div>

      </div>


      {/* SIGNAL MESSAGE */}

      <div className="mt-8 border-t border-white/10 pt-5">

        <div className="flex items-center gap-3">

          <span className="font-mono text-[8px] font-bold text-[#b44735]">
            ↑
          </span>

          <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/50">
            Increasing pattern detected
          </p>

        </div>

      </div>

    </div>
  );
}