/* Animated, code-drawn cover art for each project (no screenshots needed) */

const Weather = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/40 via-indigo-600/40 to-violet-700/50 overflow-hidden">
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative w-[260px] h-[170px] scale-90 sm:scale-110">
        <div className="absolute top-0 right-6 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 shadow-[0_0_90px_24px_rgba(251,191,36,.45)] animate-float" />
        <div className="absolute top-12 left-0 animate-drift">
          <div className="relative w-44 h-16 rounded-full bg-white/95">
            <div className="absolute -top-8 left-6 w-20 h-20 rounded-full bg-white/95" />
            <div className="absolute -top-12 left-20 w-24 h-24 rounded-full bg-white/95" />
          </div>
          <div className="flex gap-5 ml-8 mt-2">
            {[0, 0.3, 0.6, 0.15, 0.45].map((d, i) => (
              <span key={i} className="w-[2px] h-5 bg-cyan-200 rounded animate-rain" style={{ animationDelay: `${d}s` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-5 left-6 font-display">
      <p className="text-5xl font-extrabold text-white">27°</p>
      <p className="font-mono text-[10px] text-white/70 tracking-widest">DHAKA · PARTLY CLOUDY</p>
    </div>
    <div className="absolute bottom-5 right-6 hidden sm:flex gap-2">
      {["MON", "TUE", "WED", "THU"].map((d, i) => (
        <div key={d} className="glass rounded-xl px-3 py-2 text-center">
          <p className="font-mono text-[9px] text-white/60">{d}</p>
          <p className="font-display text-sm font-bold text-white">{[29, 26, 24, 28][i]}°</p>
        </div>
      ))}
    </div>
  </div>
);

const Cherry = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-fuchsia-600/30 to-ink">
    <div className="absolute inset-0 grid grid-cols-3 gap-3 p-6 rotate-[-8deg] scale-110 opacity-80">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl bg-white/10 border border-white/15 p-2 animate-float" style={{ animationDelay: `${-i * 0.7}s` }}>
          <div className="h-12 rounded-xl bg-gradient-to-br from-rose-300/70 to-pink-600/70" />
          <div className="mt-2 h-1.5 w-3/4 rounded bg-white/40" />
          <div className="mt-1 h-1.5 w-1/2 rounded bg-white/20" />
        </div>
      ))}
    </div>
  </div>
);

const Green = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-teal-700/30 to-ink grid place-items-center">
    <div className="relative w-36 h-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,.12)" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="42" stroke="#34d399" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="80" />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-display text-3xl font-extrabold text-white">-32%</p>
          <p className="font-mono text-[10px] text-emerald-200">CO₂ / MONTH</p>
        </div>
      </div>
    </div>
  </div>
);

const Gold = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-yellow-700/25 to-ink grid place-items-center">
    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-100 via-gold to-amber-700 shadow-[0_0_90px_10px_rgba(245,196,81,.4)] grid place-items-center animate-spin-slow">
      <div className="w-20 h-20 rounded-full border-2 border-amber-900/40 grid place-items-center font-display font-extrabold text-amber-900 text-2xl">Au</div>
    </div>
  </div>
);

const Candles = () => {
  const c = [40, 55, 35, 62, 48, 70, 58, 80, 66, 88, 75, 92];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/25 via-violet-800/30 to-ink flex items-end gap-2 px-8 pb-10">
      {c.map((h, i) => {
        const up = i === 0 || h > c[i - 1];
        return (
          <div key={i} className="flex-1 flex flex-col items-center animate-float" style={{ animationDelay: `${-i * 0.35}s`, animationDuration: "5s" }}>
            <span className={`w-[2px] ${up ? "bg-emerald-300" : "bg-rose-300"}`} style={{ height: 10 }} />
            <span className={`w-full rounded-sm ${up ? "bg-emerald-400" : "bg-rose-400"}`} style={{ height: h * 1.1 }} />
          </div>
        );
      })}
      <span className="absolute top-6 left-8 font-mono text-xs text-gold tracking-widest">XAUUSD · BOS ↑</span>
    </div>
  );
};

const Wave = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-indigo-700/30 to-ink">
    <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
      <path d="M0 140 C 60 60, 120 180, 180 110 S 300 40, 400 90" stroke="#22d3ee" strokeWidth="3" fill="none" />
      <path d="M0 160 C 70 100, 130 190, 200 140 S 320 80, 400 120" stroke="#a78bfa" strokeWidth="2" fill="none" opacity=".7" strokeDasharray="6 6" />
      <circle cx="180" cy="110" r="6" fill="#f5c451" />
      <circle cx="300" cy="62" r="6" fill="#f5c451" />
    </svg>
    <span className="absolute top-6 left-8 font-mono text-xs text-cyan-200 tracking-widest">PARAMS AUTO-TUNED ✓</span>
  </div>
);

const map = { weather: Weather, cherry: Cherry, green: Green, gold: Gold, candles: Candles, wave: Wave };

const ProjectArt = ({ theme }) => {
  const Art = map[theme] || Wave;
  return <Art />;
};

export default ProjectArt;
