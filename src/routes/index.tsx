import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Basharat Ali — Full-Stack Engineer (MERN + Python/Flask)" },
      { name: "description", content: "Full-Stack Engineer in Lahore building fast, reliable MERN and Python/Flask web apps, APIs and real-time platforms. Available for freelance and full-time roles." },
      { property: "og:title", content: "Basharat Ali — Full-Stack Engineer" },
      { property: "og:description", content: "MERN + Python/Flask developer. Real-time apps, REST APIs, automation, RAG chatbots." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" richColors />
    </div>
  );
}
