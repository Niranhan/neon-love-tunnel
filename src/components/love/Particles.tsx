import { useMemo } from "react";

const Particles = ({ count = 28 }: { count?: number }) => {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        key: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        duration: 12 + Math.random() * 14,
        delay: -Math.random() * 20,
        dx: (Math.random() - 0.5) * 120,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {items.map((p) => (
        <span
          key={p.key}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // @ts-ignore custom prop
            ["--dx" as any]: `${p.dx}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
