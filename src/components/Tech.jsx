import { motion } from "framer-motion";

import { skillGroups } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { spotlightHandler } from "../hooks";
import SectionHead from "./SectionHead";

const SkillIcon = ({ item, size = "w-7 h-7" }) =>
  item.icon ? (
    <img src={item.icon} alt="" loading="lazy" className={`${size} object-contain ${item.invert ? "invert" : ""}`} />
  ) : (
    <span className={`${size} grid place-items-center rounded-md bg-gradient-to-br from-gold to-amber-600 text-ink font-mono text-[9px] font-bold`}>
      {item.glyph}
    </span>
  );

const Pill = ({ item }) => (
  <div className="flex items-center gap-3 rounded-2xl glass px-5 py-3 mx-2 shrink-0">
    <SkillIcon item={item} size="w-6 h-6" />
    <span className="text-white/85 font-medium whitespace-nowrap">{item.name}</span>
  </div>
);

const all = skillGroups.flatMap((g) => g.items).filter((v, i, a) => a.findIndex((x) => x.name === v.name) === i);

const Marquee = ({ items, reverse }) => (
  <div className="mask-x overflow-hidden py-2">
    <div className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"} hover:[animation-play-state:paused]`}>
      {[...items, ...items].map((it, i) => <Pill key={i} item={it} />)}
    </div>
  </div>
);

const Tech = () => (
  <>
    <SectionHead index="03" sub="Toolbox" title="Skills &" accent="stack." />

    <div className="mt-14 grid md:grid-cols-2 gap-5">
      {skillGroups.map((g, gi) => (
        <motion.div
          key={g.title}
          variants={fadeIn("up", "spring", gi * 0.12, 0.8)}
          onMouseMove={spotlightHandler}
          className="spotlight glass rounded-3xl p-7"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-white">{g.title}</h3>
            <span className="font-mono text-xs text-secondary">{String(g.items.length).padStart(2, "0")} items</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {g.items.map((it) => (
              <motion.div
                key={it.name}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-violet/50 px-3.5 py-2.5 transition-colors"
              >
                <SkillIcon item={it} />
                <span className="text-sm text-white/85">{it.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-14 -mx-6 sm:-mx-16 space-y-3">
      <Marquee items={all.slice(0, Math.ceil(all.length / 2))} />
      <Marquee items={all.slice(Math.ceil(all.length / 2))} reverse />
    </div>
  </>
);

export default SectionWrapper(Tech, "skills");
