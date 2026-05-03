const moments = [
  { time: "The first hello", text: "A glance, a heartbeat skipped — and I knew." },
  { time: "The first laugh", text: "You laughed and the whole world got brighter." },
  { time: "The first ‘us’", text: "Two stories quietly became one." },
  { time: "Every day since", text: "Choosing you, again and again, without thinking." },
  { time: "Today", text: "Still falling. Still in awe. Still yours." },
];

const Timeline = () => (
  <section className="relative py-28 px-4">
    <header className="text-center mb-16 reveal">
      <p className="glow-text-soft text-sm tracking-[0.5em] uppercase mb-3">Our Story</p>
      <h2 className="script glow-text text-5xl sm:text-6xl">A Timeline of Heartbeats</h2>
    </header>

    <div className="relative max-w-2xl mx-auto">
      <div
        className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--love-pink) / 0.7), hsl(var(--love-red) / 0.5), transparent)",
          boxShadow: "0 0 16px hsl(var(--love-pink) / 0.5)",
        }}
      />
      <ul className="space-y-14">
        {moments.map((m, i) => {
          const left = i % 2 === 0;
          return (
            <li key={i} className={`reveal relative pl-12 sm:pl-0 sm:flex ${left ? "sm:justify-start" : "sm:justify-end"}`}>
              <span
                className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full beat"
                style={{
                  background: "hsl(var(--love-red))",
                  boxShadow: "0 0 14px hsl(var(--love-red)), 0 0 28px hsl(var(--love-pink))",
                }}
              />
              <div className={`glass p-6 sm:p-8 sm:w-[46%] ${left ? "sm:mr-auto sm:text-right sm:pr-10" : "sm:ml-auto sm:text-left sm:pl-10"}`}>
                <p className="glow-text-soft text-xs tracking-[0.3em] uppercase mb-2">{m.time}</p>
                <p className="script glow-text text-2xl sm:text-3xl leading-snug">{m.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Timeline;
