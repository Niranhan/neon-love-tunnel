import { useEffect, useState } from "react";

/** Top scroll progress bar + a tiny floating heart that travels along it. */
const ScrollProgress = () => {
  const [p, setP] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${p}%`,
          background:
            "linear-gradient(90deg, hsl(var(--love-pink)), hsl(var(--love-red)), hsl(var(--love-pink-glow)))",
          boxShadow: "0 0 12px hsl(var(--love-pink) / 0.9), 0 0 24px hsl(var(--love-red) / 0.6)",
        }}
      />
      <span
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-base"
        style={{
          left: `${p}%`,
          color: "hsl(var(--love-red))",
          textShadow: "0 0 10px hsl(var(--love-red)), 0 0 20px hsl(var(--love-pink))",
        }}
      >
        ♥
      </span>
    </div>
  );
};

export default ScrollProgress;
