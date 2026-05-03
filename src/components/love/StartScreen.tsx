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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center ${closing ? "start-fade-out" : ""}`}
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--love-bg-1)) 0%, hsl(var(--love-bg-3)) 80%)",
      }}
    >
      <Heart className="h-16 w-16 mb-8 text-primary beat" fill="currentColor" style={{ filter: "drop-shadow(0 0 20px hsl(var(--love-red)))" }} />
      <h1 className="script glow-text text-5xl sm:text-7xl mb-4">For You</h1>
      <p className="glow-text-soft max-w-md mb-10 text-base sm:text-lg">
        A little something I made — just press the button below.
      </p>
      <button
        onClick={handleClick}
        className="glass px-8 py-4 rounded-full text-lg font-medium tracking-wide hover:scale-105 active:scale-95 transition-transform glow-text"
        style={{ boxShadow: "var(--glow-strong)" }}
      >
        Open my heart ♡
      </button>
    </div>
  );
};

export default StartScreen;
