import Reveal from "@/components/Reveal";

const CHAPTERS = [
  {
    no: "01",
    title: "The Thread",
    quote:
      "You tie a thread on my wrist and call it protection — but you have been protecting me all along.",
    body: "Once a year, a simple thread. And yet we both know the truth of it: you were always the one who held everything together. Every storm I walked into, you had already checked the weather for me. Every time I fell, you were the floor before I ever hit the ground.",
    inverted: false,
  },
  {
    no: "02",
    title: "Us",
    quote:
      "We fought over the remote, the front seat, the last bite of everything — and somewhere in all that noise, you became my first best friend.",
    body: "The one who knew me before I knew myself. Keeper of every secret, witness to every version of me I have ever been. Distance, time, growing up — none of it has ever touched what we are.",
    inverted: true,
  },
  {
    no: "03",
    title: "The Promise",
    quote: "No gift could ever fit what you have given me. So here is a promise instead.",
    body: "In every lifetime, in every version of this story — I will find you, and I will stand behind you. Today, tomorrow, always. Happy Raksha Bandhan, Akshita Di.",
    inverted: false,
  },
];

const Chapter = ({ no, title, quote, body, inverted }) => (
  <section
    data-testid={`chapter-${no}`}
    className={`px-6 py-24 sm:px-12 sm:py-36 lg:py-44 ${
      inverted ? "bg-[#0A0A0A] text-[#F8F8F8]" : "bg-[#F8F8F8] text-[#0A0A0A]"
    }`}
  >
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-32">
          <Reveal>
            <span
              className={`block font-serif text-7xl font-light leading-none sm:text-8xl ${
                inverted ? "text-outline-inverted" : "text-outline"
              }`}
              data-testid={`chapter-${no}-number`}
            >
              {no}
            </span>
            <h3 className="mt-6 font-serif text-2xl italic sm:text-4xl">{title}</h3>
            <div
              className={`mt-8 h-px w-16 ${inverted ? "bg-white/30" : "bg-black/30"}`}
            />
          </Reveal>
        </div>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <Reveal delay={0.1}>
          <p
            className="font-serif text-3xl font-light leading-snug sm:text-5xl sm:leading-tight"
            data-testid={`chapter-${no}-quote`}
          >
            {quote}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p
            className={`ml-auto mt-14 max-w-xl text-base font-light leading-relaxed sm:text-lg ${
              inverted ? "text-white/70" : "text-black/70"
            }`}
          >
            {body}
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

const Chapters = () => (
  <div data-testid="chapters-section">
    {CHAPTERS.map((c) => (
      <Chapter key={c.no} {...c} />
    ))}
  </div>
);

export default Chapters;
