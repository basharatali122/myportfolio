import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row text-center sm:text-left">
        <p className="font-mono text-[11px] sm:text-xs text-muted-foreground break-words">
          <span className="text-neon">$</span> echo "© {new Date().getFullYear()} {PROFILE.name} — built with React + TanStack Start"
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neon transition-colors">
            <Github className="h-4 w-4" />
          </a>
          {PROFILE.linkedin && (
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neon transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-neon transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}