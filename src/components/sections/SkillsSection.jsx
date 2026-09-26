import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading eyebrow="Skills" className="mb-10">
          Tecnologías y herramientas
        </SectionHeading>

        <Reveal className="flex flex-wrap gap-3 font-mono text-sm">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-4 py-2 hover:border-blue-500/60 hover:text-blue-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
