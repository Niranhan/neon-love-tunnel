import { useMemo } from "react";

interface Props { count?: number; }

const Hearts = ({ count = 18 }: Props) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        key: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 28,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 12,
        opacity: 0.6 + Math.random() * 0.4,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {hearts.map((h) => (
        <span
          key={h.key}
          className="heart"
          style={{
            left: `${h.left}%`,
            bottom: `-${h.size}px`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default Hearts;
