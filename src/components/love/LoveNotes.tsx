const notes = [
  { t: "Your laugh is my favorite song.", a: "on repeat, forever" },
  { t: "I'd choose you, in every universe.", a: "every single one" },
  { t: "Home isn't a place. It's you.", a: "always was" },
  { t: "You make ordinary days feel like magic.", a: "and the magic days, infinite" },
  { t: "If forever had a face, it would be yours.", a: "my forever" },
  { t: "Loving you is the easiest thing I do.", a: "and the most beautiful" },
];

const LoveNotes = () => (
  <section className="relative py-28 px-4">
    <header className="text-center mb-16 reveal">
      <p className="glow-text-soft text-sm tracking-[0.5em] uppercase mb-3">Little Things</p>
      <h2 className="script glow-text text-5xl sm:text-6xl">Whispers For You</h2>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {notes.map((n, i) => (
        <div
          key={i}
          className="glass love-note p-7 sm:p-8 reveal hover:scale-[1.03] transition-transform duration-500"
          style={{ animationDelay: `${i * 0.35}s` }}
        >
          <span className="glow-text-soft text-3xl leading-none block mb-3">“</span>
          <p className="script text-2xl sm:text-3xl glow-text leading-snug">{n.t}</p>
          <p className="mt-5 text-right text-xs tracking-[0.25em] uppercase glow-text-soft">— {n.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LoveNotes;
