import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { EASE } from "@/components/Reveal";

const Surprise = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        data-testid="surprise-seal-button"
        aria-label="Open the secret message"
        className="group fixed bottom-8 left-8 z-40 flex h-24 w-24 items-center justify-center rounded-full bg-[#0A0A0A] text-[#F8F8F8] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105 sm:h-28 sm:w-28"
      >
        <svg
          viewBox="0 0 100 100"
          className="animate-spin-slow absolute inset-0 h-full w-full"
        >
          <defs>
            <path
              id="seal-circle"
              d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-[#F8F8F8]/70 text-[8.5px] uppercase tracking-[0.22em]">
            <textPath href="#seal-circle">
              do not open · for akshita di only ·
            </textPath>
          </text>
        </svg>
        <Mail
          className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-12"
          strokeWidth={1.25}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="surprise-overlay"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0A0A0A] px-6 text-[#F8F8F8]"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <button
              onClick={() => setOpen(false)}
              data-testid="surprise-close-button"
              aria-label="Close the secret message"
              className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: EASE }}
              className="max-w-2xl"
            >
              <p
                data-testid="surprise-label"
                className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/50"
              >
                for your eyes only
              </p>
              <p
                data-testid="surprise-message"
                className="mt-10 font-serif text-3xl font-light leading-snug sm:text-5xl sm:leading-tight"
              >
                P.S. — I never say this out loud, so read it here: you're not
                my sister by blood —
                <span className="italic">
                  {" "}
                  you're my sister by every single thing that actually matters.
                </span>{" "}
                Thank you for choosing me as your brother. I love you, Di.
              </p>
              <div className="mt-14 flex items-center gap-6">
                <div className="h-px w-16 bg-white/30" />
                <p className="font-serif text-2xl italic text-white/80">
                  your brother, by choice, always
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Surprise;
