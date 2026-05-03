import { ReactNode } from "react";

interface Props {
  number: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** A cinematic chapter divider — like turning a page in your story. */
const Chapter = ({ number, title, subtitle, children }: Props) => (
  <section className="relative py-32 px-4 flex items-center justify-center min-h-[70vh]">
    <div className="text-center reveal max-w-2xl">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
        <span className="glow-text-soft text-xs tracking-[0.5em] uppercase">{number}</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
      <h2 className="script glow-text text-6xl sm:text-8xl leading-tight mb-6">{title}</h2>
      {subtitle && (
        <p className="text-foreground/75 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default Chapter;
