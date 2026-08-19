"use client";

interface StateNodeOverlayProps {
  state: {
    id: string;
    name: string;
    intensity: number;
    challenges: number;
  } | null;

  position: {
    x: number;
    y: number;
  } | null;

  visible: boolean;

  onExplore: () => void;
}

export default function StateNodeOverlay({
  state,
  position,
  visible,
  onExplore,
}: StateNodeOverlayProps) {
  if (!state || !position || !visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-auto fixed z-50 w-[260px]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -115%)",
      }}
    >
      <div className="border border-[#cfc8ba] bg-[#faf8f2]/95 p-5 shadow-[0_20px_60px_rgba(23,43,34,0.12)] backdrop-blur-md">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.28em] text-[#b44735]">
              Region detected
            </p>

            <h3 className="mt-2 font-serif text-2xl leading-none text-[#17211b]">
              {state.name}
            </h3>
          </div>

          <span className="font-mono text-[9px] text-[#7b8179]">
            {state.id}
          </span>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">

          <div className="border border-[#ddd7cc] p-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7b8179]">
              Activity
            </p>

            <p className="mt-1 text-xl font-black text-[#355c4a]">
              {state.intensity}%
            </p>
          </div>

          <div className="border border-[#ddd7cc] p-3">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#7b8179]">
              Challenges
            </p>

            <p className="mt-1 text-xl font-black text-[#b44735]">
              {String(state.challenges).padStart(2, "0")}
            </p>
          </div>

        </div>

        <button
          type="button"
          onClick={onExplore}
          className="mt-4 flex w-full items-center justify-between border border-[#355c4a] px-4 py-3 font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-[#355c4a] transition hover:bg-[#355c4a] hover:text-[#faf8f2]"
        >
          Explore problems

          <span className="text-base">
            →
          </span>
        </button>

      </div>
    </div>
  );
}