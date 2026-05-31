import { Section } from "./Section";
import { SKILLS } from "./data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="skills.json" title="Tools I reach for.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILLS.map((g) => (
          <div key={g.title} className="rounded-xl glass p-5 hover-glow">
            <div className="flex items-center gap-2">
              <g.icon className="h-5 w-5 text-neon" aria-hidden />
              <h3 className="font-semibold text-foreground">{g.title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="font-mono text-xs rounded-md border border-border bg-surface-2 px-2 py-1 text-muted-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}