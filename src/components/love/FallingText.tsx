import { useMemo } from "react";

/**
 * Continuous falling glowing love text columns.
 * Uses CSS variable --love-text via getComputedStyle fallback to a string.
 */
const LOVE_TEXT = "I love you bbe♡";

interface Props {
  columns?: number;
  className?: string;
}

const FallingText = ({ columns = 8, className = "" }: Props) => {
  const cols = useMemo(() => {
    return Array.from({ length: columns }).map((_, i) => {
      const left = (i / columns) * 100 + Math.random() * (80 / columns);
      const duration = 10 + Math.random() * 12; // 10s - 22s
      const delay = -Math.random() * duration;   // negative for staggered start
      const fontSize = 14 + Math.random() * 18;  // 14 - 32px
      const opacity = 0.45 + Math.random() * 0.55;
      const repeats = 14;
      return { left, duration, delay, fontSize, opacity, repeats, key: i };
    });
  }, [columns]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {cols.map((c) => (
        <div
          key={c.key}
          className="fall-column"
          style={{
            left: `${c.left}%`,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            fontSize: `${c.fontSize}px`,
            opacity: c.opacity,
          }}
        >
          {Array.from({ length: c.repeats }).map((_, j) => (
            <span key={j}>{LOVE_TEXT}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FallingText;
