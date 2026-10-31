import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw, Timer } from "lucide-react";

export const DraftTimer = ({ complete }: { complete: boolean }) => {
  const [seconds, setSeconds] = useState(30);
  const [running, setRunning] = useState(!complete);

  useEffect(() => {
    if (!running || complete || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [complete, running, seconds]);

  return (
    <div className={`flex items-center gap-2 border px-3 py-1.5 ${seconds <= 5 ? "border-redTeam/70 text-red-300" : "border-[#333] text-gold"}`}>
      <Timer size={17} />
      <span className="w-7 text-center font-display text-lg font-bold tabular-nums">{seconds}</span>
      <button type="button" aria-label={running ? "Pausar timer" : "Iniciar timer"} onClick={() => setRunning((value) => !value)} className="rounded p-1 hover:bg-white/10">
        {running ? <Pause size={14} /> : <Play size={14} />}
      </button>
      <button type="button" aria-label="Reiniciar timer" onClick={() => setSeconds(30)} className="rounded p-1 hover:bg-white/10">
        <RotateCcw size={14} />
      </button>
    </div>
  );
};
