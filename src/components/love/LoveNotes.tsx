const notes = [
  "Your laugh is my favorite song.",
  "I'd choose you, in every universe.",
  "Home isn't a place. It's you.",
  "You make ordinary days feel like magic.",
];

const LoveNotes = () => (
  <section className="relative py-24 px-4">
    <header className="text-center mb-16 reveal">
      <p className="glow-text-soft text-sm tracking-[0.4em] uppercase mb-3">Little Things</p>
      <h2 className="script glow-text text-5xl sm:text-6xl">Floating Love Notes</h2>
    </header>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {notes.map((n, i) => (
        <div
          key={i}
          className="glass love-note p-8 reveal"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <p className="script text-2xl sm:text-3xl glow-text leading-relaxed">{n}</p>
          <p className="mt-4 text-right text-sm glow-text-soft">— yours, always</p>
        </div>
      ))}
    </div>
  </section>
);

export default LoveNotes;
