import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "./Section";
import { TESTIMONIALS } from "./data";

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="testimonials.md" title="What people say">
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur"
          >
            <Quote className="h-6 w-6 text-neon/70" />
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-border/50 pt-4">
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}