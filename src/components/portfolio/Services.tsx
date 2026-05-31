import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { SERVICES } from "./data";

export function Services() {
  return (
    <Section id="services" eyebrow="services.json" title="What I can build for you">
      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur transition ${
              s.featured
                ? "border-neon/50 bg-card/60 shadow-glow"
                : "border-border bg-card/40 hover:border-neon/40"
            }`}
          >
            {s.featured && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full border border-neon/40 bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-neon">
                <Sparkles className="h-3 w-3" /> most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 text-neon shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-neon/40 px-4 py-2 text-sm font-medium text-neon transition hover:bg-neon/10"
            >
              Start a project
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}