import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
