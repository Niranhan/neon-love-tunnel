import { useState } from "react";
import { Heart } from "lucide-react";

interface Props { onOpen: () => void; }

const StartScreen = ({ onOpen }: Props) => {
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    setClosing(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center overflow-hidden ${closing ? "start-fade-out" : ""}`}
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--love-bg-1)) 0%, hsl(var(--love-bg-3)) 80%)",
      }}
    >
      {/* swirling aura */}
      <div className="aura" />

      {/* tiny floating hearts on start */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${20 + Math.random() * 30}px`,
              fontSize: `${10 + Math.random() * 22}px`,
              animationDuration: `${7 + Math.random() * 8}s`,
              animationDelay: `${-Math.random() * 10}s`,
              opacity: 0.7,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-6">
          <Heart
            className="h-20 w-20 text-primary beat"
            fill="currentColor"
            style={{ filter: "drop-shadow(0 0 28px hsl(var(--love-red))) drop-shadow(0 0 60px hsl(var(--love-pink)))" }}
          />
          <div className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "radial-gradient(circle, hsl(var(--love-red) / 0.5), transparent 60%)" }} />
        </div>

        <p className="glow-text-soft text-xs sm:text-sm tracking-[0.5em] uppercase mb-4">a love letter</p>
        <h1 className="script shimmer text-6xl sm:text-8xl mb-5 leading-none">For You</h1>
        <p className="glow-text-soft max-w-md mb-10 text-base sm:text-lg leading-relaxed">
          Press the button below — and let me show you a little corner of forever I built, just for you.
        </p>

        <button
          onClick={handleClick}
          className="group glass relative px-10 py-5 rounded-full text-lg font-medium tracking-wider hover:scale-110 active:scale-95 transition-transform duration-500 glow-text overflow-hidden"
          style={{ boxShadow: "var(--glow-strong)" }}
        >
          <span className="relative z-10">Open my heart ♡</span>
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(120deg, hsl(var(--love-pink) / 0.25), hsl(var(--love-red) / 0.25))",
            }}
          />
        </button>

        <p className="mt-8 text-xs tracking-[0.4em] uppercase glow-text-soft animate-pulse">
          ↓ scroll slowly when you're inside ↓
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
