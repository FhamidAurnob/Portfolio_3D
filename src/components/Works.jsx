import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { projects, projectFilters, profile } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { spotlightHandler } from "../hooks";
import SectionHead from "./SectionHead";
import ProjectArt from "./ProjectArt";
import Icon from "./Icons";

const ProjectCard = ({ p }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.4 }}
    className={p.featured ? "md:col-span-2 lg:row-span-2" : ""}
  >
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} className="h-full">
      <article onMouseMove={spotlightHandler} className={`spotlight gradient-border glass rounded-3xl overflow-hidden h-full flex flex-col`}>
        <div className={`relative overflow-hidden ${p.featured ? "h-72 lg:flex-1 lg:min-h-[340px]" : "h-52"}`}>
          <ProjectArt theme={p.theme} />
          {p.badge && (
            <span className="absolute top-4 left-4 rounded-full bg-white text-ink text-xs font-bold px-3 py-1 shadow-lg">★ {p.badge}</span>
          )}
          <span className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur px-3 py-1 font-mono text-[10px] text-white/80 tracking-widest uppercase">{p.category}</span>
        </div>
        <div className={`p-7 flex flex-col ${p.featured ? "" : "flex-1"}`}>
          <h3 className={`font-display font-bold text-white ${p.featured ? "text-3xl" : "text-xl"}`}>{p.name}</h3>
          <p className="mt-3 text-secondary text-[15px] leading-relaxed">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => <span key={t} className="chip">#{t}</span>)}
          </div>
          {p.link ? (
            <a href={p.link} target="_blank" rel="noreferrer" className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold text-white group w-fit">
              <span className="border-b border-white/30 group-hover:border-cyan transition-colors">{p.linkLabel || "View on GitHub"}</span>
              <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <span className="mt-auto pt-7 font-mono text-xs text-secondary">Private build · demo on request</span>
          )}
        </div>
      </article>
    </Tilt>
  </motion.div>
);

/* Pulls the latest public repos straight from GitHub so this stays fresh automatically */
const LiveGitHub = () => {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=6`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setRepos(Array.isArray(d) ? d.filter((r) => !r.fork) : []))
      .catch(() => setRepos([]));
    return () => ctrl.abort();
  }, []);

  if (repos && repos.length === 0) return null;

  return (
    <motion.div variants={fadeIn("up", "spring", 0.2, 0.8)} className="mt-16">
      <div className="flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping2" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <h3 className="font-display text-xl font-bold text-white">Live from GitHub</h3>
        <span className="font-mono text-xs text-secondary">recently pushed</span>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(repos || Array.from({ length: 3 })).map((r, i) =>
          r ? (
            <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" onMouseMove={spotlightHandler}
              className="spotlight glass rounded-2xl p-5 hover:-translate-y-1 hover:border-violet/50 transition-all block">
              <div className="flex items-center justify-between">
                <p className="font-mono text-sm text-white truncate">{r.name}</p>
                <Icon name="arrow" className="w-4 h-4 text-secondary" />
              </div>
              <p className="mt-2 text-xs text-secondary line-clamp-2 min-h-[32px]">{r.description || "No description yet."}</p>
              <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-secondary">
                {r.language && <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan" />{r.language}</span>}
                <span className="flex items-center gap-1"><Icon name="star" className="w-3.5 h-3.5" />{r.stargazers_count}</span>
                <span>{new Date(r.pushed_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
              </div>
            </a>
          ) : (
            <div key={i} className="glass rounded-2xl p-5 h-[120px] animate-pulse" />
          )
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <SectionHead index="04" sub="Selected work" title="Things I've" accent="built." />

      <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-2xl leading-relaxed">
          Mobile apps, a fintech platform and trading systems — each one a real problem I wanted solved.
        </motion.p>
        <motion.div variants={fadeIn("", "", 0.2, 1)} className="flex gap-1 p-1 rounded-full glass w-fit">
          {projectFilters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`relative px-4 py-2 text-sm rounded-full transition-colors ${filter === f ? "text-ink font-semibold" : "text-secondary hover:text-white"}`}>
              {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
              <span className="relative">{f}</span>
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => <ProjectCard key={p.name} p={p} />)}
        </AnimatePresence>
      </motion.div>

      <LiveGitHub />
    </>
  );
};

export default SectionWrapper(Works, "work");
