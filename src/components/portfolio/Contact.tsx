import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { PROFILE } from "./data";
import { sendContactMessage } from "@/lib/contact.functions";

const Schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "At least 10 characters").max(5000),
});

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = Schema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }
    setLoading(true);
    try {
      await send({ data: parsed.data });
      toast.success("Message sent. I'll reply within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contact" eyebrow="contact.sh" title="Let's build something">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground">
            Open to freelance projects, contract work and full-time roles. Drop a line and
            I'll get back to you within 24 hours.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-neon" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-neon transition-colors">
                {PROFILE.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-neon" />
              <span>{PROFILE.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Github className="h-4 w-4 text-neon" />
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">
                {PROFILE.github.replace("https://", "")}
              </a>
            </li>
            {PROFILE.linkedin && (
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-neon" />
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-neon transition-colors">
                  {PROFILE.linkedin.replace("https://", "")}
                </a>
              </li>
            )}
          </ul>
          <div className="rounded-xl border border-border bg-card/40 p-4 font-mono text-xs text-muted-foreground">
            <span className="text-neon">$</span> status —{" "}
            <span className="text-foreground">{PROFILE.status}</span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur space-y-4"
        >
          <Field name="name" label="Name" error={errors.name} placeholder="Jane Doe" />
          <Field name="email" label="Email" type="email" error={errors.email} placeholder="jane@company.com" />
          <Field name="subject" label="Subject" error={errors.subject} placeholder="Project idea" />
          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted-foreground">
              message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project, timeline and budget…"
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition focus:border-neon focus:ring-2 focus:ring-neon/20"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-neon/90 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-xs text-muted-foreground">
        {label.toLowerCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background/60 px-3 py-2 text-sm text-foreground outline-none transition focus:border-neon focus:ring-2 focus:ring-neon/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}