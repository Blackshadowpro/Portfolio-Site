import Background from "@/components/canvas/Background";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full selection:bg-[#00f0ff] selection:text-black">
      <Background />
      
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />

      <footer className="w-full py-8 text-center text-gray-500 font-mono text-sm border-t border-white/5 bg-black/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Irtza Ahmad. All systems operational.</p>
      </footer>
    </main>
  );
}
