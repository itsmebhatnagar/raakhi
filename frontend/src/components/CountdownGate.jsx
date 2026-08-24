import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { EASE } from "@/components/Reveal";

export const RAKHI_DATE = new Date("2026-08-28T00:00:00"); // local midnight
export const LOCK_ENABLED = false; // flip to true to re-seal the letter until midnight

const pad = (n) => String(Math.max(0, n)).padStart(2, "0");

const Unit = ({ value, label, testid }) => (
  <div className="flex flex-col items-center gap-3 border-l border-white/15 px-4 first:border-l-0 sm:px-10">
    <span
      data-testid={testid}
      className="w-[1.5em] text-center font-serif text-6xl font-light leading-none sm:text-8xl"
    >
      {pad(value)}
    </span>
    <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
      {label}
    </span>
  </div>
);

const CountdownGate = ({ onUnlock }) => {
  const [now, setNow] = useState(() => Date.now());
  const [lifting, setLifting] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = RAKHI_DATE.getTime() - now;

  useEffect(() => {
    if (diff <= 0) setLifting(true);
  }, [diff]);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <motion.div
      data-testid="countdown-gate"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] px-6 text-[#F8F8F8]"
      initial={false}
      animate={lifting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 1.2, ease: EASE }}
      onAnimationComplete={() => {
        if (lifting) onUnlock();
      }}
    >
      <p className="absolute top-10 text-[11px] font-medium uppercase tracking-[0.4em] text-white/50">
        sealed with love
      </p>

      <div className="relative mb-14 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
        <svg
          viewBox="0 0 100 100"
          className="animate-spin-slow absolute inset-0 h-full w-full"
        >
          <defs>
            <path
              id="gate-circle"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
            />
          </defs>
          <text className="fill-white/60 text-[8px] uppercase tracking-[0.2em]">
            <textPath href="#gate-circle">
              opens at midnight · raksha bandhan · 28 · 08 ·
            </textPath>
          </text>
        </svg>
        <Lock className="h-6 w-6 text-white/80" strokeWidth={1.25} />
      </div>

      <div data-testid="countdown-timer" className="flex items-start justify-center">
        <Unit value={days} label="days" testid="countdown-days" />
        <Unit value={hours} label="hours" testid="countdown-hours" />
        <Unit value={minutes} label="minutes" testid="countdown-minutes" />
        <Unit value={seconds} label="seconds" testid="countdown-seconds" />
      </div>

      <p className="mt-14 max-w-md text-center font-serif text-xl italic text-white/70 sm:text-2xl">
        a letter for Akshita Di unties when the thread does
      </p>

      <a
        href="?preview=true"
        data-testid="countdown-preview-link"
        className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.3em] text-white/30 transition-colors duration-300 hover:text-white/80"
      >
        sender preview
      </a>
    </motion.div>
  );
};

export default CountdownGate;
