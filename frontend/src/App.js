import { useEffect, useState } from "react";
import Lenis from "lenis";
import CountdownGate, { RAKHI_DATE } from "@/components/CountdownGate";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Chapters from "@/components/Chapters";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Surprise from "@/components/Surprise";
import MusicToggle from "@/components/MusicToggle";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function App() {
  const [unlocked, setUnlocked] = useState(
    () =>
      new URLSearchParams(window.location.search).has("preview") ||
      Date.now() >= RAKHI_DATE.getTime(),
  );

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-[#F8F8F8] text-[#0A0A0A] antialiased">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: GRAIN }}
      />
      {!unlocked && <CountdownGate onUnlock={() => setUnlocked(true)} />}
      {unlocked && (
        <>
          <Hero />
          <EditorialMarquee />
          <Chapters />
          <Gallery />
          <Footer />
          <Surprise />
          <MusicToggle />
        </>
      )}
    </main>
  );
}

export default App;
