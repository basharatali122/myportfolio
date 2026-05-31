import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "./data";

const ROLES = [
  "Full-Stack Engineer",
  "MERN Stack Developer",
  "Python / Flask Developer",
  "RAG Chatbot Builder",
  "AI Integration Engineer",
  "Automation & Chatbot Developer",
];

function useTyping(words: string[], speed = 70, hold = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    if (!del && text === current) {
      const t = setTimeout(() => setDel(true), hold);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        del ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, hold]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="top" className="relative pt-24 sm:pt-32 md:pt-40 pb-14 sm:pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-8 sm:gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-neon shadow-glow" />
            {PROFILE.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] break-words"
          >
            Hi, I'm <span className="gradient-text">{PROFILE.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 font-mono text-base sm:text-lg md:text-xl text-cyan h-7 truncate"
          >
            &gt; {typed}
            <span className="blink">▍</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-neon transition-colors"
            >
              <Download className="h-4 w-4" /> Download résumé
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-cyan/40 bg-cyan/5 px-5 py-2.5 text-sm font-semibold text-cyan hover:bg-cyan/10 transition-colors"
            >
              Hire me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-5 text-muted-foreground"
          >
            <a aria-label="GitHub" href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={`mailto:${PROFILE.email}`} className="hover:text-neon transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono">
              <MapPin className="h-4 w-4" /> {PROFILE.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-2xl bg-neon/10 blur-3xl" aria-hidden />
          <div className="relative float rounded-xl glass overflow-hidden shadow-glow">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-chart-4/70" />
              <span className="h-3 w-3 rounded-full bg-neon/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                ~/dev/basharat.ts
              </span>
            </div>
            <pre className="font-mono text-xs sm:text-sm md:text-[13px] leading-relaxed p-4 sm:p-6 text-foreground overflow-x-auto">
{`const dev = {
  name: "Basharat Ali",
  role: "Full-Stack Engineer",
  stack: {
    frontend: ["React", "Next.js", "TS"],
    backend:  ["Node", "Express", "Python", "Flask", "FastAPI"],
    db:       ["MongoDB", "Postgres"],
    ai:       ["RAG", "LangChain", "OpenAI", "Chatbots"],
  },
  shipping: true,
  caffeinated: true,
};

export default dev;`}
              <span className="blink text-neon">▍</span>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}