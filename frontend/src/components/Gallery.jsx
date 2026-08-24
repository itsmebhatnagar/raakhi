import Reveal from "@/components/Reveal";

/* ────────────────────────────────────────────────────────────────
   SWAP YOUR PHOTOS HERE
   Replace each `src` below with a real photo of you two —
   either a URL, or drop files in /frontend/public/photos/
   and use "/photos/your-file.jpg". Everything else stays as-is.
   ──────────────────────────────────────────────────────────────── */
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjB2aW50YWdlfGVufDB8fHx8MTc4NzU5ODQ5Mnww&ixlib=rb-4.1.0&q=85",
    caption: "the keeper of secrets",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1661292932068-8161765c3940?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHw0fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjB2aW50YWdlfGVufDB8fHx8MTc4NzU5ODQ5Mnww&ixlib=rb-4.1.0&q=85",
    caption: "partner in crime",
    span: "md:col-span-5 md:mt-32",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1504275490777-45f30792f13f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjB2aW50YWdlfGVufDB8fHx8MTc4NzU5ODQ5Mnww&ixlib=rb-4.1.0&q=85",
    caption: "home, personified",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.pexels.com/photos/30002351/pexels-photo-30002351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "the loud laughs",
    span: "md:col-span-8 md:mt-24",
    aspect: "aspect-[16/10]",
  },
  {
    src: "https://picsum.photos/id/1027/900/1100?grayscale",
    caption: "always, di",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://picsum.photos/id/64/1100/800?grayscale",
    caption: "us, forever",
    span: "md:col-span-7 md:mt-28",
    aspect: "aspect-[4/3]",
  },
];

const Frame = ({ photo, index }) => (
  <Reveal className={`col-span-1 ${photo.span}`} delay={(index % 2) * 0.12}>
    <figure className="group border border-[#0A0A0A]/80 bg-white p-2 sm:p-3">
      <div className={`overflow-hidden ${photo.aspect}`}>
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          data-testid={`gallery-image-${index}`}
          className="h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="flex items-baseline justify-between px-1 pb-1 pt-4">
        <span className="font-serif text-lg italic sm:text-xl">
          {photo.caption}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#0A0A0A]/50">
          fig. {String(index + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </figure>
  </Reveal>
);

const Gallery = () => (
  <section
    data-testid="gallery-section"
    className="px-6 py-24 sm:px-12 sm:py-36 lg:py-44"
  >
    <div className="mx-auto max-w-[1400px]">
      <Reveal>
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#0A0A0A]/60">
          Chapter 04 — in pictures
        </p>
        <h2 className="mt-6 font-serif text-5xl font-light leading-none tracking-tight sm:text-7xl">
          Fragments <span className="italic">of us</span>
        </h2>
      </Reveal>
      <div className="mt-20 grid grid-cols-1 gap-8 sm:mt-28 md:grid-cols-12 md:gap-10">
        {PHOTOS.map((p, i) => (
          <Frame key={p.caption} photo={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
