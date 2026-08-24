import Reveal from "@/components/Reveal";

const Footer = () => (
  <footer
    data-testid="footer-section"
    className="border-t border-[#0A0A0A]/15 px-6 pb-40 pt-24 sm:px-12 sm:pt-36"
  >
    <div className="mx-auto max-w-[1400px]">
      <Reveal>
        <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-8xl">
          With all my love,
          <br />
          <span className="italic">your brother.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-20 flex flex-col gap-6 border-t border-[#0A0A0A]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#0A0A0A]/60">
            Made for Akshita Di — Raksha Bandhan 2026
          </p>
          <p
            data-testid="footer-seal-hint"
            className="font-serif text-lg italic text-[#0A0A0A]/70"
          >
            p.s. — a seal waits in the corner. you probably shouldn't open it.
          </p>
        </div>
      </Reveal>
    </div>
  </footer>
);

export default Footer;
