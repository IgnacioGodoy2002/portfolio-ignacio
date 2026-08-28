import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

function App() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <FeaturedSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}

export default App;
