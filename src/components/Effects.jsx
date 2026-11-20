import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { profile } from "../constants";

/* Gradient bar at the top showing read progress */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-gradient-to-r from-violet via-cyan to-gold"
    />
  );
};

/* Soft glow that trails the cursor (desktop only) */
export const CursorGlow = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, cx = x, cy = y, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const loop = () => {
      cx += (x - cx) * 0.12; cy += (y - cy) * 0.12;
      if (ref.current) ref.current.style.transform = `translate3d(${cx - 250}px, ${cy - 250}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    loop();
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden md:block w-[500px] h-[500px] rounded-full opacity-40"
      style={{ background: "radial-gradient(circle, rgba(139,92,246,.22), rgba(34,211,238,.08) 40%, transparent 65%)" }}
    />
  );
};

/* Intro screen: name reveal + counter */
export const Preloader = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 9));
      setCount(n);
      if (n >= 100) { clearInterval(id); setTimeout(() => setShow(false), 350); }
    }, 45);
    return () => clearInterval(id);
  }, []);
  const letters = profile.shortName.split("");
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="pre"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
        >
          <div className="flex overflow-hidden">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-extrabold text-6xl sm:text-8xl text-gradient"
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="mt-8 w-56 h-[2px] bg-white/10 rounded overflow-hidden">
            <div className="h-full bg-gradient-to-r from-violet via-cyan to-gold transition-all" style={{ width: `${count}%` }} />
          </div>
          <p className="mt-3 font-mono text-xs text-secondary tracking-[0.3em]">{String(count).padStart(3, "0")}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* Animated number that counts up when scrolled into view */
export const CountUp = ({ to, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / (duration * 1000));
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
};

/* Ambient aurora blobs behind everything */
export const Aurora = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-violet/25 blur-[140px] animate-aurora" />
    <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-cyan/15 blur-[140px] animate-aurora" style={{ animationDelay: "-6s" }} />
    <div className="absolute bottom-0 left-1/4 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[150px] animate-aurora" style={{ animationDelay: "-12s" }} />
  </div>
);
