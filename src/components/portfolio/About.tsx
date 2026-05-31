import { Section } from "./Section";
import { STATS } from "./data";

export function About() {
  return (
    <Section id="about" eyebrow="about.md" title="Engineer who actually ships.">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
          <p>
            I'm a full-stack engineer based in Lahore, building production web
            apps with React, Node, Express, MongoDB and Python / Flask. I care
            about <span className="text-foreground">clean APIs</span>,{" "}
            <span className="text-foreground">measurable performance</span> and
            UI that respects the user.
          </p>
          <p>
            Currently at NaqviX, where I own full-stack features end-to-end —
            authentication, REST APIs, dashboards and the deploy pipeline.
            On the side I help freelance clients launch MVPs, automate
            workflows and build RAG chatbots.
          </p>
          <p>
            When I'm not coding I'm reading database internals, tuning Vim, or
            arguing about tabs vs spaces (it's tabs).
          </p>
        </div>

        <ul className="grid sm:grid-cols-3 md:grid-cols-1 gap-4">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="rounded-xl glass p-5 hover-glow"
            >
              <s.icon className="h-5 w-5 text-neon" aria-hidden />
              <div className="mt-3 font-mono text-3xl text-foreground">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}