import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
};

/* Sets --mx / --my CSS vars on the element so .spotlight can follow the mouse */
export const spotlightHandler = (e) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/* Live clock for a given IANA timezone */
export const useClock = (timeZone) => {
  const fmt = () =>
    new Intl.DateTimeFormat("en-US", { timeZone, hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
};

/* Cycles through words with a typewriter effect */
export const useTypewriter = (words, { type = 70, erase = 35, hold = 1600 } = {}) => {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0, len = 0, deleting = false, t;
    const tick = () => {
      const word = words[i % words.length];
      if (!deleting) {
        len++;
        setText(word.slice(0, len));
        if (len === word.length) { deleting = true; t = setTimeout(tick, hold); return; }
        t = setTimeout(tick, type);
      } else {
        len--;
        setText(word.slice(0, len));
        if (len === 0) { deleting = false; i++; t = setTimeout(tick, 300); return; }
        t = setTimeout(tick, erase);
      }
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words, type, erase, hold]);
  return text;
};
