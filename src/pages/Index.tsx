import { useEffect, useState } from "react";
import FallingText from "@/components/love/FallingText";
import Hearts from "@/components/love/Hearts";
import Particles from "@/components/love/Particles";
import PhotoTunnel from "@/components/love/PhotoTunnel";
import LoveNotes from "@/components/love/LoveNotes";
import MusicToggle from "@/components/love/MusicToggle";
import StartScreen from "@/components/love/StartScreen";
import ScrollProgress from "@/components/love/ScrollProgress";
import Chapter from "@/components/love/Chapter";
import Timeline from "@/components/love/Timeline";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const [opened, setOpened] = useState(false);
  useScrollReveal();

  useEffect(() => {
    document.title = "For You ♡ — A Memory Built in Light";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "A premium romantic 3D memory palace — falling neon love text, glowing hearts, parallax photo chapters, and whispered love notes.");
    if (!meta.parentElement) document.head.appendChild(meta);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.href);
    if (!canonical.parentElement) document.head.appendChild(canonical);
  }, []);

  // re-trigger reveal observer when content mounts after start
  useEffect(() => {
    if (opened) {
      const id = setTimeout(() => {
        document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) el.classList.add("in");
        });
      }, 50);
      return () => clearTimeout(id);
    }
  }, [opened]);

  return (
    <>
      {!opened && <StartScreen onOpen={() => setOpened(true)} />}

      {opened && <ScrollProgress />}

      {/* Ambient layers */}
      <Particles />
      <Hearts />

      {/* Gradient blobs */}
      <div className="blob parallax-slow" style={{ width: 420, height: 420, background: "hsl(var(--love-pink) / 0.55)", top: "8%", left: "-80px" }} />
      <div className="blob parallax-fast" style={{ width: 520, height: 520, background: "hsl(var(--love-red) / 0.45)", bottom: "18%", right: "-120px", animationDelay: "2s" }} />
      <div className="blob parallax-slow" style={{ width: 360, height: 360, background: "hsl(var(--love-pink-glow) / 0.4)", top: "55%", left: "40%", animationDelay: "4s" }} />

      <main className={`relative z-10 ${opened ? "page-enter" : ""}`}>
        {/* ===== Hero ===== */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
          <FallingText columns={12} />
          <div className="glass relative z-10 px-8 py-14 sm:px-16 sm:py-20 max-w-xl text-center reveal"
               style={{ boxShadow: "var(--glow-strong), var(--glass-shadow)" }}>
            <p className="glow-text-soft text-xs sm:text-sm tracking-[0.5em] uppercase mb-5">a love letter</p>
            <h1 className="script shimmer text-6xl sm:text-8xl leading-none mb-7">
              I love you<br />bbe ♡
            </h1>
            <div className="glow-divider mx-auto max-w-[60%] mb-7" />
            <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
              Welcome to a little place I built in your honor.<br />
              Scroll slowly — every word, every photo, every heartbeat is yours.
            </p>
            <div className="mt-10 flex justify-center">
              <span className="beat text-4xl text-primary" style={{ filter: "drop-shadow(0 0 16px hsl(var(--love-red)))" }}>♥</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.5em] uppercase glow-text-soft animate-bounce">
            scroll
          </div>
        </section>

        {/* ===== Chapter 1 ===== */}
        <Chapter
          number="Chapter One"
          title="It started with you"
          subtitle="Before I knew your name, something in me already did. The world had been waiting to show me you."
        />

        {/* ===== Memory Palace ===== */}
        <PhotoTunnel />

        {/* ===== Chapter 2 ===== */}
        <Chapter
          number="Chapter Two"
          title="Between the heartbeats"
          subtitle="The moments no camera caught — they live here, in the quiet space between us."
        />

        {/* ===== Timeline ===== */}
        <Timeline />

        {/* ===== Chapter 3 ===== */}
        <Chapter
          number="Chapter Three"
          title="Whispers I never said out loud"
          subtitle="Every line below is something my heart has been writing about you."
        />

        {/* ===== Love Notes ===== */}
        <LoveNotes />

        {/* ===== Final ===== */}
        <section className="relative py-32 px-4 flex items-center justify-center min-h-screen">
          <FallingText columns={8} className="opacity-70" />
          <div className="glass relative z-10 px-8 py-16 sm:px-16 sm:py-24 max-w-2xl text-center reveal"
               style={{ boxShadow: "var(--glow-strong), var(--glass-shadow)" }}>
            <p className="glow-text-soft text-sm tracking-[0.5em] uppercase mb-6">and finally</p>
            <h2 className="script shimmer text-5xl sm:text-7xl leading-tight mb-6">
              You are my favorite memory ♡
            </h2>
            <div className="glow-divider mx-auto max-w-[50%] mb-7" />
            <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
              Today, tomorrow, and every version of forever —<br />
              I'll keep choosing you. <span className="beat inline-block text-primary">♥</span>
            </p>
            <p className="mt-10 script glow-text text-2xl sm:text-3xl">
              — yours, always
            </p>
          </div>
        </section>

        <footer className="relative py-12 text-center text-xs tracking-[0.4em] uppercase glow-text-soft">
          made with ♥ — just for you
        </footer>
      </main>

      <MusicToggle />
    </>
  );
};

export default Index;
