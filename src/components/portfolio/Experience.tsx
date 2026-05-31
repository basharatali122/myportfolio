import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "./data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="experience.log" title="Experience & education">
      <ol className="relative border-l border-border/70 pl-8 space-y-10">
        {EXPERIENCE.map((e, i) => {
          const Icon = e.kind === "edu" ? GraduationCap : Briefcase;
          return (
            <motion.li
              key={e.role + e.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full border border-neon/40 bg-background text-neon">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                <span className="text-sm text-neon">@ {e.org}</span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">{e.period}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-neon">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}