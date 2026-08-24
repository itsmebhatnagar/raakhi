import Reveal from "@/components/Reveal";

const CHAPTERS = [
  {
    no: "01",
    title: "The Thread",
    quote: "Some threads are thicker than blood.",
    body: "We didn't share a cradle, a surname, or a childhood address. But the day you tied this thread on my wrist, all of that stopped mattering. You became my sister — not by an accident of birth, but by something far rarer: by choice.",
    inverted: false,
  },
  {
    no: "02",
    title: "Us",
    quote: "Fate forgot to make us siblings — so we went ahead and did it ourselves.",
    body: "You scold me like family, feed me like family, worry about me like family. No document anywhere says we're related, and yet you know me better than people who have known me since the day I was born. If that's not a sister, the word itself needs fixing.",
    inverted: true,
  },
  {
    no: "03",
    title: "The Promise",
    quote: "Sisters aren't always born into your life. Sometimes they walk in and never leave.",
    body: "You chose me as your brother, and I intend to earn it every single year. Wherever life takes us — different cities, different decades — this thread stays tied. Happy Raksha Bandhan, Akshita Di.",
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
