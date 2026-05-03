import { useEffect, useRef } from "react";

const photos = [
  { src: "/photos/photo1.jpg", caption: "The day everything began ♡", chapter: "Chapter I", title: "First Light" },
  { src: "/photos/photo2.jpg", caption: "Your smile, my favorite view", chapter: "Chapter II", title: "Sunlit Days" },
  { src: "/photos/photo3.jpg", caption: "Lost in you, found in us", chapter: "Chapter III", title: "Together" },
  { src: "/photos/photo4.jpg", caption: "Every moment, a heartbeat", chapter: "Chapter IV", title: "Heartbeats" },
  { src: "/photos/photo5.jpg", caption: "Forever isn't long enough", chapter: "Chapter V", title: "Forever" },
  { src: "/photos/photo6.jpg", caption: "Family, love, you — my whole world", chapter: "Chapter VI", title: "My World" },
];

/**
 * Cinematic 3D scrolling photo tunnel — a "memory palace".
 * Cards alternate sides like rooms in a hallway you walk through.
 */
const PhotoTunnel = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const center = vh / 2;
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = (cardCenter - center) / vh;
        const clamped = Math.max(-1.3, Math.min(1.3, dist));
        const side = i % 2 === 0 ? 1 : -1;

        const rotY = clamped * 42 * side;
        const rotX = -clamped * 14;
        const rotZ = clamped * 4 * side;
        const translateZ = -Math.abs(clamped) * 280;
        const scale = 1 - Math.abs(clamped) * 0.22;
        const blur = Math.abs(clamped) * 5;
        const opacity = 1 - Math.abs(clamped) * 0.6;
        const translateX = clamped * 50 * -side;
        const translateY = Math.abs(clamped) * 20;

        el.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg) rotateZ(${rotZ}deg) scale(${scale})`;
        el.style.filter = `blur(${blur}px) brightness(${1 - Math.abs(clamped) * 0.3})`;
        el.style.opacity = String(Math.max(0.12, opacity));
      });
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative py-32 px-4">
      <header className="text-center mb-20 reveal">
        <p className="glow-text-soft text-sm tracking-[0.5em] uppercase mb-4">The Memory Palace</p>
        <h2 className="script glow-text text-5xl sm:text-7xl mb-4">Walk Through Us</h2>
        <p className="text-foreground/70 max-w-md mx-auto text-sm sm:text-base">
          Each room is a moment. Each moment, a forever.
        </p>
      </header>

      {/* center spine line — the hallway */}
      <div className="relative max-w-5xl mx-auto">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--love-pink) / 0.6), hsl(var(--love-red) / 0.4), transparent)",
            boxShadow: "0 0 20px hsl(var(--love-pink) / 0.5)",
          }}
        />

        <div className="tunnel flex flex-col items-center gap-40 sm:gap-48">
          {photos.map((p, i) => {
            const side = i % 2 === 0;
            return (
              <figure
                key={i}
                className={`reveal w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-16 ${side ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                <div className="flex-1 flex justify-center">
                  <div
                    ref={(el) => {
                      if (el) cardsRef.current[i] = el;
                    }}
                    className="photo-card relative"
                  >
                    <img
                      src={p.src}
                      alt={`Memory ${i + 1} — ${p.title}`}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23ff7eb6'/><stop offset='1' stop-color='%23801336'/></linearGradient></defs><rect width='400' height='500' fill='url(%23g)'/><text x='50%25' y='50%25' fill='white' font-family='sans-serif' font-size='28' text-anchor='middle' dominant-baseline='middle'>photo${i + 1}.jpg</text></svg>`;
                      }}
                    />
                    {/* photo frame shimmer */}
                    <div className="absolute inset-0 pointer-events-none rounded-[1.5rem]"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--love-white) / 0.18) 0%, transparent 40%, transparent 60%, hsl(var(--love-pink) / 0.15) 100%)",
                      }} />
                    {/* chapter badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass px-4 py-1 text-xs tracking-[0.3em] uppercase glow-text-soft whitespace-nowrap">
                      {p.chapter}
                    </div>
                  </div>
                </div>

                <figcaption className={`flex-1 text-center ${side ? "sm:text-left" : "sm:text-right"} px-2`}>
                  <p className="glow-text-soft text-xs tracking-[0.4em] uppercase mb-3">Memory {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="script glow-text text-4xl sm:text-5xl mb-4">{p.title}</h3>
                  <p className="script text-xl sm:text-2xl text-foreground/85 leading-relaxed max-w-sm mx-auto sm:mx-0 sm:inline-block">
                    {p.caption}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotoTunnel;
