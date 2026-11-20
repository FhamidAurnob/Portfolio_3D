import { Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { styles } from "../styles";
import { profile, stats } from "../constants";
import { useClock, useMediaQuery, useTypewriter } from "../hooks";
import { CountUp } from "./Effects";
import Icon from "./Icons";

const HeroScene = lazy(() => import("./canvas/HeroScene"));

const ease = [0.22, 1, 0.36, 1];
const rise = (d) => ({ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.4 + d, duration: 0.9, ease } });

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const role = useTypewriter(profile.roles);
  const time = useClock(profile.timezone);
  const { scrollY } = useScroll();
  const sceneY = useTransform(scrollY, [0, 800], [0, 160]);
  const sceneOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <section id="top" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      {/* 3D scene */}
      <motion.div
        style={{ y: sceneY, opacity: sceneOpacity }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1.4, ease }}
        className="absolute inset-0 md:left-[42%] md:top-6 top-[30%]"
      >
        <div className="w-full h-full opacity-40 md:opacity-100">
          <Suspense fallback={null}>
            <HeroScene isMobile={isMobile} />
          </Suspense>
        </div>
      </motion.div>

      <div className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-36 sm:pt-44 pb-16 flex flex-col min-h-screen`}>
        <motion.div {...rise(0)} className="inline-flex w-fit items-center gap-3 rounded-full glass pl-2 pr-4 py-1.5">
          <span className="relative flex h-2.5 w-2.5 ml-1">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping2" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs sm:text-sm text-white/80">Open to opportunities · <span className="text-white">{profile.currently}</span></span>
        </motion.div>

        <h1 className={`${styles.heroHeadText} mt-8`}>
          <span className="block overflow-hidden">
            <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.45, duration: 1, ease }}>
              Hi, I&apos;m
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span className="block text-gradient" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.55, duration: 1, ease }}>
              Fhamid Aurnob
            </motion.span>
          </span>
        </h1>

        <motion.p {...rise(0.25)} className="mt-5 font-mono text-lg sm:text-2xl text-white">
          <span className="text-secondary">&gt; </span>
          {role}
          <span className="inline-block w-[10px] h-[1.1em] align-middle ml-1 bg-cyan animate-blink" />
        </motion.p>

        <motion.p {...rise(0.35)} className={`${styles.heroSubText} mt-6 max-w-xl`}>
          {profile.tagline}
        </motion.p>

        <motion.div {...rise(0.45)} className="mt-9 flex flex-wrap gap-4">
          <a href="#work" className="btn-primary">
            Explore my work <Icon name="arrow" className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-ghost">Let&apos;s talk</a>
          <div className="flex items-center gap-2 ml-1">
            {[
              { href: profile.github, icon: "github", label: "GitHub" },
              { href: profile.linkedin, icon: "linkedin", label: "LinkedIn" },
              { href: `mailto:${profile.email}`, icon: "mail", label: "Email" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="w-12 h-12 grid place-items-center rounded-full glass text-white/80 hover:text-white hover:-translate-y-1 hover:border-violet/60 transition-all">
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div {...rise(0.6)} className="mt-auto pt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-5 py-4">
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-secondary mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...rise(0.7)} className="hidden sm:flex items-center justify-between mt-10 font-mono text-xs text-secondary">
          <span className="flex items-center gap-2"><Icon name="pin" className="w-4 h-4" /> {profile.location} · {time}</span>
          <a href="#about" className="flex items-center gap-2 hover:text-white transition-colors">
            Scroll to explore
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <Icon name="down" className="w-4 h-4" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
