import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services, quickFacts } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { spotlightHandler } from "../hooks";
import SectionHead from "./SectionHead";
import Icon from "./Icons";

const ServiceCard = ({ index, title, desc, icon, accent }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.8)} className="h-full">
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.12} glareBorderRadius="24px" scale={1.02} className="h-full">
      <div onMouseMove={spotlightHandler} className="spotlight gradient-border glass rounded-3xl p-7 h-full min-h-[250px] flex flex-col">
        <div className="w-14 h-14 rounded-2xl grid place-items-center" style={{ background: `${accent}1f`, color: accent, boxShadow: `0 0 40px -8px ${accent}` }}>
          <Icon name={icon} className="w-7 h-7" />
        </div>
        <h3 className="mt-6 font-display text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-secondary text-sm leading-relaxed">{desc}</p>
        <span className="mt-auto pt-6 font-mono text-[11px] text-white/30">0{index + 1}</span>
      </div>
    </Tilt>
  </motion.div>
);

const About = () => (
  <>
    <SectionHead index="01" sub="Introduction" title="Code meets" accent="capital." />

    <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="space-y-5 text-[17px] leading-[1.85] text-secondary">
        <p>
          I&apos;m <span className="text-white font-semibold">Fhamid Mottaki Aurnob</span>, a Computer Science &amp; Engineering
          graduate from AUST who lives where software and finance overlap.
        </p>
        <p>
          For nearly three years at <span className="text-white">Orion Group</span> I built Android applications and worked with
          SAP Plant Maintenance. Today at <span className="text-white">City Bank PLC</span> I work inside the Core Banking System
          every day — so I know how financial products are actually used, not just how they&apos;re coded.
        </p>
        <p>
          After hours I ship Kotlin apps, build fintech platforms like <span className="text-gold font-semibold">GoldHunt</span>, and
          engineer algorithmic trading systems for gold markets.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("left", "spring", 0.2, 1)} className="grid grid-cols-2 gap-3">
        {quickFacts.map((f) => (
          <div key={f.label} className="glass rounded-2xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">{f.label}</p>
            <p className="mt-2 font-display font-bold text-white">{f.value}</p>
          </div>
        ))}
      </motion.div>
    </div>

    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services.map((s, i) => (
        <ServiceCard key={s.title} index={i} {...s} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
