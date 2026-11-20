import { motion } from "framer-motion";
import { research } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { spotlightHandler } from "../hooks";
import SectionHead from "./SectionHead";
import Icon from "./Icons";

const Research = () => (
  <>
    <SectionHead index="05" sub="Academic research" title="Thesis" accent="work." />
    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-6 text-secondary text-[17px] max-w-2xl leading-relaxed">
      Undergraduate research at AUST applying machine learning and deep learning to language and sound.
    </motion.p>

    <div className="mt-12 grid lg:grid-cols-3 gap-5">
      {research.map((r, i) => (
        <motion.article
          key={r.title}
          variants={fadeIn("up", "spring", i * 0.15, 0.8)}
          onMouseMove={spotlightHandler}
          whileHover={{ y: -6 }}
          className="spotlight gradient-border glass rounded-3xl p-7 flex flex-col min-h-[280px]"
        >
          <div className="flex items-center justify-between">
            <span className="w-12 h-12 rounded-2xl grid place-items-center bg-violet/15 text-violet-soft"><Icon name="book" /></span>
            <span className="font-display text-5xl font-extrabold outline-text">0{i + 1}</span>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">{r.area}</p>
          <h3 className="mt-3 font-display text-lg font-bold text-white leading-snug">{r.title}</h3>
          <p className="mt-auto pt-6 text-sm text-secondary">{r.authors}</p>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Research, "research");
