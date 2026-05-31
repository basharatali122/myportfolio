import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="projects.tsx" title="Selected work">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group relative flex flex-col rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-neon/50 hover:shadow-glow"
          >
            {p.featured && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full border border-neon/40 bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-neon">
                <Star className="h-3 w-3" /> featured
              </span>
            )}
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

            <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-neon">▸</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/50">
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}