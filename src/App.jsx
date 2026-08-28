import { TextureOverlay } from "@/components/ui/texture-overlay";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <TextureOverlay texture="dots" opacity={0.05} className="invert" />
      <div className="relative z-10">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <FeaturedSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
