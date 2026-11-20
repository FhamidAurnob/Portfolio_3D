import { profile, navLinks } from "../constants";
import { useClock } from "../hooks";
import Icon from "./Icons";

const Footer = () => {
  const time = useClock(profile.timezone);
  return (
    <footer className="relative z-10 border-t border-white/[0.06] mt-10">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 py-14">
        <a href="#top" className="block font-display font-extrabold text-[13vw] sm:text-[9vw] leading-none outline-text hover:text-white/5 transition-colors">
          FHAMID AURNOB
        </a>
        <div className="mt-10 flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <ul className="flex flex-wrap gap-5 text-sm text-secondary">
            {navLinks.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-white transition-colors">{n.title}</a></li>)}
          </ul>
          <div className="flex items-center gap-6 font-mono text-xs text-secondary">
            <span>Dhaka · {time}</span>
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <a href="#top" aria-label="Back to top" className="w-10 h-10 grid place-items-center rounded-full glass hover:-translate-y-1 transition-transform text-white">
              <Icon name="top" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
