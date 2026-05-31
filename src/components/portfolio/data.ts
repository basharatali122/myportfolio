import type { LucideIcon } from "lucide-react";
import {
  Code2, Server, Database, Wrench, Github, Linkedin, Mail,
  MessageCircle, MapPin, Rocket, Users, Activity,
} from "lucide-react";

export const PROFILE = {
  name: "Basharat Ali",
  title: "Full-Stack Engineer",
  subtitle: "MERN + Python / Flask",
  tagline:
    "I build fast, reliable web apps and APIs — from real-time platforms to automation tools that ship.",
  location: "Lahore, Pakistan",
  email: "basharatali.work@gmail.com",
  github: "https://github.com/basharatali122",
  linkedin: "https://linkedin.com/in/basharat-ali",
  whatsapp: "https://wa.me/923000000000", // replace with real number
  resume: "/Basharat_Ali_Resume.pdf",
  status: "Available for freelance & full-time",
} as const;

export const STATS = [
  { icon: Rocket, label: "Projects shipped", value: "10+" },
  { icon: Activity, label: "API req / day", value: "1k+" },
  { icon: Users, label: "Collaborators", value: "15+" },
] satisfies { icon: LucideIcon; label: string; value: string }[];

export const SKILLS = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React 18", "Next.js", "TypeScript", "Tailwind", "Redux Toolkit", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express", "Python", "Flask", "REST APIs", "Socket.IO", "RAG Chatbots"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "SQLite", "Firebase", "Supabase"],
  },
  {
    icon: Wrench,
    title: "Tools / DevOps",
    items: ["Git", "GitHub", "Docker", "Vercel", "Railway", "Postman", "Electron"],
  },
] satisfies { icon: LucideIcon; title: string; items: string[] }[];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "MountainDweller",
    description:
      "Product-selling and digital marketing platform with a referral & join-to-earn system. Members earn commissions by inviting others and reselling digital products.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    highlights: ["Multi-level referral engine", "Earnings & payout dashboard", "Product catalog & checkout"],
    liveUrl: "https://www.mountaindweller.online/",
    featured: true,
  },
  {
    title: "Alam Traders — Distribution Management System",
    description:
      "End-to-end distribution platform managing inventory, orders, dealers and invoicing for a real wholesale business.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    highlights: ["Inventory & stock control", "Order & invoice workflow", "Dealer / customer management"],
    liveUrl: "https://www.alamtraders.shop",
    featured: true,
  },
  {
    title: "RPS Kasur — School Management Website",
    description:
      "Public school website with admin tools for managing announcements, staff, classes and student information.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    highlights: ["Admin dashboard", "Announcements & notices", "Staff & student records"],
    liveUrl: "https://rpskasur.site/",
  },
  {
    title: "Desktop Automation Platform",
    description:
      "Electron desktop app running 50+ accounts/min in isolated processes with license management and live telemetry.",
    stack: ["Electron", "Node.js", "SQLite", "Firebase", "WebSocket"],
    highlights: ["Multi-process isolation", "License management", "50+ accounts/min"],
    repoUrl: "https://github.com/basharatali122",
  },
  {
    title: "Web-Based Game Automation",
    description:
      "Browser-based automation suite for a live game — task scheduling, account rotation and live activity logs in a single web dashboard.",
    stack: ["React", "Node.js", "Express", "WebSocket", "MongoDB"],
    highlights: ["Multi-account scheduler", "Live activity stream", "Rule-based task engine"],
  },
];

export const EXPERIENCE = [
  {
    kind: "work" as const,
    role: "Full-Stack Developer",
    org: "NaqviX, Lahore",
    period: "Dec 2024 — Present",
    bullets: [
      "Building full-stack apps with React, Node, Express and MongoDB.",
      "REST APIs with JWT serving 1,000+ daily requests at ~300ms response.",
      "Lifted Lighthouse 65 → 92 via code-splitting and lazy loading (-35% load).",
    ],
  },
  {
    kind: "work" as const,
    role: "MERN Stack Intern",
    org: "Knowledge Streams, Lahore",
    period: "May — Aug 2024",
    bullets: [
      "Completed 12-week bootcamp shipping 3 full-stack projects.",
      "REST APIs with JWT + bcrypt auth and protected React routes.",
    ],
  },
  {
    kind: "edu" as const,
    role: "BS Software Engineering",
    org: "Virtual University of Pakistan",
    period: "2020 — 2024",
    bullets: ["Focus on web engineering, databases and distributed systems."],
  },
];

export const SERVICES = [
  {
    title: "Full-Stack Web App",
    description:
      "Production MERN or Flask app with auth, dashboards, API and deploy. Built to scale.",
    features: ["Auth & role management", "Admin dashboard", "REST API", "CI / deploy"],
    featured: true,
  },
  {
    title: "API & Backend",
    description:
      "Secure REST APIs with MongoDB or SQL, validation, JWT auth and rate limiting.",
    features: ["REST endpoints", "JWT + validation", "Rate limiting", "Docs & tests"],
  },
  {
    title: "Real-time / Automation",
    description:
      "Socket.IO real-time features, Electron desktop tools and Python automation scripts.",
    features: ["Live chat / presence", "Electron desktop apps", "Scrapers & bots"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Basharat shipped a complex real-time module ahead of schedule. Clean code, great communication.",
    name: "Ahmed R.",
    role: "Engineering Lead, NaqviX",
  },
  {
    quote:
      "Took ownership end-to-end — from API design to deployment. Performance gains were immediate.",
    name: "Sara K.",
    role: "Product Manager",
  },
  {
    quote:
      "One of the few freelancers who actually writes tests and documents the API. Hire him.",
    name: "Daniel M.",
    role: "Indie Founder",
  },
];

export const POSTS = [
  {
    title: "Scaling a Socket.IO chat to 1k concurrent users",
    excerpt:
      "Lessons from sharding rooms, tuning Redis adapters, and avoiding the N² broadcast trap.",
    tag: "Realtime",
  },
  {
    title: "From 65 to 92 on Lighthouse without a rewrite",
    excerpt:
      "Practical code-splitting, route-based lazy loading and asset audits that cut load by 35%.",
    tag: "Performance",
  },
  {
    title: "RAG chatbots that actually retrieve",
    excerpt:
      "Embedding choices, chunking strategy and the one eval loop you can't skip.",
    tag: "AI",
  },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export { Github, Linkedin, Mail, MessageCircle, MapPin };