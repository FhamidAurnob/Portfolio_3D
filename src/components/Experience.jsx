import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import SectionHead from "./SectionHead";

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    visible
    contentStyle={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "28px", backdropFilter: "blur(12px)" }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.12)" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={<div className="w-full h-full grid place-items-center font-display font-extrabold text-white text-lg">{exp.initials}</div>}
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="font-display text-white text-[22px] font-bold leading-tight">{exp.title}</h3>
        <p className="text-violet-soft text-[15px] font-semibold mt-1" style={{ margin: 0 }}>{exp.company_name}</p>
      </div>
      {exp.current && (
        <span className="shrink-0 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono px-2.5 py-1">NOW</span>
      )}
    </div>
    <ul className="mt-5 list-none space-y-2.5">
      {exp.points.map((p, i) => (
        <li key={i} className="flex gap-3 text-white/75 text-[14.5px] leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
          {p}
        </li>
      ))}
    </ul>
    <div className="mt-5 flex flex-wrap gap-2">
      {exp.tags.map((t) => <span key={t} className="chip">{t}</span>)}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <SectionHead index="02" sub="Where I've been" title="My" accent="journey." center />
    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-6 text-secondary text-center max-w-2xl mx-auto">
      From industrial IT to the front line of banking — every role has sharpened how I build.
    </motion.p>
    <div className="mt-16">
      <VerticalTimeline lineColor="transparent">
        {experiences.map((exp) => <ExperienceCard key={exp.title} exp={exp} />)}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
