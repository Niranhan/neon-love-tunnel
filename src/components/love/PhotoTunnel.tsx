import { useEffect, useRef } from "react";

const photos = [
  { src: "/photos/photo1.jpg", caption: "The day everything began ♡" },
  { src: "/photos/photo2.jpg", caption: "Your smile, my favorite view" },
  { src: "/photos/photo3.jpg", caption: "Lost in you, found in us" },
  { src: "/photos/photo4.jpg", caption: "Every moment, a heartbeat" },
  { src: "/photos/photo5.jpg", caption: "Forever isn't long enough" },
];

/**
 * 3D scrolling photo tunnel.
 * Each card transforms based on its distance to viewport center:
 * rotateY, rotateX, scale, translateZ, blur, opacity.
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
        const dist = (cardCenter - center) / vh; // -1 .. 1 (roughly)
        const clamped = Math.max(-1.2, Math.min(1.2, dist));

        const rotY = clamped * 35 * (i % 2 === 0 ? 1 : -1);
        const rotX = -clamped * 18;
        const translateZ = -Math.abs(clamped) * 220;
        const scale = 1 - Math.abs(clamped) * 0.25;
        const blur = Math.abs(clamped) * 4;
        const opacity = 1 - Math.abs(clamped) * 0.55;
        const translateX = clamped * 30 * (i % 2 === 0 ? -1 : 1);

        el.style.transform = `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${scale})`;
        el.style.filter = `blur(${blur}px)`;
        el.style.opacity = String(Math.max(0.15, opacity));
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
    <section className="relative py-24 px-4">
      <header className="text-center mb-16 reveal">
        <p className="glow-text-soft text-sm tracking-[0.4em] uppercase mb-3">Our Memories</p>
        <h2 className="script glow-text text-5xl sm:text-6xl">A Tunnel of Us</h2>
      </header>

      <div className="tunnel max-w-3xl mx-auto flex flex-col items-center gap-32">
        {photos.map((p, i) => (
          <figure
            key={i}
            className="reveal flex flex-col items-center"
          >
            <div
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="photo-card"
            >
              <img
                src={p.src}
                alt={`Memory ${i + 1}`}
                loading="lazy"
                onError={(e) => {
                  // graceful placeholder if photo missing
                  (e.currentTarget as HTMLImageElement).src =
                    `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23ff7eb6'/><stop offset='1' stop-color='%23801336'/></linearGradient></defs><rect width='400' height='500' fill='url(%23g)'/><text x='50%25' y='50%25' fill='white' font-family='sans-serif' font-size='28' text-anchor='middle' dominant-baseline='middle'>photo${i + 1}.jpg</text></svg>`;
                }}
              />
            </div>
            <figcaption className="script glow-text-soft text-2xl mt-6 text-center">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default PhotoTunnel;
