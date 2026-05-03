import { useEffect, useState } from "react";
import FallingText from "@/components/love/FallingText";
import Hearts from "@/components/love/Hearts";
import Particles from "@/components/love/Particles";
import PhotoTunnel from "@/components/love/PhotoTunnel";
import LoveNotes from "@/components/love/LoveNotes";
import MusicToggle from "@/components/love/MusicToggle";
import StartScreen from "@/components/love/StartScreen";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const [opened, setOpened] = useState(false);
  useScrollReveal();

  // SEO: title + meta + canonical
  useEffect(() => {
    document.title = "For You ♡ — A Love Letter in Motion";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "A premium romantic 3D love memory page — falling neon love text, floating hearts, and a tunnel of memories.");
    if (!meta.parentElement) document.head.appendChild(meta);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.href);
    if (!canonical.parentElement) document.head.appendChild(canonical);
  }, []);

  return (
    <>
      {!opened && <StartScreen onOpen={() => setOpened(true)} />}

      {/* Ambient layers (always behind) */}
      <Particles />
      <Hearts />

      {/* Gradient blobs */}
      <div className="blob" style={{ width: 420, height: 420, background: "hsl(var(--love-pink) / 0.55)", top: "10%", left: "-80px" }} />
      <div className="blob" style={{ width: 520, height: 520, background: "hsl(var(--love-red) / 0.45)", bottom: "20%", right: "-120px", animationDelay: "2s" }} />

      <main className="relative z-10">
        {/* ===== Hero ===== */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
          <FallingText columns={10} />
          <div className="glass relative z-10 px-8 py-12 sm:px-14 sm:py-16 max-w-xl text-center reveal">
            <p className="glow-text-soft text-xs sm:text-sm tracking-[0.45em] uppercase mb-4">a love letter</p>
            <h1 className="script glow-text text-5xl sm:text-7xl leading-tight mb-6">
              I love you<br />bbe ♡
            </h1>
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              Scroll slowly. Every word, every photo, every heartbeat — it's all for you.
            </p>
            <div className="mt-8 flex justify-center">
              <span className="beat text-3xl text-primary" style={{ filter: "drop-shadow(0 0 12px hsl(var(--love-red)))" }}>♥</span>
            </div>
          </div>
        </section>

        {/* ===== 3D Photo Tunnel ===== */}
        <PhotoTunnel />

        {/* ===== Love Notes ===== */}
        <LoveNotes />

        {/* ===== Final Message ===== */}
        <section className="relative py-32 px-4 flex items-center justify-center min-h-screen">
          <FallingText columns={6} className="opacity-60" />
          <div className="glass relative z-10 px-8 py-16 sm:px-16 sm:py-20 max-w-2xl text-center reveal"
               style={{ boxShadow: "var(--glow-strong), var(--glass-shadow)" }}>
            <p className="glow-text-soft text-sm tracking-[0.4em] uppercase mb-6">and finally</p>
            <h2 className="script glow-text text-5xl sm:text-7xl leading-tight">
              You are my favorite memory <span className="beat inline-block">♡</span>
            </h2>
            <p className="mt-8 text-foreground/80 text-base sm:text-lg">
              Today, tomorrow, and every version of forever.
            </p>
          </div>
        </section>

        <footer className="relative py-10 text-center text-xs glow-text-soft">
          made with ♥ — just for you
        </footer>
      </main>

      <MusicToggle />
    </>
  );
};

export default Index;
