import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV, PROFILE } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between"
      >
        <a href="#top" className="font-mono text-sm font-semibold">
          <span className="text-neon">~/</span>
          <span className="text-foreground">basharat</span>
          <span className="text-neon blink">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-sm text-muted-foreground hover:text-neon transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 rounded-md border border-neon/40 bg-neon/10 px-3 py-1.5 text-sm font-medium text-neon hover-glow"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <ul className="px-6 py-4 space-y-3">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-foreground hover:text-neon"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PROFILE.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-neon/40 bg-neon/10 px-3 py-1.5 text-sm font-medium text-neon"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}