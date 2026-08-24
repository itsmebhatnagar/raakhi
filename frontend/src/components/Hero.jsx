import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EASE } from "@/components/Reveal";

const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
    <motion.span
      className={`block will-change-transform ${className}`}
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 60,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 60,
    damping: 18,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const handleMouse = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-20 sm:px-12"
    >
      {/* on-load curtain */}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0A0A0A]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1.5, duration: 1.1, ease: EASE }}
      >
        <motion.p
          className="font-serif text-2xl italic text-[#F8F8F8] sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.4, times: [0, 0.25, 0.75, 1] }}
        >
          a letter, for you —
        </motion.p>
      </motion.div>

      {/* 3D letterpress card */}
      <motion.div
        style={{ y: cardY, perspective: 1000 }}
        className="pointer-events-none absolute right-[6vw] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <motion.div
          data-testid="hero-letterpress-card"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 1.4, ease: EASE }}
          className="animate-float-soft"
        >
          <div className="flex h-[420px] w-[300px] flex-col items-center justify-between border border-white/20 bg-[#0A0A0A] p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)]">
            <div className="flex h-full w-full flex-col items-center justify-between border border-white/25 px-6 py-8 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
                This card belongs to
              </p>
              <div>
                <p className="font-serif text-6xl italic leading-none text-[#F8F8F8]">
                  Akshita
                </p>
                <p className="mt-2 font-serif text-3xl font-light text-white/80">
                  Di
                </p>
              </div>
              <div className="space-y-2">
                <div className="mx-auto h-px w-10 bg-white/30" />
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                  est. forever
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* headline */}
      <motion.div style={{ y: textY }} className="relative z-10 max-w-[1400px]">
        <MaskedLine delay={1.8}>
          <span
            data-testid="hero-eyebrow"
            className="mb-8 inline-block text-[11px] font-medium uppercase tracking-[0.4em] text-[#0A0A0A]/60"
          >
            Raksha Bandhan — 28 · 08 · 2026
          </span>
        </MaskedLine>
        <h1
          data-testid="hero-heading"
          className="font-serif font-light leading-[0.88] tracking-tighter"
        >
          <MaskedLine delay={1.95} className="text-[15vw] sm:text-[12vw] lg:text-[9vw]">
            Dearest
          </MaskedLine>
          <MaskedLine delay={2.1} className="text-[18vw] italic sm:text-[15vw] lg:text-[11.5vw]">
            Akshita&nbsp;Di
          </MaskedLine>
        </h1>
        <MaskedLine delay={2.4}>
          <p className="mt-12 max-w-md text-base font-light leading-relaxed text-[#0A0A0A]/70 sm:text-lg">
            A letter written in black &amp; white — because a bond like ours
            never needed colour to be seen.
          </p>
        </MaskedLine>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-6 flex items-center gap-4 sm:left-12"
        data-testid="hero-scroll-hint"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#0A0A0A]/50">
          scroll slowly, read softly
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
