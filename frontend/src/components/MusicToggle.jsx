import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/* Soft ambient instrumental generated with WebAudio (no file needed).
   To use a real recording instead: replace toggle() with an
   <audio> element pointing at your mp3 in /public. */
const buildAmbient = () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 620;
  filter.connect(master);

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.05;
  lfoGain.gain.value = 260;
  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  lfo.start();

  const notes = [130.81, 196.0, 261.63, 329.63, 392.0];
  notes.forEach((f, i) => {
    const osc = ctx.createOscillator();
    osc.type = i < 2 ? "sine" : "triangle";
    osc.frequency.value = f;
    osc.detune.value = (i - 2) * 3;
    const g = ctx.createGain();
    g.gain.value = i < 2 ? 0.055 : 0.022;
    const trem = ctx.createOscillator();
    const tremGain = ctx.createGain();
    trem.frequency.value = 0.06 + i * 0.025;
    tremGain.gain.value = g.gain.value * 0.5;
    trem.connect(tremGain);
    tremGain.connect(g.gain);
    trem.start();
    osc.connect(g);
    g.connect(filter);
    osc.start();
  });

  return { ctx, master };
};

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const ambientRef = useRef(null);

  const toggle = () => {
    if (!ambientRef.current) ambientRef.current = buildAmbient();
    const { ctx, master } = ambientRef.current;
    const t = ctx.currentTime;
    master.gain.cancelScheduledValues(t);
    if (playing) {
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(0, t + 1.5);
    } else {
      ctx.resume();
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(0.5, t + 2);
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      data-testid="music-toggle-button"
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A0A0A] text-[#F8F8F8] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
    >
      {playing && (
        <span className="animate-spin-slow absolute -inset-2 rounded-full border border-dashed border-[#0A0A0A]/40" />
      )}
      {playing ? (
        <Volume2 className="h-5 w-5" strokeWidth={1.5} />
      ) : (
        <VolumeX className="h-5 w-5" strokeWidth={1.5} />
      )}
    </button>
  );
};

export default MusicToggle;
