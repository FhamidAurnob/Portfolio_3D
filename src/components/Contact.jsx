import { useState } from "react";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile } from "../constants";
import SectionHead from "./SectionHead";
import Icon from "./Icons";

const Field = ({ label, as = "input", ...props }) => {
  const Tag = as;
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">{label}</span>
      <Tag
        {...props}
        className="bg-white/[0.04] border border-white/10 focus:border-violet/70 focus:bg-white/[0.06] py-4 px-5 rounded-xl text-white placeholder:text-white/30 outline-none transition-colors resize-none"
      />
    </label>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's mail app with everything pre-filled — no backend required.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const links = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "linkedin", label: "LinkedIn", value: "fhamid-aurnob", href: profile.linkedin },
    { icon: "github", label: "GitHub", value: profile.githubUser, href: profile.github },
  ];

  return (
    <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.85] glass rounded-3xl p-8 sm:p-10">
        <SectionHead index="06" sub="Get in touch" title="Let's build" accent="together." />

        <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Your name" name="name" required value={form.name} onChange={onChange} placeholder="Jane Doe" />
            <Field label="Your email" type="email" name="email" required value={form.email} onChange={onChange} placeholder="jane@company.com" />
          </div>
          <Field label="Message" as="textarea" rows={6} name="message" required value={form.message} onChange={onChange} placeholder="Tell me about your project, role or idea…" />
          <button type="submit" className="btn-primary w-fit">
            {sent ? "Opening your mail app…" : "Send message"} <Icon name="send" className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="group rounded-2xl border border-white/10 hover:border-violet/50 bg-white/[0.03] p-4 transition-colors">
              <Icon name={l.icon} className="w-5 h-5 text-violet-soft group-hover:text-cyan transition-colors" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">{l.label}</p>
              <p className="mt-1 text-sm text-white truncate">{l.value}</p>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-[680px] xl:self-center md:h-[550px] h-[360px] relative">
        <EarthCanvas />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 font-mono text-xs text-white/80 flex items-center gap-2 whitespace-nowrap">
          <Icon name="pin" className="w-4 h-4 text-gold" /> Dhaka, Bangladesh · open to remote
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
