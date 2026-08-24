import Marquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

const Phrase = () => (
  <span className="mx-6 flex items-center gap-12 sm:mx-10">
    <span className="font-serif font-light">Happy Raksha Bandhan</span>
    <Asterisk className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1} />
    <span className="text-outline font-serif italic">Akshita Di</span>
    <Asterisk className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1} />
  </span>
);

const EditorialMarquee = () => (
  <section
    data-testid="editorial-marquee"
    className="overflow-hidden border-y border-[#0A0A0A]/15 py-10 sm:py-14"
  >
    <Marquee speed={28} gradient={false} pauseOnHover>
      <div className="flex items-center whitespace-nowrap text-5xl sm:text-7xl lg:text-8xl">
        {Array.from({ length: 4 }).map((_, i) => (
          <Phrase key={i} />
        ))}
      </div>
    </Marquee>
  </section>
);

export default EditorialMarquee;
