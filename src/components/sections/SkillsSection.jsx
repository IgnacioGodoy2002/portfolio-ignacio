import { GradientHeading } from "@/components/ui/gradient-heading";
import { skills } from "@/data/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
          Skills
        </p>
        <GradientHeading as="h2" size="lg" className="mt-2 mb-10">
          Tecnologías y herramientas
        </GradientHeading>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-4 py-2 rounded-full font-medium hover:border-blue-500/60 hover:text-blue-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
