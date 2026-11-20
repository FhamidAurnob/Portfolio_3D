import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently on screen
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(`${id}-section`);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`w-full max-w-6xl flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_10px_40px_-15px_rgba(0,0,0,.8)]" : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#top" onClick={() => setActive("")} className="flex items-center gap-3 group">
          <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-cyan font-display font-extrabold text-ink text-lg">
            F
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/30 group-hover:scale-110 transition-transform" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-white">{profile.shortName} Aurnob</span>
            <span className="hidden sm:block font-mono text-[10px] text-secondary tracking-widest">SOFTWARE · ANDROID · FINTECH</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((n) => (
            <li key={n.id} className="relative">
              <a
                href={`#${n.id}`}
                className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${
                  active === `${n.id}-section` ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                {n.title}
              </a>
              {active === `${n.id}-section` && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-xl bg-white/[0.07] border border-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary !px-5 !py-2.5 text-sm">Hire me</a>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden relative w-10 h-10 grid place-items-center rounded-xl glass">
          <span className={`absolute h-[2px] w-5 bg-white transition-all ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-[2px] w-5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`absolute h-[2px] w-5 bg-white transition-all ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            className="md:hidden absolute top-[84px] inset-x-4 glass rounded-2xl p-4 bg-ink/90"
          >
            {navLinks.map((n, i) => (
              <motion.a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center justify-between px-3 py-3 rounded-xl text-white/90 hover:bg-white/5 font-display text-lg"
              >
                {n.title}
                <span className="font-mono text-xs text-secondary">0{i + 1}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
