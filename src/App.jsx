import { TextureOverlay } from "@/components/ui/texture-overlay";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { ContactSection } from "@/components/sections/ContactSection";

function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <TextureOverlay texture="dots" opacity={0.05} className="invert" />
      <ScrollProgress />
      <div id="main-content" className="relative z-10">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <FeaturedSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
