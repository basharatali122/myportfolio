import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { POSTS } from "./data";

export function Blog() {
  return (
    <Section id="blog" eyebrow="writing/" title="Notes & writing">
      <div className="grid gap-6 md:grid-cols-3">
        {POSTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group flex flex-col rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-neon/40"
          >
            <span className="self-start rounded-md border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-neon">
              {p.tag}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-neon transition-colors">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-neon">
              Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}